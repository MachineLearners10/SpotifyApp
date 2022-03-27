import Axios from 'axios';

const initialState = {
  user: {}
};

const SET_USER = 'SET_USER';

const setUserAction = (user) => ({
  type: SET_USER,
  user,
});

export const fetchUser = () => async (dispatch) => {
  const {data} = await Axios.get('/auth')
  return dispatch(setUserAction(data));
}

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return {
        user: action.user,
      }
    default:
      return state
  }
}
