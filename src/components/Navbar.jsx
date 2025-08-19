// client/src/components/Navbar.jsx
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { isAuthenticated, signout } from '../auth/auth-helper';
import './Navbar.css';

// 👇 Import Material UI icons
import CottageIcon from '@mui/icons-material/Cottage';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CodeIcon from '@mui/icons-material/Code';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import PersonIcon from '@mui/icons-material/Person'; // for Profile
import LogoutIcon from '@mui/icons-material/Logout'; // for Sign Out
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";

function Navbar() {
  const location = useLocation();
  const userIsAuthenticated = isAuthenticated();

  const isActive = (path) =>
    location.pathname === path ? 'active-link' : '';

  // 👇 Auto-scroll Sign In icon into view when on /signin
  useEffect(() => {
    if (location.pathname === "/signin") {
      const signInIcon = document.querySelector(".emoji-item .emoji-link[href='/signin']");
      if (signInIcon) {
        signInIcon.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      }
    }
  }, [location.pathname]);

  return (
    <nav className="navbar">
      <Link to="/" className="logo-link">
        <div className="logo-text">KA</div>
      </Link>

      {/* 👇 Normal nav links (visible on desktop) */}
      <ul className="nav-links desktop-only">
        <li><Link to="/" className={isActive('/')}>Home</Link></li>
        <li><Link to="/about" className={isActive('/about')}>About</Link></li>
        <li><Link to="/projects" className={isActive('/projects')}>Projects</Link></li>
        <li><Link to="/services" className={isActive('/services')}>Services</Link></li>
        <li><Link to="/contact" className={isActive('/contact')}>Contact</Link></li>

        {!userIsAuthenticated && (
          <>
            <li><Link to="/signin" className={isActive('/signin')}>Sign In</Link></li>
            <li><Link to="/signup" className={isActive('/signup')}>Sign Up</Link></li>
          </>
        )}
        {userIsAuthenticated && (
          <>
            <li>
              <Link
                to={`/user/${userIsAuthenticated.user._id}`}
                className={isActive(`/user/${userIsAuthenticated.user._id}`)}
              >
                My Profile
              </Link>
            </li>
            <li>
              <span
                onClick={() => {
                  signout(() => (window.location = '/'));
                }}
                className="signout-link"
              >
                Sign Out
              </span>
            </li>
          </>
        )}
      </ul>

      {/* 👇 Icon carousel nav (visible on mobile) */}
      <div className="emoji-carousel mobile-only">
        <div className="emoji-track">
          <div className={`emoji-item ${isActive('/')}`}>
            <Link to="/" className="emoji-link"><CottageIcon fontSize="large" /></Link>
            <span className="emoji-label">Home</span>
          </div>
          <div className={`emoji-item ${isActive('/about')}`}>
            <Link to="/about" className="emoji-link"><AccountCircleIcon fontSize="large" /></Link>
            <span className="emoji-label">About</span>
          </div>
          <div className={`emoji-item ${isActive('/projects')}`}>
            <Link to="/projects" className="emoji-link"><CodeIcon fontSize="large" /></Link>
            <span className="emoji-label">Projects</span>
          </div>
          <div className={`emoji-item ${isActive('/services')}`}>
        <Link to="/services" className="emoji-link">
          <IntegrationInstructionsIcon fontSize="large" />
        </Link>
        <span className="emoji-label">Services</span>
      </div>
          <div className={`emoji-item ${isActive('/contact')}`}>
            <Link to="/contact" className="emoji-link"><ContactMailIcon fontSize="large" /></Link>
            <span className="emoji-label">Contact</span>
          </div>

          {!userIsAuthenticated && (
            <>
              <div className={`emoji-item ${isActive('/signin')}`}>
                <Link to="/signin" className="emoji-link"><LockOpenIcon fontSize="large" /></Link>
                <span className="emoji-label">Sign In</span>
              </div>
              <div className={`emoji-item ${isActive('/signup')}`}>
                <Link to="/signup" className="emoji-link"><AppRegistrationIcon fontSize="large" /></Link>
                <span className="emoji-label">Sign Up</span>
              </div>
            </>
          )}

          {userIsAuthenticated && (
            <>
              <div className={`emoji-item ${isActive(`/user/${userIsAuthenticated.user._id}`)}`}>
                <Link to={`/user/${userIsAuthenticated.user._id}`} className="emoji-link">
                  <PersonIcon fontSize="large" />
                </Link>
                <span className="emoji-label">Profile</span>
              </div>
              <div className="emoji-item">
                <span
                  onClick={() => {
                    signout(() => (window.location = '/'));
                  }}
                  className="emoji-link signout-link"
                >
                  <LogoutIcon fontSize="large" />
                </span>
                <span className="emoji-label">Sign Out</span>
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;