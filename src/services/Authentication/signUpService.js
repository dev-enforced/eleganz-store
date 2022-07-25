import axios from "axios";
const signupService = async (signupData) => {
  try {
    const { data, status } = await axios.post("/api/auth/signup", {
      ...signupData,
    });
    return { data, status };
  } catch (error) {
    console.log("AN ERROR OCCURED while making signup api call");
    console.error(error);
  }
};

export { signupService };
