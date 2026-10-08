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
    title: "L'Essentiel — 1 490 €",
    description:
      "Un site professionnel, clair et moderne, sans engagement mensuel. Design sur mesure, optimisation mobile, SEO local, formation incluse. Parfait pour poser vos premières pierres sur le web.",
    tags: ["Site vitrine", "Design sur mesure", "SEO local"],
    gradient: { g1: "#6d28d9", g2: "#a78bfa" },
  },
  {
    index: "02",
    title: "Le Confort — 1 290 € + 350 €/mois",
    description:
      "Site toujours à jour, sécurisé et optimisé. Maintenance mensuelle, hébergement inclus, modifications à la demande, SEO régulier. Notre formule la plus populaire.",
    tags: ["Maintenance", "Hébergement", "SEO continu"],
    gradient: { g1: "#4c1d95", g2: "#8b5cf6" },
  },
  {
    index: "03",
    title: "Le Booster — 1 290 € + sur mesure",
    description:
      "Automatisation IA pour accélérer vos ventes. Agent vocal 24/7, rappels automatiques, SMS après appel manqué, demande d'avis Google. Pour ceux qui veulent aller plus loin.",
    tags: ["Agent IA 24/7", "SMS auto", "Rappels RDV"],
    gradient: { g1: "#7c3aed", g2: "#c4b5fd" },
  },
  {
    index: "04",
    title: "Options supplémentaires",
    description:
      "Campagnes Google Ads ciblées, création ou refonte de logo, rédaction de contenus SEO, formation avancée. Ajoutez ce dont vous avez besoin, quand vous en avez besoin.",
    tags: ["Google Ads", "Logo", "Contenu SEO"],
    gradient: { g1: "#5b21b6", g2: "#a78bfa" },
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
