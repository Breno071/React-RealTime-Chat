import React from "react";
import './Message.css'

const Message = (props) => {
  return (
    <div className="message">
    <p className="userName"><strong>{props.user}</strong></p>
    <p className="userMessage">{props.message}</p>

    </div> 
  )
}

export default Message;