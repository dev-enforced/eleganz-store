import axios from "axios";
import { url } from "constants";

const quantityUpdateService = async (
  productDetailsGiven,
  updateTypeGiven,
  tokenProvided
) => {
  const {
    USER_PERSONAL_COLLECTIONS: { CART_URL },
  } = url;
  try {
    const { data } = await axios.post(
      `${CART_URL}/${productDetailsGiven._id}`,
      { action: { type: updateTypeGiven } },
      {
        headers: { authorization: tokenProvided },
      }
    );
    return { data };
  } catch (quantityUpdateServiceError) {
    console.error(
      "AN ERROR OCCURED WHILE MAKING API CALLS TO UPDATE EXISTING ITEM'S QUANTITY",
      quantityUpdateServiceError
    );
  }
};
export { quantityUpdateService };
