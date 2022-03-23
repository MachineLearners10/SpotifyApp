import { createStore, applyMiddleware, combineReducers } from "redux";
import axios from "axios";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import userReducer from "./redux/user";
import songReducer from "./redux/playlist";
import genderReducer from "./redux/genre";
const reducer = combineReducers({
  user: userReducer,
  songs: songReducer,
  gender: genderReducer,
});
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);

export default createStore(reducer, middleware);
