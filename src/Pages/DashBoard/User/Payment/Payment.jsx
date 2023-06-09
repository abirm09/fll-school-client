import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useParams } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

const Payment = () => {
  const { id } = useParams();
  const stripePromise = loadStripe(import.meta.env.VITE_payment_API_secret);
  return (
    <div>
      <div className="max-w-md mx-auto">
        <div className="py-10 font-poppins">
          <h2 className="font-bold text-2xl cs-text-gradient">
            Card information.
          </h2>
          <p className="text-xs">
            Bye your classes with confidence on our secure payment page. Enjoy a
            hassle-free checkout process, knowing your information is protected.
          </p>
        </div>
        <Elements stripe={stripePromise}>
          <CheckoutForm id={id} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
