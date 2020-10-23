import avatarka from '../assets/profile/avatarka.jpg';
import name1 from '../assets/dialog/name1.png';
import name2 from '../assets/dialog/name2.png';
import name3 from '../assets/dialog/name3.png';
import name4 from '../assets/dialog/name4.png';
import name5 from '../assets/dialog/name5.png';
import name6 from '../assets/dialog/name6.png';

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const ADD_MESSAGE = "ADD-MESSAGE";

let store = {
  _callSubcriber() {
    console.log("update state");
  },
  _state: {
    dialogPage: {
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
    },
    profilePage: {
      NewPostText: "Coins",
      posts: [
        { id: 1, avatarka: avatarka, post: "I'am ak and you", likeCount: 3 },
        { id: 2, avatarka: avatarka, post: "How are you", likeCount: 2 },
        { id: 3, avatarka: avatarka, post: "Do you happy", likeCount: 5 },
        { id: 4, avatarka: avatarka, post: "I'm GOOD...", likeCount: 6 },
      ]
    },
  },

  getState() {
    return this._state;
  },

  subcribe(observer) {
    this._callSubcriber = observer;
  },

  _addPost(text) {

    let id = this._state.profilePage.posts.length + 1
    this._state.profilePage.posts.push({ id, avatarka, post: text, likeCount: 0 },);
    this._state.profilePage.NewPostText = "";
    this._callSubcriber(this._state);
  },

  _updateNewPostText(text) {
    this._state.profilePage.NewPostText = text;
    this._callSubcriber(this._state);
  },

  _updateNewMessageText(text) {
    this._state.dialogPage.newMessageText = text;
    this._callSubcriber(this._state);
  },

  _addMessage(text) {
    let id = this._state.dialogPage.messages.length + 1
    this._state.dialogPage.messages.push({ id, userId: 777, message: text },);
    this._state.dialogPage.newMessageText = "";
    this._callSubcriber(this._state);
  },

  dispatch(action) {

    switch (action.type) {
      case UPDATE_NEW_POST_TEXT:
        this._updateNewPostText(action.text);
        break;
      case ADD_POST:
        this._addPost(action.text);
        break;
      case UPDATE_NEW_MESSAGE_TEXT:
        this._updateNewMessageText(action.text);
        break;
      case ADD_MESSAGE:
        this._addMessage(action.text);
        break;
      default:
        console.warn('ther are not action');
    }
  }

}

export let addPostCreator = (text) => ({ type: ADD_POST, text });
export let updateNewPostTextCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, text });
export let updateNewMessageTextCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, text });
export let addMessageCreator = (text) => ({ type: ADD_MESSAGE, text });

window.store = store;

export default store;

