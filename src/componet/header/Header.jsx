import React from 'react';
import styleCss from './HeaderStyle.module.css'
import logo from '../assets/header/logo.png'
import { NavLink } from 'react-router-dom';
import logoutPNG from '../assets/header/logout.png'

const Header = (props) => {

  let logoutPage = () => props.logoutCreator();
  return (
    <div className={`${styleCss.header} displayFlex justifyContentBetween`}>
      <NavLink to="/profile">
        <img src={logo} alt="" width="70" />
      </NavLink>
      <div>
        {props.isAuthFetching ?
          <div className="displayFlex alinItemsCenter">
            <div>{props.login}</div>
            <div className={`${styleCss.withImg} ml10`}>
              <img onClick={logoutPage} src={logoutPNG} alt="" />
            </div>
            {/* <button onClick={logoutPage}>Logout</button> */}
          </div> :
          <NavLink to="/login" className="textDecorationNone">login</NavLink>
        }

      </div>
    </div>
  )
}

export default Header;