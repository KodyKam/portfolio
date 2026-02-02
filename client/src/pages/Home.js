// client/src/pages/Home.js
import { Button, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1>Welcome!</h1>
      <p className="intro-text">
        Hi! I'm <strong>Kamara Alleyne</strong>, a Software Engineering Technician passionate about building modern, user-friendly web apps.
      </p>
      <p className="mission">
        <strong>Mission Statement:</strong> To use creativity, leadership, and teamwork to develop impactful software solutions that make a difference.
      </p>

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
            backgroundColor: '#38bdf8',
            color: '#fff',
            '&:hover': { backgroundColor: '#0ea5e9' },
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
            backgroundColor: '#38bdf8',
            color: '#fff',
            '&:hover': { backgroundColor: '#0ea5e9' },
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