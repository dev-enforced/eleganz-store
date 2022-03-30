/* eslint-disable no-unused-vars */
import React, { createContext, useContext, useState, useEffect, useReducer } from "react";
import axios from "axios";
const AuthenticationContext = createContext(null);
const useAuthentication = () => useContext(AuthenticationContext);

const AuthProvider = ({ children }) => {
    const initialAuthState = {
        signinStatus: false,
        authenticationToken: ""
    }

    const authReducer = (authStateProvided, authAction) => {
        const { type, payload } = authAction;
        switch (type) {
            case "SIGN-IN":
                return { ...authStateProvided, ...payload.foundUser, authenticationToken: payload.encodedToken, signinStatus: true }
            case "SIGN-OUT":
                return { ...initialAuthState }
            case "SIGN-UP":
                return { ...authStateProvided, ...payload.createdUser, authenticationToken: payload.encodedToken, signinStatus: true }
        }
    }

    const [authState, authDispatch] = useReducer(authReducer, initialAuthState);
    return (
        <AuthenticationContext.Provider value={{ authState, authDispatch }}>
            {children}
        </AuthenticationContext.Provider>
    )
}

export { useAuthentication, AuthProvider }