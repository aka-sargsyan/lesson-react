import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './componet/header/Header';
import Navbar from './componet/navbar/Navbar';
import Profile from './componet/profile/Profile';
import Dialogs from './componet/dialogs/Dialogs';

function App(props) {
  let DialogsRender = () => <Dialogs state={props.state.dialogPage} addMessage={props.addMessage} updateNewMessageText={props.updateNewMessageText}/>;
  let ProfileRender = () => <Profile state={props.state.profilePage} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>

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
