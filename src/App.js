import React from 'react';
import './App.css';
import Header from './componet/header/Header';
import Navbar from './componet/navbar/Navbar';
import Profile from './componet/profile/Profile';

function App() {
  return (
    <div className="App">
      <div className="app-wrapper">
        <Header />
        <Navbar/>
        <Profile/>
      </div>
    </div>
  );
}

export default App;
