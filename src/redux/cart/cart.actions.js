import CartActionTypes from './cart.types';

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
    //don't need payload
});

//new action
export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item // the item data we want to add to the array
})