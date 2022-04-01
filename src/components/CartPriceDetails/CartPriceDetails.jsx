/* eslint-disable no-undef */
import { useAuthentication } from 'context';
import React from 'react';
import "./CartPriceDetails.css";

const CartPriceDetails = () => {
    const { authState: { cart: cartProvided } } = useAuthentication();
    const originalPriceSum = cartProvided.reduce((total, everyCartItem) => total += Number(everyCartItem.originalPrice), 0)
    const discountedPriceSum = cartProvided.reduce((total, everyCartItem) => total += Number(everyCartItem.discountedPrice), 0)
    const discountsApplied = originalPriceSum - discountedPriceSum
    return (
        cartProvided.length === 0 ? "" :
            <div className="cart-items-price-details m-4">
                <p className="my-4 fw-700">
                    PRICE DETAILS
                </p>
                <div className="my-2">
                    <div className="my-4 flex-row flex-space-between">
                        <p>TOTAL PRICE</p>
                        <p>{originalPriceSum}</p>
                    </div>
                    <div className="my-4 flex-row flex-space-between">
                        <p>DISCOUNT APPLIED</p>
                        <p>{discountsApplied}</p>
                    </div>
                    <div className="my-6 flex-row flex-space-between">
                        <p>AMOUNT TO PAY</p>
                        <p>{discountedPriceSum}</p>
                    </div>
                </div>
            </div>
    )
}

export { CartPriceDetails }