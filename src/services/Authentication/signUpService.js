import axios from "axios";
import { url } from "constants";

const signupService = async (signupData) => {
  const {
    AUTH: { SIGN_UP_URL },
  } = url;
  try {
    const { data, status } = await axios.post(`${SIGN_UP_URL}`, {
      ...signupData,
    });
    return { data, status };
  } catch (signupServiceError) {
    console.log("AN ERROR OCCURED while making signup api call");
    console.error(signupServiceError);
  }
};

export { signupService };
