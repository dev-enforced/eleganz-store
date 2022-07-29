import axios from "axios";
import { url } from "constants";

const removeItemFromWishlistService = async (
  productDetailsGiven,
  tokenProvided
) => {
  const {
    USER_PERSONAL_COLLECTIONS: { WISHLIST_URL },
  } = url;
  try {
    const { data } = await axios.delete(
      `${WISHLIST_URL}/${productDetailsGiven._id}`,
      {
        headers: {
          authorization: tokenProvided,
        },
      }
    );
    return { data };
  } catch (removeItemFromWishlistServiceError) {
    console.error(
      "An error occured while removing an item from wishlist: ",
      removeItemFromWishlistServiceError
    );
  }
};

export { removeItemFromWishlistService };
