import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selector';

import { ReactComponent as ShoppingIcon } from '../../asset/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{itemCount}</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
     /* dispatching actions to the reducers using dispatch() */
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

//updating number inside cart icon
const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})

/* 告诉redux这个component需要用到cart.actions里面的action */
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);