import React from 'react';
import '../App.css'; // Make sure this file exists and is linked

const About = () => {
  return (
    <div className="about-section">
      <h2>About Me</h2>
      <p className="bio">
        Passionate B.Tech undergraduate in Mechanical Engineering from NIT Warangal with a strong foundation in Frontend Development. Skilled in Web Development, Machine Learning, and Data Analysis, with a commitment to continuous learning and a drive to contribute to innovative projects in the tech industry.
      </p>

      <a
        href="/Mukesh_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="view-resume-btn"
      >
        View Resume
      </a>
    </div>
  );
};

export default About;
