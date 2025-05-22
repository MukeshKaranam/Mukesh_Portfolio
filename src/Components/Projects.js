import React from 'react';
import {FaGithub } from 'react-icons/fa';
import Weather from '../Images/Weather.png';
import pharmaceutical from '../Images/pharmaceutical.png';
import audio_app from '../Images/audio3.png';
import simon from '../Images/simon.png';


const Projects = () => {
  return (
    <div className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-container">

        <div className="project-card">
          <div className="project-image">
            <img src={audio_app} alt="Audio_room" />
          </div>
          <div className="project-info">
            <h3>Audio Room Web Application </h3>
            <p>Tech Stack Used: React.js,TypeScript,Tailwind CSS,Node.js,Express.js,Socket.IO </p>
            <p>Built a real-time audio room web app like Clubhouse with secure user authentication and live voice chat features.</p>
            <div className="project-links">
              <a href="https://github.com/MukeshKaranam/Audio_Room" target="_blank" rel="noopener noreferrer">
                <FaGithub /> Code
              </a>
            </div>
          </div>
        </div>

        <div className="project-card">
          <div className="project-image">
            <img src={Weather} alt="Weather APP" />
          </div>
          <div className="project-info">
            <h3>Weather Update Web Application </h3>
            <p>Tech Stack Used: HTML, CSS, JavaScript, OpenWeatherMap API</p>
            <p>Developed a responsive Weather Update Web Application that fetches and displays real-time weather data like temperature,humidity and wind speed.</p>
            <div className="project-links">
              <a href="https://github.com/MukeshKaranam/Weather_App" target="_blank" rel="noopener noreferrer">
                <FaGithub /> Code
              </a>
              <a href="https://mukesh-weather-update-web-application.netlify.app/">Demo</a>
            </div>
          </div>
        </div>

         <div className="project-card">
          <div className="project-image">
            <img src={simon} alt="Simon Game" />
          </div>
          <div className="project-info">
            <h3>Simon Game </h3>
            <p>Tech Stack Used: HTML, CSS, JavaScript</p>
            <p>Built an interactive Simon Game that challenges users to repeat color patterns, enhancing memory skills through engaging gameplay.</p>
            <div className="project-links">
              <a href="https://github.com/MukeshKaranam/Simon_Game" target="_blank" rel="noopener noreferrer">
                <FaGithub /> Code
              </a>
              <a href="https://mukesh-simon-game.netlify.app/">Demo</a>
            </div>
          </div>
        </div>


        <div className="project-card">
          <div className="project-image">
            <img src={pharmaceutical} alt="Medical Appointment Booking System" />
          </div>
          <div className="project-info">
            <h3>Medical Appointment Booking System</h3>
            <p>Tech Stack Used: MongoDB, Express.js, React.js, Node.js, Tailwind CSS.</p>
            <p>Developed a full-stack Doctor Appointment Booking System using the MERN stack to streamline doctor-patient scheduling, appointment requests, and profile management for admins, doctors, and patients.</p>
            <div className="project-links">
              <a href="https://github.com/MukeshKaranam/Medical_Appointment_Booking_System" target="_blank" rel="noopener noreferrer">
                <FaGithub /> Code
              </a>
              <a href="https://drive.google.com/file/d/1B3PcAAzuJaRG-aZuZQWlIC95DHDOy698/view?usp=sharing">Demo</a>
            </div>
          </div>
        </div>

       
      </div>
    </div>
  );
};

export default Projects;
