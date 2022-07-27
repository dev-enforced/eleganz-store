import React from "react";
import { FilterSidebar, ProductList } from "components";
import { useDocumentTitle } from "hooks";
import "./ProductDisplay.css";

const ProductDisplay = () => {
  useDocumentTitle();
  return (
    <section className="product-page-layout">
      <FilterSidebar />
      <ProductList />
    </section>
  );
};

export { ProductDisplay };
