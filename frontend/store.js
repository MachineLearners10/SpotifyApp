import { createStore, applyMiddleware, combineReducers } from "redux";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import userReducer from "./redux/user";
import playlistReducer from "./redux/playlist";
import getGenresReducer from "./redux/getGenres";
import getIdArtistsReducer from "./redux/getIdArtists";
import getIdSongsReducer from "./redux/getIdSongs";
import getRecommendationsReducer from "./redux/getRecommendations";

const reducer = combineReducers({
  user: userReducer,
  playlist: playlistReducer,
  getIdSongs: getIdSongsReducer,
  getIdArtists: getIdArtistsReducer,
  getGenres: getGenresReducer,
  getRecommendations: getRecommendationsReducer,
});

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);

export default createStore(reducer, middleware);
