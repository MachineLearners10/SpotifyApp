import Axios from "axios";

const initialState = {};

const FETCH_SONGS = "FETCH_SONGS";
const FETCH_RECS = "FETCH_RECS";
const FETCH_PLAYLIST = "FETCH_PLAYLIST";

const fetchRecs = (recs) => ({ type: FETCH_RECS, recs });

const fetchSongs = (songs) => ({
  type: FETCH_SONGS,
  songs,
});

const fetchPlaylist = (playlist) => ({
  type: FETCH_PLAYLIST,
  playlist,
});

export const dispatchFetchRecs = () => async (dispatch) => {
  const { data } = await Axios.get("/api/songs/recs");
  return dispatch(fetchRecs(data));
};

export const dispatchFetchSongs = () => async (dispatch) => {
  const { data } = await Axios.get("/api/songs/topTracks");
  if (!data) {
    const items = JSON.parse(window.localStorage.getItem("playlist"));
    return dispatch(fetchSongs(items));
  } else {
    window.localStorage.setItem("playlist", JSON.stringify(data));
    const items = JSON.parse(window.localStorage.getItem("playlist"));
    return dispatch(fetchSongs(items));
  }
};
export const dispatchLikedSongs = (songs) => async (dispatch) => {
  const { data } = await Axios.get("/api/songs/likedSongs", {
    params: { songs },
  });
  console.log(data);
  // return dispatch(likedSongs(data));
};
export const fetchPlaylistThunk = () => async (dispatch) => {
  const { data } = await Axios.get("/api/songs/playlist");
  return dispatch(fetchPlaylist(data));
};

export default function playlistReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_SONGS:
      return { ...state, songs: action.songs };
    case FETCH_PLAYLIST:
      return {
        ...state,
        playlist: action.playlist,
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
