import axios from "axios";

const signinService = async (signinDataProvided) => {
  try {
    const { data, status } = await axios.post("/api/auth/login", {
      ...signinDataProvided,
    });
    return { data, status };
  } catch (error) {
    console.log("AN ERROR OCCURED WHILE MAKING LOGIN API CALL");
    console.error(error);
  }
};

export { signinService };
