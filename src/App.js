import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './componet/header/Header';
import Navbar from './componet/navbar/Navbar';
import ProfileContainer from './componet/profile/ProfileContainer';
import DialogsContainer from './componet/dialogs/DialogsContainer';

function App(props) {

  let DialogsRender = () => <DialogsContainer store={props.store} />;
  let ProfileRender = () => <ProfileContainer store={props.store} />

  return (
    <BrowserRouter>
      <div className="App">
        <div className="app-wrapper">
          <Header />
          <Navbar />
          <div className="app_wraper_content">
            <Route path='/' exact render={ProfileRender} />
            <Route path='/profile' render={ProfileRender} />
            <Route path='/dialogs' render={DialogsRender} />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
