import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import './App.css';
import Navbar from './componet/navbar/Navbar';
import ProfileContainer from './componet/profile/ProfileContainer';
import DialogsContainer from './componet/dialogs/DialogsContainer';
import UsersContainer from './componet/users/UsersContainer';
import HeaderContainer from './componet/header/HeaderContainer';
import LoginContainer from './componet/login/LoginContainer';
import { authCreator } from './componet/redux/auth-reduser';
import { connect } from 'react-redux';
import { initialaizeApp } from './componet/redux/app-reduser';
import Preloader from './componet/comman/preloader/Preloader';

class App extends React.Component {

  componentDidMount() {

    // this.props.authCreator();
    this.props.initialaizeApp();

  }

  DialogsRender = () => <DialogsContainer />;
  ProfileRender = () => <ProfileContainer />
  UserseRender = () => <UsersContainer />
  LoginRender = () => <LoginContainer />

  render() {
    if(!this.props.initialaized){
      return <Preloader/>
    }
    return (
      <div className="App">
        <div className="app-wrapper">
          <HeaderContainer />
          <Navbar />
          <div className="app_wraper_content">
            <Route path='/profile/:userId?' render={this.ProfileRender} />
            <Route path='/dialogs' render={this.DialogsRender} />
            <Route path='/users' render={this.UserseRender} />
            <Route path='/login' render={this.LoginRender} />
          </div>
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    initialaized: state.app.initialaized
  }  
}

export default connect(mapStateToProps, { initialaizeApp })(App);
