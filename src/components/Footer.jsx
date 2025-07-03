// src/components/Footer.jsx
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Kamara Alleyne. All rights reserved.</p>
        <div className="social-links">
          <a href="https://github.com/kodykam" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/kamara-alleyne-56a4351" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:kamara.alleyne@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;