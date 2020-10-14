import React from 'react';
import styleCss from './MessageStyle.module.css';

const Message = (props) => {
  return (
    <div className={props.userId == 777 ? styleCss.textAlignRight : styleCss.textAlignLeft}>
      <span >{props.message}</span>
    </div>
  )
}

export default Message;