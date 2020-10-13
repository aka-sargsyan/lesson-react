import React from 'react';
import styleCss from './DialogsStyle.module.css';
import DialogItem from './dialog_item/DialogItem';
import Message from './message/Message';

const Dialogs = (props) => {

  let dialogs = props.dialogs
  let messages = props.messages;

  let dialogsElement = dialogs.map(dialog => <DialogItem id={dialog.id} name={dialog.name} />);
  let messagesElement = messages.map(message => <Message id={message.id} message={message.message} />);

  return (
    <div className={styleCss.dialogs}>
      <div className={styleCss.dialogItem}>
        {dialogsElement}
      </div>
      <div className={styleCss.messages}>
        {messagesElement}
      </div>
    </div>
  )
}

export default Dialogs;