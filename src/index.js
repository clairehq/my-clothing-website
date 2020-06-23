import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './redux/store';

ReactDOM.render(
  /* Provider component will take the Redux store that you give it as a property and will put it into React's context API so that it can be available to any component rendered inside the <Provider> that needs access to the store.*/
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

