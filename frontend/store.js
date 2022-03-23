import { createStore, applyMiddleware, combineReducers } from "redux";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import userReducer from "./redux/user";
import playlistReducer from "./redux/playlist";

const reducer = combineReducers({ user: userReducer, playlist: playlistReducer });

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);

export default createStore(reducer, middleware);
