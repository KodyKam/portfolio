// client/src/pages/ClientWork.js
import React from "react";
import "./ClientWork.css";

const clientProjects = [
  {
    title: "Private Chef Website",
    image: "/images/chef_Keianna.png",
    description:
      "Modern booking-focused website designed for catering and private chef services.",
    tech: ["React", "Responsive Design", "UI/UX"],
    link: "https://kodykam.github.io/Chef-Keianna/", 
  },
  {
    title: "Builder / Renovation Co.",
    image: "/images/gensintri.png",
    description:
      "Conversion-focused website showcasing renovation services and completed portfolio work.",
    tech: ["React", "SEO", "Mobile Optimization"],
    link: "https://kodykam.github.io/BelRenovations/",
  },
  {
    title: "Household of Faith Church",
    image: "/images/household.png",
    description:
      "Community-centered website for events, sermons, announcements, and outreach.",
    tech: ["React", "Content Layout", "Accessibility"],
    link: "https://kodykam.github.io/isrealTeach/",
  },
];

function ClientWork() {
  return (
    <div className="page-container clientwork-container">
      <h1>Client Work</h1>

      <p className="clientwork-intro">
        Websites currently designed and developed for real clients.
      </p>

      <div className="client-grid">
        {clientProjects.map((project, index) => (
          <div className="client-card" key={index}>
            
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="client-image"
            />

            <h2>{project.title}</h2>

            <p>{project.description}</p>

            <div className="tech-stack">
              {project.tech.map((t, i) => (
                <span key={i}>{t}</span>
              ))}
            </div>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="visit-btn"
            >
              View Project →
            </a>

          </div>
        ))}
      </div>
    </div>
  );
}

export default ClientWork;