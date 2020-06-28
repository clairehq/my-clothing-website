import CartActionTypes from './cart.types';

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

//initial_state is previous state
const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload] //spread in all of exist array values and add  new values and the end
            }
        default:
            return state
    }
}

export default cartReducer;