import React from 'react'
import Chat from './Chat'

function Chats() {
  return (
    <>
      <Chat
        name="Frank"
        message="Good evening!"
        timestamp="2 hours ago"
        profilePhoto="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
      />
      <Chat
        name="Sam"
        message="Hey!"
        timestamp="36 minutes ago"
        profilePhoto="https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
      />
    </>
  )
}

export default Chats