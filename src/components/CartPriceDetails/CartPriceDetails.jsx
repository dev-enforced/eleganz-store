import { useAuthentication } from 'context';
import React from 'react';
import "./CartPriceDetails.css";

const CartPriceDetails = () => {
    const { authState: { cart: cartProvided } } = useAuthentication();
    const priceSum = cartProvided.reduce((totalPrice, everyCartItem) => {
        return ({ ...totalPrice, original: Number(everyCartItem.qty) * (Number(everyCartItem.originalPrice) + totalPrice.original), discount: Number(everyCartItem.qty) *(Number(everyCartItem.discountedPrice) + totalPrice.discount) })
    }, { original: 0, discount: 0 })
    return (
        cartProvided.length === 0 ? "" :
            <div className="cart-items-price-details m-4">
                <p className="my-4 fw-700">
                    PRICE DETAILS
                </p>
                <div className="my-2">
                    <div className="my-4 flex-row flex-space-between">
                        <p>TOTAL PRICE</p>
                        <p>{priceSum.original}</p>
                    </div>
                    <div className="my-4 flex-row flex-space-between">
                        <p>DISCOUNT APPLIED</p>
                        <p>{priceSum.original-priceSum.discount}</p>
                    </div>
                    <div className="my-6 flex-row flex-space-between">
                        <p>AMOUNT TO PAY</p>
                        <p>{priceSum.discount}</p>
                    </div>
                </div>
            </div>
    )
}

export { CartPriceDetails }