// client/src/pages/Home.js
import { Button, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="local-business-banner">
  <h2>Serving Scarborough Businesses</h2>

  <p>
    Looking to upgrade your website or add online booking?
    Work directly with the developer building your site —
    no templates, no outsourcing.
  </p>

  <Button
    variant="contained"
    sx={{
      backgroundColor: '#111',
      color: '#fff',
      '&:hover': { backgroundColor: '#38bdf8' },
      borderRadius: 2,
      px: 3,
      py: 1.5,
      fontWeight: 'bold',
      mt: 2,
    }}
    onClick={() => navigate('/contact')}
  >
    Start a Project
  </Button>
</div>

<div className="credibility-strip">
  <div>✔ Direct Communication</div>
  <div>✔ Custom-Built Websites</div>
  <div>✔ No Templates or Outsourcing</div>
</div>
      <h1>Modern Web Development for Growing Businesses</h1>
      <p className="intro-text">
        Hi, I'm Kamara Alleyne — an independent software engineer specializing 
        in modern, user-friendly web applications for <strong>businesses</strong> and <strong> organizations</strong>.
        </p>
      <p className="mission">
        <strong>Mission Statement:</strong> To use creativity, leadership, and teamwork to develop impactful software solutions that make a difference.
      </p>

      <div className="process-section">
  <h2>What Happens Next</h2>

  <div className="process-steps">
    <div className="step">
      <h3>1. Tell Me About Your Project</h3>
      <p>
        Share a few details about your business and what you want your
        website to achieve.
      </p>
    </div>

    <div className="step">
      <h3>2. We Discuss the Best Approach</h3>
      <p>
        You'll receive clear recommendations tailored to your goals —
        no technical jargon.
      </p>
    </div>

    <div className="step">
      <h3>3. Build & Launch</h3>
      <p>
        Your website is designed, developed, and launched with direct
        communication throughout the process.
      </p>
    </div>
  </div>
</div>

      <p className="cta-helper">
  No pressure. Just a quick conversation about your goals.
      </p>

      <div className="who-i-work-with">
  <h2>Who I Work With</h2>
  <p>
    I specialize in building modern, reliable websites for small to medium local businesses in Scarborough and surrounding areas. My clients typically include:
  </p>

  <div className="client-types">
    <div className="client-type">Contractors & Trades</div>
    <div className="client-type">Restaurants & Cafés</div>
    <div className="client-type">Professional Services</div>
    <div className="client-type">Local Retail & Shops</div>
    <div className="client-type">Health & Wellness</div>
  </div>
</div>
      {/* ✅ Button group */}
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={2}
        justifyContent="center"
        alignItems="center"
        sx={{ mt: 3 }}
      >
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#111',
            color: '#fff',
            '&:hover': { backgroundColor: '#38bdf8' },
            borderRadius: 2,
            px: 3,
            py: 1.5,
            fontWeight: 'bold',
          }}
          onClick={() => navigate('/contact')}
        >
          Start a Project
        </Button>

        <Button
          variant="contained"
          sx={{
            backgroundColor: '#111',
            color: '#fff',
            '&:hover': { backgroundColor: '#38bdf8' },
            borderRadius: 2,
            px: 3,
            py: 1.5,
            fontWeight: 'bold',
          }}
          onClick={() => navigate('/about')}
        >
          Here's More About Me
        </Button>
      </Stack>
    </div>
  );
}

export default Home;