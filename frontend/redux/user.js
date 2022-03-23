import Axios from "axios";

const initialState = {
  user: {},
  topTracks: null,
  recommendations: null,
  categories: null,
};

const SET_USER = "SET_USER";
const SET_TOP_TRACKS = "SET_TOP_TRACKS";
const SET_RECOMMENDATIONS = "SET_RECOMMENDATIONS";
const SET_CATEGORIES = "SET_CATEGORIES";

const setUserAction = (user) => ({
  type: SET_USER,
  user,
});
const setTopTracks = (topTracks) => ({
  type: SET_TOP_TRACKS,
  topTracks,
});
const setRecommendations = (recommendations) => ({
  type: SET_RECOMMENDATIONS,
  recommendations,
});
const setCategories = (categories) => ({
  type: SET_CATEGORIES,
  categories,
});

export const fetchUser = () => async (dispatch) => {
  const { data } = await Axios.get("/auth");
  return dispatch(setUserAction(data));
};

export const fetchTopTracks = () => async (dispatch) => {
  const { data } = await Axios.get("/api/spotify/topTracks");
  return dispatch(setTopTracks(data));
};
export const fetchRecommendations = () => async (dispatch) => {
  const { data } = await Axios.get("/api/spotify/recommendations");
  return dispatch(setRecommendations(data));
};
export const fetchCategories = () => async (dispatch) => {
  const { data } = await Axios.get("/api/spotify/categories");
  return dispatch(setCategories(data));
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return {
        user: action.user,
      };
    case SET_TOP_TRACKS:
      return {
        ...state,
        topTracks: action.topTracks,
      };

    case SET_RECOMMENDATIONS:
      return {
        ...state,
        recommendations: action.recommendations,
      };
    case SET_CATEGORIES:
      return {
        ...state,
        categories: action.categories,
      };
    default:
      return state;
  }
}
