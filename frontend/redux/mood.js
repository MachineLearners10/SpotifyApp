const initialState = [];

const GET_MOOD = "GET_MOOD";
const ADD_MOOD = "ADD_MOOD";

const _getMood = (mood) => ({
  type: GET_MOOD,
  mood,
});
const _addMood = (mood) => ({
  type: ADD_MOOD,
  mood,
});

export const getMood = () => {
  return async (dispatch) => {
    try {
      if (window.localStorage.moodType) {
        const mood = JSON.parse(window.localStorage.getItem("moodType"));
        dispatch(_getMood(mood));
      } else {
        dispatch(_getMood([]));
      }
    } catch (error) {
      next(error);
    }
  };
};

export const addMood = (mood) => {
  return async (dispatch) => {
    try {
      const moodToday = JSON.parse(window.localStorage.getItem("moodType"));
      if (moodToday !== null) {
        moodToday.push(mood);
        window.localStorage.setItem("moodType", JSON.stringify(moodToday));
        dispatch(_addMood(mood));
      } else {
        let moodType = [];
        moodType.push(mood);
        window.localStorage.setItem("moodType", JSON.stringify(moodType));
        dispatch(_addMood(mood));
      }
    } catch (error) {
      next(error);
    }
  };
};

export default function moodReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MOOD:
      return action.mood;
    case ADD_MOOD:
      return [...state, action.mood];
    default:
      return state;
  }
}
