import React from 'react';
import { NavLink } from 'react-router-dom';
import userFoto from '../assets/users/user.png';
import styleCss from './UsersStyle.module.css'
// import { usersAPI } from '../../api/api';
const User = (props) => {

  let addDeleteUser = (element) => {
    let buttonName = element.currentTarget.innerText;
    // if (buttonName === "Follow") {
    props.followThunkCreator(buttonName, props.user.id)
    // props.setClickedButton(true, props.user.id);
    // usersAPI.unfollow(props.user.id).then(response => {
    //   if (response.resultCode === 0) {
    //     props.setClickedButton(false, null);
    //     props.deleteFollow(props.user.id);
    //   }
    // });

    // } else if (buttonName === "Unfollow") {
    //   props.setClickedButton(true, props.user.id);
    //   usersAPI.follow(props.user.id).then(response => {
    //     if (response.resultCode === 0) {
    //       props.setClickedButton(false, null);
    //       props.addFollow(props.user.id);

    //     }
    //   }
    //   );
    // }
  }


  return (
    <div className={styleCss.width}>
      <div className={"displayFlex"}>
        <NavLink to={`/profile/${props.user.id}`} className='textDecorationNone' >
          <div>
            <img src={props.user.photos.smoll ? props.user.photos.smoll : userFoto} alt="" width='40' />
          </div>
          <div className={"ml10 displayFlex alinItemsCenter"}>
            <span >{props.user.name}</span>
          </div>
        </NavLink>
      </div>
      <div className={"displayFlex justifyContentBetween"}>
        <div className="">
          <span>{props.user.status ? "status" : "don't have state"}</span>
          {props.user.status ? <span>{props.user.status}</span> : ""}
        </div>
        {props.isAuthFetching ?
          <div>
            <button onClick={addDeleteUser} disabled={props.user.id === props.clickUserId ? true : false}>{props.user.followed ? "Follow" : "Unfollow"}</button>
          </div>
        :""}

      </div>
    </div>
  )
}

export default User;