import React from "react";
import { Link } from "react-router-dom";
import { useAuthentication } from "context";
import { CartOutline, HeartOutline } from "constants";
import { routes } from "constants";
import "./WishlistedProductList.css";

const WishlistedProductList = () => {
  const { authState, addItemToCartAction, removeItemFromWishlistAction } =
    useAuthentication();
  const { CART_ROUTE } = routes;
  const { cart: cartProvided, wishlist: wishlistProvided } = authState;
  return (
    <section className="gentle-grid-responsive py-8">
      {wishlistProvided.map((everyItem) => {
        const {
          _id,
          title,
          categoryName,
          imgUrl,
          ratings,
          originalPrice,
          discountedPrice,
          discount,
          brand,
          wornBy,
        } = everyItem;
        return (
          <div key={_id} className="card card-vertical">
            <div className="badge-content">{ratings}</div>
            <img
              loading="lazy"
              src={imgUrl}
              alt={categoryName}
              className="card-media-img p-0"
            />
            <div className="card-content">
              <h4 className="txt-bold card-details-title">
                {title} for {wornBy}
              </h4>
              <p className="card-details-subtitle">{brand}</p>
              <p className="card-pricing">
                <span className="card-price">₹ {discountedPrice}</span>
                <del className="card-original-price">₹ {originalPrice}</del>
                <span className="card-discount">{discount}</span>
              </p>
            </div>
            <div className="card-actions">
              {cartProvided.some(
                (everyCartItem) => everyCartItem._id === _id
              ) ? (
                <Link
                  to={CART_ROUTE}
                  className="link-none btn btn-warning btn-warning-hover gentle-flex-gap flex-align-center"
                >
                  GO TO CART <CartOutline />
                </Link>
              ) : (
                <button
                  className="btn btn-warning btn-warning-hover gentle-flex-gap flex-align-center"
                  onClick={() => {
                    addItemToCartAction(everyItem);
                  }}
                >
                  ADD TO CART <CartOutline />
                </button>
              )}
              <button
                onClick={() => {
                  removeItemFromWishlistAction(everyItem);
                }}
                className="btn btn-outline text-center link-none"
                href="#"
              >
                REMOVE FROM WISHLIST <HeartOutline />
              </button>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export { WishlistedProductList };
