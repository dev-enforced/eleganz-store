import axios from "axios";
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
const addItemToWishlistService = async () => {};
export { addItemToWishlist, addItemToWishlistService };
