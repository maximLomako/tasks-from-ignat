import React from "react";
import s from './Message.module.css'
type MessagePropsType = {
  avatar: string
  name: string
  message: string
  time: string
}


function Message(props: MessagePropsType) {
  return (
    <div className={s.messageWrapper}>
      <img className={s.messageAvatar} src={props.avatar} alt="message-avatar"/>

      <div className={s.messageDialogWindow}>
        <span className={s.messageName}>{props.name}</span>
        <p className={s.messageText}>{props.message}</p>
        <span className={s.messageTime}>{props.time}</span>
      </div>
    </div>
  );
}

export default Message;
