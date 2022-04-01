/* eslint-disable no-constant-condition */
import React from 'react';
import { EmptyCart } from './EmptyCart';
import { FilledCart } from './FilledCart';
import { useAuthentication } from 'context';
import "./Cart.css";

const Cart = () => {
  const { authState: { cart } } = useAuthentication()
  return (
    <>
      {
        cart.length === 0 ?
          <EmptyCart />
          : <FilledCart />
      }
    </>
  )
}

export { Cart }