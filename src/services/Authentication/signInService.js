import axios from "axios";
import { url } from "constants";
const signinService = async (signinDataProvided) => {
  const {
    AUTH: { SIGN_IN_URL },
  } = url;
  try {
    const { data, status } = await axios.post(`${SIGN_IN_URL}`, {
      ...signinDataProvided,
    });
    return { data, status };
  } catch (error) {
    console.log("AN ERROR OCCURED WHILE MAKING LOGIN API CALL");
    console.error(error);
  }
};

export { signinService };
