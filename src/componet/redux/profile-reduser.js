import avatarka from '../assets/profile/avatarka.jpg';


const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  NewPostText: "Coins",
  posts: [
    { id: 1, avatarka: avatarka, post: "I'am ak and you", likeCount: 3 },
    { id: 2, avatarka: avatarka, post: "How are you", likeCount: 2 },
    { id: 3, avatarka: avatarka, post: "Do you happy", likeCount: 5 },
    { id: 4, avatarka: avatarka, post: "I'm GOOD...", likeCount: 6 },
  ]
};

let addPost = (state, text) => {
  let id = state.posts.length + 1
  state.posts.push({ id, avatarka, post: text, likeCount: 0 },);
  state.NewPostText = "";
}

let updateNewPostText = (state, text) => {
  state.NewPostText = text;
}

export let addPostCreator = (text) => ({ type: ADD_POST, text });
export let updateNewPostTextCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, text });

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_POST_TEXT:
      updateNewPostText(state, action.text);
      return state
    case ADD_POST:
      addPost(state, action.text);
      return state;
    default:
      return state;
  }
}

export default profileReducer
