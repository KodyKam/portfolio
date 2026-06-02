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
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

const NAV_ITEMS = [
  { to: "/", label: "Home", short: "Home", Icon: CottageIcon },
  { to: "/about", label: "About", short: "About", Icon: AccountCircleIcon },
  { to: "/projects", label: "Projects", short: "Projects", Icon: CodeIcon },
  { to: "/client-work", label: "Client Work", short: "Clients", Icon: BuildIcon },
  { to: "/services", label: "Services", short: "Services", Icon: IntegrationInstructionsIcon },
  { to: "/contact", label: "Start a Project", short: "Hire Me", Icon: RocketLaunchIcon },
];

function Navbar() {
  const location = useLocation();
  const isActive = (path) => (location.pathname === path ? "active-link" : "");

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="logo-link" aria-label="Home">
          <span className="logo-mark">KA</span>
          <span className="logo-word">Kamara Alleyne</span>
        </Link>

        {/* Desktop nav */}
        <ul className="nav-links desktop-only">
          {NAV_ITEMS.map(({ to, label }) => (
            <li key={to}>
              <Link to={to} className={isActive(to)}>{label}</Link>
            </li>
          ))}
        </ul>

        {/* Mobile icon rail */}
        <div className="emoji-carousel mobile-only">
          <div className="emoji-track">
            {NAV_ITEMS.map(({ to, short, Icon }) => (
              <div className={`emoji-item ${isActive(to)}`} key={to}>
                <Link to={to} className="emoji-link" aria-label={short}>
                  <Icon fontSize="medium" />
                </Link>
                <span className="emoji-label">{short}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
