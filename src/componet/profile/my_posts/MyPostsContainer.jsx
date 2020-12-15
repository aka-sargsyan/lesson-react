import MyPosts from './MyPosts';
import { onAddPost, onPostCheang } from '../../redux/profile-reduser';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return { posts: state.profilePage.posts, newPostText: state.profilePage.newPostText }
};

// let mapDispatchToProps = (dispatch) => {
//   return {
//     onAddPost: (text) => dispatch(addPostCreator(text)),
//     onPostCheang: (text) => dispatch(updateNewPostTextCreator(text))
//   }
// }

let dispatchObject = {
  onAddPost,
  onPostCheang
}

const MyPostsContainer = connect(mapStateToProps, dispatchObject)(MyPosts)

export default MyPostsContainer;

