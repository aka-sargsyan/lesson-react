import { combineReducers, createStore } from "redux";
import dialogReduser from "./dialogs-reduser";
import profileReducer from "./profile-reduser";
import usersReduser from "./users-reduser";

let redusers = combineReducers({
  profilePage: profileReducer,
  dialogPage: dialogReduser,
  usersPage: usersReduser
});

let store = createStore(redusers);

export default store;

window.store = store;