import React, { createContext, useContext, useReducer } from "react";
import { authReducer, initialAuthState } from "reducers";
const AuthenticationContext = createContext(null);
const useAuthentication = () => useContext(AuthenticationContext);

const AuthProvider = ({ children }) => {
    const [authState, authDispatch] = useReducer(authReducer, initialAuthState);
    return (
        <AuthenticationContext.Provider value={{ authState, authDispatch }}>
            {children}
        </AuthenticationContext.Provider>
    )
}

export { useAuthentication, AuthProvider }