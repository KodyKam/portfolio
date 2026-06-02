/* client/src/pages/About.js */
import React from 'react';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './About.css';

function About() {
  return (
    <section className="section">
      <div className="container about-container">
        <div className="page-head" style={{ textAlign: 'left', margin: 0 }}>
          <p className="eyebrow">About</p>
        </div>

        <div className="about-grid">
          <div className="about-media">
            <img src="/images/profile.jpg" alt="Kamara Alleyne" className="profile-pic" />
          </div>

          <div className="about-text">
            <h1>Kamara Alleyne</h1>
            <p>
              I'm an independent software engineer focused on building modern, reliable
              websites and web applications for businesses and organizations. My goal is
              simple: create digital experiences that are clean, intuitive, and built to
              support real-world growth.
            </p>
            <p>
              My interest in technology began early through curiosity and experimentation,
              which evolved into hands-on experience designing and developing interactive
              web solutions. Today, I combine technical skill with practical problem-solving
              to help clients improve how they present and operate online.
            </p>
            <p>
              I studied Software Engineering at <strong>Centennial College</strong>, where I
              built strong full-stack foundations and learned how to turn ideas into polished,
              production-ready applications.
            </p>
            <p>
              I work directly with clients through the entire process — from planning and
              design to development and launch — ensuring clear communication and solutions
              tailored to each project's goals.
            </p>
            <Link to="/contact" className="btn btn-primary about-cta">
              Start your project <ArrowForwardIcon fontSize="small" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
