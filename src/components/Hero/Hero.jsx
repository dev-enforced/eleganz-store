import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero gentle-flex">
      <div className="flex-column flex-start hero-txt p-0 px-6">
        <div className="hero-head-small ml-3 m-2-5v">
          20% OFF PROMOTIONAL SALE
        </div>
        <div className="hero-head-large ml-3">DISCOVER YOUR</div>
        <div className="hero-head-large ml-3">PERSONAL STYLE</div>
        <div className="hero-head-medium ml-3 m-2-5v">
          <p>Choose from our wide range of products</p>
          <p>including Traditional Wear, Casual Wear</p>
          <p>Jeans, TShirts, Coats and many more.</p>
        </div>
        <Link to="/products">
          <button className="hero-btn m-2-5v">Browse Products</button>
        </Link>
      </div>
    </section>
  );
};

export { Hero };
