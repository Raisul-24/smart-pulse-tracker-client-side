import { Elements } from "@stripe/react-stripe-js";
import { Helmet } from "react-helmet";
import CheckOutForm from "./CheckOutForm";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PAYMENT_GATEWAY_KEY);


const Payment = () => {
   const amount = new URLSearchParams(location.search).get('amount');
   
   return (
      <div className="container mx-auto">
         <Helmet>
            <title>Stripe Payment</title>
         </Helmet>
         <div className="text-black">
            <Elements stripe={stripePromise}>
               <CheckOutForm amount={amount} />
            </Elements>
         </div>

      </div>
   );
};

export default Payment;