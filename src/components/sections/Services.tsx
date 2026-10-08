interface Service {
  index: string;
  title: string;
  description: string;
  tags: string[];
  gradient: { g1: string; g2: string };
}

const services: Service[] = [
  {
    index: "01",
    title: "Site vitrine — 749 €",
    description:
      "Une page unique, design sur-mesure pour votre studio. Intégration de votre planning de réservation, horaires et tarifs. SEO local pour apparaître sur Google dès l'ouverture de votre studio.",
    tags: ["Site vitrine", "Design sur-mesure", "Intégration planning", "SEO local"],
    gradient: { g1: "#6d28d9", g2: "#a78bfa" },
  },
  {
    index: "02",
    title: "Site multipages — 1 149 €",
    description:
      "Site complet avec plusieurs pages : présentation des cours, profils des professeurs, page événements, blog, FAQ. SEO poussé + GEO pour dominer les recherches locales.",
    tags: ["Multipages", "SEO poussé", "Blog & événements", "Présentation cours"],
    gradient: { g1: "#4c1d95", g2: "#8b5cf6" },
  },
  {
    index: "03",
    title: "Pack croissance & maintenance — 249 €/mois",
    description:
      "Mises à jour de sécurité, modifications sur demande, création de visuels pour vos événements. Optimisation SEO continue, accompagnement référencement et conseils stratégiques.",
    tags: ["Maintenance", "SEO continu", "Accompagnement", "Création visuels"],
    gradient: { g1: "#7c3aed", g2: "#c4b5fd" },
  },
];

export function Services() {
  return (
    <section className="services" id="services" style={{ background: "var(--bg-soft)" }}>
      <div className="section-head">
        <span className="section-head__tag">(01) — Nos offres</span>
        <h2 className="section-head__title" data-split-words>
          Trois packs, un seul objectif : vous rendre visible
        </h2>
      </div>

      <div className="services__list">
        {services.map((service) => (
          <article
            key={service.index}
            className="service"
            data-cursor="view"
            data-cursor-label="Voir"
          >
            <div className="service__index">{service.index}</div>
            <div className="service__body">
              <h3 className="service__title">{service.title}</h3>
              <p className="service__desc">{service.description}</p>
            </div>
            <div className="service__tags">
              {service.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <div className="service__arrow">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M7 17L17 7M17 7H8M17 7v9"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div
              className="service__bg"
              style={
                {
                  "--g1": service.gradient.g1,
                  "--g2": service.gradient.g2,
                } as React.CSSProperties
              }
            />
          </article>
        ))}
      </div>
    </section>
  );
}
