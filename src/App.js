import React from 'react';
import { BrowserRouter,Route } from 'react-router-dom';
import './App.css';
import Header from './componet/header/Header';
import Navbar from './componet/navbar/Navbar';
import Profile from './componet/profile/Profile';
import Dialogs from './componet/dialogs/Dialogs';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="app-wrapper">
          <Header />
          <Navbar />
          <div className="app_wraper_content">
            <Route path='/profile' component={Profile} />
            <Route path='/dialogs' component={Dialogs} />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
