import React from "react";
import { Route, Routes } from "react-router-dom";
import { Mockbee, MockMan, Home, ProductDisplay, SignIn, SignUp, Cart, Wishlist } from "pages";
import { ProtectedRoutes } from "./ProtectedRoutes";

const RoutesList = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductDisplay />} />
            <Route path="/mockbee" element={<Mockbee />} />
            <Route path="/mockman" element={<MockMan />} />
            <Route path="/signin" element={<SignIn />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/cart" element={<ProtectedRoutes specificPart={<Cart />}></ProtectedRoutes>}></Route>
            <Route path="/wishlist" element={<ProtectedRoutes specificPart={<Wishlist />}></ProtectedRoutes>}></Route>
        </Routes>
    )
}
export { RoutesList }