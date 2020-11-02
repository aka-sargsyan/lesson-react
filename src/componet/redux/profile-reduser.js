import avatarka from '../assets/profile/avatarka.jpg';


const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  newPostText: "Coins",
  posts: [
    { id: 1, avatarka: avatarka, post: "I'am ak and you", likeCount: 3 },
    { id: 2, avatarka: avatarka, post: "How are you", likeCount: 2 },
    { id: 3, avatarka: avatarka, post: "Do you happy", likeCount: 5 },
    { id: 4, avatarka: avatarka, post: "I'm GOOD...", likeCount: 6 },
  ]
};

let addPost = (state, text) => {
  let stateCopy = { ...state };
  stateCopy.posts = [...state.posts];
  let id = stateCopy.posts.length + 1
  stateCopy.posts.push({ id, avatarka, post: text, likeCount: 0 });
  stateCopy.newPostText = "";
  return stateCopy
}

let updateNewPostText = (state, text) => {

  return { ...state, newPostText: text }
}

export let addPostCreator = (text) => ({ type: ADD_POST, text });
export let updateNewPostTextCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, text });

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_POST_TEXT:
      return updateNewPostText(state, action.text);

    case ADD_POST: 
     return addPost(state, action.text);

    default:
      return state;
  }
}

export default profileReducer
