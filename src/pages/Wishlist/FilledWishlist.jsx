import { WishlistedProductList } from "components";
import React from "react";
import "./Wishlist.css";
const FilledWishlist = () => {
  return (
    <section className="filled-wishlist-content flex-column py-6">
      <div className="text-center">
        <h4>MY WISHLIST</h4>
      </div>
      <WishlistedProductList />
    </section>
  );
};

export { FilledWishlist };
