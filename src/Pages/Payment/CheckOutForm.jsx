/* eslint-disable react/prop-types */
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import UseAxiosSecure from "../../hooks/UseAxiosSecure";
import { useNavigate } from "react-router-dom";
import UseAuth from "../../hooks/UseAuth";
import Swal from "sweetalert2";

const CheckOutForm = ({amount}) => {
   const payAmount = amount;
   console.log(payAmount)
   const [error, setError] = useState('');
   const [transactionId, setTransactionId] =useState('');
   const navigate = useNavigate();

   const [clientSecret, setClientSecret] = useState("");

   const stripe = useStripe();
   const elements = useElements();
   const axiosSecure = UseAxiosSecure();
  
   const { user } = UseAuth();
   const totalPrice = payAmount;

   useEffect(() => {
      if(totalPrice > 0){
         axiosSecure.post('/create-payment-intent', { price: totalPrice })
         .then(res => {
            // console.log(res.data.clientSecret);
            setClientSecret(res.data.clientSecret);
         })
      }
   }, [axiosSecure, totalPrice])


   const handleSubmit = async (event) => {
      // Block native form submission.
      event.preventDefault();

      if (!stripe || !elements) {
         // Stripe.js has not loaded yet. Make sure to disable
         // form submission until Stripe.js has loaded.
         return;
      }

      // Get a reference to a mounted CardElement. Elements knows how
      // to find your CardElement because there can only ever be one of
      // each type of element.
      const card = elements.getElement(CardElement);

      if (card == null) {
         return;
      }


      // Use your card Element with other Stripe.js APIs
      const { error, paymentMethod } = await stripe.createPaymentMethod({
         type: 'card',
         card,
      });

      if (error) {
         console.log('[error]', error);
         setError(error.message);
      } else {
         console.log('[PaymentMethod]', paymentMethod);
         setError('');
      }

      // confirm payment
      const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
         payment_method: {
            card: card,
            billing_details: {
               email: user?.email || 'anonymous',
               name: user?.displayName || 'anonymous'
            }
         }
      })

      if (confirmError) {
         console.log('confirm error')
      }
      else {
         console.log('payment intent', paymentIntent)
         if(paymentIntent.status === 'succeeded'){
            console.log('transaction id', paymentIntent.id);
            setTransactionId(paymentIntent.id);


            // save the payment in db
            const payment = {
               email: user.email,
               price: totalPrice,
               transactionId: paymentIntent.id,
               date: new Date(), // utc date convert. use moment js to  
               status: 'pending'
           }
            const res = await axiosSecure.post('/payments', payment);
            console.log(res.data);
            
            if (res.data?.paymentResult?.insertedId) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Thank you for the taka paisa",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/dashboard')
            }
         }
      }
   };

   return (
   <form onSubmit={handleSubmit} className="p-36">
         <CardElement
            options={{
               style: {
                  base: {
                     fontSize: '16px',
                     color: '#424770',
                     '::placeholder': {
                        color: '#aab7c4',
                     },
                  },
                  invalid: {
                     color: '#9e2146',
                  },
               },
            }}
         />
         <button className="btn-sm btn-primary rounded-xl text-black" type="submit"
            disabled={!stripe || !clientSecret}>
            Pay
         </button>
         <p className="text-red-400 text-center font-bold">{error}</p>
         {
            transactionId && <p className="text-green-400 text-center font-bold">
               Your transaction id: {transactionId}
            </p>
         }
      </form>
   );
};

export default CheckOutForm;