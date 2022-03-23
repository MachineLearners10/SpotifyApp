import Axios from "axios";

const initialState = {};

const FETCH_SONGS = "FETCH_SONGS";
const FETCH_RECS = "FETCH_RECS";

const fetchRecs = (recs) => ({ type: FETCH_RECS, recs });
const fetchSongs = (songs) => ({
  type: FETCH_SONGS,
  songs,
});

export const dispatchFetchRecs = () => async (dispatch) => {
  const { data } = await Axios.get("/api/songs/recs");
  return dispatch(fetchSongs(data));
};
export const dispatchFetchSongs = () => async (dispatch) => {
  const { data } = await Axios.get("/api/songs/");
  return dispatch(fetchSongs(data));
};

export default function songReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_SONGS:
      return {
        ...state,
        songs: action.songs,
      };
    case FETCH_RECS:
      return {
        ...state,
        recs: action.recs,
      };
    default:
      return state;
  }
}
