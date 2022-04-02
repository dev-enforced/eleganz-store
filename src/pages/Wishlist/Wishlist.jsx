/* eslint-disable no-constant-condition */
import React from 'react';
import { EmptyWishlist } from './EmptyWishlist';
import { FilledWishlist } from './FilledWishlist';
const Wishlist = () => {
    return (
        <>
            {
                5 > 3 ?
                    <EmptyWishlist /> :
                    <FilledWishlist />
            }
        </>
    )
}

export { Wishlist };