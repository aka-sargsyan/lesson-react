import React from 'react';
import { Redirect } from 'react-router-dom';
import { Field, Form, reduxForm, reset } from 'redux-form';
import styleCss from './DialogsStyle.module.css';
import DialogItem from './dialog_item/DialogItem';
import Message from './message/Message';

const Dialogs = (props) => {

  let dialogs = props.dialogsPage.dialogs
  let messages = props.dialogsPage.messages;
  let dialogsElement = dialogs.map(dialog => <DialogItem id={dialog.id} name={dialog.name} avatarka={dialog.avatarka} key={dialog.id} />);
  let messagesElement = messages.map(message => <Message id={message.id} message={message.message} userId={message.userId} key={message.id} />);
  let text = props.dialogsPage.newMessageText;

  let sendMessage = (value) => {
    
    props.onSendMessage(value.newMessage);
    
  }

  let messageCheang = (element) => {
    let text = element.currentTarget.value;
    props.onMessageCheang(text)
  }

  if (!props.isAuthFetching) {
    return <Redirect to="/login" />
  }

  return (
    <div className={styleCss.dialogs}>
      <div className={styleCss.dialogItem}>
        {dialogsElement}
      </div>
      <div className={styleCss.messages}>
        {messagesElement}

      </div>
      <AddNewMessageFormRedux onSubmit={sendMessage}/>
    </div>
  )
}

const AddNewMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field name="newMessage" component="textarea" placeholder="enter youre message" />
      <button type="Submit">send message</button>
    </form>
  )
}

const AddNewMessageFormRedux = reduxForm({ form: "addNewMessage" })(AddNewMessageForm);

export default Dialogs;