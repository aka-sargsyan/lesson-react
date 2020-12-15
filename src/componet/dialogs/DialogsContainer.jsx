import { onSendMessage, onMessageCheang } from '../redux/dialogs-reduser';
import {connect} from 'react-redux'
import Dialogs from './Dialogs';


// const DialogsContainer = (props) => {

//   let onSendMessage = (text) => {
//     props.store.dispatch(addMessageCreator(text))
//   }

//   let onMessageCheang = (text) => {
//     props.store.dispatch(updateNewMessageTextCreator(text))
//   }

//   return (
//     < Dialogs dialogsPage={props.store.getState().dialogPage}
//       // dispatch={props.store.dispatch.bind(props.store)} 
//       onSendMessage={onSendMessage}
//       onMessageCheang={onMessageCheang} />
//   )
// }

let mapStatetoProps = (state) => {
  return {
    dialogsPage: state.dialogPage
  }
}

// let mapDispatchToProps = (dispatch) => {
//   return {
//     onSendMessage: (text) => dispatch(addMessageCreator(text)),
//     onMessageCheang: (text) => dispatch(updateNewMessageTextCreator(text))
//   }
// }

let dispatchObject = {
  onSendMessage,
  onMessageCheang
}

const DialogsContainer = connect(mapStatetoProps,dispatchObject)(Dialogs);

export default DialogsContainer;

