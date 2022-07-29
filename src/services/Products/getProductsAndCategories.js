import axios from "axios";
import { url } from "constants";
const loadProductsAndCategories = async () => {
  const {
    DATA: { PRODUCTS_URL, CATEGORIES_URL },
  } = url;
  try {
    const { data: productsData } = await axios.get(`${PRODUCTS_URL}`);
    const { data: categoriesData } = await axios.get(`${CATEGORIES_URL}`);
    return Promise.all([productsData, categoriesData]);
  } catch {
    console.log("API Call for Product and Category Error");
  }
};
export { loadProductsAndCategories };
