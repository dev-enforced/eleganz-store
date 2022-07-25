const initialAuthState = {
  signinStatus: localStorage.getItem("authenticationToken") ? true : false,
  authenticationToken: localStorage.getItem("authenticationToken")
    ? localStorage.getItem("authenticationToken")
    : "",
  cart: [],
  wishlist: [],
};

const authReducer = (authStateProvided, authAction) => {
  const { type, payload } = authAction;
  switch (type) {
    case "SIGN-IN":
      return {
        ...authStateProvided,
        ...payload.foundUser,
        authenticationToken: payload.encodedToken,
        signinStatus: true,
      };
    case "SIGN-OUT":
      return {
        ...initialAuthState,
        signinStatus: false,
        authenticationToken: "",
      };
    case "SIGN-UP":
      return {
        ...authStateProvided,
        ...payload.createdUser,
        authenticationToken: payload.encodedToken,
        signinStatus: true,
      };
    case "ADD-TO-CART":
      return { ...authStateProvided, cart: payload };
    case "WISHLIST":
      return { ...authStateProvided, wishlist: payload };
    default:
      return { ...authStateProvided };
  }
};
export { initialAuthState, authReducer };
