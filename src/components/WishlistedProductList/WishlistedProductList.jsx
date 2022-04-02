/* eslint-disable no-unused-vars */
import React from 'react';
import { useAuthentication } from 'context';
import "./WishlistedProductList.css";
const WishlistedProductList = () => {
    const { authState: { cart: cartProvided, wishlist: wishlistProvided } } = useAuthentication();
    return (
        <section className="gentle-grid-responsive py-8">
            {wishlistProvided.map((everyItem) => {
                const { _id, title, categoryName, imgUrl, ratings, originalPrice, discountedPrice, discount, brand, wornBy } = everyItem;
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
                            <h4 className="txt-bold card-details-title">{title} for {wornBy}</h4>
                            <p className="card-details-subtitle">{brand}</p>
                            <p className="card-pricing">
                                <span className="card-price">{discountedPrice}</span>
                                <del className="card-original-price">{originalPrice}</del>
                                <span className="card-discount">{discount}</span>
                            </p>
                        </div>
                        <div className="card-actions">
                            <a
                                href="#"
                                className="link-none btn btn-warning btn-warning-hover text-center"
                            >ADD TO CART</a
                            >
                            <a className="btn btn-outline text-center link-none" href="#">
                                REMOVE FROM WISHLIST
                            </a>
                        </div>
                    </div>)
            })}
        </section>
    )
}

export { WishlistedProductList };