// client/src/components/Navbar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { isAuthenticated, signout } from '../auth/auth-helper';
import './Navbar.css';

function Navbar() {
  const location = useLocation();
  const userIsAuthenticated = isAuthenticated(); // avoid conflict with imported name

  const isActive = (path) =>
    location.pathname === path ? 'active-link' : '';

  return (
    <nav className="navbar">
      <Link to="/" className="logo-link">
        <div className="logo-text">KA</div>
      </Link>
      <ul className="nav-links">
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
    </nav>
  );
}

export default Navbar;