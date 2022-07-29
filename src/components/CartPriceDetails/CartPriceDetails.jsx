import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useAuthentication } from "context";
import "./CartPriceDetails.css";
import { routes } from "constants";

const CartPriceDetails = () => {
  const { HOME_ROUTE } = routes;
  const {
    authState: { cart: cartProvided },
    clearWholeCartAction,
  } = useAuthentication();
  const navigateTo = useNavigate();
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
    toast.success("Checked out successfully. Products will be shipped soon");
    return paymentGatewayResponse;
  };
  const failedTransaction = (paymentGatewayResponse) => {
    toast.error("Transaction failed");
    return paymentGatewayResponse;
  };
  const displayPaymentGateway = (transactionAmount) => {
    const options = {
      // eslint-disable-next-line no-undef
      key: process.env.REACT_APP_PAYMENT_GATEWAY_SECRET,
      amount: transactionAmount * 100,
      currency: "INR",
      name: "Eleganz Store",
      description: "Thank you for shopping with us",
      image: "assets/eleganz_logo.png",
      handler: (response) => {
        successfulTransaction(response);
        clearWholeCartAction();
        navigateTo(HOME_ROUTE);
      },
      modal: {
        onDismiss: () => {
          toast("Transaction cancelled");
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
        className="my-2 cart-btn-checkout"
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
