import React, { createContext, useContext, useReducer } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { authReducer, initialAuthState } from "reducers";
import { clearCartService, signinService, signupService } from "services";
const AuthenticationContext = createContext(null);
const useAuthentication = () => useContext(AuthenticationContext);

const AuthProvider = ({ children }) => {
  const navigateTo = useNavigate();
  const location = useLocation();
  const [authState, authDispatch] = useReducer(authReducer, initialAuthState);

  //   Authentication related activities of login,signup and signout
  const signInActionHandler = async (signinDataProvided) => {
    try {
      const { data, status } = await signinService(signinDataProvided);
      if (status === 200) {
        authDispatch({ type: "SIGN-IN", payload: data });
        localStorage.setItem("authenticationToken", data.encodedToken);
        navigateTo(location?.state?.from.pathname || "/products", {
          replace: true,
        });
        // Passing {replace:true} in the second parameter erases the login page from
        // the history flow i.e. if we press the back button on the browser we won't see
        // the login page
      }
    } catch (error) {
      console.log("AN ERROR OCCURED WHILE EXECUTING SIGN IN ACTION HANDLER");
      console.error(error);
    }
  };
  const signUpActionHandler = async (signupDataProvided) => {
    try {
      const { data, status } = await signupService(signupDataProvided);
      if (status === 201) {
        authDispatch({ type: "SIGN-UP", payload: data });
        localStorage.setItem("authenticationToken", data.encodedToken);
        navigateTo(location?.state?.from.pathname || "/products", {
          replace: true,
        });
      }
    } catch (error) {
      console.log("AN ERROR OCCURED WHILE EXECUTING SIGN UP ACTION HANDLER");
      console.error(error);
    }
  };
  const signOutActionHandler = () => {
    localStorage.removeItem("authenticationToken");
    authDispatch({ type: "SIGN-OUT" });
    navigateTo("/");
  };

  // CART RELATED ACTIVITIES
  const clearCartActionHandler = async () => {
    const {
      data: { cart: cartUpdated },
    } = await clearCartService(authState.authenticationToken);
    authDispatch({ type: "ADD-TO-CART", payload: cartUpdated });
  };

  return (
    <AuthenticationContext.Provider
      value={{
        authState,
        authDispatch,
        signInActionHandler,
        signOutActionHandler,
        signUpActionHandler,
        clearCartActionHandler,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export { useAuthentication, AuthProvider };
