const initialState = [];

const GET_GENRES = "GET_GENRES";
const ADD_GENRE = "ADD_GENRE";

const _getGenres = (genres) => ({
  type: GET_GENRES,
  genres,
});
const _addGenre = (genre) => ({
  type: ADD_GENRE,
  genre,
});

export const getGenres = () => {
  return async (dispatch) => {
    try {
      if (window.localStorage.listGenres) {
        const genres = JSON.parse(window.localStorage.getItem("listGenres"));
        dispatch(_getGenres(genres));
      } else {
        dispatch(_getGenres([]));
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

export default function getGenresReducer(state = initialState, action) {
  switch (action.type) {
    case GET_GENRES:
      console.log("action genre", action.genres)
      return action.genres;
    case ADD_GENRE:
      return [...state, action.genre];
    default:
      return state;
  }
}
