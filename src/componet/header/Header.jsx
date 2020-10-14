import React from 'react';
import styleCss from './HeaderStyle.module.css'
import logo from '../assets/header/logo.png'
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className={styleCss.header}>
      <NavLink to="/">
      <img src={logo} alt="" width="70"/>    
      </NavLink>
    </div>
  )
}

export default Header;