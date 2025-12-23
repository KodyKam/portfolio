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
            Hi, I’m Kamara — a software engineering technician focused on building reliable, user-centred applications.
Over the past several months, I’ve worked on frontend web development with JavaScript and React and Android mobile development using Kotlin, delivering responsive interfaces and interactive features designed around real user needs. I’ve also collaborated in Agile Scrum environments, contributing to sprint planning, refinement, and team communication to help ensure work is delivered clearly and efficiently.
I value clean UI, accessibility, and maintainable code, and I’m motivated by continuous improvement through collaboration and iterative development.

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