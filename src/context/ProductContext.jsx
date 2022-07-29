import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useReducer,
} from "react";
import { useSearchParams } from "react-router-dom";
import { initialFilterState, filterReducer } from "reducers";
import { actionTypes } from "constants";
import {
  cumulativeFilters,
  applyCategoryChoice,
  applyPriceChoice,
  applyRatingsChoice,
  applyGenderChoice,
  applySortingChoice,
} from "utilities";
import { loadProductsAndCategories } from "services";
const ProductContext = createContext();
const useProducts = () => useContext(ProductContext);

const ProductProvider = ({ children }) => {
  const [productsDb, setProductsDb] = useState([]);
  const [categoriesAvailable, setCategoriesAvailable] = useState([]);
  const [searchParams] = useSearchParams();
  const categoryReceived = searchParams.get("categorySelected");
  const [filterState, filterDispatch] = useReducer(
    filterReducer,
    initialFilterState
  );
  const {
    FILTERS: { CLEAR_ALL_FILTERS },
  } = actionTypes;
  useEffect(() => {
    const productAndCategoryAPIResponse = loadProductsAndCategories();
    productAndCategoryAPIResponse.then((data) => {
      setProductsDb(data[0].products);
      setCategoriesAvailable(data[1].categories);
    });
  }, []);

  useEffect(() => {
    filterDispatch({ type: `${categoryReceived}` });
    return () => {
      filterDispatch({ type: CLEAR_ALL_FILTERS });
    };
  }, [categoryReceived]);
  const newProducts = cumulativeFilters(
    applyPriceChoice,
    applySortingChoice,
    applyGenderChoice,
    applyCategoryChoice,
    applyRatingsChoice
  )(filterState, [...productsDb]);
  return (
    <ProductContext.Provider
      value={{ newProducts, categoriesAvailable, filterState, filterDispatch }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { ProductProvider, useProducts };
