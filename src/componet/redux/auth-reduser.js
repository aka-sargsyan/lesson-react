
const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
  userId: null,
  login: null,
  email: null,
  isAuthFetching: false
};

export let setUserData = (userId, login, email) => ({ type: SET_USER_DATA, data: { userId, login, email } });


const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return { ...state, ...action.data, isAuthFetching: true }
    default:
      return state;
  }
}

export default authReducer
