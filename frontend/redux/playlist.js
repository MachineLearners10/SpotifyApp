import Axios from "axios";

const initialState = { selected: [], toggle: true, added: false };

const FETCH_SONGS = "FETCH_SONGS";
const FETCH_RECS = "FETCH_RECS";
const FETCH_PLAYLIST = "FETCH_PLAYLIST";
const LIKED_SONGS = "LIKED_SONGS";
const HOVER_SONG = "HOVER_SONG";
const SET_PLAYING = "SET_PLAYING";
const SELECT_SONG = "SELECT_SONG";
const TOGGLE_PLAYLIST = "TOGGLE_PLAYLIST";
const ADD_PLAYLIST = "ADD_PLAYLIST";
const fetchRecs = (recs) => ({ type: FETCH_RECS, recs });

const fetchSongs = (songs) => ({
  type: FETCH_SONGS,
  songs,
});
export const togglePlaylist = (toggle) => ({ type: TOGGLE_PLAYLIST, toggle });
const likedSongs = (likedSongs) => ({
  type: LIKED_SONGS,
  likedSongs,
});
const fetchPlaylist = (playlist) => ({
  type: FETCH_PLAYLIST,
  playlist,
});
const addPlaylist = (added) => ({
  type: ADD_PLAYLIST,
  added,
});
export const selectSong = (queue) => ({ type: SELECT_SONG, queue });
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
// export const dispatchTogglePlaylist = () => (dispatch) => {
//   let playing = false;
//   return dispatch(togglePlaylist(false));
// };
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

export const removeFromSaved = (song, songArr, index) => async (dispatch) => {
  // if (songArr.indexOf(song)) {
  // } go to that index and remove
  let arr = [];
  arr.push(song);
  const remove = Axios.get("/api/songs/unlike", { params: { song: arr } });
  songArr[index] = false;
  return dispatch(likedSongs(songArr));
};

export const addToSaved = (song, songArr, index) => async (dispatch) => {
  let arr = [];
  arr.push(song);
  const like = Axios.get("/api/songs/like", { params: { song: arr } });
  songArr[index] = true;
  return dispatch(likedSongs(songArr));
};

export const dispatchSelectSong = (queue, songId) => (dispatch) => {
  const id = songId.slice(14);
  const queueIdx = queue.indexOf(id);
  if (queueIdx >= 0) {
    queue.splice(queue.indexOf(queueIdx), 1);
    return dispatch(selectSong(queue));
  }
  queue.push(id);
  return dispatch(selectSong(queue));
};
export const dispatchAddPlaylist = (songs, id) => async (dispatch) => {
  const { data } = await Axios.get("/api/songs/createplaylist", {
    params: { userId: id },
  });
  console.log(data);
  if (data) {
    return dispatch(addPlaylist(true));
  } else {
    return false;
  }
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
    case LIKED_SONGS:
      return {
        ...state,
        likedSongs: action.likedSongs,
      };
    case HOVER_SONG:
      return { ...state, hoveredSong: action.hoveredSong };
    case SET_PLAYING:
      return { ...state, playing: action.song };
    case SELECT_SONG: {
      return { ...state, selected: action.queue };
    }
    case TOGGLE_PLAYLIST: {
      return { ...state, toggle: action.toggle };
    }
    case ADD_PLAYLIST: {
      return { ...state, added: action.added };
    }
    default:
      return state;
  }
}
