// src/components/Footer.jsx
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="footer-mark">KA</span>
          <div>
            <p className="footer-name">Kamara Alleyne</p>
            <p className="footer-tag">Custom websites for Scarborough &amp; the GTA</p>
          </div>
        </div>

        <nav className="social-links" aria-label="Social links">
          <a href="https://github.com/kodykam" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/kamara-alleyne-56a4351" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:kamara.alleyne@gmail.com">Email</a>
        </nav>
      </div>

      <div className="footer-base">
        <p>&copy; {new Date().getFullYear()} Kamara Alleyne. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
