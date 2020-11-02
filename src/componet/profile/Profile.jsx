import React from 'react';
import styleCss from './ProfileStyle.module.css';
import ProfileInformation from './profileInformation/ProfileInformation';
import MyPostsContainer from './my_posts/MyPostsContainer';

const Profile = (props) => {

  return (
    <div className={styleCss.Profile}>
      <div className={styleCss.app_wraper_content}>
        <ProfileInformation />
        <MyPostsContainer />
      </div>
    </div>
  )
}

export default Profile;