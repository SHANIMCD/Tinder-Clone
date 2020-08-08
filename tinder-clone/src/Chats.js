import React from 'react'
import Chat from './Chat'
import { Link } from 'react-router-dom'

function Chats() {
  return (
    <>
    <Link className='chats-link' to={'/chats/:person'}>
    <Chat
        name="Frank"
        message="Good evening!"
        timestamp="2 hours ago"
        profilePhoto="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
      />
    </Link>
      
      <Link className='chats-link' to={'/chats/:person'}>
      <Chat
        name="Sam"
        message="Hey!"
        timestamp="36 minutes ago"
        profilePhoto="https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
      />
      </Link>
    </>
  )
}

export default Chats