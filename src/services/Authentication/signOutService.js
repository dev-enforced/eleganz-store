const signOutService = (authDispatch, navigatorHelper) => {
    authDispatch({ type: "SIGN-OUT" })
    localStorage.removeItem("authenticationToken");
    navigatorHelper("/");
}
export {signOutService};