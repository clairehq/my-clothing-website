import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { ReactComponent as ShoppingIcon } from '../../asset/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden }) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>0</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
     /* dispatching actions to the reducers using dispatch() */
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

/* 告诉redux这个component需要用到cart.actions里面的action */
export default connect(null, mapDispatchToProps)(CartIcon);