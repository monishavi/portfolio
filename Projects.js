import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="project-card">
        <h3>Project 1</h3>
        <p>A description of your project.</p>
      </div>
      <div className="project-card">
        <h3>Project 2</h3>
        <p>A description of your project.</p>
      </div>
    </section>
  );
}

export default Projects;