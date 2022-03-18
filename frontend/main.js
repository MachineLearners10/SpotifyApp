import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import { Provider } from 'react-redux';
import Login from './components/Login';

ReactDOM.render(
  <Provider store={store}>
    <Login />
  </Provider>,
  document.getElementById('main')
);
