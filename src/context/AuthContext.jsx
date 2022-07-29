import React, { createContext, useContext, useReducer } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { authReducer, initialAuthState } from "reducers";
import {
  addItemToCartService,
  addItemToWishlistService,
  clearWholeCartService,
  quantityUpdateService,
  removeItemFromWishlistService,
  removeProductFromCartService,
  signinService,
  signupService,
} from "services";
import { routes } from "constants";
import { actionTypes } from "constants";
const AuthenticationContext = createContext(null);
const useAuthentication = () => useContext(AuthenticationContext);

const AuthProvider = ({ children }) => {
  const navigateTo = useNavigate();
  const location = useLocation();
  const [authState, authDispatch] = useReducer(authReducer, initialAuthState);
  const {
    AUTH: { SIGN_IN, SIGN_UP, SIGNOUT },
    USER_RELATED_COLLECTIONS: { CART, WISHLIST },
  } = actionTypes;
  const { PRODUCTS_ROUTE, HOME_ROUTE, SIGNIN_ROUTE } = routes;
  const { signinStatus, authenticationToken } = authState;
  //   Authentication related activities of login,signup and signout
  const signInActionHandler = async (signinDataProvided) => {
    try {
      const { data, status } = await signinService(signinDataProvided);
      if (status === 200) {
        authDispatch({ type: SIGN_IN, payload: data });
        localStorage.setItem("authenticationToken", data.encodedToken);
        navigateTo(location?.state?.from.pathname || PRODUCTS_ROUTE, {
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
        authDispatch({ type: SIGN_UP, payload: data });
        localStorage.setItem("authenticationToken", data.encodedToken);
        navigateTo(location?.state?.from.pathname || PRODUCTS_ROUTE, {
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
    authDispatch({ type: SIGNOUT });
    navigateTo(HOME_ROUTE);
  };

  // Cart related activities of adding new items,removing existing items as well as
  // updating item quantities and clearing the whole cart
  const addItemToCartAction = async (productDetailsGiven) => {
    if (!signinStatus) {
      navigateTo(SIGNIN_ROUTE);
    } else {
      try {
        const {
          data: { cart: cartUpdated },
        } = await addItemToCartService(
          productDetailsGiven,
          authenticationToken
        );
        authDispatch({ type: CART, payload: cartUpdated });
      } catch (addItemToCartActionError) {
        console.error(
          "An error occured while adding an item to cart:",
          addItemToCartActionError
        );
      }
    }
  };
  const removeProductFromCartAction = async (productDetailsGiven) => {
    try {
      const {
        data: { cart: cartUpdated },
      } = await removeProductFromCartService(
        productDetailsGiven,
        authenticationToken
      );
      authDispatch({ type: CART, payload: cartUpdated });
    } catch (removeProductFromCartActionError) {
      console.error(
        "An error occured while removing a product from cart: ",
        removeProductFromCartActionError
      );
    }
  };
  const updateItemQuantityAction = async (
    productDetailsGiven,
    updateTypeProvided
  ) => {
    try {
      const {
        data: { cart: cartUpdated },
      } = await quantityUpdateService(
        productDetailsGiven,
        updateTypeProvided,
        authenticationToken
      );
      authDispatch({ type: CART, payload: cartUpdated });
    } catch (updateItemQuantityActionError) {
      console.error(
        "An error occured while updating the quantity of the item in the cart:",
        updateItemQuantityActionError
      );
    }
  };
  const clearWholeCartAction = async () => {
    try {
      const {
        data: { cart: cartUpdated },
      } = await clearWholeCartService(authenticationToken);
      authDispatch({ type: CART, payload: cartUpdated });
    } catch (clearWholeCartActionError) {
      console.error(
        "An error occured while clearing cart: ",
        clearWholeCartActionError
      );
    }
  };

  // Wishlist related activities of adding new items , removing existing items from the
  // whole wishlist
  const addItemToWishlistAction = async (productDetailsGiven) => {
    if (!signinStatus) {
      navigateTo(SIGNIN_ROUTE);
    } else {
      try {
        const {
          data: { wishlist: wishlistUpdated },
        } = await addItemToWishlistService(
          productDetailsGiven,
          authenticationToken
        );
        authDispatch({ type: WISHLIST, payload: wishlistUpdated });
      } catch (addItemToWishlistActionError) {
        console.error(
          "An error occured while adding the item to wishlist: ",
          addItemToWishlistActionError
        );
      }
    }
  };
  const removeItemFromWishlistAction = async (productDetailsGiven) => {
    try {
      const {
        data: { wishlist: wishlistUpdated },
      } = await removeItemFromWishlistService(
        productDetailsGiven,
        authenticationToken
      );
      authDispatch({ type: WISHLIST, payload: wishlistUpdated });
    } catch (removeItemFromWishlistActionError) {
      console.error(
        "An error occured while adding the item to wishlist: ",
        removeItemFromWishlistActionError
      );
    }
  };
  return (
    <AuthenticationContext.Provider
      value={{
        authState,
        authDispatch,
        signInActionHandler,
        signOutActionHandler,
        signUpActionHandler,
        addItemToCartAction,
        removeProductFromCartAction,
        updateItemQuantityAction,
        clearWholeCartAction,
        addItemToWishlistAction,
        removeItemFromWishlistAction,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export { useAuthentication, AuthProvider };
