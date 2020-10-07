import React from 'react';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import './App.css';
import Header from './componet/header/Header';
import Navbar from './componet/navbar/Navbar';
import Profile from './componet/profile/Profile';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="app-wrapper">
          <Header />
          <Navbar />
          <div>
            <Route path='/profile' component={Profile} />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
