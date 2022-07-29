import axios from "axios";
import { url } from "constants";
const addItemToWishlistService = async (product, tokenProvided) => {
  const {
    USER_PERSONAL_COLLECTIONS: { WISHLIST_URL },
  } = url;
  try {
    const { data } = await axios.post(
      `${WISHLIST_URL}`,
      { product },
      { headers: { authorization: tokenProvided } }
    );
    return { data };
  } catch (addItemToWishlistServiceError) {
    console.error(
      "AN ERROR OCCURED WHILE DOING API CALL FOR ADDING AN ITEM TO WISHLIST:",
      addItemToWishlistServiceError
    );
  }
};
export { addItemToWishlistService };
