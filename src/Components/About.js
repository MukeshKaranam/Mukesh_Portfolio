import React from 'react';
import '../App.css'; // Make sure this file exists and is linked

const About = () => {
  return (
    <div className="about-section">
      <h2>About Me</h2>
      <p className="bio">
        Recent B.Tech graduate in Mechanical Engineering from NIT Warangal with a strong foundation in Frontend Development. Proficient in Web Development, Machine Learning, and Data Analysis, with a passion for continuous learning and a drive to contribute to impactful and innovative projects in the tech industry.
      </p>

      <a
        href="https://drive.google.com/file/d/1m-zKL2AxCmYq3Bdj_W8m2OKnMxp-nZhZ/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="view-resume-btn"
      >
       📄 View Resume
      </a>
    </div>
  );
};

export default About;
