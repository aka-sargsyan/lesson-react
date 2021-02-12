import { stopSubmit } from "redux-form";
import { authAPI } from "../../api/api";

const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
  userId: null,
  login: null,
  email: null,
  isAuthFetching: false
};

export let setUserData = (userId, login, email,isAuthFetching) => ({ type: SET_USER_DATA, data: { userId, login, email, isAuthFetching } });


const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return { ...state, ...action.data }
    default:
      return state;
  }
}

export const authCreator = () =>  (dispatch) => {
     return authAPI.me().then(response => {
      let { id, login, email } = response.data.data
      if (response.data.resultCode === 0) {
        dispatch(setUserData(id, login, email, true));
      }
    });
  }



export const loginCreator = (email, possword, rememberMe) => {
  return (dispatch) => {
    authAPI.login(email, possword, rememberMe).then(response => {
      if (response.resultCode === 0) {
        dispatch(authCreator())
      } else {
        dispatch(stopSubmit("login", {_error: response.messages[0]}))
      }
    })
  }
}

export const logoutCreator = () => {
  return (dispatch) =>  {
    authAPI.logout().then(response => {
      if (response.resultCode === 0) {
        dispatch(setUserData(null,null,null,false))
      }
    })
  }
}

export default authReducer
