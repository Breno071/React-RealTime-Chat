import React ,{useState, useEffect, useRef}from "react";
import { HubConnectionBuilder } from "@microsoft/signalr";

import ChatWindow from "../ChatWindow/ChatWindow";
import ChatInput from "../ChatInput/ChatInput";

import './Chat.css';

const Chat = () => {
  const [connection, setConnection] = useState(null);
  const [chat, setChat] = useState([]);
  const lastChat = useRef(null);

  lastChat.current = chat;
  useEffect(() => {
    const hubConnection = new HubConnectionBuilder()
    .withUrl("https://chatservidor20211213145151.azurewebsites.net/chat")
    .withAutomaticReconnect()
    .build();
    setConnection(hubConnection);
  }, []);

  useEffect(() => {
    if(connection){
      connection.start().then(() => {
        console.log("Conectado! ");
        connection.on("ReceiveMessage", message => {
          const updateChat = [...lastChat.current];
          updateChat.push(message);
          setChat(updateChat);
        })
      }).catch(error => {
        console.log("Falha na conexão: " + error);
      })
    }
  }, [connection]);

  const sendMessage = async (user, message) => {
    const chatMessage = {
      user: user,
      message: message
    };

    if(connection.connection._connectionStarted){
      try{
        console.log("Enviando mensagem...")
        await connection.send('SendMessage', chatMessage);
      }
      catch(error) {
        console.log(error);
      }
    }
    else{
      alert("Nenhuma conexão estabelecida ainda!");
    }
  }

  return (
    <div className="container">
      <div className="messageContainer">
      <ChatInput sendMessage={sendMessage} />
      <hr/>    
      </div>
      <ChatWindow chat={chat} />  
    </div>
  )
}
export default Chat;