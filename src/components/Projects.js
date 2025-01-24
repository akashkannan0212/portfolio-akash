// src/components/Projects.js
import React from 'react';
import './Projects.css';

const Projects = () => {
    return (
        <section id="projects" className="projects">
            <h2>My Projects</h2>
            <div className="project-list">
                <div className="project">
                    <h3>Scheduling and Calendar Management System</h3>
                    <p>
                        A comprehensive scheduling and calendar management application built with Java and MySQL, featuring functionalities 
                        like event management, notifications, and integration with a relational database.
                    </p>
                </div>
                <div className="project">
                    <h3>Flower Species Detection</h3>
                    <p>
                        A machine learning project using Convolutional Neural Networks (CNNs) to classify flower species from images, 
                        designed for botanists and researchers.
                    </p>
                </div>
           
               
               
                <div className="project">
                    <h3>Flower Species E-commerce Store</h3>
                    <p>
                        A conceptual e-commerce store planned for launching in 2025, focusing on selling products related to flower enthusiasts 
                        and hobbyists using Instagram and a dedicated website.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Projects;
