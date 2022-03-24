import Axios from "axios";

const initialState = null;

const SET_MOOD = "SET_MOOD";

const setMood = (mood) => ({
  type: SET_MOOD,
  mood,
});

export const createMood = () => async (dispatch) => {
  const { data } = await Axios.get("/api/mood/");
  console.log(data);
  return dispatch(setMood(data));
};

export default function moodReducer(state = initialState, action) {
  switch (action.type) {
    case SET_MOOD:
      return {
        mood: action.mood,
      };
    default:
      return state;
  }
}
