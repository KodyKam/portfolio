import React from 'react';
import './Resume.css';

function Resume() {
  return (
    <section className="section">
      <div className="container">
        <div className="page-head">
          <p className="eyebrow">Background</p>
          <h1>My Resume</h1>
        </div>
        <div className="resume-frame">
          <iframe
            src="/Kam_Resume.pdf"
            title="Kamara Alleyne Resume"
            loading="lazy"
          />
        </div>
        <p style={{ textAlign: 'center', marginTop: '1.25rem' }}>
          <a className="link-arrow" href="/Kam_Resume.pdf" target="_blank" rel="noopener noreferrer">
            Open as PDF <span>&rarr;</span>
          </a>
        </p>
      </div>
    </section>
  );
}

export default Resume;
