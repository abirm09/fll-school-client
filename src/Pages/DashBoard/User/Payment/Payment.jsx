import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useParams } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

const Payment = () => {
  const { id } = useParams();
  //   TODO: PRovide publishable key
  const stripePromise = loadStripe(import.meta.env.VITE_payment_API_secret);
  return (
    <div>
      <h2>id : {id}</h2>
      <Elements stripe={stripePromise}>
        <CheckoutForm id={id} />
      </Elements>
    </div>
  );
};

export default Payment;
