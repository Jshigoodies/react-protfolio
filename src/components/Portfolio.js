import React from 'react';
import logo from '../assets/logo192.png'
import tts from '../assets/text-to-speech.png'
import selenium from '../assets/selenium.png'
import animanga from '../assets/animanga-logo.jpg'
function Portfolio() {
    return (
      <div className="portfolioDiv">
        <h1>Portfolio</h1>
        <ul>
          <li>
            <div className='project-item'>
                <h3>React Portfolio Project</h3>
                <p>The current one you are on right now. :)</p>
                <img src={logo} alt='project image' />
                <a href="https://github.com/Jshigoodies/react-protfolio">React Portfolio Repo</a> 
            </div>
          </li>
          <li>
            <div className='project-item'>
                <h3>World's Hardest Game in 3D remake</h3>
                <p>It is a game that I created ind 3D. Reference is from the coolmath games.</p>
                <img src='https://img.itch.zone/aW1nLzEwNjE0MTQyLnBuZw==/347x500/kVZVJp.png' alt='game image'/>
                <a href="https://github.com/Jshigoodies/World-s-Hardest-Game-3D">World's Hardest Game Remake Repo</a>
                <br/>
                <br/>
                <a href='https://jshigoodies.itch.io/worlds-hardest-game-in-3'>Play my game here</a>
            </div>
            
          </li>
          <li>
            <div className='project-item'>
                <h3>Python Audio Text and Speech</h3>
                <p>It is a basic program in python that takes in audio from any microphone and allows you to command it to open browsers and automatically login to websites</p>
                <img className='ttsImg' src={tts} alt='text to speech image' />
                <a href="https://github.com/Jshigoodies/Py_audio">Py_audio Repo</a> 
            </div>
          </li>
          <li>
            <div className='project-item'>
                <h3>JDA and Minecraft</h3>
                <p>It is an api that allows minecraft and discord to interact with eachother. Specifically through messages</p>
                <img src='https://static.spigotmc.org/img/spigot-og.png' alt='spigot image'/>
                <a href='https://github.com/Jshigoodies/Maven_JDA_and_Spigot'>JDA and Spigot Repo</a>
                <br/>
                <br/>
                <a href='https://www.youtube.com/watch?v=UV62Ks9kzTY'>youtube video</a>
            </div>
          </li>
          <li>
            <div className='project-item'>
                <h3>Manga Downloader</h3>
                <p>Uses python that uses selenium to take screenshots of each page in manga4life</p>
                <img src={selenium} alt='selenium image' />
                <a href='https://github.com/Jshigoodies/Manga_Downloader'>Manga Downloader Repo</a>
            </div>
          </li>
          <li>
            <div className='project-item'>
                <h3>Animanga</h3>
                <p>A website made other students from a bootcamp class</p>
                <img src={animanga} alt='animanga logo image' />
                <a href='https://github.com/Jshigoodies/Animanga'>Animanga Repo</a>
                <br />
                <br />
                <a href='https://jshigoodies.github.io/Animanga/'>The website</a>
            </div>
          </li>
        </ul>
      </div>
    );
  }
  
  export default Portfolio;