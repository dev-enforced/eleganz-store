import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthentication } from "context";

const ProtectedRoutes = ({ specificPart }) => {
  const {
    authState: { signinStatus },
  } = useAuthentication();
  return <>{signinStatus ? specificPart : <Navigate replace to="/signin" />}</>;
};
export { ProtectedRoutes };
