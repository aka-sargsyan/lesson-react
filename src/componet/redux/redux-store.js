import { applyMiddleware, combineReducers, createStore } from "redux";
import authReducer from "./auth-reduser";
import dialogReduser from "./dialogs-reduser";
import profileReducer from "./profile-reduser";
import usersReduser from "./users-reduser";
import thunkMiddleware from "redux-thunk"

let redusers = combineReducers({
  profilePage: profileReducer,
  dialogPage: dialogReduser,
  usersPage: usersReduser,
  auth: authReducer
});

let store = createStore(redusers,applyMiddleware(thunkMiddleware));

export default store;

window.store = store;