import axios from "axios";

const removeProductFromCart = async (authStateProvided, authDispatchFunction, productDetails) => {
    const { data: { cart: cartUpdated } } = await axios.delete(`/api/user/cart/${productDetails._id}`,
        {
            headers: {
                authorization: authStateProvided.authenticationToken
            }
        })
    authDispatchFunction({ type: "ADD-TO-CART", payload: cartUpdated })
}
export {removeProductFromCart};