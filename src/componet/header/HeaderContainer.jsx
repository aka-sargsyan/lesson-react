import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import {setUserData} from '../redux/auth-reduser'
import { authAPI } from '../../api/api';
class HeaderContainer extends React.Component {

  componentDidMount() {

      authAPI.me().then(response => {
        let {id,login,email} = response.data.data
        if(response.data.resultCode === 0){
          this.props.setUserData(id,login,email)
        }

      }
      );
  }

  render() {
    return <Header {...this.props} />
  }
}

let mapStatToProps = (state) => {
  return {
    userId: state.auth.id,
    login: state.auth.login,
    email: state.auth.email,
    isAuthFetching: state.auth.isAuthFetching
  }
}

let dispatchObject = {
  setUserData
}
export default connect(mapStatToProps,dispatchObject)(HeaderContainer);