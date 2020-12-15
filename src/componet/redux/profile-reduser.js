import avatarka from '../assets/profile/avatarka.jpg';


const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const ADD_USER_PROFILE = "ADD_USER_PROFILE";

let initialState = {
  newPostText: "Coins",
  posts: [
    { id: 1, avatarka: avatarka, post: "I'am ak and you", likeCount: 3 },
    { id: 2, avatarka: avatarka, post: "How are you", likeCount: 2 },
    { id: 3, avatarka: avatarka, post: "Do you happy", likeCount: 5 },
    { id: 4, avatarka: avatarka, post: "I'm GOOD...", likeCount: 6 },
  ],
  user: null,
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

export let onAddPost = (text) => ({ type: ADD_POST, text });
export let onPostCheang = (text) => ({ type: UPDATE_NEW_POST_TEXT, text });
export let setUserProfile = (user) => ({ type: ADD_USER_PROFILE, user });

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_POST_TEXT:
      return updateNewPostText(state, action.text);

    case ADD_POST:
      return addPost(state, action.text);

    case ADD_USER_PROFILE:
      return { ...state, user: action.user }
    default:
      return state;
  }
}

export default profileReducer
