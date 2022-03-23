import Axios from "axios";

const initialState = {
  genre: null,
};
const SET_GENRE = "SET_GENRE";

const setGenre = (genre) => ({
  type: SET_GENRE,
  gender,
});

export const fetchGenre = (type) => async (dispatch) => {
  const { data } = await Axios.get(`/api/genre/${type}`);
  return dispatch(setGenre(data));
};

export default function genderReducer(state = initialState, action) {
  switch (action.type) {
    case SET_GENRE:
      return {
        ...state,
        genre: action.genre,
      };

    default:
      return state;
  }
}
