/* client/src/pages/About.js */
import React from 'react';
import './About.css'; // Optional, for styling

function About() {
  return (
    <div className="about-container">
      <h1>About Me</h1>

      <div className="about-content">
        <img
          src="/images/profile.jpg"
          alt="Kamara Alleyne"
          className="profile-pic"
        />

        <div className="about-text">
          <h2>Kamara Alleyne</h2>
          <p>
    Hi, I’m Kamara — a software engineering technician focused on building reliable,
    user-centred applications.
  </p>
  <p>
    My interest in technology started early. As a teenager in the 1990s, I wrote my
    first lines of code in <strong>GW-BASIC</strong>, which sparked a lasting curiosity
    about how software works and how it can solve real problems. That early experience
    laid the foundation for the path I’m on today.
  </p>
  <p>
    Most recently, I completed my <strong>Software Engineering Technician</strong> program
    at <strong>Centennial College</strong>, where I strengthened my practical development
    skills and applied modern engineering practices through hands-on projects and
    team-based work.
  </p>
  <p>
    Over the past several months, I’ve worked extensively in frontend web development
    using <strong>JavaScript</strong> and <strong>React</strong>, as well as Android mobile
    development with <strong>Kotlin</strong>, building responsive interfaces and
    interactive features designed around real user needs.
  </p>
  <p>
    I’ve also collaborated in <strong>Agile Scrum</strong> environments, serving as
    <strong> Scrum Master</strong> and contributing to sprint planning, backlog
    refinement, and team communication to help ensure work is delivered clearly and
    efficiently.
  </p>

  <p>
    I value clean UI, accessibility, and maintainable code, and I’m motivated by
    continuous improvement through collaboration, feedback, and iterative development.
  </p>

          <a
  href="/Kam_Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="btn"
  aria-label="View my resume"
>
  📄 View My Resume
</a>
        </div>
      </div>
    </div>
  );
}

export default About;