// client/src/pages/ClientWork.js
import React from "react";
import "./ClientWork.css";

const clientProjects = [
  {
    title: "Private Chef Website",
    fit: 'contain',
    image: "/images/chef_Keianna.png",
    description: "Modern booking-focused website for catering and private chef services.",
    tech: ["React", "Responsive Design", "UI/UX"],
    link: "https://kodykam.github.io/Chef-Keianna/",
  },
  {
    title: "Builder / Renovation Co.",
    fit: 'contain',
    image: "/images/gensintri.png",
    description: "Conversion-focused site showcasing renovation services and completed work.",
    tech: ["React", "SEO", "Mobile"],
    link: "https://kodykam.github.io/BelRenovations/",
  },
  {
    title: "Household of Faith Church",
    fit: 'contain',
    image: "/images/household.png",
    description: "Community-centered site for events, sermons, announcements, and outreach.",
    tech: ["React", "Content Layout", "Accessibility"],
    link: "https://kodykam.github.io/isrealTeach/",
  },
];

function ClientWork() {
  return (
    <section className="section">
      <div className="container">
        <div className="page-head">
          <p className="eyebrow">Client work</p>
          <h1>Websites built for real clients</h1>
          <p className="lead">Live sites designed and developed end-to-end.</p>
        </div>

        <div className="grid-cards">
          {clientProjects.map((project) => (
            <article className="card" key={project.title}>
              <a className={`card-media ${project.fit === 'contain' ? 'card-media--contain' : ''}`}
                 href={project.link} target="_blank" rel="noopener noreferrer" aria-label={project.title}>
                <img src={project.image} alt={project.title} />
              </a>
              <div className="card-body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tag-row" style={{ marginBottom: '1rem' }}>
                  {project.tech.map((t) => <span className="tag" key={t}>{t}</span>)}
                </div>
                <a className="link-arrow" href={project.link} target="_blank" rel="noopener noreferrer">
                  View project <span>&rarr;</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ClientWork;
