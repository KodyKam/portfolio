/* client/src/pages/Home.js */
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to My Portfolio</h1>
      <p className="intro-text">
        Hi! I'm <strong>Kamara Alleyne</strong>, a software engineering student passionate about building modern, user-friendly web apps.
      </p>
      <p className="mission">
        <strong>Mission Statement:</strong> To use creativity, technology, and empathy to develop impactful software solutions that make a difference.
      </p>
      <Link to="/about" className="btn">Here's More About Me</Link>
    </div>
  );
}

export default Home;