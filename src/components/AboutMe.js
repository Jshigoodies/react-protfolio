import React from 'react';
import avatar from '../assets/avatar.png'
function AboutMe() {
    return (
      <div className='aboutmeDiv'>
        <h1>About Me</h1>
        <img className="avatar-img" src={avatar} alt="Avatar Image"/>
        <p> 
            Hi, I'm Jason Shi, a recent Computer Science graduate with a passion for volunteering and hobbies. 
            I've volunteered with various organizations, including the Galveston Food Bank and nursing/retirement homes. 
            I'm skilled in programming languages like Java, Python, HTML, CSS, and JavaScript. 
            In my free time, I enjoy playing musical instruments, 
            practicing sports, traveling, fishing, and working out. 
            You can find some of my work on my GitHub, Itch.io, YouTube, and personal website.
        </p>
      </div>
    );
  }
  
  export default AboutMe;