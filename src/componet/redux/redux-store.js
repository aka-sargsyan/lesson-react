import { combineReducers, createStore } from "redux";
import dialogReduser from "./dialogs-reduser";
import profileReducer from "./profile-reduser";

let redusers = combineReducers({
  profilePage: profileReducer,
  dialogPage: dialogReduser
});

let store = createStore(redusers);

export default store;

window.store = store;