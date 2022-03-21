import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
    return (
        <footer>
            <div className="footer-content-container p-8">
                <div className="shop-details">
                    <div>
                        <img
                            src="./assets/eleganz-logo.png"
                            alt="Eleganz Store"
                            className="brand-image"
                        />
                        <p className="txt-sm">
                            Shipping nature friendly products for your kids to your doorstep
                        </p>
                    </div>
                    <ul className="shop-links gentle-flex-gap flex-justify-center txt-md">
                        <li>
                            <a className="link-none" target="_blank" rel="noreferrer" href="https://youtube.com">
                                <i className="fab fa-youtube"></i>
                            </a>
                        </li>
                        <li>
                            <a className="link-none" target="_blank" rel="noreferrer" href="https://twitter.com">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </li>
                        <li>
                            <a className="link-none" target="_blank" rel="noreferrer" href="https://linkedin.com">
                                <i className="fab fa-linkedin"></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footer-categories">
                    <h3 className="txt-sm">CATEGORIES</h3>
                    <ul className="flex-column flex-align-center">
                        <li className="my-4 category-link">
                            <Link to="/" className="link-none"> SKINCARE </Link>
                        </li>
                        <li className="my-4 category-link">
                            <Link to="/" className="link-none"> CLOTHING </Link>
                        </li>
                        <li className="my-4 category-link">
                            <Link to="/" className="link-none"> MEALTIME </Link>
                        </li>
                    </ul>
                </div>

                <div className="footer-categories">
                    <h3 className="txt-sm">ACCOUNT</h3>
                    <ul className="flex-column flex-align-center">
                        <li className="my-4 category-link">
                            <Link to="/" className="link-none"> WISHLIST </Link>
                        </li>
                        <li className="my-4 category-link">
                            <Link to="/" className="link-none">
                                VIEW CART
                            </Link>
                        </li>
                        <li className="my-4 category-link">
                            <Link to="/" className="link-none">
                                LOGIN/SIGNUP
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export { Footer }