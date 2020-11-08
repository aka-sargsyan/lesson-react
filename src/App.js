import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Header from './componet/header/Header';
import Navbar from './componet/navbar/Navbar';
import ProfileContainer from './componet/profile/ProfileContainer';
import DialogsContainer from './componet/dialogs/DialogsContainer';
import UsersContainer from './componet/users/UsersContainer';

function App(props) {

  let DialogsRender = () => <DialogsContainer  />;
  let ProfileRender = () => <ProfileContainer />
  let UserseRender = () => <UsersContainer />

  return (
    <div className="App">
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app_wraper_content">
          <Route path='/' exact render={ProfileRender} />
          <Route path='/profile' render={ProfileRender} />
          <Route path='/dialogs' render={DialogsRender} />
          <Route path='/users' render={UserseRender} />
        </div>
      </div>
    </div>
  );
}

export default App;
