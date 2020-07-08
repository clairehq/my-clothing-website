import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // local storage object in window

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';

//JSON object that represent the possible configuration for redux persist to use
const persistConfig = {
    key: 'root', //what point inside of our reducer object do we want to start storing everything(root)
    storage: storage,
    whitelist: ['cart'] //array of reducers we want to persist/store
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
});

//persisted rootReducer
export default persistReducer(persistConfig, rootReducer); 