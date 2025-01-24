// src/components/About.js
import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about">
            <h2>About Me</h2>
            <img 
          src="./images/Ak.jpg" 
          alt="Profile" 
          className="profile-image" 
        />
            <p>Hi! I'm Akash Currently I Pursuing My Btech AIDS In Sri Eshwar College Of Engineering.</p>
        </section>
    );
};

export default About;