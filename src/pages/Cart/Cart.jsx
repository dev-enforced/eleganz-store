/* eslint-disable no-constant-condition */
import React from 'react';
import { EmptyCart } from './EmptyCart';
import "./Cart.css";
import { FilledCart } from './FilledCart';
const Cart = () => {
  return (
    5 > 3 ?
      <EmptyCart />
      : <FilledCart />
  )
}

export { Cart }