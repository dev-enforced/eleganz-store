import React from "react";
import { useProducts } from "context/ProductContext";
import { ProductCard } from "components";
import "./ProductList.css";
const ProductList = () => {
    const { newProducts } = useProducts();
    return (
        <main className="product-display-container">
            <div className="product-quantity-container">
                <p className="text-bold txt-sm p-8">SHOWING ALL PRODUCTS</p>
                <div className="gentle-grid-responsive py-8">
                    {newProducts.map((everyItem) => {
                        return (
                            <ProductCard key={everyItem._id} productDetails={everyItem} />
                        )
                    })}
                </div>
            </div>

        </main>
    )
}

export { ProductList }