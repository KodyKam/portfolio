/* client/src/pages/Projects.js */
import './Projects.css';

function Projects() {
  return (
    <div className="page-container">
      <h1>My Projects</h1>
      <p>Here are a few projects I'm proud of:</p>
      <div className="project-grid">
        <div className="project-card">
          <a href="https://kodykam.github.io/fishing/" target="_blank" rel="noopener noreferrer">
            <img src="/images/project1.png" alt="Fishing Friends" />
          </a>
          <h3>Fishing Friends</h3>
          <p>A responsive site used to plan fishing trips with my friends, designed using HTML and Bootstrap.</p>
        </div>
        <div className="project-card">
          <a href="https://kodykam.github.io/Type-Deck-II/" target="_blank" rel="noopener noreferrer">
            <img src="/images/project2.png" alt="Type Deck II" />
          </a>
          <h3>Type Deck II</h3>
          <p>A competitive 2-player game designed with HTML, CSS and JavaScript.</p>
        </div>
        <div className="project-card">
          <a href="https://kodykam.github.io/90dayFixed/" target="_blank" rel="noopener noreferrer">
            <img src="/images/project3.png" alt="90 Day Guess" />
          </a>
          <h3>90 Day Guess</h3>
          <p>A simple mini web app I built to streamline the shipping process at my last job.</p>
        </div>
      </div>
    </div>
  );
}

export default Projects;