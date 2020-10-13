import React from 'react';
import styleCss from './MessageStyle.module.css';

const Message = (props) => {
  return (
    <div>
      <span>{props.message}</span>
    </div>
  )
}

export default Message;