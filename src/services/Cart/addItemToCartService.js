import axios from "axios";
import { url } from "constants";
const addToCart = async (authStateGiven, authDispatchFunction, product) => {
  try {
    const {
      data: { cart: cartUpdated },
    } = await axios.post(
      "/api/user/cart",
      { product },
      {
        headers: {
          authorization: authStateGiven.authenticationToken,
        },
      }
    );
    authDispatchFunction({ type: "ADD-TO-CART", payload: cartUpdated });
  } catch (error) {
    console.error("API Call for Add Item To Cart failed");
  }
};
const addItemToCartService = async (product, tokenProvided) => {
  const {
    USER_PERSONAL_COLLECTIONS: { CART_URL },
  } = url;
  try {
    const { data } = await axios.post(
      `${CART_URL}`,
      { product },
      { headers: { authorization: tokenProvided } }
    );
    return { data };
  } catch (addItemToCartServiceError) {
    console.error(
      "An error occured while adding an item to cart through API: ",
      addItemToCartServiceError
    );
  }
};
export { addToCart, addItemToCartService };
