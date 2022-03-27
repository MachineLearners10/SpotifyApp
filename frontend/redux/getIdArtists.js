import axios from "axios";

const initialState = {};

const GET_ID_ARTISTS = "GET_ID_ARTISTS";

const _getIdArtists = (idArtists) => ({
  type: GET_ID_ARTISTS,
  idArtists,
});

export const getIdArtists = () => async (dispatch) => {
  try {
    const { data } = await axios.get("/api/recommendation/idArtists");
    return dispatch(_getIdArtists(data));
  } catch (error) {
    next(error);
  }
};

export default function getIdArtistsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ID_ARTISTS:
      return {
        idArtists: action.idArtists,
      };
    default:
      return state;
  }
}
