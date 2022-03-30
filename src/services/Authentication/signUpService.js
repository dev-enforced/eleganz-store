import axios from 'axios';
const signupHandler = (e, signupData, authDispatch, navigatorHelper) => {
    e.preventDefault();
    (async () => {
        try {
            const { data, status } = await axios.post("/api/auth/signup", {
                ...signupData
            })
            if (status === 201) {
                authDispatch({ type: "SIGN-UP", payload: data })
                localStorage.setItem("authenticationToken", data.encodedToken);
                navigatorHelper("/products")
            }
        } catch {
            console.error("SIGN UP NOT POSSIBLE");
        }
    })()
}
export { signupHandler }