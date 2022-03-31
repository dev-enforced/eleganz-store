import { CartPriceDetails, CartItemList } from "components";
import React from "react";
import "./Cart.css";

const FilledCart = () => {
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
    )
}
export { FilledCart };