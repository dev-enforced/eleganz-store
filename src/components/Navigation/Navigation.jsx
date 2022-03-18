import React from "react";
import { Link } from "react-router-dom"
import { GoSearch, GoHeart } from "react-icons/go";
import {IoBagOutline} from "react-icons/io5";
import "./Navigation.css";
const Navigation = () => {
    return (
        <nav className="main-nav-wrapper">
            <div className="main-container gentle-flex-gap flex-align-center flex-wrap">
                <div className="main-image-and-input-container gentle-flex-gap flex-align-center flex-wrap">
                    <div className="main-image-container">
                        <img src="./assets/eleganz-logo.png" alt="Eleganz Logo" className="brand-image" />
                    </div>
                    <form className="main-input-container">
                        <GoSearch className="search-icon" />
                        <input type="text" placeholder="SEARCH FOR PRODUCTS" className="search-input" />
                    </form>
                </div>
                <div className="main-links gentle-flex-gap flex-center flex-wrap">
                    <Link to="/mockbee" className="link-none text-link" >
                        LOGIN
                    </Link>
                    <Link to="/mockman" className="badge mx-2">
                        <GoHeart className="icon-link link-none" />
                        <div className="badge-number gentle-flex-center">
                            <span>4</span>
                        </div>
                    </Link>
                    <Link to="/mockman" className="badge mx-2">
                        <IoBagOutline className="icon-link link-none" />
                        <div className="badge-number gentle-flex-center">
                            <span>4</span>
                        </div>
                    </Link>
                </div>
            </div>
        </nav>


    )
}

export { Navigation }