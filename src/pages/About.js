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
            Hi, I'm Kamara — a passionate software engineering student with a love for building modern,
            responsive web applications. I'm currently focused on mastering Java, JavaScript, and full-stack development.
            When I'm not coding, I enjoy family activities, learning new tech, and taking care of my aquariums.
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