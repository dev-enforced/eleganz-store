import React from 'react'
import "./CartPriceDetails.css";

const CartPriceDetails = () => {
    return (
        <div className="cart-items-price-details m-4">
            <p className="my-4 fw-700">
                PRICE DETAILS
            </p>
            <div className="my-2">
                <div className="my-4 flex-row flex-space-between">
                    <p>TOTAL PRICE</p>
                    <p>1400</p>
                </div>
                <div className="my-4 flex-row flex-space-between">
                    <p>DISCOUNT APPLIED</p>
                    <p>200</p>
                </div>
                <div className="my-6 flex-row flex-space-between">
                    <p>AMOUNT TO PAY</p>
                    <p>1200</p>
                </div>
            </div>
        </div>
    )
}

export { CartPriceDetails }