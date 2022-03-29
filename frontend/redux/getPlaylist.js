import axios from "axios";

const initialState = {};

const GET_PLAYLIST = "GET_PLAYLIST";

const _getPlaylist = (playlist) => ({
  type: GET_PLAYLIST,
  playlist,
});

export const getPlaylist = (genresList) => async (dispatch) => {
  try {
    const { data } = await axios.get("/api/recommendation/playlist", {
      params: { genresList }
    });
    console.log("data", data)
    return dispatch(_getPlaylist(data));
  } catch (error) {
    console.log(error)
  }
};

export default function getPlaylistReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PLAYLIST:
      return {
        playlist: action.playlist,
      };
    default:
      return state;
  }
}