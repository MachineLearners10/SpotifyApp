import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import { Provider } from 'react-redux';
import MainRoutes from './components/MainRoutes';

ReactDOM.render(
  <Provider store={store}>
    <MainRoutes />
  </Provider>,
  document.getElementById('main')
);
