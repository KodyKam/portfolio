// client/src/pages/Home.js
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './Home.css';

const STEPS = [
  { n: '01', title: 'Tell me about your project', body: 'Share a few details about your business and what you want your website to achieve.' },
  { n: '02', title: 'We discuss the best approach', body: "You'll receive clear recommendations tailored to your goals — no technical jargon." },
  { n: '03', title: 'Build & launch', body: 'Your site is designed, developed, and launched with direct communication throughout.' },
];

const CLIENTS = ['Contractors & Trades', 'Restaurants & Cafés', 'Professional Services', 'Local Retail & Shops', 'Health & Wellness'];

function Home() {
  return (
    <>
      {/* ---- HERO ---- */}
      <section className="hero surface-dark">
        <div className="container hero-inner">
          <p className="eyebrow reveal reveal-1">Independent Software Engineer · Scarborough, ON</p>
          <h1 className="hero-title reveal reveal-2">
            Modern web development for <span className="hl">growing businesses</span>
          </h1>
          <p className="hero-lead reveal reveal-3">
            I'm Kamara Alleyne — I build modern, user-friendly websites and web apps for
            businesses and organizations. Work directly with the developer building your
            site: no templates, no outsourcing.
          </p>
          <div className="hero-actions reveal reveal-4">
            <Link to="/contact" className="btn btn-primary">
              Start a project <ArrowForwardIcon fontSize="small" />
            </Link>
            <Link to="/about" className="btn btn-secondary">More about me</Link>
          </div>
          <ul className="hero-cred reveal reveal-4">
            <li>Direct communication</li>
            <li>Custom-built websites</li>
            <li>No templates or outsourcing</li>
          </ul>
        </div>
      </section>

      {/* ---- PROCESS ---- */}
      <section className="section">
        <div className="container">
          <div className="page-head">
            <p className="eyebrow">How it works</p>
            <h2>What happens next</h2>
          </div>
          <div className="process-steps">
            {STEPS.map((s) => (
              <div className="step" key={s.n}>
                <span className="step-num">{s.n}</span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
          <p className="cta-helper">No pressure — just a quick conversation about your goals.</p>
        </div>
      </section>

      {/* ---- WHO I WORK WITH ---- */}
      <section className="section--tight who-section">
        <div className="container">
          <div className="page-head">
            <p className="eyebrow">Who I work with</p>
            <h2>Built for local businesses</h2>
            <p className="lead">
              I specialize in reliable, modern websites for small to medium businesses
              in Scarborough and the surrounding GTA.
            </p>
          </div>
          <div className="client-types">
            {CLIENTS.map((c) => <span className="client-type" key={c}>{c}</span>)}
          </div>
        </div>
      </section>

      {/* ---- CTA BAND ---- */}
      <section className="cta-band surface-dark">
        <div className="container cta-inner">
          <div>
            <h2>Have a project in mind?</h2>
            <p className="mission">
              Using creativity, leadership, and teamwork to build software that makes a difference.
            </p>
          </div>
          <Link to="/contact" className="btn btn-primary">
            Start a project <ArrowForwardIcon fontSize="small" />
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;
