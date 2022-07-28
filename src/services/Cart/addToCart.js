import axios from "axios";
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
const addToCartService = async () => {};
export { addToCart, addToCartService };
