/* client/src/pages/About.js */
import React from 'react';
import './About.css'; // Optional, for styling
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

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
            I’m an independent software engineer focused on building modern,
            reliable websites and web applications for businesses and organizations.
            My goal is simple: create digital experiences that are clean, intuitive,
            and built to support real-world growth.
          </p>

          <p>
            My interest in technology began early through curiosity and experimentation,
            which evolved into hands-on experience designing and developing interactive
            web solutions. Today, I combine technical skill with practical problem-solving
            to help clients improve how they present and operate online.
          </p>

          <p>
            I studied Software Engineering at <strong>Centennial College</strong>,
            where I developed strong full-stack development foundations and learned
            how to transform ideas into polished, production-ready applications.
          </p>

          <p>
            I work directly with clients throughout the entire process — from planning
            and design to development and launch — ensuring clear communication,
            thoughtful decisions, and solutions tailored to each project’s goals.
          </p>
          {/* CTA Button */}
          <div style={{ marginTop: '2rem', textAlign: 'center' }}>
  <Link to="/contact" style={{ textDecoration: 'none' }}>
    <Button
      variant="contained"
      sx={{
        mt: 2,
        backgroundColor: '#3498db',
        '&:hover': { backgroundColor: '#2c80b4' },
      }}
      aria-label="Contact Kamara"
    >
      Start Your Project
    </Button>
  </Link>
</div>
        </div>
      </div>
    </div>
  );
}

export default About;