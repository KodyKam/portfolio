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
            Hi, I’m Kamara! I build web applications and tools that are reliable,
            user-friendly, and tailored to real needs.
          </p>

          <p>
            My love for technology started as a teenager, experimenting with code just for fun.
            That curiosity turned into hands-on experience designing and building interactive
            websites and apps.
          </p>

          <p>
            I recently completed the <strong>Software Engineering Technician</strong> program
            at <strong>Centennial College</strong>, where I honed my full stack development
            skills and learned how to turn ideas into polished, functional projects.
          </p>

          <p>
            I enjoy collaborating with clients to bring their visions to life — whether
            it’s a responsive website, a web tool, or an interactive interface — and I
            aim to make each project clear, accessible, and easy to use.
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
      📬 Contact Me to Start Your Project
    </Button>
  </Link>
</div>
        </div>
      </div>
    </div>
  );
}

export default About;