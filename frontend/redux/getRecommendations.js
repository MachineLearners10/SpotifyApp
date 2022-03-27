const initialState = [];

const GET_RECOMMENDATIONS = "GET_RECOMMENDATIONS ";
const ADD_RECOMMENDATION1 = "ADD_RECOMMENDATION1";
const ADD_RECOMMENDATION2 = "ADD_RECOMMENDATION2";
const ADD_RECOMMENDATION3 = "ADD_RECOMMENDATION3";

const _getRecommendations = (recommendations) => ({
  type: GET_RECOMMENDATIONS,
  recommendations,
});
const _addRecommendation1 = (recommendation) => ({
  type: ADD_RECOMMENDATION1,
  recommendation,
});
const _addRecommendation2 = (recommendation) => ({
  type: ADD_RECOMMENDATION2,
  recommendation,
});
const _addRecommendation3 = (recommendation) => ({
  type: ADD_RECOMMENDATION3,
  recommendation,
});

export const getRecommendations = () => {
  return async (dispatch) => {
    try {
      if (
        window.localStorage.listRecommendations1 ||
        window.localStorage.listRecommendations2 ||
        window.localStorage.listRecommendations3
      ) {
        const recommendations = JSON.parse(
          window.localStorage.getItem(
            "listRecommendations1" ||
              "listRecommendations2" ||
              "listRecommendations3"
          )
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

export const addRecommendation1 = (recommendation) => {
  return async (dispatch) => {
    // try {
    window.onbeforeunload = function () {
      localStorage.clear();
    };
    const recommendations = JSON.parse(
      window.localStorage.getItem("listRecommendations1")
    );
    if (recommendations !== null) {
      recommendations.push(recommendation);
      window.localStorage.setItem(
        "listRecommendations1",
        JSON.stringify(recommendations)
      );
      dispatch(_addRecommendation1(recommendation));
    } else {
      let listRecommendations1 = [];
      listRecommendations1.push(recommendation);
      window.localStorage.setItem(
        "listRecommendations1",
        JSON.stringify(listRecommendations1)
      );
      dispatch(_addRecommendation1(recommendation));
    }
    // } catch (error) {
    //   next(error);
    // }
  };
};
export const addRecommendation2 = (recommendation) => {
  return async (dispatch) => {
    // try {
    window.onbeforeunload = function () {
      localStorage.clear();
    };

    const recommendations = JSON.parse(
      window.localStorage.getItem("listRecommendations2")
    );
    if (recommendations !== null) {
      recommendations.push(recommendation);
      window.localStorage.setItem(
        "listRecommendations2",
        JSON.stringify(recommendations)
      );
      dispatch(_addRecommendation2(recommendation));
    } else {
      let listRecommendations2 = [];
      listRecommendations2.push(recommendation);
      window.localStorage.setItem(
        "listRecommendations2",
        JSON.stringify(listRecommendations2)
      );
      dispatch(_addRecommendation2(recommendation));
    }
    // } catch (error) {
    //   next(error);
    // }
  };
};
export const addRecommendation3 = (recommendation) => {
  return async (dispatch) => {
    // try {
    window.onbeforeunload = function () {
      localStorage.clear();
    };
    const recommendations = JSON.parse(
      window.localStorage.getItem("listRecommendations3")
    );
    if (recommendations !== null) {
      recommendations.push(recommendation);
      window.localStorage.setItem(
        "listRecommendations3",
        JSON.stringify(recommendations)
      );
      dispatch(_addRecommendation3(recommendation));
    } else {
      let listRecommendations3 = [];
      listRecommendations3.push(recommendation);
      window.localStorage.setItem(
        "listRecommendations3",
        JSON.stringify(listRecommendations3)
      );
      dispatch(_addRecommendation3(recommendation));
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
    case ADD_RECOMMENDATION1:
      return [...state, action.recommendation];
    case ADD_RECOMMENDATION2:
      return [...state, action.recommendation];
    case ADD_RECOMMENDATION3:
      return [...state, action.recommendation];
    default:
      return state;
  }
}
