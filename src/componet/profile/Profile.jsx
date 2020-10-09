import React from 'react';
import styleCss from './ProfileStyle.module.css';
import profileImg from '../assets/profile/profile.jpg';
import avatarka from "../assets/profile/avatarka.jpg"


const Profile = () => {
  return (
    <div className={styleCss.Profile}>
      <div className={styleCss.app_wraper_content}>
        <div className={styleCss.widthImg}>
          <img src={profileImg} alt="" />
        </div>
        <div>
          <p>ava+dicription</p>
        </div>
        <div>
          <p className="m0">My post</p>
          <textarea name="" id="" cols="30" rows="1"></textarea>
          <div>
            <button>Add post</button>
          </div>
        </div>
        <div className={styleCss.p16}>
          <img src={avatarka} alt="" width="60" height="60" />
          <span>I'am ok nd you</span>
          <div>
            <span>Like</span>
            <span>0</span>
          </div>
        </div>
        <div className={styleCss.p16}>
          <img src={avatarka} alt="" width="60" height="60" />
          <span>How are you</span>
          <div>
            <span>Like</span>
            <span>1</span>
          </div>
        </div>
        <div className={styleCss.p16}>
          <img src={avatarka} alt="" width="60" height="60" />
          <span>Do you happy</span>
          <div>
            <span>Like</span>
            <span>0</span>
          </div>
        </div>
        <div className={styleCss.p16}>
          <img src={avatarka} alt="" width="60" height="60" />
          <span>I'am GOOD.....</span>
          <div>
            <span>Like</span>
            <span>0</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile;