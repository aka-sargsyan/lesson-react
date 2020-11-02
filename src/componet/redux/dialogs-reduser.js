import name1 from '../assets/dialog/name1.png';
import name2 from '../assets/dialog/name2.png';
import name3 from '../assets/dialog/name3.png';
import name4 from '../assets/dialog/name4.png';
import name5 from '../assets/dialog/name5.png';
import name6 from '../assets/dialog/name6.png';

const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const ADD_MESSAGE = "ADD-MESSAGE";

let initialState = {
  newMessageText: "",
  dialogs: [
    { id: 1, name: "name1", avatarka: name1 },
    { id: 2, name: "name2", avatarka: name2 },
    { id: 3, name: "name3", avatarka: name3 },
    { id: 4, name: "name4", avatarka: name4 },
    { id: 5, name: "name5", avatarka: name5 },
    { id: 6, name: "name6", avatarka: name6 },
  ],
  messages: [
    { id: 1, userId: 777, message: "hello" },
    { id: 2, userId: 445, message: "how are you" },
    { id: 3, userId: 777, message: "it is ok" },
    { id: 4, userId: 445, message: "Good buy...." },
  ],
}

let updateNewMessageText = (state, text) => {
  return { ...state, newMessageText: text }
}

let addMessage = (state, text) => {
  let stateCopy = { ...state };
  stateCopy.messages = [...state.messages]
  let id = stateCopy.messages.length + 1;
  stateCopy.messages.push({ id, userId: 777, message: text });
  stateCopy.newMessageText = "";
  return stateCopy
}

export let updateNewMessageTextCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, text });
export let addMessageCreator = (text) => ({ type: ADD_MESSAGE, text });

const dialogReduser = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_TEXT:
      return updateNewMessageText(state, action.text);;

    case ADD_MESSAGE:
      return addMessage(state, action.text);;

    default:
      return state;
  }
}

export default dialogReduser;