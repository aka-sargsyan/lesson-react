import React from 'react';
import styleCss from './NavbarStyle.module.css'
import { NavLink } from 'react-router-dom';

const navBarMenu = [
  { id: 1, to: 'profile', name: 'Profile' },
  { id: 2, to: 'dialogs', name: 'Dialogs' },
  { id: 3, to: 'news', name: 'News' },
  { id: 4, to: 'music', name: 'Music' },
  { id: 5, to: 'settings', name: 'Settings' },
  { id: 6, to: 'users', name: 'Users' }
]

const Navbar = () => {
  return (
    <div className={styleCss.Navbar}>
      <div>
        {navBarMenu.map((element) => (
          <div key={element.id}>
            <NavLink to={`/${element.to}`} activeClassName={styleCss.activeClass} className={`${styleCss.visitedClass} textDecorationNone`}>{element.name}</NavLink>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Navbar;

