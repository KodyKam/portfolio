import './Services.css';

function Services() {
  return (
    <div className="page-container">
      <h1>Services I Offer</h1>
      <div className="services-list">
        <div className="service-item">
          <h3>Web Development</h3>
          <p>Responsive websites using React, HTML, and CSS.</p>
        </div>
        <div className="service-item">
          <h3>Basic Mobile UI</h3>
          <p>Mockups and prototype apps using mobile-first design.</p>
        </div>
        <div className="service-item">
          <h3>Database Integration</h3>
          <p>SQL/NoSQL database setup and backend integration.</p>
        </div>
      </div>
    </div>
  );
}

export default Services;