import React from 'react';
import { connect } from 'react-redux';
import { loginCreator } from '../redux/auth-reduser';
import Login from './Login';



class LoginContainer extends React.Component {

  render () {
    return (
    <div>
      <Login isAuthFetching={this.props.isAuthFetching} loginCreator={this.props.loginCreator}/>
    </div>)
  }
}

let mapStateToProps = (state) => {
  return {
    isAuthFetching: state.auth.isAuthFetching
  }
}

export default connect(mapStateToProps,{loginCreator})(LoginContainer);