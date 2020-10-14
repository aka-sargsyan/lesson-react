import React from 'react';
import styleCss from './DialogItemStyle.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {

  let path = '/dialogs/' + props.id;
  let name = props.name;
  console.log(props.avatarka);

  return (
    <div>
      <img src={props.avatarka} alt="" width="50"/>
      <NavLink to={path} className={`textDecorationNone`}>{name}</NavLink>
    </div>
  )
}

export default DialogItem;