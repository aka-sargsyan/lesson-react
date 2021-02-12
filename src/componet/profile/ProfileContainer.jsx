import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getProfileThunkCreator, getStatusThunkCreator, updateStatusThunkCreator } from '../redux/profile-reduser';
import { withRouter } from 'react-router-dom';
import { AuthRedirect } from '../../hoc/AuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {


  componentDidMount() {
    // console.log(this.props.userId);
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.userId;
    }
    this.props.getProfileThunkCreator(userId);
    this.props.getStatusThunkCreator(userId);
  }

  render() {
    return (
      <Profile {... this.props} statusText={this.props.statusText} />
    )
  }
}

let mapStateToProps = (state) => {
  return {
    user: state.profilePage.user,
    userId: state.auth.userId,
    isAuthFetching: state.auth.isAuthFetching,
    statusText: state.profilePage.statusText,
  }
}

let dispatchObject = {
  getProfileThunkCreator,
  getStatusThunkCreator,
  updateStatusThunkCreator,
}

export default compose(
  withRouter,
  AuthRedirect,
  connect(mapStateToProps, dispatchObject)
)(ProfileContainer)