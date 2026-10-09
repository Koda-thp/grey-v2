interface Project {
  url: string;
  year: string;
  title: string;
  meta: string;
  variant?: "tall" | "wide";
}

const projects: Project[] = [
  {
    url: "https://www.orastudioreformer.fr",
    year: "2026",
    title: "Ora Studio Reformer",
    meta: "Studio de reformer",
    variant: "tall",
  },
  {
    url: "https://www.pole-dance-troyes.fr",
    year: "2026",
    title: "Pole Dance Troyes",
    meta: "Studio de pole dance · Troyes",
  },
  {
    url: "https://clone-prana.vercel.app",
    year: "2024",
    title: "Prana Studio",
    meta: "Yoga Paris · Design élégant & immersif",
  },
  {
    url: "https://studio-360-chi.vercel.app",
    year: "2025",
    title: "Studio 360",
    meta: "Pole dance · Design Barbie & immersif",
    variant: "tall",
  },
  {
    url: "https://magron-indol.vercel.app",
    year: "2025",
    title: "Magron Construction",
    meta: "Maçonnerie de luxe · Le Lavandou",
    variant: "wide",
  },
];

export function Work() {
  return (
    <section className="work" id="work">
      <div className="section-head">
        <span className="section-head__tag">(02) — Réalisations</span>
        <h2 className="section-head__title">Quelques sites qu&apos;on a déjà créés</h2>
      </div>

      <div className="work__grid">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`project ${project.variant ? `project--${project.variant}` : ""}`}
          >
            <div className="project__visual">
              <div className="project__preview">
                <iframe
                  src={project.url}
                  loading="lazy"
                  sandbox="allow-same-origin allow-scripts"
                  title={project.title}
                />
              </div>
              <span className="project__year">{project.year}</span>
            </div>
            <div className="project__info">
              <h3 className="project__title">{project.title}</h3>
              <p className="project__meta">{project.meta}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
