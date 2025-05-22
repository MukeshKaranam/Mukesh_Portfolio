import React from 'react';
import photo2 from '../Images/mukesh1.jpg';

const Home = () => {
  return (
    <div className="profile-section">
      <div className="profile-area">
        <div className="profile-image-container">
          <img src={photo2} alt="profile-img" />
        </div>
      </div>
      <div className="profile-info">
        <div className="intro-text">
          <h1>Hey I'm <span className="highlight">Mukesh Chowdary</span></h1>
          <h2>I'm a <span className="highlight">Frontend Developer</span></h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
