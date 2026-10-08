import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "FAQ — Agence Grey | Questions fréquentes sur la création de site web pour studios",
  description:
    "Tout savoir sur la création de site web pour studios de yoga, pole dance & pilates : tarifs, délais, SEO local. Agence Grey répond à vos questions.",
};

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "Combien coûte un site web pour un studio de yoga ou pole dance ?",
    answer: `<p>Chez Agence Grey, nous proposons trois formules adaptées aux studios de mouvement :</p>
<ul>
  <li><strong>Site vitrine — 749 €</strong> : une page unique, design sur-mesure, intégration de votre planning, horaires et tarifs, SEO local</li>
  <li><strong>Site multipages — 1 149 €</strong> : présentation des cours, profils des professeurs, blog, événements, SEO poussé</li>
  <li><strong>Pack croissance — 249 €/mois</strong> : maintenance, modifications, visuels événements, optimisation SEO continue</li>
</ul>
<p>Chaque site est conçu <strong>sur mesure</strong> pour votre activité de studio.</p>`,
  },
  {
    question: "Quels types de studios peuvent bénéficier de vos services ?",
    answer: `<p>Nous sommes spécialisés pour les <strong>studios de mouvement</strong> :</p>
<ul>
  <li><strong>Yoga :</strong> studios de hatha, vinyasa, ashtanga, hot yoga, aerial yoga</li>
  <li><strong>Pole dance :</strong> studios de pole sport, pole fitness, exotic pole</li>
  <li><strong>Pilates :</strong> studios de pilates mat, reformer, Cadillac</li>
  <li><strong>Reformer & Lagree :</strong> studios Megaformer, reformer pilates</li>
  <li><strong>Danse :</strong> studios de barre au sol, danse contemporaine, hip-hop</li>
</ul>
<p>Chaque site est conçu <strong>sur mesure</strong> avec des mots-clés qui correspondent exactement à ce que vos élèves cherchent sur Google.</p>`,
  },
  {
    question: "Proposez-vous l'intégration de plannings de réservation ?",
    answer: `<p>Oui, nous pouvons <strong>intégrer votre planning</strong> directement sur votre site. Nous travaillons avec les solutions les plus utilisées par les studios :</p>
<ul>
  <li>Planning Studio</li>
  <li>Les Wecs</li>
  <li>ClubSystem</li>
  <li>WellnessManager</li>
  <li>OuestFit</li>
  <li>Votre propre outil de réservation</li>
</ul>
<p>Vos élèves peuvent réserver leurs cours directement depuis votre site, sans passer par une plateforme tierce.</p>`,
  },
  {
    question: "Qu'est-ce que le SEO local pour les studios de mouvement ?",
    answer: `<p>Le <strong>SEO local</strong> permet à votre studio d'apparaître dans les résultats Google quand un futur élève cherche un cours près de chez lui. Exemple : « studio yoga Nice », « pole dance Cannes », « pilates reformer Monaco ».</p>
<p><strong>Notre méthode :</strong></p>
<ul>
  <li>Optimisation on-page avec des mots-clés géolocalisés (votre discipline + votre ville)</li>
  <li>Création et optimisation de votre <strong>fiche Google Business Profile</strong></li>
  <li>Maillage local (liens depuis d'autres sites de la région)</li>
  <li>Contenu optimisé pour chaque ville où vous intervenez</li>
</ul>
<p>C'est le moyen le plus efficace d'attirer des élèves dans votre zone géographique, sans payer de publicité.</p>`,
  },
  {
    question: "Comment donnez-vous de la visibilité à votre studio dès son ouverture ?",
    answer: `<p>Notre approche permet de <strong>donner de la visibilité à votre studio dès son ouverture</strong> :</p>
<ul>
  <li><strong>SEO local optimisé dès le lancement</strong> : votre site est indexé sur Google avec les bons mots-clés (discipline + ville)</li>
  <li><strong>Fiche Google Business Profile</strong> : nous créons et optimisons votre fiche pour apparaître dans le pack local</li>
  <li><strong>Site rapide et mobile-first</strong> : vos futurs élèves réservent facilement depuis leur smartphone</li>
  <li><strong>Pages dédiées par ville</strong> : si vous intervenez sur plusieurs communes, nous créons des pages SEO pour chacune</li>
</ul>
<p>Résultat : dès la mise en ligne, votre studio apparaît dans les recherches locales.</p>`,
  },
  {
    question: "En combien de temps mon site sera-t-il en ligne ?",
    answer: `<p>Le délai standard est de <strong>2 à 3 semaines</strong> selon la formule :</p>
<ol>
  <li><strong>Brief</strong> (J1-J2) : on échange sur votre studio, vos cours, vos professeurs</li>
  <li><strong>Maquette</strong> (J5) : vous recevez une proposition visuelle</li>
  <li><strong>Intégration</strong> (J6-J12) : nous codons le site, intégrons votre planning, optimisons le SEO</li>
  <li><strong>Mise en ligne</strong> (J13-J15) : votre site est live et visible sur Google</li>
</ol>
<p>Les sites vitrine peuvent être livrés en <strong>10 jours</strong>.</p>`,
  },
  {
    question: "Dans quelles villes intervenez-vous ?",
    answer: `<p>Agence Grey est basée à <strong>Breil-sur-Roya (06540)</strong> et intervient sur toute la Côte d'Azur :</p>
<ul>
  <li><a href="/villes/nice" style="color:var(--violet-light)">Nice</a> et ses alentours</li>
  <li><a href="/villes/cannes" style="color:var(--violet-light)">Cannes</a>, Le Cannet, Mandelieu</li>
  <li><a href="/villes/monaco" style="color:var(--violet-light)">Monaco</a>, Beausoleil, Cap d'Ail</li>
  <li><a href="/villes/menton" style="color:var(--violet-light)">Menton</a>, Roquebrune-Cap-Martin</li>
  <li>Antibes, Grasse, Saint-Laurent-du-Var, Cagnes-sur-Mer</li>
</ul>
<p>Nous avons des <strong>pages dédiées</strong> pour chaque ville avec du contenu SEO local optimisé pour les studios de mouvement.</p>`,
  },
  {
    question: "Qu'est-ce qui distingue Agence Grey des autres agences web ?",
    answer: `<ul>
  <li><strong>Spécialisation studios de mouvement</strong> — On connaît vos problématiques : plannings, saisonnalité, profs indépendants, fidélisation des élèves.</li>
  <li><strong>Intégration planning</strong> — Votre outil de réservation directement sur votre site, pas de lien externe.</li>
  <li><strong>Visibilité dès l'ouverture</strong> — SEO local optimisé dès le lancement pour attirer vos premiers élèves.</li>
  <li><strong>Prix transparents</strong> — 749 €, 1 149 € ou 249 €/mois. Pas de surprise.</li>
  <li><strong>Proximité</strong> — Basés à Breil-sur-Roya, on se déplace sur la Côte d'Azur. Vous avez un interlocuteur humain.</li>
  <li><strong>Design premium</strong> — Chaque site est unique, pas de template générique.</li>
</ul>`,
  },
];

export default function FAQPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer.replace(/<[^>]*>/g, ""),
      },
    })),
  };

  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <section className="hero" style={{ minHeight: "50svh" }}>
        <div className="hero__bg" aria-hidden="true">
          <div className="hero__orb hero__orb--1" />
          <div className="hero__orb hero__orb--2" />
          <div className="hero__glow" />
        </div>
        <div className="hero__content">
          <p className="hero__eyebrow reveal-line">
            <span className="hero__eyebrow-dot" />
            Agence Grey — Foire aux questions
          </p>
          <h1 className="hero__title">
            <span className="hero__line">
              <span className="hero__word" data-split>
                Tout savoir
              </span>
            </span>
            <span className="hero__line">
              <span className="hero__word hero__word--outline" data-split>
                sur votre
              </span>
            </span>
            <span className="hero__line">
              <span className="hero__word" data-split>
                site <em className="hero__word-italic">web</em>
              </span>
            </span>
          </h1>
        </div>
      </section>

      <section
        className="manifesto"
        style={{
          background: "var(--bg-soft)",
          paddingTop: "4rem",
          paddingBottom: "4rem",
        }}
      >
        <div
          style={{
            maxWidth: "850px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          {faqItems.map((item, index) => (
            <details key={item.question} className="faq-item" open={index === 0}>
              <summary className="faq-question">{item.question}</summary>
              <div className="faq-answer" dangerouslySetInnerHTML={{ __html: item.answer }} />
            </details>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
