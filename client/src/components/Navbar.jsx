// client/src/components/Navbar.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

// Material UI icons
import CottageIcon from "@mui/icons-material/Cottage";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CodeIcon from "@mui/icons-material/Code";
import BuildIcon from "@mui/icons-material/Build";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";

function Navbar() {
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path ? "active-link" : "";

  return (
    <nav className="navbar">
  <div className="mobile-container">
    <Link to="/" className="logo-link">
      <div className="logo-text">KA</div>
    </Link>

    {/* Mobile icon carousel */}
    <div className="emoji-carousel mobile-only">
      <div className="emoji-track">
        <div className={`emoji-item ${isActive("/")}`}>
          <Link to="/" className="emoji-link">
            <CottageIcon fontSize="large" />
          </Link>
          <span className="emoji-label">Home</span>
        </div>
        <div className={`emoji-item ${isActive("/about")}`}>
          <Link to="/about" className="emoji-link">
            <AccountCircleIcon fontSize="large" />
          </Link>
          <span className="emoji-label">About</span>
        </div>
        <div className={`emoji-item ${isActive("/projects")}`}>
          <Link to="/projects" className="emoji-link">
            <CodeIcon fontSize="large" />
          </Link>
          <span className="emoji-label">Projects</span>
        </div>
        <div className={`emoji-item ${isActive("/services")}`}>
          <Link to="/services" className="emoji-link">
            <IntegrationInstructionsIcon fontSize="large" />
          </Link>
          <span className="emoji-label">Services</span>
        </div>
        <div className={`emoji-item ${isActive("/contact")}`}>
          <Link to="/contact" className="emoji-link">
            <BuildIcon fontSize="large" />
          </Link>
          <span className="emoji-label">Hire Me</span>
        </div>
      </div>
    </div>
  </div>

  {/* Desktop nav */}
  <ul className="nav-links desktop-only">
    <li><Link to="/" className={isActive("/")}>Home</Link></li>
    <li><Link to="/about" className={isActive("/about")}>About</Link></li>
    <li><Link to="/projects" className={isActive("/projects")}>Projects</Link></li>
    <li><Link to="/services" className={isActive("/services")}>Services</Link></li>
    <li><Link to="/contact" className={isActive("/contact")}>Start a Project</Link></li>
  </ul>
</nav>
  );
}

export default Navbar;