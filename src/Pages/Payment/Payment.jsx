import { Elements } from "@stripe/react-stripe-js";
import { Helmet } from "react-helmet";
import CheckOutForm from "./CheckOutForm";
import { loadStripe } from "@stripe/stripe-js";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Payment.css"
import UseAxiosSecure from "../../hooks/UseAxiosSecure";

// todo add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PAYMENT_GATEWAY_KEY);


const Payment = () => {
   const [clientSecret, setClientSecret] = useState("");
   const axiosSecure = UseAxiosSecure();
   const location = useLocation();
   const amount = new URLSearchParams(location.search).get('amount');
   
   
useEffect(() => {
    if (amount > 0 && !clientSecret) {
      // Fetch PaymentIntent only if amount is greater than 0 and clientSecret is not already set
      axiosSecure.post("/create-payment-intent").then((res) => {
        console.log(res.data);
        setClientSecret(res.data.clientSecret);
      });
    }
  }, [axiosSecure, clientSecret, amount]);
    const appearance = {
      theme: 'stripe',
    };
    const options = {
      clientSecret,
      appearance,
    };
   return (
      <div className="container mx-auto">
         <Helmet>
            <title>Stripe Payment</title>
         </Helmet>
         {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckOutForm />
        </Elements>
      )}

      </div>
   );
};

export default Payment;