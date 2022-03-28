import axios from "axios";
const loadProductsAndCategories = async () => {
    try {
        const { data: productsData } = await axios.get("/api/products");
        const { data: categoriesData } = await axios.get("/api/categories");
        return [productsData,categoriesData]
    } catch {
        console.log("API Call for Product and Category Error");
    }
}
export {loadProductsAndCategories};