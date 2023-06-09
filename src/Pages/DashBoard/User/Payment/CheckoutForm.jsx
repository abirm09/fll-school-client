import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { useAxiosSecure } from "../../../../Hooks/useAxiosSecure";
import { useAuth } from "../../../../Hooks/useAuth";
import Swal from "sweetalert2";
import "./Checkout.css";

const CheckoutForm = ({ id }) => {
  const { user } = useAuth();
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [axiosSecure] = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [itemInfo, setItemInfo] = useState({});
  useEffect(() => {
    axiosSecure
      .post(`/payment-intent?id=${id}`)
      .then(res => setClientSecret(res.data.clientSecret));
  }, [axiosSecure, id]);
  useEffect(() => {
    axiosSecure
      .get(`/selected-item?id=${id}`)
      .then(data => setItemInfo(data.data))
      .catch(err => console.log(err));
  }, [axiosSecure, id]);
  const handleSubmit = async event => {
    event.preventDefault();
    setCardError("");
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      setCardError(error.message);
    } else {
      console.log(["payment", paymentMethod]);
    }
    setProcessing(true);
    const { paymentIntent, error: confirmErr } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card,
          billing_details: {
            name: user?.displayName || "Unknown",
            email: user?.email || "Anonymous",
          },
        },
      });
    if (confirmErr) {
      setCardError(confirmErr.message);
    }
    setProcessing(false);
    if (paymentIntent?.status === "succeeded") {
      Swal.fire(
        "Payment successful!",
        `Transaction ID : ${paymentIntent.id}`,
        "success"
      );
      const paymentInfo = {
        id: id,
        nameOfClass: itemInfo.nameOfClass,
        price: paymentIntent.amount / 100,
        txID: paymentIntent.id,
        email: user?.email,
        classId: itemInfo?.classId,
      };
      axiosSecure
        .post("/enrolled-classes", paymentInfo)
        .then(res => console.log(res.data))
        .catch(err => console.log(err));
    }
  };

  return (
    <>
      <div className="my-4 font-poppins">
        <h2 className="font-bold">Name : {itemInfo?.studentName}</h2>
        <p>Price : ${itemInfo?.price}</p>
        <p>Course name : {itemInfo?.nameOfClass}</p>
      </div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        {cardError && <p className="font-bold text-red-600">{cardError}</p>}
        <button
          className="cs-gradient-btn w-full my-3"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
    </>
  );
};

export default CheckoutForm;
