import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selector';

import { CartIconContainer, ShoppingIcon, ItemCount } from './cart-icon.styles';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <CartIconContainer onClick={toggleCartHidden}>
        <ShoppingIcon />
        <ItemCount>{itemCount}</ItemCount>
    </CartIconContainer>
);

const mapDispatchToProps = dispatch => ({
     /* dispatching actions to the reducers using dispatch() */
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

//updating number inside cart icon
const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount //state as argument
})

/* 告诉redux这个component需要用到cart.actions里面的action */
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);