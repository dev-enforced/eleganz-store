import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  Mockbee,
  MockMan,
  Home,
  ProductDisplay,
  SignIn,
  SignUp,
  Cart,
  Wishlist,
} from "pages";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { routes } from "constants";
const RoutesList = () => {
  const {
    HOME_ROUTE,
    PRODUCTS_ROUTE,
    SIGNIN_ROUTE,
    SIGNUP_ROUTE,
    CART_ROUTE,
    WISHLIST_ROUTE,
    MOCKBEE_HOME_ROUTE,
    MOCKMAN_API_TEST_ROUTE,
  } = routes;
  return (
    <Routes>
      <Route path={HOME_ROUTE} element={<Home />} />
      <Route path={PRODUCTS_ROUTE} element={<ProductDisplay />} />
      <Route path={MOCKBEE_HOME_ROUTE} element={<Mockbee />} />
      <Route path={MOCKMAN_API_TEST_ROUTE} element={<MockMan />} />
      <Route path={SIGNIN_ROUTE} element={<SignIn />}></Route>
      <Route path={SIGNUP_ROUTE} element={<SignUp />}></Route>
      <Route
        path={CART_ROUTE}
        element={<ProtectedRoutes specificPart={<Cart />} />}
      ></Route>
      <Route
        path={WISHLIST_ROUTE}
        element={<ProtectedRoutes specificPart={<Wishlist />} />}
      ></Route>
    </Routes>
  );
};
export { RoutesList };
