import React from "react";
import { Link } from "react-router-dom";
import { routes } from "constants";
import "./Cart.css";

const EmptyCart = () => {
  const { WISHLIST_ROUTE, PRODUCTS_ROUTE } = routes;
  return (
    <section className="empty-cart-content flex-column flex-center">
      <div className="cart-info-container flex-column flex-justify-center p-10">
        <div className=" text-center">
          <h3>Your cart is empty</h3>
        </div>
        <div className=" text-center">
          <p>Let{`'`}s add some items inside it.</p>
        </div>
        <div className="text-center flex-column gentle-flex-gap">
          <Link
            to={WISHLIST_ROUTE}
            className="link-none btn btn-primary btn-primary-hover"
          >
            GO TO WISHLIST
          </Link>
          <Link to={PRODUCTS_ROUTE} className="link-none btn btn-outline">
            BROWSE PRODUCTS
          </Link>
        </div>
      </div>
    </section>
  );
};
export { EmptyCart };
