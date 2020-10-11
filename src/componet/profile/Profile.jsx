import React from 'react';
import styleCss from './ProfileStyle.module.css';
import avatarka from "../assets/profile/avatarka.jpg"
import ProfileInformation from './profileInformation/ProfileInformation';
import MyPosts from './my_posts/MyPosts';


const Profile = () => {
  return (
    <div className={styleCss.Profile}>
      <div className={styleCss.app_wraper_content}>
        <ProfileInformation />
        <MyPosts />
      </div>
    </div>
  )
}

export default Profile;