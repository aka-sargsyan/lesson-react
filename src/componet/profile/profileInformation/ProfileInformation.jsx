import React from 'react';
import styleCss from './ProfileInformationStyle.module.css';
import profileImg from '../../assets/profile/profile.jpg';
import avatarka from '../../assets/profile/avatarka.jpg'
import Preloader from '../../comman/preloader/Preloader';

const ProfileInformation = (props) => {

  let contactsElements = () => {
    let obj = props.user.contacts;
    let arr = [];
    for (let keyObj in obj) {
      arr.push(
        <tr key={keyObj}>
          <td>{keyObj}</td>
          <td>{obj[keyObj] ? obj[keyObj] : "haven't information"}</td>
        </tr>
      )
    }
    return arr;
  }
  return (
    <div className={styleCss.profileInformation}>
      <div className={styleCss.widthImg}>
        <img src={profileImg} alt="" />
      </div>
      {props.user ?
        <div className="mt10 mb10">
          <div className="displayFlex alinItemsEnd">
            <div>
              <img src={props.user.photos.small ? props.user.photos.small : avatarka} alt="" width="60" />
            </div>
            <div className="ml10">
              <span>{props.user.fullName}</span>
            </div>

          </div>
          <div>
            <table className={styleCss.contacts}>
              <tbody>
                {contactsElements()}
              </tbody>
            </table>
          </div>
        </div> :
        <Preloader />
      }
    </div>
  )
}

export default ProfileInformation;