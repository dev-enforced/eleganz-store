import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuthentication } from "context";
import "./CartPriceDetails.css";

const CartPriceDetails = () => {
  const navigateTo = useNavigate();
  const {
    authState: { cart: cartProvided },
    clearCartActionHandler,
  } = useAuthentication();
  const priceSum = cartProvided.reduce(
    (totalPrice, everyCartItem) => {
      return {
        ...totalPrice,
        original:
          Number(everyCartItem.qty) *
          (Number(everyCartItem.originalPrice) + totalPrice.original),
        discount:
          Number(everyCartItem.qty) *
          (Number(everyCartItem.discountedPrice) + totalPrice.discount),
      };
    },
    { original: 0, discount: 0 }
  );
  const successfulTransaction = (paymentGatewayResponse) => {
    console.log("Payment Successful");
    console.log(paymentGatewayResponse.razorpay_payment_id);
  };
  const failedTransaction = (paymentGatewayResponse) => {
    console.log("Payment failed");
    console.log(paymentGatewayResponse);
  };
  const displayPaymentGateway = (transactionAmount) => {
    const options = {
      // eslint-disable-next-line no-undef
      key: process.env.REACT_APP_PAYMENT_GATEWAY_SECRET,
      amount: transactionAmount * 100,
      currency: "INR",
      name: "ELEGANZ STORE",
      description: "Thank you for shopping with us",
      image: "assets/eleganz_logo.png",
      handler: (response) => {
        successfulTransaction(response);
        clearCartActionHandler();
        navigateTo("/products");
      },
      modal: {
        onDismiss: () => {
          console.log("The payment modal was closed");
        },
      },
      prefill: {
        name: "Guest User",
        email: "onlineguest@gmail.com",
        contact: 9127108910,
      },
      theme: {
        color: "#7e22ce",
      },
    };
    const razorpayEmbed = new window.Razorpay(options);
    razorpayEmbed.open();
    razorpayEmbed.on("payment.failed", (response) => {
      failedTransaction(response);
    });
  };
  return cartProvided.length === 0 ? (
    ""
  ) : (
    <div className="cart-items-price-details m-4">
      <p className="my-4 fw-700">PRICE DETAILS</p>
      <div className="my-2">
        <div className="my-4 flex-row flex-space-between">
          <p>TOTAL PRICE</p>
          <p>{priceSum.original}</p>
        </div>
        <div className="my-4 flex-row flex-space-between">
          <p>DISCOUNT APPLIED</p>
          <p>{priceSum.original - priceSum.discount}</p>
        </div>
        <div className="my-6 flex-row flex-space-between">
          <p>AMOUNT TO PAY</p>
          <p>{priceSum.discount}</p>
        </div>
      </div>
      <button
        onClick={() => {
          displayPaymentGateway(priceSum.discount);
        }}
      >
        CHECKOUT
      </button>
    </div>
  );
};

export { CartPriceDetails };
