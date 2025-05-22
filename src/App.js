
import React, { useState } from 'react';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import SocialIcons from './Components/social_icons';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const handleNavClick = (e, section) => {
    e.preventDefault();
    setActiveSection(section);
  };

  return (
    <div className="portfolio-container">
      <header>
        <div className="logo">Mukesh Chowdary Karanam</div>
        <nav>
          <ul>
            <li><a href="#home" onClick={(e) => handleNavClick(e, 'home')} className={activeSection === 'home' ? 'active' : ''}>Home</a></li>
            <li><a href="#about" onClick={(e) => handleNavClick(e, 'about')} className={activeSection === 'about' ? 'active' : ''}>About</a></li>
            <li><a href="#skills" onClick={(e) => handleNavClick(e, 'skills')} className={activeSection === 'skills' ? 'active' : ''}>Skills</a></li>
            <li><a href="#projects" onClick={(e) => handleNavClick(e, 'projects')} className={activeSection === 'projects' ? 'active' : ''}>Projects</a></li>
            <li><a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className={activeSection === 'contact' ? 'active' : ''}>Contact</a></li>
          </ul>
        </nav>
      </header>
      
      <main>
        {activeSection === 'home' && <Home />}
        {activeSection === 'about' && <About />}
        {activeSection === 'skills' && <Skills />}
        {activeSection === 'projects' && <Projects />}
        {activeSection === 'contact' && <Contact />}
      </main>
      <div className="fixed-social-icons">
        <SocialIcons />
      </div>
    </div>
  );

}

export default App;
