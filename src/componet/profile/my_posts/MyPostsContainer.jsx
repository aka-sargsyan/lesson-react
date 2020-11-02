import MyPosts from './MyPosts';
import { addPostCreator, updateNewPostTextCreator } from '../../redux/profile-reduser';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return { posts: state.profilePage.posts, newPostText: state.profilePage.newPostText }
};

let mapDispatchToProps = (dispatch) => {
  return {
    onAddPost: (text) => dispatch(addPostCreator(text)),
    onPostCheang: (text) => dispatch(updateNewPostTextCreator(text))
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;

