/* client/src/pages/Services.js */
import './Services.css';

const SERVICES = [
  { img: '/images/service1.png', title: 'Web Development', fit: 'contain', desc: 'Responsive, modern websites built with React, HTML, and CSS.' },
  { img: '/images/service2.png', title: 'Mobile-First UI', fit: 'contain', desc: 'Mockups and prototype apps designed mobile-first.' },
  { img: '/images/service3.png', title: 'Database Integration', fit: 'contain', desc: 'SQL/NoSQL database setup and backend integration.' },
];

function Services() {
  return (
    <section className="section">
      <div className="container">
        <div className="page-head">
          <p className="eyebrow">What I do</p>
          <h1>Services</h1>
          <p className="lead">End-to-end help getting your business online and working well.</p>
        </div>

        <div className="grid-cards">
          {SERVICES.map((s) => (
            <article className="card" key={s.title}>
              <a className={`card-media ${s.fit === 'contain' ? 'card-media--contain' : ''}`}
                 href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.title}>
                <img src={s.img} alt={s.title} />
              </a>
              <div className="card-body">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
