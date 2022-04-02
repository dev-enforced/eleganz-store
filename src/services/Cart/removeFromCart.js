import axios from "axios";

const removeProductFromCart = async (authStateProvided, authDispatchFunction, productDetails) => {
    try {
        const { data: {
            cart: cartUpdated
        } } = await axios.delete(`/api/user/cart/${productDetails._id}`,
            {
                headers: {
                    authorization: authStateProvided.authenticationToken
                }
            })
        authDispatchFunction({ type: "ADD-TO-CART", payload: cartUpdated })
    } catch (error) {
        console.error("CART UPDATE FAILED WHEN TRYING TO REMOVE ITEM")
    }
}
export { removeProductFromCart };