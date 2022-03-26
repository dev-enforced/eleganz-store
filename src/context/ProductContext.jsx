import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
const ProductContext = createContext();
const useProducts = () => useContext(ProductContext);

const ProductProvider = ({ children }) => {
    const [productsDb, setProductsDb] = useState([]);
    const loadProducts = async () => {
        try {
            const { data } = await axios.get("/api/products");
            setProductsDb(data.products)
        } catch {
            console.log("Error")
        }
    }
    useEffect(() => {
        loadProducts()
    }, [])
    const newProducts = [...productsDb];
    return (
        <ProductContext.Provider value={{ newProducts }}>
            {children}
        </ProductContext.Provider>
    )
}

export { ProductProvider, useProducts }