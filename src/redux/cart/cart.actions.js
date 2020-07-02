import CartActionTypes from './cart.types';

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
    //don't need payload
});

//add item
export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item // the item data we want to add to the array
});

//clear item from cart
export const clearItemFromCart = item => ({
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
})

//remove item
export const removeItem = item => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: item
})