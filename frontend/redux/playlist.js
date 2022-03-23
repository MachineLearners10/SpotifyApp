import Axios from "axios";

const initialState = {};

const FETCH_PLAYLIST = "FETCH_PLAYLIST";

const fetchPlaylist = (playlist) => ({
  type: FETCH_PLAYLIST,
  playlist,
});

export const fetchPlaylistThunk = () => async (dispatch) => {
  const { data } = await Axios.get("/api/songs/playlist");
  return dispatch(fetchPlaylist(data));
};

export default function playlistReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PLAYLIST:
      return {
        playlist: action.playlist,
      };
    default:
      return state;
  }
}
