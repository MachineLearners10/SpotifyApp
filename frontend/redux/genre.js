import Axios from "axios";

const initialState = [];

const SET_GENRE = "SET_GENRE";

const setGenre = (genre) => ({
  type: SET_GENRE,
  genre,
});

export const createGenre = () => async (dispatch) => {
  const { data } = await Axios.get("/api/mood/genre");
  console.log(data);
  return dispatch(setGenre(data));
};

export default function genreReducer(state = initialState, action) {
  switch (action.type) {
    case SET_GENRE:
      return {
        genre: action.genre,
      };
    default:
      return state;
  }
}
