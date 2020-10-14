import React from 'react';
import styleCss from './DialogsStyle.module.css';
import DialogItem from './dialog_item/DialogItem';
import Message from './message/Message';

const Dialogs = (props) => {

  let dialogs = props.state.dialogs
  let messages = props.state.messages;
  let dialogsElement = dialogs.map(dialog => <DialogItem id={dialog.id} name={dialog.name} avatarka={dialog.avatarka}/>);
  let messagesElement = messages.map(message => <Message id={message.id} message={message.message} userId={message.userId}/>);

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