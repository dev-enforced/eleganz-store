import axios from "axios";
import { url } from "constants";
const clearWholeCartService = async (tokenProvided) => {
  const {
    USER_PERSONAL_COLLECTIONS: { CART_URL },
  } = url;
  try {
    const { data } = await axios.delete(`${CART_URL}/all`, {
      headers: {
        authorization: tokenProvided,
      },
    });
    return { data };
  } catch (clearWholeCartServiceError) {
    console.error(
      "AN ERROR OCCURED WHILE CLEARING CART: ",
      clearWholeCartServiceError
    );
  }
};
export { clearWholeCartService };
