import { applyMiddleware, combineReducers, createStore } from "redux";
import authReducer from "./auth-reduser";
import dialogReduser from "./dialogs-reduser";
import profileReducer from "./profile-reduser";
import usersReduser from "./users-reduser";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form';
import appReducer from "./app-reduser";

let redusers = combineReducers({
  profilePage: profileReducer,
  dialogPage: dialogReduser,
  usersPage: usersReduser,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
});

let store = createStore(redusers,applyMiddleware(thunkMiddleware));

export default store;

window.store = store;