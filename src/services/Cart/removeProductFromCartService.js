import axios from "axios";
import { url } from "constants";
const removeProductFromCart = async (
  authStateProvided,
  authDispatchFunction,
  productDetails
) => {
  try {
    const {
      data: { cart: cartUpdated },
    } = await axios.delete(`/api/user/cart/${productDetails._id}`, {
      headers: {
        authorization: authStateProvided.authenticationToken,
      },
    });
    authDispatchFunction({ type: "ADD-TO-CART", payload: cartUpdated });
  } catch (error) {
    console.error("CART UPDATE FAILED WHEN TRYING TO REMOVE ITEM");
  }
};

const removeProductFromCartService = async (
  productDetailsGiven,
  tokenProvided
) => {
  const {
    USER_PERSONAL_COLLECTIONS: { CART_URL },
  } = url;
  try {
    const { data } = await axios.delete(
      `${CART_URL}/${productDetailsGiven._id}`,
      {
        headers: {
          authorization: tokenProvided,
        },
      }
    );
    return { data };
  } catch (removeProductFromCartError) {
    console.error(
      "AN ERROR OCCURED WHILE REMOVING A PRODUCT FROM CART: ",
      removeProductFromCartError
    );
  }
};
export { removeProductFromCart, removeProductFromCartService };
