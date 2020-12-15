import React from 'react';
import styleCss from './HeaderStyle.module.css'
import logo from '../assets/header/logo.png'
import { NavLink } from 'react-router-dom';

const Header = (props) => {

  return (
    <div className={`${styleCss.header} displayFlex justifyContentBetween`}>
      <NavLink to="/profile">
        <img src={logo} alt="" width="70" />
      </NavLink>
      <div>
        {props.isAuthFetching ?
          <div>{props.login}</div> :
          <NavLink to="/login" className="textDecorationNone">login</NavLink>
        }
      </div>
    </div>
  )
}

export default Header;