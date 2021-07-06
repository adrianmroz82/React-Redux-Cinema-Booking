import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { bookingReducers } from './reducers/bookingReducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(bookingReducers, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
