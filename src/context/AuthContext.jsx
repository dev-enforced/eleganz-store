import React, { createContext, useContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { authReducer, initialAuthState } from "reducers";
import { signinService, signupService } from "services";
const AuthenticationContext = createContext(null);
const useAuthentication = () => useContext(AuthenticationContext);

const AuthProvider = ({ children }) => {
  const navigateTo = useNavigate();
  const [authState, authDispatch] = useReducer(authReducer, initialAuthState);

  //   Authentication related activities of login,signup and signout
  const signInActionHandler = async (signinDataProvided) => {
    try {
      const { data, status } = await signinService(signinDataProvided);
      if (status === 200) {
        authDispatch({ type: "SIGN-IN", payload: data });
        localStorage.setItem("authenticationToken", data.encodedToken);
        navigateTo("/products");
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
        navigateTo("/products");
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
  return (
    <AuthenticationContext.Provider
      value={{
        authState,
        authDispatch,
        signInActionHandler,
        signOutActionHandler,
        signUpActionHandler,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export { useAuthentication, AuthProvider };
