import React from 'react';
import styleCss from './HeaderStyle.module.css'
import logo from '../assets/header/logo.png'

const Header = () => {
  return (
    <div className={styleCss.header}>
      <img src={logo} alt="" width="70"/>    
    </div>
  )
}

export default Header;