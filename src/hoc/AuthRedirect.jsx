import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";


let mapStateToProps = (state) => {
  return {
    isAuthFetching: state.auth.isAuthFetching
  }
}

export const AuthRedirect = (Component) => {

  class RedirectComponent extends React.Component {
    render() {
      if (!this.props.isAuthFetching) {
        return <Redirect to="/login" />
      }
      return <Component {... this.props}/>
    }
  }


  return connect(mapStateToProps,{})(RedirectComponent);
}

// export default AuthRedirect;