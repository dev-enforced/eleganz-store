import axios from "axios";
import { url } from "constants";
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
export { addItemToCartService };
