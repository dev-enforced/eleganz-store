import axios from "axios";
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

export { removeItemFromWishlist };
