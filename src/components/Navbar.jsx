// client/src/components/Navbar.jsx
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { isAuthenticated, signout } from '../auth/auth-helper';
import './Navbar.css';

function Navbar() {
  const location = useLocation();
  const userIsAuthenticated = isAuthenticated();

  const isActive = (path) =>
    location.pathname === path ? 'active-link' : '';

  // 👇 Auto-scroll Sign In emoji into view when on /signin
  useEffect(() => {
    if (location.pathname === "/signin") {
      const signInEmoji = document.querySelector(".emoji-item .emoji-link[href='/signin']");
      if (signInEmoji) {
        signInEmoji.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
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

      {/* 👇 Emoji carousel nav (visible on mobile) */}
      <div className="emoji-carousel mobile-only">
        <div className="emoji-track">
          <div className={`emoji-item ${isActive('/')}`}>
            <Link to="/" className="emoji-link">🏠</Link>
            <span className="emoji-label">Home</span>
          </div>
          <div className={`emoji-item ${isActive('/about')}`}>
            <Link to="/about" className="emoji-link">👤</Link>
            <span className="emoji-label">About</span>
          </div>
          <div className={`emoji-item ${isActive('/projects')}`}>
            <Link to="/projects" className="emoji-link">💻</Link>
            <span className="emoji-label">Projects</span>
          </div>
          <div className={`emoji-item ${isActive('/services')}`}>
            <Link to="/services" className="emoji-link">🛠️</Link>
            <span className="emoji-label">Services</span>
          </div>
          <div className={`emoji-item ${isActive('/contact')}`}>
            <Link to="/contact" className="emoji-link">📞</Link>
            <span className="emoji-label">Contact</span>
          </div>

          {!userIsAuthenticated && (
            <>
              <div className={`emoji-item ${isActive('/signin')}`}>
                <Link to="/signin" className="emoji-link">🔑</Link>
                <span className="emoji-label">Sign In</span>
              </div>
              <div className={`emoji-item ${isActive('/signup')}`}>
                <Link to="/signup" className="emoji-link">📝</Link>
                <span className="emoji-label">Sign Up</span>
              </div>
            </>
          )}

          {userIsAuthenticated && (
            <>
              <div className={`emoji-item ${isActive(`/user/${userIsAuthenticated.user._id}`)}`}>
                <Link to={`/user/${userIsAuthenticated.user._id}`} className="emoji-link">
                  🙍‍♂️
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
                  🚪
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