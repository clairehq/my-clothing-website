import { createSelector } from 'reselect';

//input selector, return a slice of the reducer state
const selectCart = state => state.cart;

//memoized selector
//Reselect provides a function createSelector for creating memoized selectors(备忘selectors)
export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
)

//memoized selector
export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => 
        cartItems.reduce(
            (accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity,0
        )
)