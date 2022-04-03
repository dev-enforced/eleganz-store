import React from "react";
import { Link, useNavigate } from "react-router-dom"
import { useAuthentication } from "context";
import { signOutService } from "services";
import "./Navigation.css";
import { Search, CartIcon, WishlistIcon } from "constants";
const Navigation = () => {
    const navigate = useNavigate();
    const { authState, authDispatch } = useAuthentication();
    const { signinStatus, cart, wishlist } = authState;
    return (
        <nav className="main-nav-wrapper">
            <div className="main-container gentle-flex-gap flex-align-center flex-wrap">
                <div className="main-image-and-input-container gentle-flex-gap flex-align-center flex-wrap">
                    <div className="main-image-container">
                        <Link to="/">
                            <img src="./assets/eleganz-logo.png" alt="Eleganz Logo" className="brand-image" />
                        </Link>
                    </div>
                    <form className="main-input-container">
                        <Search className="search-icon" />
                        <input type="text" placeholder="SEARCH FOR PRODUCTS" className="search-input" />
                    </form>
                </div>
                <div className="main-links gentle-flex-gap flex-center flex-wrap">
                    {signinStatus ? <button onClick={() => {
                        signOutService(authDispatch, navigate)
                    }} className="link-none text-link" >
                        LOGOUT
                    </button> :
                        <Link to="/signin" className="link-none text-link" >
                            LOGIN
                        </Link>}
                    <Link to="/cart" className="badge mx-2">
                        <CartIcon className="icon-link link-none" />
                        {signinStatus && cart.length > 0 ?
                            <div className="badge-number gentle-flex-center">
                                <span>{cart.length}</span>
                            </div> : ""}
                    </Link>
                    <Link to="/wishlist" className="badge mx-2">
                        <WishlistIcon className="icon-link link-none" />
                        {signinStatus && wishlist.length > 0 ?
                            <div className="badge-number gentle-flex-center">
                                <span>{wishlist.length}</span>
                            </div> : ""}
                    </Link>
                </div>
            </div>
        </nav>


    )
}

export { Navigation }