import React from 'react';
import styleCss from './ProfileInformationStyle.module.css';
import profileImg from '../../assets/profile/profile.jpg';

const ProfileInformation = () => {
  return (
    <div className={styleCss.profileInformation}>
      <div className={styleCss.widthImg}>
        <img src={profileImg} alt="" />
      </div>
      <div>
        <p>ava+dicription</p>
      </div>
    </div>
  )
}

export default ProfileInformation;