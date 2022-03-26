import React from "react";
import { FilterSidebar, ProductList } from "components";
import "./ProductDisplay.css";

const ProductDisplay = () => {
    return (
        <section className="product-page-layout">
            <FilterSidebar />
            <ProductList />
        </section>
    )
}

export { ProductDisplay }