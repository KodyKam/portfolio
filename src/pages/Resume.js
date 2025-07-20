import React from 'react';

function Resume() {
  return (
    <div className="resume-container" style={{ height: '100vh' }}>
      <h1>My Resume</h1>
      <iframe
        src="/Kam_Resume.pdf"
        width="100%"
        height="100%"
        title="Kamara Alleyne Resume"
        frameBorder="0"
      />
    </div>
  );
}

export default Resume;