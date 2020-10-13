import React from 'react';
import styleCss from './DialogItemStyle.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {

  let path = '/dialogs/' + props.id;
  let name = props.name;

  return (
    <div>
      <NavLink to={path} className={`textDecorationNone`}>{name}</NavLink>
    </div>
  )
}

export default DialogItem;