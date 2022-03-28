import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useProducts } from "context/ProductContext";
import "./Footer.css";
const Footer = () => {
    const { filterDispatch } = useProducts()
    const navigate = useNavigate();
    return (
        <footer>
            <div className="footer-content-container p-8">
                <div className="shop-details">
                    <div>
                        <Link to="/">
                            <img
                                src="./assets/eleganz-logo.png"
                                alt="Eleganz Store"
                                className="brand-image"
                            />
                        </Link>

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
                        <li className="my-4 category-link text-cursor-pointer" onClick={() => {
                            filterDispatch({ type: "CLEAR-ALL" });
                            filterDispatch({ type: "JACKETS" });
                            navigate("/products");
                        }}>
                            JACKETS
                        </li>
                        <li className="my-4 category-link text-cursor-pointer" onClick={() => {
                            filterDispatch({ type: "CLEAR-ALL" });
                            filterDispatch({ type: "DRESSES" });
                            navigate("/products");
                        }}>
                            DRESSES
                        </li>
                        <li className="my-4 category-link text-cursor-pointer" onClick={() => {
                            filterDispatch({ type: "CLEAR-ALL" });
                            filterDispatch({ type: "TSHIRTS" });
                            navigate("/products");
                        }}>
                            TSHIRTS
                        </li>
                    </ul>
                </div>

                <div className="footer-categories">
                    <h3 className="txt-sm">WEARABLES FOR</h3>
                    <ul className="flex-column flex-align-center">
                        <li className="my-4 category-link text-cursor-pointer" onClick={() => {
                            filterDispatch({ type: "CLEAR-ALL" });
                            filterDispatch({ type: "MEN" });
                            navigate("/products");
                        }}>
                            MEN
                        </li>
                        <li className="my-4 category-link text-cursor-pointer" onClick={() => {
                            filterDispatch({ type: "CLEAR-ALL" });
                            filterDispatch({ type: "WOMEN" });
                            navigate("/products");
                        }}>
                            WOMEN
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export { Footer }