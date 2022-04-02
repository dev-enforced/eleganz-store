import axios from "axios";
const quantityUpdate = async (authStateGiven, authDispatchFunction, productDetails, typeGiven) => {
    try {
        const {
            data: {
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
    } catch (error) {
        console.error("Error while doing quantity update through API")
    }
}
export { quantityUpdate };