import React from "react";
import "./ProductCard.css";
import {IoCartOutline as CartOutline,IoHeartOutline as HeartOutline} from 'react-icons/io5';

const ProductCard = ({productDetails}) => {

    
    // eslint-disable-next-line no-unused-vars
    const {_id,title,categoryName,imgUrl,ratings,originalPrice,discountedPrice,discount,brand,inStock,wornBy}=productDetails
    return (      
        <div key={_id} className={`card card-vertical ${!inStock?"card-overlay":""}`}>
            {!inStock?<div className="overlay-text-container">
                <div className="card-overlay-text">OUT OF STOCK</div>
            </div>:null}

            <div className="card-header">
                <div className="badge-content">
                    <span>{ratings}</span>
                </div>
            </div>

            <img
                loading="lazy"
                src={imgUrl}
                alt={title}
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
                <button className="btn btn-warning btn-warning-hover gentle-flex-gap flex-align-center">
                    ADD TO CART <CartOutline/>
                </button>
                <button className="btn btn-primary btn-primary-hover gentle-flex-gap flex-align-center">ADD TO WISHLIST <HeartOutline/></button>
            </div>
        </div>


    )
}

export { ProductCard }