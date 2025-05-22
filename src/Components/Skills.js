import React from 'react';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
} from 'react-icons/fa';
import {
  SiCplusplus,
  SiMongodb,
  SiMysql
} from 'react-icons/si';

const Skills = () => {
  return (
    <div className="skills-section">
      <h2>My Skills</h2>
      <div className="skills-container">
        <div className="skill-item">
          <FaHtml5 className="skill-icon" />
          <span>HTML5</span>
        </div>
        <div className="skill-item">
          <FaCss3Alt className="skill-icon" />
          <span>CSS3</span>
        </div>
        <div className="skill-item">
          <FaJs className="skill-icon" />
          <span>JavaScript</span>
        </div>
        <div className="skill-item">
          <FaReact className="skill-icon" />
          <span>React</span>
        </div>
        <div className="skill-item">
          <FaPython className="skill-icon" />
          <span>Python</span>
        </div>
        <div className="skill-item">
          <SiCplusplus className="skill-icon" />
          <span>C++</span>
        </div>
        <div className="skill-item">
          <SiMysql className="skill-icon" />
          <span>MySQL</span>
        </div>
        <div className="skill-item">
          <SiMongodb className="skill-icon" />
          <span>MongoDB</span>
        </div>
      </div>
    </div>
  );
};

export default Skills;

