export function Studio() {
  return (
    <>
      <section className="manifesto" id="studio" style={{ background: "var(--bg-soft)" }}>
        <span className="section-head__tag">(03) — L&apos;agence</span>
        <p className="manifesto__text" data-reveal-words>
          Nous sommes Adrien et Ophélie, un duo d&apos;associés basé à Breil-sur-Roya. Nous créons
          des sites web qui rassurent vos clients et font décrocher votre téléphone. Pas de jargon,
          pas de promesses floues — juste des sites clairs, un SEO qui ramène du monde, et une IA
          qui répond quand vous êtes sur un chantier.
        </p>
        <div className="manifesto__sign">
          <span className="manifesto__sign-line" />
          <span>Adrien &amp; Ophélie — L&apos;Agence Grey</span>
        </div>
      </section>

      <section
        className="intro"
        style={{
          background: "var(--bg-lighter)",
          borderTop: "1px solid var(--line)",
          borderBottom: "1px solid var(--line)",
        }}
      >
        <div className="section-head">
          <span className="section-head__tag">Ce qui nous distingue</span>
          <h2 className="section-head__title" data-split-words>
            Le web qui rassure, concrètement
          </h2>
        </div>
        <div className="intro__grid" style={{ borderTop: "none", paddingTop: 0 }}>
          <div className="stat" data-cursor="hover">
            <span
              className="stat__num"
              style={{
                fontSize: "clamp(1.1rem,2vw,1.4rem)",
                background: "none",
                color: "var(--white)",
              }}
            >
              Clarté
            </span>
            <span className="stat__label">
              Des prix lisibles, sans surprise. Vous savez ce que vous payez.
            </span>
          </div>
          <div className="stat" data-cursor="hover">
            <span
              className="stat__num"
              style={{
                fontSize: "clamp(1.1rem,2vw,1.4rem)",
                background: "none",
                color: "var(--white)",
              }}
            >
              Proximité
            </span>
            <span className="stat__label">
              Basés à Breil-sur-Roya, on connaît les réalités du terrain.
            </span>
          </div>
          <div className="stat" data-cursor="hover">
            <span
              className="stat__num"
              style={{
                fontSize: "clamp(1.1rem,2vw,1.4rem)",
                background: "none",
                color: "var(--white)",
              }}
            >
              Intégration
            </span>
            <span className="stat__label">Intégration de votre planning de réservation.</span>
          </div>
          <div className="stat" data-cursor="hover">
            <span
              className="stat__num"
              style={{
                fontSize: "clamp(1.1rem,2vw,1.4rem)",
                background: "none",
                color: "var(--white)",
              }}
            >
              Sur mesure
            </span>
            <span className="stat__label">Chaque site est unique. Pas de template générique.</span>
          </div>
        </div>
      </section>
    </>
  );
}
