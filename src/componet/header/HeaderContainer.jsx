import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { logoutCreator } from '../redux/auth-reduser';

class HeaderContainer extends React.Component {


  render() {
    console.log(this.props)
    return <Header {...this.props} />
  }
}

let mapStateToProps = (state) => {
  return {
    userId: state.auth.id,
    login: state.auth.login,
    email: state.auth.email,
    isAuthFetching: state.auth.isAuthFetching
  }
}

let dispatchObject = {
  logoutCreator
}
export default connect(mapStateToProps, dispatchObject)(HeaderContainer);