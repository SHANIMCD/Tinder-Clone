import React, { useState } from 'react'


function ChatScreen() {
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
    }
  ])
  return (
    <div className="chatscreen">
    <p>You matched with Frank on 10/08/20</p>
    {
      messages.map(message => (
        <div>
          <p>{message.message}</p>
        </div>
      ))
    }
    </div>
  )
}

export default ChatScreen