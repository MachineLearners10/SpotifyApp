const initialState = [];

const GET_RECOMMENDATIONS = "GET_RECOMMENDATIONS ";
const ADD_RECOMMENDATION = "ADD_RECOMMENDATION";

const _getRecommendations = (recommendations) => ({
  type: GET_RECOMMENDATIONS,
  recommendations,
});
const _addRecommendation = (recommendation) => ({
  type: ADD_RECOMMENDATION,
  recommendation,
});

export const getRecommendations = () => {
  return async (dispatch) => {
    try {
      if (window.localStorage.listRecommendations) {
        const recommendations = JSON.parse(
          window.localStorage.getItem("listRecommendations")
        );
        dispatch(_getRecommendations(recommendations));
      } else {
        dispatch(_getRecommendations([]));
      }
    } catch (error) {
      next(error);
    }
  };
};

export const addRecommendation = (recommendation) => {
  return async (dispatch) => {
    // try {
    window.onbeforeunload = function () {
      localStorage.clear();
    };
    const recommendations = JSON.parse(
      window.localStorage.getItem("listRecommendations")
    );
    if (recommendations !== null) {
      recommendations.push(recommendation);
      window.localStorage.setItem(
        "listRecommendations",
        JSON.stringify(recommendations)
      );
      dispatch(_addRecommendation(recommendation));
    } else {
      let listRecommendations = [];
      listRecommendations.push(recommendation);
      window.localStorage.setItem(
        "listRecommendations",
        JSON.stringify(listRecommendations)
      );
      dispatch(_addRecommendation(recommendation));
    }
    // } catch (error) {
    //   next(error);
    // }
  };
};

export default function getRecommendationsReducer(
  state = initialState,
  action
) {
  switch (action.type) {
    case GET_RECOMMENDATIONS:
      return action.recommendations;
    case ADD_RECOMMENDATION:
      return [...state, action.recommendation];
    default:
      return state;
  }
}
