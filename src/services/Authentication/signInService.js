import axios from 'axios';
const signInActionHandler = (e, signinDataProvided, authDispatch, navigatorHelper) => {
    e.preventDefault();
    (async () => {
        try {
            const { data, status } = await axios.post("/api/auth/login", {
                ...signinDataProvided
            })
            if (status === 200) {
                authDispatch({ type: "SIGN-IN", payload: data });
                localStorage.setItem("authenticationToken", data.encodedToken);
                navigatorHelper("/products")
            }
        } catch {
            console.error("LOGIN NOT POSSIBLE")
        }
    })()
}
export { signInActionHandler };