import React from 'react'
import './profile.css'
import GitHubIcon from '@material-ui/icons/GitHub';
import IconButton from '@material-ui/core/IconButton'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Icon } from '@material-ui/core';

function Profile() {
  function calculate_age(dob) { 
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms); 
    return Math.abs(age_dt.getUTCFullYear() - 1970);
}


  return (
    <div className="profile-container">
      <img className="profile-image" src="https://i.imgur.com/S93KgCB.jpg" alt="Shani McDonald" />
      <h3 className="profile-name">Shani McDonald</h3>
      <span>age: {calculate_age(new Date(1992, 9, 19))}</span>
      <p>Software Engineer</p>
      <div className="ext-icons">
        <a target="blank" href="https://github.com/SHANIMCD">
          <IconButton>
            <GitHubIcon className="github-icon" fontSize='large' />
          </IconButton>
        </a>
        <a target="blank" href="https://www.linkedin.com/in/shanimcdonald/">
          <IconButton >
            <LinkedInIcon className="LinkedIn-icon" fontSize="large" />
          </IconButton>
        </a>
      </div>
    </div>
  )
}

export default Profile