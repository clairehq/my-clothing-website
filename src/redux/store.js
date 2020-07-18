import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';

import rootReducer from './root-reducer';

import { composeWithDevTools } from "redux-devtools-extension/developmentOnly"

const middlewares = [];

//if the node envirnment is development, then push the logger into the array
if(process.env.NODE_ENV === 'development') {
    middlewares.push(logger); 
}

export const store = createStore(rootReducer, 
    composeWithDevTools(applyMiddleware(...middlewares)));

//persisted version of store
export const persistor = persistStore(store); //calls our persistStore passing in our store
