import Axios from "axios";

const initialState = {};

const FETCH_SONGS = "FETCH_SONGS";

const fetchSongs = (songs) => ({
  type: FETCH_SONGS,
  songs,
});

export const dispatchFetchSongs = () => async (dispatch) => {
  const { data } = await Axios.get("/api/songs/");
  console.log(data);
  return dispatch(fetchSongs(data));
};

export default function songReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_SONGS:
      return {
        songs: action.songs,
      };
    default:
      return state;
  }
}
