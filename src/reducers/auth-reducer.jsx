import { actionTypes } from "constants";

const initialAuthState = {
  signinStatus: localStorage.getItem("authenticationToken") ? true : false,
  authenticationToken: localStorage.getItem("authenticationToken")
    ? localStorage.getItem("authenticationToken")
    : "",
  cart: [],
  wishlist: [],
};
const {
  AUTH: { SIGN_IN, SIGN_UP, SIGNOUT },
  USER_RELATED_COLLECTIONS: { CART, WISHLIST },
} = actionTypes;
const authReducer = (authStateProvided, authAction) => {
  const { type, payload } = authAction;
  switch (type) {
    case SIGN_IN:
      return {
        ...authStateProvided,
        ...payload.foundUser,
        authenticationToken: payload.encodedToken,
        signinStatus: true,
      };
    case SIGNOUT:
      return {
        ...initialAuthState,
        signinStatus: false,
        authenticationToken: "",
      };
    case SIGN_UP:
      return {
        ...authStateProvided,
        ...payload.createdUser,
        authenticationToken: payload.encodedToken,
        signinStatus: true,
      };
    case CART:
      return { ...authStateProvided, cart: payload };
    case WISHLIST:
      return { ...authStateProvided, wishlist: payload };
    default:
      return { ...authStateProvided };
  }
};
export { initialAuthState, authReducer };
