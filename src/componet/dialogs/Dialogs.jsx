import React from 'react';
import styleCss from './DialogsStyle.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
  let path = '/dialogs/' + props.id;
  let name = props.name
  return (
    <div>
      <NavLink to={path} className={`textDecorationNone`}>{name}</NavLink>
    </div>
  )
}

const Message = (props) => {
  return (
    <div>
      <span>{props.message}</span>
    </div>
  )
}
const Dialogs = () => {
  return (
    <div className={styleCss.dialogs}>
      <div className={styleCss.dialogItem}>
        <DialogItem id="1" name="name1" />
        <DialogItem id="2" name="name2" />
        <DialogItem id="3" name="name3" />
        <DialogItem id="4" name="name4" />
        <DialogItem id="5" name="name5" />
        <DialogItem id="6" name="name6" />
      </div>


      <div className={styleCss.messages}>
        <Message message="hello"/>
        <Message message="how are you"/>
        <Message message="it is ok"/>
      </div>
    </div>
  )
}

export default Dialogs;