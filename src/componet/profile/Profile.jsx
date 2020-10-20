import React from 'react';
import styleCss from './ProfileStyle.module.css';
import ProfileInformation from './profileInformation/ProfileInformation';
import MyPosts from './my_posts/MyPosts';

const Profile = (props) => {

  return (
    <div className={styleCss.Profile}>
      <div className={styleCss.app_wraper_content}>
        <ProfileInformation />
        <MyPosts posts={props.profilePage} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>
      </div>
    </div>
  )
}

export default Profile;