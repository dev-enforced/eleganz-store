import React from "react";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import './CartItemList.css';

const CartItemList=()=>{
    return (
        <div className="cart-items-list flex-column">
                    <div className="cart-item gentle-flex pos-relative m-4">
                        <div className="cart-item-img-container flex-row flex-align-center pos-relative ">
                            <img src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F78%2F12%2F7812bbdd4b5f96063077a28c93f4201b67fe7c3e.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main" alt="" className="cart-item-img" />
                        </div>
                        <div className="cart-item-description m-1 mt-2 flex-column">
                            <h3 className="m-1">Cotton Tshirt</h3>
                            <p className="txt-xs mx-1">H&M</p>
                            <p className="gentle-flex flex-align-center cart-item-price-details">
                                <span className="card-price">Rs 599</span>
                                <span className="card-original-price">Rs 799</span>
                                <span className="card-discount"> 20% off</span>
                            </p>
                            <div className="cart-item-quantity flex-row flex-align-center m-0 mx-1">
                                <button className="py-2 px-3 cart-item-quantity-btn">
                                    <FaMinus />
                                </button>
                                <span className="m-2 px-3 py-2">
                                    2
                                </span>
                                <button className="py-2 px-3 cart-item-quantity-btn">
                                    <FaPlus />
                                </button>
                            </div>
                            <div className="cart-actions gentle-flex-gap flex-column flex-align-center">
                                <button className="btn btn-primary">ADD/goto FROM WISHLIST</button>
                                <button className="btn btn-error">REMOVE FROM CART</button>
                            </div>
                        </div>
                    </div>

                    <div className="cart-item gentle-flex pos-relative m-4">
                        <div className="cart-item-img-container flex-row flex-align-center pos-relative ">
                            <img src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F78%2F12%2F7812bbdd4b5f96063077a28c93f4201b67fe7c3e.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main" alt="" className="cart-item-img" />
                        </div>
                        <div className="cart-item-description m-1 mt-2 flex-column">
                            <h3 className="m-1">Cotton Tshirt</h3>
                            <p className="txt-xs mx-1">H&M</p>
                            <p className="gentle-flex flex-align-center cart-item-price-details">
                                <span className="card-price">Rs 599</span>
                                <span className="card-original-price">Rs 799</span>
                                <span className="card-discount"> 20% off</span>
                            </p>
                            <div className="cart-item-quantity flex-row flex-align-center m-0 mx-1">
                                <button className="py-2 px-3 cart-item-quantity-btn">
                                    <FaTrash />
                                </button>
                                <span className="m-2 px-3 py-2">
                                    1
                                </span>
                                <button className="py-2 px-3 cart-item-quantity-btn">
                                    <FaPlus />
                                </button>
                            </div>
                            <div className="cart-actions gentle-flex-gap flex-column flex-align-center">
                                <button className="btn btn-primary">REMOVE FROM WISHLIST</button>
                                <button className="btn btn-warning">GO TO WISHLIST</button>
                                <button className="btn btn-error">REMOVE FROM CART</button>
                            </div>
                        </div>
                    </div>

                </div>
    )
}
export {CartItemList};