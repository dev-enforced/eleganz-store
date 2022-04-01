/* eslint-disable no-unused-vars */
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ProductCard.css";
import { IoCartOutline as CartOutline, IoHeartOutline as HeartOutline } from 'react-icons/io5';
import { useAuthentication } from "context";
import axios from "axios";
import { addToCart } from "services";

const ProductCard = ({ productDetails }) => {
    const navigate = useNavigate();
    const { authState, authDispatch } = useAuthentication();
    const { signinStatus, cart, wishlist } = authState;
    const { _id, title, categoryName, imgUrl, ratings, originalPrice, discountedPrice, discount, brand, inStock, wornBy } = productDetails
    return (
        <div key={_id} className={`card card-vertical ${!inStock ? "card-overlay" : ""}`}>
            {!inStock ? <div className="overlay-text-container">
                <div className="card-overlay-text">OUT OF STOCK</div>
            </div> : null}

            <div className="card-header">
                <div className="badge-content">
                    <span>{ratings}</span>
                </div>
            </div>

            <img
                loading="lazy"
                src={imgUrl}
                alt={categoryName}
                className="card-media-img"
            />

            <div className="card-content">
                <h4 className="txt-bold card-details-title">{title} for {wornBy}</h4>
                <p className="card-details-subtitle">{brand}</p>
                <p className="card-pricing">
                    <span className="card-price">₹ {discountedPrice}</span>
                    <del className="card-original-price">₹ {originalPrice}</del>
                    <span className="card-discount">{discount}% off</span>
                </p>
            </div>

            <div className="card-actions">
                {
                    cart.some((everyCartItem) => everyCartItem._id === _id) ?
                        <Link to="/cart" className="link-none btn btn-warning btn-warning-hover gentle-flex-gap flex-align-center" >
                            GO TO CART <CartOutline />
                        </Link> :
                        <button className="btn btn-warning btn-warning-hover gentle-flex-gap flex-align-center"
                            onClick={() => {
                                if (signinStatus) {
                                    addToCart(authState, authDispatch, productDetails);
                                } else {
                                    navigate("/signin");
                                }
                            }}
                        >
                            ADD TO CART <CartOutline />
                        </button>
                }
                <button className="btn btn-primary btn-primary-hover gentle-flex-gap flex-align-center">ADD TO WISHLIST <HeartOutline /></button>
            </div>
        </div>


    )
}

export { ProductCard }