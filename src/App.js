import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage  from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { setCurrentUser } from './redux/user/user.actions';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    //this setCurrentUser is bound to the store's dispatch() function
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
        if(userAuth) {
          const userRef = await createUserProfileDocument(userAuth);

          //This snapshot represents the data stored in the firebase database and we can get it by call method given below:
          userRef.onSnapshot(snapShot => {
            setCurrentUser({
                id: snapShot.id,
                ...snapShot.data() //using the spread operator to spread all the value that we get
            });
          });
        } else {
          setCurrentUser(userAuth);
        }
    })
  }

  componentWillUnmount() {
    //unsubscribe
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/'/>) : (<SignInAndSignUpPage />)} />
        </Switch>
      </div>
    );
  }
}

// destructure user from state.user
const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

/* triggers state change */
const mapDispatchToProps = dispatch => ({
  /* dispatching actions to the reducers using dispatch() */
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

/* 告诉redux这个component需要用到user actions里面的action */
export default connect(mapStateToProps, mapDispatchToProps)(App);
