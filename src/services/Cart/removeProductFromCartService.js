import axios from "axios";
import { url } from "constants";

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
  } catch (removeProductFromCartServiceError) {
    console.error(
      "AN ERROR OCCURED WHILE REMOVING A PRODUCT FROM CART: ",
      removeProductFromCartServiceError
    );
  }
};
export { removeProductFromCartService };
