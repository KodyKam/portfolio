// src/components/Footer.jsx
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Kody Kam. All rights reserved.</p>
        <div className="social-links">
          <a href="https://github.com/kodykam" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/kodykam" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:kody@example.com">Email</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;