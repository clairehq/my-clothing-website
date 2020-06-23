import React from 'react';
import { Link } from 'react-router-dom';

/* connect a given component in a way that allows it access to the store */
import { connect } from 'react-redux'; 

import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../asset/crown.svg';

import './header.styles.scss';

const Header = ({ currentUser }) => (
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
        </div>
    </div>
)

/* selecting the part of the data from the store that the connected component needs */
const mapStateToProps = state => ({
    currentUser: state.user.currentUser //state -> root reducer user -> user reducer currentUser -> payload -> user/userAuth
    /* Each key of the object you return will become a prop that gets passed to the component you're trying to connect which is Header component.  */
});

/* 告诉redux这个header component需要用到user reducer里面的properties */
export default connect(mapStateToProps)(Header);