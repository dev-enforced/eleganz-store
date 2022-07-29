import React from "react";
import { useAuthentication } from "context";
import { Increase, Decrease, Remove } from "constants";
import "./CartItemList.css";

const CartItemList = () => {
  const {
    authState,
    removeProductFromCartAction,
    updateItemQuantityAction,
    removeItemFromWishlistAction,
    addItemToWishlistAction,
  } = useAuthentication();
  const { cart: cartProvided, wishlist: wishlistProvided } = authState;
  return (
    <div className="cart-items-list flex-column">
      {cartProvided.map((everyCartItem) => {
        const {
          _id,
          title,
          imgUrl,
          categoryName,
          originalPrice,
          discountedPrice,
          discount,
          brand,
          qty,
        } = everyCartItem;
        return (
          <div key={_id} className="cart-item gentle-flex pos-relative m-4">
            <div className="cart-item-img-container flex-row flex-align-center pos-relative ">
              <img src={imgUrl} alt={categoryName} className="cart-item-img" />
            </div>
            <div className="cart-item-description m-1 mt-2 flex-column">
              <h3 className="m-1">{title}</h3>
              <p className="txt-xs mx-1">{brand}</p>
              <p className="gentle-flex flex-align-center cart-item-price-details">
                <span className="card-price">{discountedPrice}</span>
                <del className="card-original-price">{originalPrice}</del>
                <span className="card-discount"> {discount}% off</span>
              </p>
              <div className="cart-item-quantity flex-row flex-align-center m-0 mx-1">
                {qty !== 1 ? (
                  <button
                    onClick={() => {
                      updateItemQuantityAction(everyCartItem, "decrement");
                    }}
                    className="py-2 px-3 cart-item-quantity-btn"
                  >
                    <Decrease />
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      removeProductFromCartAction(everyCartItem);
                    }}
                    className="py-2 px-3 cart-item-quantity-btn"
                  >
                    <Remove />
                  </button>
                )}
                <span className="m-2 px-3 py-2">{qty}</span>
                <button
                  onClick={() => {
                    updateItemQuantityAction(everyCartItem, "increment");
                  }}
                  className="py-2 px-3 cart-item-quantity-btn"
                >
                  <Increase />
                </button>
              </div>
              <div className="cart-actions gentle-flex-gap flex-column flex-align-center">
                {wishlistProvided.some((everyItem) => everyItem._id === _id) ? (
                  <button
                    onClick={() => removeItemFromWishlistAction(everyCartItem)}
                    className="btn btn-primary"
                  >
                    REMOVE FROM WISHLIST
                  </button>
                ) : (
                  <button
                    onClick={() => addItemToWishlistAction(everyCartItem)}
                    className="btn btn-primary"
                  >
                    ADD TO WISHLIST
                  </button>
                )}
                <button
                  onClick={() => {
                    removeProductFromCartAction(everyCartItem);
                  }}
                  className="btn btn-error"
                >
                  REMOVE FROM CART
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export { CartItemList };
