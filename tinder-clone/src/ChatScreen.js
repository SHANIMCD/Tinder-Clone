import React, { useState } from 'react'
import './chatScreen.css'
import Avatar from '@material-ui/core/Avatar'

function ChatScreen() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      name: 'Frank',
      image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60',
      message: 'Hello there'
    },
    {
      name: 'Frank',
      image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60',
      message: 'How are you doing?'
    },
    {
      message: 'Hey :) Nice, to meet you!'
    },
  ]);

  const handleSend = e => {
    e.preventDefault();
    setMessages([...messages, { message: input }]);
    setInput("");
  }

  return (
    <div className="chatscreen">
    <p className="chat-screen-timestamp">You matched with Frank on 10/08/20</p>
    {
      messages.map(message => (
        message.name ? (
          <div className="chat-screen-message">
          <Avatar
            className="chat-screen-image"
            alt={message.name}
            src={message.image}
            />
          <p className="chat-screen-text">{message.message}</p>
        </div>
        ) : (
          <div className="chat-screen-message">
          <p className="chat-screen-textUser">{message.message}</p>
          </div>
        )
       
      ))
    }
      <form className="chat-screen-input">
        <input 
        value={input}
        onChange={e => setInput(e.target.value)}
        className="chat-screen-input-field" 
        placeholder="Type a message..." 
        type="text"/>
        <button type="submit" onClick={handleSend} className="input-button">Send</button>
      </form>  
    </div>
  )
}

export default ChatScreen