import axios from "axios";
import React, { createContext, useContext, useEffect, useState, useReducer } from "react";
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
    const initialFilterState = {
        sortPriceOrder: "",
        gender: "",
        categories: [],
        startRatings: "3",
        endRatings:"5"
    }

    const filterReducer = (givenState, action) => {
        switch (action.type) {
            case "LOW-TO-HIGH":
                return { ...givenState, sortPriceOrder: "Low To High" }
            case "HIGH-TO-LOW":
                return { ...givenState, sortPriceOrder: "High To Low" }
            case "MEN":
                return { ...givenState, gender: "Men" }
            case "WOMEN":
                return { ...givenState, gender: "Women" }
            case "TSHIRTS":
                return { ...givenState, categories: !givenState.categories.includes("Tshirts") ? [...givenState.categories, "Tshirts"] : [...givenState.categories] }
            case "REMOVE-TSHIRTS":
                return { ...givenState, categories: givenState.categories.filter((everyCategory) => everyCategory !== "Tshirts") }
            case "SHIRTS":
                return { ...givenState, categories: !givenState.categories.includes("Shirts") ? [...givenState.categories, "Shirts"] : [...givenState.categories] }
            case "REMOVE-SHIRTS":
                return { ...givenState, categories: givenState.categories.filter((everyCategory) => everyCategory !== "Shirts") }
            case "DRESSES":
                return { ...givenState, categories: !givenState.categories.includes("Dresses") ? [...givenState.categories, "Dresses"] : [...givenState.categories] }
            case "REMOVE-DRESSES":
                return { ...givenState, categories: givenState.categories.filter((everyCategory) => everyCategory !== "Dresses") }
            case "JACKETS":
                return { ...givenState, categories: !givenState.categories.includes("Jackets and Coats") ? [...givenState.categories, "Jackets and Coats"] : [...givenState.categories] }
            case "REMOVE-JACKETS":
                return { ...givenState, categories: givenState.categories.filter((everyCategory) => everyCategory !== "Jackets and Coats") }
            case "PANTS":
                return { ...givenState, categories: !givenState.categories.includes("Casual Pants") ? [...givenState.categories, "Casual Pants"] : [...givenState.categories] }
            case "REMOVE-PANTS":
                return { ...givenState, categories: givenState.categories.filter((everyCategory) => everyCategory !== "Casual Pants") }
            case "CLEAR-ALL":
                return { ...initialFilterState }
            case "RATING-CHOICE":
                return {...givenState,startRatings:`${action.startValue}`,endRatings:`${action.endValue}`}
            default:
                return givenState
        }
    }
    const [filterState, filterDispatch] = useReducer(filterReducer, initialFilterState);

    const applySortingChoice = (givenState, providedProducts) => {
        if (givenState.sortPriceOrder === "Low To High") {
            return [...providedProducts].sort((a, b) => Number(a.discountedPrice) - Number(b.discountedPrice))
        } else if (givenState.sortPriceOrder === "High To Low") {
            return [...providedProducts].sort((a, b) => Number(b.discountedPrice) - Number(a.discountedPrice))
        } else {
            return [...providedProducts]
        }
    }

    const applyCategoryChoice = (givenState, providedProducts) => {
        const { categories } = givenState;
        return categories.length > 0 ? [...providedProducts].filter((everyProduct) => categories.includes(everyProduct.categoryName)) : [...providedProducts]
    }

    const applyGenderChoice = (givenState, providedProducts) => {
        if (givenState.gender === "Men") {
            return [...providedProducts].filter((everyItem) => everyItem.wornBy === "Men")
        } else if (givenState.gender === "Women") {
            return [...providedProducts].filter((everyItem) => everyItem.wornBy === "Women")
        } else {
            return [...providedProducts]
        }
    }

    const applyRatingsChoice=(givenState,providedProducts)=>{
        const {startRatings,endRatings}=givenState;
        return [...providedProducts].filter((everyProduct) => Number(everyProduct.ratings) >= Number(startRatings) && Number(everyProduct.ratings) <= Number(endRatings))
    }
    const cumulativeFilters = (...participatingFilters) => {
        return (givenState, providedProducts) => {
            return participatingFilters.reduce((previousFilterResult, currentFilter) => currentFilter(givenState, previousFilterResult), providedProducts)
        }
    }


    useEffect(() => {
        loadProducts()
    }, [])
    const newProducts = cumulativeFilters(applySortingChoice, applyGenderChoice, applyCategoryChoice,applyRatingsChoice)(filterState, [...productsDb]);
    return (
        <ProductContext.Provider value={{ newProducts, filterState, filterDispatch }}>
            {children}
        </ProductContext.Provider>
    )
}

export { ProductProvider, useProducts }