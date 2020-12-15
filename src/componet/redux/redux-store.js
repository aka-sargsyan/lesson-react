import { combineReducers, createStore } from "redux";
import authReducer from "./auth-reduser";
import dialogReduser from "./dialogs-reduser";
import profileReducer from "./profile-reduser";
import usersReduser from "./users-reduser";

let redusers = combineReducers({
  profilePage: profileReducer,
  dialogPage: dialogReduser,
  usersPage: usersReduser,
  auth: authReducer
});

let store = createStore(redusers);

export default store;

window.store = store;