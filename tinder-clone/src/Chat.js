import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import './chat.css'

function Chat({ name, message, timestamp, profilePhoto }) {
  return (
    <div className="chatcontainer">
      <Avatar className="chat_image" alt={name} src={profilePhoto} />
      <div className="chat_details">
        <h3>{name}</h3>
        <p>{message}</p>
      </div>
      <p className="chat_timestamp">{timestamp}</p>
    </div>
  )
}

export default Chat