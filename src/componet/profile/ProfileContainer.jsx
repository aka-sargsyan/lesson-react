import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
// import * as axius from 'axios';
import { setUserProfile } from '../redux/profile-reduser';
import { usersAPI } from '../../api/api';

class ProfileContainer extends React.Component {
  componentDidMount() {
    usersAPI.profileUserId().then(response => {
      this.props.setUserProfile(response.data);
    }
    );
  }

  render() {
    return (
      <Profile {... this.props} />
    )
  }
}

let mapStateToProps = (state) => {
  return {
    user: state.profilePage.user,
  }
}

let dispatchObject = {
  setUserProfile
}

export default connect(mapStateToProps, dispatchObject)(ProfileContainer);