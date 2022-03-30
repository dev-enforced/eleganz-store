import { useAuthentication } from "context";
import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ specificPart }) => {
    const { authState: { signinStatus } } = useAuthentication();
    return (
        <>
            {signinStatus ? specificPart : <Navigate replace to="/signin" />}
        </>
    )
}
export { ProtectedRoutes };