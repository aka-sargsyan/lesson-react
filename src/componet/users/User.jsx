import React from 'react';

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
    <div>
      <div>
        <img src={props.user.photoUrl} alt="" width='40' />
        <span>{props.user.fullName}</span>
      </div>
      <div>
        <span>status   {props.user.status}</span>
      </div>
      <button onClick={addDeleteUser}>{props.user.follow ? "Follow" : "Unfollow"}</button>
    </div>
  )
}

export default User;