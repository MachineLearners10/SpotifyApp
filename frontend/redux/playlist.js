import Axios from "axios";

const initialState = {};

const FETCH_SONGS = "FETCH_SONGS";
const FETCH_RECS = "FETCH_RECS";
const FETCH_PLAYLIST = "FETCH_PLAYLIST";
const LIKED_SONGS = "LIKED_SONGS";
const HOVER_SONG = "HOVER_SONG";
const SET_PLAYING = "SET_PLAYING";
const fetchRecs = (recs) => ({ type: FETCH_RECS, recs });

const fetchSongs = (songs) => ({
  type: FETCH_SONGS,
  songs,
});

const likedSongs = (likedSongs) => ({
  type: LIKED_SONGS,
  likedSongs,
});
const fetchPlaylist = (playlist) => ({
  type: FETCH_PLAYLIST,
  playlist,
});

export const setPlaying = (song) => ({
  type: SET_PLAYING,
  song,
});

export const hoverSongs = (hoveredSong) => ({
  type: HOVER_SONG,
  hoveredSong,
});

export const dispatchFetchRecs = () => async (dispatch) => {
  const { data } = await Axios.get("/api/songs/recs");
  return dispatch(fetchRecs(data));
};

export const dispatchFetchSongs = () => async (dispatch) => {
  const { data } = await Axios.get("/api/songs/topTracks");
  return dispatch(fetchSongs(data));
};

export const dispatchLikedSongs = (songs) => async (dispatch) => {
  const { data } = await Axios.get("/api/songs/likedSongs", {
    params: { songs },
  });
  return dispatch(likedSongs(data.body));
};
export const fetchPlaylistThunk = () => async (dispatch) => {
  const { data } = await Axios.get("/api/songs/playlist");
  return dispatch(fetchPlaylist(data));
};

export default function playlistReducer(state = initialState, action) {
  console.log(action);
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
    case LIKED_SONGS:
      return {
        ...state,
        likedSongs: action.likedSongs,
      };
    case HOVER_SONG:
      return { ...state, hoveredSong: action.hoveredSong };
    case SET_PLAYING:
      return { ...state, playing: action.song };
    default:
      return state;
  }
}
