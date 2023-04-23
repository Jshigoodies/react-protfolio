import React from 'react';
import avatar from '../assets/avatar.png'
function AboutMe() {
    return (
      <div className='aboutmeDiv'>
        <h1>About Me</h1>
        <img className="avatar-img" src={avatar} alt="Avatar Image"/>
        <p>About me goes here :D</p>
      </div>
    );
  }
  
  export default AboutMe;