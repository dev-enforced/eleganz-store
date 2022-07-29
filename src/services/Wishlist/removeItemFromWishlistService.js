import axios from "axios";
import { url } from "constants";
const removeItemFromWishlist = async (
  product,
  authDispatchFunction,
  authStateGiven
) => {
  try {
    const {
      data: { wishlist: wishlistUpdated },
    } = await axios.delete(`/api/user/wishlist/${product._id}`, {
      headers: {
        authorization: authStateGiven.authenticationToken,
      },
    });
    authDispatchFunction({ type: "WISHLIST", payload: wishlistUpdated });
  } catch (error) {
    console.log(error);
    console.error("ERROR OCCURED WHILE ADDING ITEM TO WISHLIST");
  }
};

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
  } catch (removeItemFromWishlistError) {
    console.error("An error occured while adding an item");
  }
};

export { removeItemFromWishlist, removeItemFromWishlistService };
