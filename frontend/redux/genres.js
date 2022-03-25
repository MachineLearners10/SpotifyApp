const initialState = [];

const GET_GENRES = "GET_GENRES";
const ADD_GENRE = "ADD_GENRE";

const _getGenre = (genres) => ({
  type: GET_GENRES,
  genres,
});
const _addGenre = (genre) => ({
  type: ADD_GENRE,
  genre,
});

export const getGenre = () => {
  return async (dispatch) => {
    try {
      if (window.localStorage.listGenres) {
        const genres = JSON.parse(window.localStorage.getItem("listGenres"));
        dispatch(_getGenre(genres));
      } else {
        dispatch(_getGenre([]));
      }
    } catch (error) {
      next(error);
    }
  };
};

export const addGenre = (genre) => {
  return async (dispatch) => {
    try {
      const genres = JSON.parse(window.localStorage.getItem("listGenres"));
      if (genres !== null) {
        genres.push(genre);
        window.localStorage.setItem("listGenres", JSON.stringify(genres));
        dispatch(_addGenre(genre));
      } else {
        let listGenres = [];
        listGenres.push(genre);
        window.localStorage.setItem("listGenres", JSON.stringify(listGenres));
        dispatch(_addGenre(genre));
      }
    } catch (error) {
      next(error);
    }
  };
};

export default function genresReducer(state = initialState, action) {
  switch (action.type) {
    case GET_GENRES:
      return action.genres;
    case ADD_GENRE:
      return [...state, action.genre];
    default:
      return state;
  }
}
