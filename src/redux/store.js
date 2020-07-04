import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';

import rootReducer from './root-reducer';

import { composeWithDevTools } from "redux-devtools-extension/developmentOnly"

const middlewares = [logger];

export const store = createStore(rootReducer, 
    composeWithDevTools(applyMiddleware(...middlewares)));

//persisted version of store
export const persistor = persistStore(store); //calls our persistStore passing in our store
