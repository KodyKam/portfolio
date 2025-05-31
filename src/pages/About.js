import React from 'react';
import './About.css'; // Optional, for styling

function About() {
  return (
    <div className="page-container">
      <h1>About Me</h1>

      <div className="about-content">
        <img
          src="/images/profile.jpg" // Put your image in public/images/profile.jpg
          alt="Kody Kam"
          className="profile-pic"
        />

        <div className="about-text">
          <h2>Kamara Alleyne</h2>
          <p>
            Hi, I'm Kamara — a passionate software engineering student with a love for building modern,
            responsive web applications. I'm currently focused on mastering Java, JavaScript, and full-stack development.
            When I'm not coding, I enjoy family activities, learning new tech, and enjoying my aquariums.
          </p>

          <a
            href="/docs/KodyKam_Resume.pdf" // Put your PDF in public/docs/
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            View My Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;