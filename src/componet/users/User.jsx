import React from 'react';
import userFoto from '../assets/users/user.png';
import styleCss from './UsersStyle.module.css'

const User = (props) => {
  let addDeleteUser = (element) => {
    let buttonName = element.currentTarget.innerText;
    if (buttonName === "Follow") {
      props.deleteFollow(props.user.id);
    } else if (buttonName === "Unfollow") {
      props.addFollow(props.user.id);
    }
  }
  return (
    <div className={styleCss.width}>
      <div className={"displayFlex"}>
        <div>
          <img src={props.user.photos.smoll ? props.user.photos.smoll : userFoto} alt="" width='40' />
        </div>
        <div className={"ml10 displayFlex alinItemsCenter"}>
          <span >{props.user.name}</span>
        </div>
      </div>
      <div className={"displayFlex justifyContentBetween"}>
        <div className="">
          <span>{props.user.status ? "status" : "don't have stahhhhhhhhhhh hhhhhhhhhhhhhhh hhhhhhhhhtus"}</span>
          {props.user.status ? <span>{props.user.status}</span> : ""}
        </div>
        <div>
          <button onClick={addDeleteUser}>{props.user.follow ? "Follow" : "Unfollow"}</button>
        </div>
      </div>
    </div>
  )
}

export default User;