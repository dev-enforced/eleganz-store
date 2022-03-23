import React, { createContext, useContext } from "react";
const ProductContext = createContext(null);
const useProducts = () => { useContext(ProductContext) };

const ProductProvider = ({ children }) => {
    
    return (
        <ProductContext.Provider>{children}</ProductContext.Provider>
    )
}

export {ProductProvider,useProducts}