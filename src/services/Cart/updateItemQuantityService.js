import axios from "axios";
import { url } from "constants";
const quantityUpdate = async (
  authStateGiven,
  authDispatchFunction,
  productDetails,
  typeGiven
) => {
  try {
    const {
      data: { cart: cartUpdated },
    } = await axios.post(
      `/api/user/cart/${productDetails._id}`,
      {
        action: {
          type: typeGiven,
        },
      },
      {
        headers: {
          authorization: authStateGiven.authenticationToken,
        },
      }
    );
    authDispatchFunction({ type: "ADD-TO-CART", payload: cartUpdated });
  } catch (error) {
    console.error("Error while doing quantity update through API");
  }
};

const quantityUpdateService = async (
  productDetailsGiven,
  updateTypeGiven,
  tokenProvided
) => {
  const {
    USER_PERSONAL_COLLECTIONS: { CART_URL },
  } = url;
  try {
    const { data } = await axios.post(
      `${CART_URL}/${productDetailsGiven._id}`,
      { action: { type: updateTypeGiven } },
      {
        headers: { authorization: tokenProvided },
      }
    );
    return { data };
  } catch (quantityUpdateServiceError) {
    console.error(
      "AN ERROR OCCURED WHILE MAKING API CALLS TO UPDATE EXISTING ITEM'S QUANTITY",
      quantityUpdateServiceError
    );
  }
};
export { quantityUpdate, quantityUpdateService };
