const initialAuthState = {
    signinStatus: false,
    authenticationToken: "",
    cart: [],
    wishlist: []
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
        case "ADD-TO-CART":
            return { ...authStateProvided, cart: payload }
        default:
            return { ...authStateProvided }
    }
}
export { initialAuthState, authReducer }