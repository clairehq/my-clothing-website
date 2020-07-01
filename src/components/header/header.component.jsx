import React from 'react';
import { Link } from 'react-router-dom';

/* connect a given component in a way that allows it access to the store */
import { connect } from 'react-redux'; 
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart.dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selector';
import { selectCurrentUser } from '../../redux/user/user.selector';


import { ReactComponent as Logo } from '../../asset/crown.svg';

import './header.styles.scss';

const Header = ({ currentUser, hidden }) => (
    <div className='header'>
        <Link className='logo-container' to="/">
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/shop'>
                CONTACT
            </Link>
            {
                currentUser ?
                <div className='option' onClick={()=> auth.signOut()}>
                    SIGN OUT
                 </div>
                :
                <Link className='option' to='/signin'>
                    SIGN IN
                </Link>
            }
            <CartIcon /> 
        </div>
        {
            hidden ? null 
            : <CartDropdown /> // if hidden is true, render nothing, if is false, render CartDropdown component
        }
    </div>
)
/*
// selecting the part of the data from the store that the connected component needs
const mapStateToProps = ({user: { currentUser }, cart: { hidden }}) => ({
    currentUser, //state -> root reducer user -> user reducer currentUser -> payload -> user/userAuth
    hidden
    //Each key of the object you return will become a prop that gets passed to the component you're trying to connect which is Header component.
});
*/

// createStructuredSelector will automatically pass top level state that get as mapStateToProps's prop into each selector
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

/* 告诉redux这个header component需要用到user reducer里面的properties */
export default connect(mapStateToProps)(Header);