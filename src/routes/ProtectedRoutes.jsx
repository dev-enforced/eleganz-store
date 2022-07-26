import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuthentication } from "context";

const ProtectedRoutes = ({ specificPart }) => {
  const {
    authState: { signinStatus },
  } = useAuthentication();
  const location = useLocation();
  return (
    <>
      {signinStatus ? (
        specificPart
      ) : (
        <Navigate replace to="/signin" state={{ from: location }} />
      )}
    </>
  );
};
export { ProtectedRoutes };
