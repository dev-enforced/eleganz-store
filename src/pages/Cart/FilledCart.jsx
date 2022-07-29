import React, { useEffect } from "react";
import { CartPriceDetails, CartItemList } from "components";
import "./Cart.css";

const FilledCart = () => {
  const executeScripts = (scriptSrc) => {
    return new Promise((resolve) => {
      const bodyScript = document.createElement("script");
      bodyScript.src = scriptSrc;
      bodyScript.onLoad = () => {
        resolve(true);
      };
      bodyScript.onError = () => {
        resolve(false);
      };
      document.body.appendChild(bodyScript);
    });
  };
  useEffect(() => {
    executeScripts("https://checkout.razorpay.com/v1/checkout.js");
  });
  return (
    <section className="filled-cart-content flex-column py-6">
      <div className="text-center">
        <h4>MY CART</h4>
      </div>
      <section className="cart-summary-container pos-relative m-4">
        <CartItemList />
        <CartPriceDetails />
      </section>
    </section>
  );
};
export { FilledCart };
