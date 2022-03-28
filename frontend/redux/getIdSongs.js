import axios from "axios";

const initialState = {};

const GET_ID_SONGS = "GET_ID_SONGS";

const _getIdSongs = (idSongs) => ({
  type: GET_ID_SONGS,
  idSongs,
});

export const getIdSongs = () => async (dispatch) => {
  try {
    const { data } = await axios.get("/api/recommendation/idTracks");
    return dispatch(_getIdSongs(data));
  } catch (error) {
    next(error);
  }
};

export default function getIdSongsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ID_SONGS:
      return {
        idSongs: action.idSongs,
      };
    default:
      return state;
  }
}
