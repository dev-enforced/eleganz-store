import { CartPriceDetails, CartItemList } from "components";
import React, { useEffect } from "react";
import "./Cart.css";

const FilledCart = () => {
  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };
  useEffect(() => {
    loadScript("https://checkout.razorpay.com/v1/checkout.js");
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
