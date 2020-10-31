import React from 'react';
import Profile from './Profile';


const ProfileContainer = (props) => {

  return (
    <Profile profilePage={props.store.getState().profilePage}
             dispatch={props.store.dispatch.bind(props.store)} />
  )
}

export default ProfileContainer;