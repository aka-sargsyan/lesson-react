import React from 'react';
import { addMessageCreator, updateNewMessageTextCreator } from '../redux/dialogs-reduser';
import Dialogs from './Dialogs';


const DialogsContainer = (props) => {

  let onSendMessage = (text) => {
    props.store.dispatch(addMessageCreator(text))
  }

  let onMessageCheang = (text) => {
    props.store.dispatch(updateNewMessageTextCreator(text))
  }

  return (
    < Dialogs dialogsPage={props.store.getState().dialogPage}
              // dispatch={props.store.dispatch.bind(props.store)} 
              onSendMessage={onSendMessage}
              onMessageCheang={onMessageCheang}/>
  )
}

export default DialogsContainer;