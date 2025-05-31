import './Projects.css';

function Projects() {
  return (
    <div className="page-container">
      <h1>My Projects</h1>
      <p>Here are a few projects I'm proud of:</p>
      <div className="project-grid">
        <div className="project-card">
          <img src="/images/project1.png" alt="Project 1" />
          <h3>Project One</h3>
          <p>Short description of your work and technologies used.</p>
        </div>
        <div className="project-card">
          <img src="/images/project2.png" alt="Project 2" />
          <h3>Project Two</h3>
          <p>Short description of your work and technologies used.</p>
        </div>
        <div className="project-card">
          <img src="/images/project3.png" alt="Project 3" />
          <h3>Project Three</h3>
          <p>Short description of your work and technologies used.</p>
        </div>
      </div>
    </div>
  );
}

export default Projects;