import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/Footer";
import { Contact } from "@/components/sections/Contact";
import { Services } from "@/components/sections/Services";
import { cities, getCityBySlug } from "@/lib/data/cities";

interface CityPageProps {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
  return cities.map((city) => ({ city: city.slug }));
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const { city } = await params;
  const cityData = getCityBySlug(city);

  if (!cityData) return {};

  return {
    title: cityData.title,
    description: cityData.description,
    openGraph: {
      title: cityData.title,
      description: cityData.description,
      images: ["/image/logo.png"],
      url: `https://agence-grey.fr/villes/${city}`,
      type: "website",
      siteName: "Agence Grey",
      locale: "fr_FR",
    },
    alternates: {
      canonical: `https://agence-grey.fr/villes/${city}`,
    },
  };
}

export default async function CityPage({ params }: CityPageProps) {
  const { city } = await params;
  const cityData = getCityBySlug(city);

  if (!cityData) notFound();

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: cityData.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <section className="hero hero--geo" id="hero" style={{ minHeight: "70svh" }}>
        <div className="hero__bg" aria-hidden="true">
          <div className="hero__orb hero__orb--1" />
          <div className="hero__orb hero__orb--2" />
          <div className="hero__glow" />
        </div>
        <div className="hero__content">
          <p className="hero__eyebrow reveal-line">
            <span className="hero__eyebrow-dot" />
            Agence web &amp; IA — {cityData.name} · Côte d&apos;Azur
          </p>
          <h1 className="hero__title">
            <span className="hero__line">
              <span className="hero__word" data-split>
                Votre site
              </span>
            </span>
            <span className="hero__line">
              <span className="hero__word hero__word--outline" data-split>
                de studio
              </span>
            </span>
            <span className="hero__line">
              <span className="hero__word" data-split>
                à <em className="hero__word-italic">{cityData.name}</em>
              </span>
            </span>
          </h1>
          <div className="hero__bottom">
            <p className="hero__desc reveal-line">{cityData.heroSubtitle}</p>
          </div>
        </div>
        <div className="marquee marquee--hero" aria-hidden="true">
          <div className="marquee__track" data-marquee>
            <span>
              {cityData.name} <i>✦</i> Yoga <i>✦</i> Pole dance <i>✦</i> Pilates <i>✦</i> Reformer{" "}
              <i>✦</i> Lagree <i>✦</i> Côte d&apos;Azur <i>✦</i>
            </span>
            <span>
              {cityData.name} <i>✦</i> Yoga <i>✦</i> Pole dance <i>✦</i> Pilates <i>✦</i> Reformer{" "}
              <i>✦</i> Lagree <i>✦</i> Côte d&apos;Azur <i>✦</i>
            </span>
          </div>
        </div>
      </section>

      <section className="intro">
        <div className="section-head">
          <span className="section-head__tag">Agence web à {cityData.name}</span>
          <h2 className="section-head__title" data-split-words>
            Pourquoi les studios{" "}
            {cityData.name === "Nice"
              ? "niçois"
              : cityData.name === "Cannes"
                ? "cannois"
                : cityData.name === "Monaco"
                  ? "monégasques"
                  : "mentonnais"}{" "}
            nous font confiance
          </h2>
        </div>
        <div className="intro__grid">
          {cityData.stats.map((stat) => (
            <div key={stat.label} className="stat" data-cursor="hover">
              <span
                className="stat__num"
                style={{
                  fontSize: "clamp(1.1rem,2vw,1.4rem)",
                  background: "none",
                  color: "var(--white)",
                }}
              >
                {stat.label}
              </span>
              <span className="stat__label">{stat.description}</span>
            </div>
          ))}
        </div>
      </section>

      <Services />

      <section className="manifesto" id="faq" style={{ background: "var(--bg-soft)" }}>
        <span className="section-head__tag">Questions fréquentes — {cityData.name}</span>
        <h2 className="section-head__title" data-split-words style={{ marginBottom: "2rem" }}>
          Tout savoir sur la création de site web à {cityData.name}
        </h2>
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
          }}
        >
          {cityData.faq.map((item, index) => (
            <details key={item.question} className="faq-item" open={index === 0}>
              <summary className="faq-question">{item.question}</summary>
              <p className="faq-answer">{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <Contact />
      <Footer />
    </main>
  );
}
