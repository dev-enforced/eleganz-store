import React from "react";
import { EmptyCart } from "./EmptyCart";
import { FilledCart } from "./FilledCart";
import { useAuthentication } from "context";
import { useDocumentTitle } from "hooks";
import "./Cart.css";

const Cart = () => {
  const {
    authState: { cart },
  } = useAuthentication();
  useDocumentTitle();
  return <>{cart.length === 0 ? <EmptyCart /> : <FilledCart />}</>;
};

export { Cart };
