import React from "react";
import { Link } from "react-router-dom";
import { useAuthentication } from "context";
import { Search, CartIcon, WishlistIcon } from "constants";
import { routes } from "constants";
import "./Navigation.css";

const Navigation = () => {
  const { authState, signOutActionHandler } = useAuthentication();
  const { signinStatus, cart, wishlist } = authState;
  const { HOME_ROUTE, SIGNIN_ROUTE, CART_ROUTE, WISHLIST_ROUTE } = routes;
  return (
    <nav className="main-nav-wrapper">
      <div className="main-container gentle-flex-gap flex-align-center flex-wrap">
        <div className="main-image-and-input-container gentle-flex-gap flex-align-center flex-wrap">
          <div className="main-image-container">
            <Link to={HOME_ROUTE}>
              <img
                src="./assets/eleganz-logo.png"
                alt="Eleganz Logo"
                className="brand-image"
              />
            </Link>
          </div>
          <form className="main-input-container">
            <Search className="search-icon" />
            <input
              type="text"
              placeholder="SEARCH FOR PRODUCTS"
              className="search-input"
            />
          </form>
        </div>
        <div className="main-links gentle-flex-gap flex-center flex-wrap">
          {signinStatus ? (
            <button
              onClick={() => {
                signOutActionHandler();
              }}
              className="link-none text-link"
            >
              LOGOUT
            </button>
          ) : (
            <Link to={SIGNIN_ROUTE} className="link-none text-link">
              LOGIN
            </Link>
          )}
          <Link to={CART_ROUTE} className="badge mx-2">
            <CartIcon className="icon-link link-none" />
            {signinStatus && cart.length > 0 ? (
              <div className="badge-number gentle-flex-center">
                <span>{cart.length}</span>
              </div>
            ) : (
              ""
            )}
          </Link>
          <Link to={WISHLIST_ROUTE} className="badge mx-2">
            <WishlistIcon className="icon-link link-none" />
            {signinStatus && wishlist.length > 0 ? (
              <div className="badge-number gentle-flex-center">
                <span>{wishlist.length}</span>
              </div>
            ) : (
              ""
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export { Navigation };
