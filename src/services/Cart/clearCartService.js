import axios from "axios";
const clearCartService = async (tokenProvided) => {
  try {
    const { data, status } = await axios.delete("/api/user/cart/all", {
      headers: {
        authorization: tokenProvided,
      },
    });
    return { data, status };
  } catch (error) {
    console.error("AN ERROR OCCURED WHILE CLEARING CART: ", error);
  }
};
export { clearCartService };
