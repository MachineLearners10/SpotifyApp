import { createStore, applyMiddleware } from 'redux';
import axios from 'axios';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';


let middleware = [thunkMiddleware.withExtraArgument({ axios }), createLogger({ collapsed: true })];

export default createStore(
  composeWithDevTools(
    applyMiddleware(...middleware)
  )
);
