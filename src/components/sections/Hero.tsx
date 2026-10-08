export function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />
        <div className="hero__orb hero__orb--3" />
        <div className="hero__orb hero__orb--4" />
        <div className="hero__grid" />
        <div className="hero__glow" />
      </div>

      <div className="hero__content">
        <p className="hero__eyebrow reveal-line">
          <span className="hero__eyebrow-dot" />
          Agence web &amp; IA — Nice · Côte d&apos;Azur
        </p>

        <h1 className="hero__title">
          <span className="hero__line">
            <span className="hero__word" data-split>
              Le web
            </span>
          </span>
          <span className="hero__line">
            <span className="hero__word hero__word--outline" data-split>
              qui rassure
            </span>
          </span>
        </h1>

        <div className="hero__bottom">
          <p className="hero__desc reveal-line">
            Sites web, SEO local &amp; automatisation pour studios de yoga, pole dance, pilates,
            reformer et lagree.
            <br />
            Visibilité Google dès l&apos;ouverture, plannings intégrés, appels qui décrochent.
          </p>
          <a href="#services" className="hero__scroll magnetic" data-cursor="hover">
            <span className="hero__scroll-circle">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M12 5v14M5 12l7 7 7-7"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span>Scroll</span>
          </a>
        </div>
      </div>

      <div className="hero__badge" aria-hidden="true">
        <svg viewBox="0 0 100 100" className="hero__badge-svg" aria-hidden="true">
          <defs>
            <path id="circlePath" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
          </defs>
          <text>
            <textPath href="#circlePath">AGENCE GREY • AGENCE GREY • AGENCE GREY • </textPath>
          </text>
        </svg>
        <div className="hero__badge-center">✦</div>
      </div>

      <div className="marquee marquee--hero" aria-hidden="true">
        <div className="marquee__track" data-marquee>
          <span>
            Studio yoga Nice <i>✦</i> Pole dance Côte d&apos;Azur <i>✦</i> Pilates Nice <i>✦</i>{" "}
            Reformer Monaco <i>✦</i> Lagree Cannes <i>✦</i> Menton <i>✦</i>
          </span>
          <span>
            Studio yoga Nice <i>✦</i> Pole dance Côte d&apos;Azur <i>✦</i> Pilates Nice <i>✦</i>{" "}
            Reformer Monaco <i>✦</i> Lagree Cannes <i>✦</i> Menton <i>✦</i>
          </span>
        </div>
      </div>
    </section>
  );
}
