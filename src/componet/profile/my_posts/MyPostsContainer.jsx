import React from 'react';
import MyPosts from './MyPosts';
import { addPostCreator, updateNewPostTextCreator } from '../../redux/profile-reduser';

const MyPostsContainer = (props) => {

  let onAddPost = (text) => {
    props.dispatch(addPostCreator(text));
  }

  let onPostCheang = (text) => {
    props.dispatch(updateNewPostTextCreator(text))
  }

  return (
    <MyPosts profilePage={props.profilePage} onAddPost={onAddPost} onPostCheang={onPostCheang}/>
  )
}

export default MyPostsContainer;