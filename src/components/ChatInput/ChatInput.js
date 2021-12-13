import React, {useState} from 'react';

import './ChatInput.css';

const ChatInput = (props) => {
  const [user, setUser] = useState('');
  const [message, setMessage] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    const isUserProvided = user && user !== '';
    const isMessageProvided = message && message !== '';
    if(isUserProvided && isMessageProvided){
      return props.sendMessage(user, message);
    }
    alert("Informe o usuário e a mensagem");
  }

  const onUserUpdate = (e) => {
    setUser(e.target.value);
  }

  const onMessageUpdate = (e) => {
    setMessage(e.target.value);
  }
  
  return (
    <div className='input'>
    <form onSubmit={onSubmit} >
      <label className='lblUsuario' htmlFor='user'>Usuário:</label>
      <br/>
      <input
      placeholder='Digite seu nome'
      className='inputUsuario'
      id='user'
      name='user'
      value={user}
      onChange={onUserUpdate}
      ></input>
      <br/> 
      <label className='lblMensagem' htmlFor='message'>Mensagem:</label>
      <br/>
      <input
      placeholder='Digite sua mensagem'
      className='inputMessage'
      type="text"
      id='message'
      name='message'
      value={message}
      onChange={onMessageUpdate}
      >
      </input>
      <br/>
      <button className='btnInput' type='submit'>Enviar</button>
      </form>
      </div>
  )  
}

export default ChatInput;