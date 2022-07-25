import React from "react";
import { Link } from "react-router-dom";
import "./Wishlist.css";
const EmptyWishlist = () => {
  return (
    <section className="empty-wishlist-content flex-column flex-center">
      <div className="wishlist-info-container flex-column flex-justify-center p-10">
        <div className="text-center">
          <h3>Your Wishlist is empty</h3>
        </div>
        <div className="text-center">
          <p>Let{`'`}s add your favourite items inside it.</p>
        </div>
        <div className="text-center flex-column gentle-flex-gap">
          <Link to="/products" className="link-none btn btn-outline">
            BROWSE PRODUCTS
          </Link>
        </div>
      </div>
    </section>
  );
};

export { EmptyWishlist };
