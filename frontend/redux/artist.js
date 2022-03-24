import Axios from "axios";

const initialState = {};

const FETCH_ARTISTS = "FETCH_ARTISTS ";

const setArtists = (artists) => ({
  type: FETCH_ARTISTS,
  artists,
});

export const fetchArtists = () => async (dispatch) => {
  const { data } = await Axios.get("/api/artists/");
  console.log(data);
  return dispatch(setArtists(data));
};

export default function artistReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ARTISTS:
      return {
        artists: action.artists,
      };
    default:
      return state;
  }
}
