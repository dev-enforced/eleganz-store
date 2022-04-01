import axios from "axios";
const quantityUpdate = async (authStateGiven, authDispatchFunction, productDetails, typeGiven) => {
    const { data: {
        cart: cartUpdated
    } } = await axios.post(`/api/user/cart/${productDetails._id}`, {
        action: {
            type: typeGiven
        }
    }, {
        headers: {
            authorization: authStateGiven.authenticationToken
        }
    })
    authDispatchFunction({ type: "ADD-TO-CART", payload: cartUpdated })
}
export { quantityUpdate };