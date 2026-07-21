/* client/src/pages/Projects.js */
import './Projects.css';

const PROJECTS = [
  { title: 'Taskidee', img: '/images/project7.png', href: 'https://taskidee.app/',
    fit: 'contain',
    desc: 'A family task management app that helps parents build daily routines for their kids — with per-child dashboards, customizable task lists, and shareable child links.',
    tech: ['Node.js', 'MongoDB', 'Stripe', 'Resend'] },
  { title: 'SalesPacer', img: '/images/project6.png', href: 'https://salespacer.ca/',
    fit: 'contain',
    desc: 'A daily sales tracker for commission-based salespeople. Calculates dynamic daily targets from income goals, commission rate, and tax rate — adjusting as the season progresses.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'] },
  { title: 'Standly', img: '/images/project4.png', href: 'https://getstandly.app/',
    fit: 'contain',
    desc: 'Simplifies stand-ups with structured updates (yesterday, today, blockers), session tracking, and exportable reports.',
    tech: ['Firebase', 'Stripe', 'Resend'] },
  { title: 'Tithr', img: '/images/project5.png', href: 'https://tithr.ca/',
    fit: 'contain',
    desc: 'A church collection management platform with multi-tenant accounts, automated PDF reports, and subscription billing.',
    tech: ['Next.js', 'Supabase', 'Stripe'] },
  { title: 'Fishing Friends', img: '/images/project1.png', href: 'https://kodykam.github.io/fishing/',
    fit: 'contain',
    desc: 'A responsive site for planning fishing trips with friends.',
    tech: ['HTML', 'Bootstrap'] },
  { title: 'Type Deck II', img: '/images/project2.png', href: 'https://kodykam.github.io/Type-Deck-II/',
    fit: 'contain',
    desc: 'A competitive 2-player typing game.',
    tech: ['HTML', 'CSS', 'JavaScript'] },
  { title: '90 Day Guess', img: '/images/project3.png', href: 'https://kodykam.github.io/90dayFixed/',
    fit: 'contain',
    desc: 'A mini web app built to streamline the shipping process at a previous job.',
    tech: ['JavaScript'] },
];

function Projects() {
  return (
    <section className="section">
      <div className="container">
        <div className="page-head">
          <p className="eyebrow">Selected work</p>
          <h1>Projects</h1>
          <p className="lead">A few things I've built and shipped.</p>
        </div>

        <div className="grid-cards">
          {PROJECTS.map((p) => (
            <article className="card" key={p.title}>
              <a className={`card-media ${p.fit === 'contain' ? 'card-media--contain' : ''}`}
                 href={p.href} target="_blank" rel="noopener noreferrer" aria-label={p.title}>
                 <img src={p.img} alt={p.title} />
              </a>
              <div className="card-body">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="tag-row">
                  {p.tech.map((t) => <span className="tag" key={t}>{t}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
