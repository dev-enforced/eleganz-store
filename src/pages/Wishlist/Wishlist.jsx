/* eslint-disable no-constant-condition */
import React from 'react';
import { useAuthentication } from 'context';
import { EmptyWishlist } from './EmptyWishlist';
import { FilledWishlist } from './FilledWishlist';
const Wishlist = () => {
    const { authState: { wishlist: wishlistProvided } } = useAuthentication()
    return (
        <>
            {
                wishlistProvided.length === 0 ?
                    <EmptyWishlist /> :
                    <FilledWishlist />
            }
        </>
    )
}

export { Wishlist };