import React from 'react';
import styleCss from './DialogsStyle.module.css';
import DialogItem from './dialog_item/DialogItem';
import Message from './message/Message';

const Dialogs = (props) => {
  
  let dialogs = props.dialogsPage.dialogs
  let messages = props.dialogsPage.messages;
  let dialogsElement = dialogs.map(dialog => <DialogItem id={dialog.id} name={dialog.name} avatarka={dialog.avatarka} key={dialog.id} />);
  let messagesElement = messages.map(message => <Message id={message.id} message={message.message} userId={message.userId} key={message.id} />);
  let text = props.dialogsPage.newMessageText;

  let sendMessage = () => {
    props.onSendMessage(text)
  }

  let messageCheang = (element) => {
    let text = element.currentTarget.value;
    props.onMessageCheang(text)
  }

  return (
    <div className={styleCss.dialogs}>
      <div className={styleCss.dialogItem}>
        {dialogsElement}
      </div>
      <div className={styleCss.messages}>
        {messagesElement}
        <div className="pt10">
          <textarea  placeholder="enter youre message" onChange={messageCheang} value={text} cols="30" rows="1"></textarea>
          <button onClick={sendMessage}>send message</button>
        </div>
      </div>
    </div>
  )
}

export default Dialogs;