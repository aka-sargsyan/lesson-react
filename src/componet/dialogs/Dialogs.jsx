import React from 'react';
import styleCss from './DialogsStyle.module.css';
import DialogItem from './dialog_item/DialogItem';
import Message from './message/Message';

const Dialogs = (props) => {

  let dialogs = props.dialogPage.dialogs
  let messages = props.dialogPage.messages;
  let dialogsElement = dialogs.map(dialog => <DialogItem id={dialog.id} name={dialog.name} avatarka={dialog.avatarka} key={dialog.id} />);
  let messagesElement = messages.map(message => <Message id={message.id} message={message.message} userId={message.userId} key={message.id} />);
  let newMessageElement = React.createRef();
  let text = props.dialogPage.newMessageText;
  
  let sendMessage = () => {
    let text = newMessageElement.current.value;
    props.addMessage(text);
  }

  let onMessageCheang = () => {
    let text = newMessageElement.current.value;
    props.updateNewMessageText(text);

  }

  return (
    <div className={styleCss.dialogs}>
      <div className={styleCss.dialogItem}>
        {dialogsElement}
      </div>
      <div className={styleCss.messages}>
        {messagesElement}
        <div className="pt10">
          <textarea ref={newMessageElement} onChange={onMessageCheang} value={text} cols="30" rows="1"></textarea>
          <button onClick={sendMessage}>send message</button>
        </div>
      </div>
    </div>
  )
}

export default Dialogs;