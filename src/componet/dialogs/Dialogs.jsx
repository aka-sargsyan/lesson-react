import React from 'react';
import styleCss from './DialogsStyle.module.css';

let dialogItems = [
  { id: 1, item: "name1", messages: [{ id: 1, message: "hi friend" }, { id: 2, message: "I'm ok" }] },
  { id: 2, item: "name2", messages: [{ id: 1, message: "hello" }, { id: 2, message: "I'm Good" }] },
  { id: 3, item: "name3", messages: [{ id: 1, message: "hi friend, how are you?" }, { id: 2, message: "I'm ok" }] },
  { id: 4, item: "name4", messages: [{ id: 1, message: "do you here me?" }, { id: 2, message: "Yes..." }] }
]

const Dialogs = () => {
  return (
    <div className={styleCss.dialogs}>
      <div className={styleCss.dialogItems}>
        {dialogItems.map((element) =>
          <div key={element.id}>
            <span>{element.item}</span>
          </div>)}
      </div>
      <div className={styleCss.messages}>
        <div>
          {dialogItems[1].messages.map((element) =>
            <div key={element.id}>
              <span>{element.message}</span>
            </div>)}
        </div>
      </div>
    </div>
  )
}

export default Dialogs;