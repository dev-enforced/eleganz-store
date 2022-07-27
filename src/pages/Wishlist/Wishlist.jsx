import React from "react";
import { useAuthentication } from "context";
import { EmptyWishlist } from "./EmptyWishlist";
import { FilledWishlist } from "./FilledWishlist";
import { useDocumentTitle } from "hooks";
const Wishlist = () => {
  const {
    authState: { wishlist: wishlistProvided },
  } = useAuthentication();
  useDocumentTitle();
  return (
    <>
      {wishlistProvided.length === 0 ? <EmptyWishlist /> : <FilledWishlist />}
    </>
  );
};

export { Wishlist };
