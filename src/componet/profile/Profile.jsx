import React from 'react';
import styleCss from './ProfileStyle.module.css';
import ProfileInformation from './profileInformation/ProfileInformation';
import MyPostsContainer from './my_posts/MyPostsContainer';
import Status from './status/Status';

const Profile = (props) => {
  return (
    <div className={styleCss.Profile}>
      <div className={styleCss.app_wraper_content}>
        <ProfileInformation user={props.user}/>
        <Status statusText={props.statusText} updateStatus={props.updateStatusThunkCreator} userId={props.userId} user={props.user}/>
        <MyPostsContainer />
      </div>
    </div>
  )
}

export default Profile;