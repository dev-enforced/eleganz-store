import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useProducts } from "context";
import { routes } from "constants";
import "./Footer.css";
import { actionTypes } from "constants";
const Footer = () => {
  const { filterDispatch } = useProducts();
  const {
    FILTERS: {
      CLEAR_ALL_FILTERS,
      GENDER: { MEN, WOMEN },
      CATEGORIES: { JACKETS, DRESSES, TSHIRTS },
    },
  } = actionTypes;
  const navigateTo = useNavigate();
  const { HOME_ROUTE, PRODUCTS_ROUTE } = routes;
  return (
    <footer>
      <div className="footer-content-container p-8">
        <div className="shop-details">
          <div>
            <Link to={HOME_ROUTE}>
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
              <a
                className="link-none"
                target="_blank"
                rel="noreferrer"
                href="https://youtube.com"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </li>
            <li>
              <a
                className="link-none"
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a
                className="link-none"
                target="_blank"
                rel="noreferrer"
                href="https://linkedin.com"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-categories">
          <h3 className="txt-sm">CATEGORIES</h3>
          <ul className="flex-column flex-align-center">
            <li
              className="my-4 category-link text-cursor-pointer"
              onClick={() => {
                filterDispatch({ type: CLEAR_ALL_FILTERS });
                filterDispatch({ type: JACKETS });
                navigateTo(PRODUCTS_ROUTE);
              }}
            >
              JACKETS
            </li>
            <li
              className="my-4 category-link text-cursor-pointer"
              onClick={() => {
                filterDispatch({ type: CLEAR_ALL_FILTERS });
                filterDispatch({ type: DRESSES });
                navigateTo(PRODUCTS_ROUTE);
              }}
            >
              DRESSES
            </li>
            <li
              className="my-4 category-link text-cursor-pointer"
              onClick={() => {
                filterDispatch({ type: CLEAR_ALL_FILTERS });
                filterDispatch({ type: TSHIRTS });
                navigateTo(PRODUCTS_ROUTE);
              }}
            >
              TSHIRTS
            </li>
          </ul>
        </div>

        <div className="footer-categories">
          <h3 className="txt-sm">WEARABLES FOR</h3>
          <ul className="flex-column flex-align-center">
            <li
              className="my-4 category-link text-cursor-pointer"
              onClick={() => {
                filterDispatch({ type: CLEAR_ALL_FILTERS });
                filterDispatch({ type: MEN });
                navigateTo(PRODUCTS_ROUTE);
              }}
            >
              MEN
            </li>
            <li
              className="my-4 category-link text-cursor-pointer"
              onClick={() => {
                filterDispatch({ type: CLEAR_ALL_FILTERS });
                filterDispatch({ type: WOMEN });
                navigateTo(PRODUCTS_ROUTE);
              }}
            >
              WOMEN
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
