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
export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)

//memoized selector
export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => 
        cartItems.reduce(
            (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,0
        )
);

//memoized selector
export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => 
        cartItems.reduce(
            (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity * cartItem.price,0
        )
)