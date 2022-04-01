import axios from "axios";
const addToCart = async (authStateGiven, authDispatchFunction, product) => {
    const { data: { cart: cartUpdated } } = await axios.post("/api/user/cart", { product }, {
        headers: {
            authorization: authStateGiven.authenticationToken
        }
    })
    authDispatchFunction({ type: "ADD-TO-CART", payload: cartUpdated })
}
export { addToCart };