import axios from "axios";
import { url } from "constants";
const addItemToWishlist = async (
  product,
  authDispatchFunction,
  authStateGiven
) => {
  try {
    const {
      data: { wishlist: wishlistUpdated },
    } = await axios.post(
      "/api/user/wishlist",
      { product },
      {
        headers: {
          authorization: authStateGiven.authenticationToken,
        },
      }
    );
    authDispatchFunction({ type: "WISHLIST", payload: wishlistUpdated });
  } catch (error) {
    console.error("ERROR OCCURED WHILE ADDING ITEM TO WISHLIST");
  }
};
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
  } catch (addItemToWishlistError) {
    console.error(
      "AN ERROR OCCURED WHILE DOING API CALL FOR ADDING AN ITEM TO WISHLIST:",
      addItemToWishlist
    );
  }
};
export { addItemToWishlist, addItemToWishlistService };
