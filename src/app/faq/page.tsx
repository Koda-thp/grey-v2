import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "FAQ — Agence Grey | Questions fréquentes sur la création de site web",
  description:
    "Tout savoir sur la création de site web pour artisans : tarifs, délais, SEO local, IA vocale. Agence Grey répond à vos questions.",
};

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "Combien coûte un site web pour un artisan ?",
    answer: `<p>Chez Agence Grey, un site vitrine pour artisan démarre à <strong>1 490 €</strong>. Ce tarif inclut :</p>
<ul>
  <li>Design 100% sur mesure (pas de template)</li>
  <li>Optimisation mobile (responsive design)</li>
  <li>SEO local (mots-clés géolocalisés, Google Business Profile)</li>
  <li>Formation à l'utilisation</li>
</ul>
<p>Une formule avec <strong>maintenance mensuelle</strong> est disponible à <strong>1 290 € + 350 €/mois</strong> (hébergement, mises à jour, SEO continu). Pour l'IA vocale 24/7, le tarif est sur mesure selon vos besoins.</p>`,
  },
  {
    question: "Qu'est-ce que l'IA vocale 24/7 et comment ça fonctionne ?",
    answer: `<p>Notre agent IA vocal répond automatiquement aux appels de vos clients <strong>24h/24 et 7j/7</strong>. Il peut :</p>
<ul>
  <li>Prendre des rendez-vous et les ajouter à votre agenda</li>
  <li>Répondre aux questions fréquentes (tarifs, disponibilités, zone d'intervention)</li>
  <li>Envoyer des devis par SMS en temps réel</li>
  <li>Vous notifier immédiatement des appels urgents</li>
</ul>
<p>L'IA est entraînée spécifiquement sur votre activité pour des réponses précises et naturelles. Vos clients ont l'impression de parler à un vrai standardiste.</p>`,
  },
  {
    question: "Quels types d'artisans peuvent bénéficier de vos services ?",
    answer: `<p>Nous travaillons avec <strong>tous les artisans</strong> :</p>
<ul>
  <li><strong>Bâtiment :</strong> climaticiens, plombiers, chauffagistes, électriciens, maçons, menuisiers, peintres, couvreurs, paysagistes, serruriers</li>
  <li><strong>Bien-être & sport :</strong> studios de yoga, pilates, pole dance, salles de sport, spas</li>
  <li><strong>Services :</strong> nettoyage, dépannage, livraison, esthétique à domicile</li>
</ul>
<p>Chaque site est conçu <strong>sur mesure</strong> pour votre activité spécifique, avec des mots-clés qui correspondent exactement à ce que vos clients cherchent sur Google.</p>`,
  },
  {
    question: "En combien de temps mon site sera-t-il en ligne ?",
    answer: `<p>Le délai standard est de <strong>2 à 4 semaines</strong> selon la complexité :</p>
<ol>
  <li><strong>Brief</strong> (J1-J2) : on échange sur votre activité et vos objectifs</li>
  <li><strong>Maquette</strong> (J5) : vous recevez une proposition visuelle</li>
  <li><strong>Intégration</strong> (J6-J15) : nous codons le site et optimisons le SEO</li>
  <li><strong>Formation</strong> (J16) : on vous apprend à gérer votre site</li>
  <li><strong>Mise en ligne</strong> (J17-J20) : votre site est live et visible sur Google</li>
</ol>
<p>Les sites les plus simples peuvent être livrés en <strong>10 jours</strong>.</p>`,
  },
  {
    question: "Qu'est-ce que le SEO local et pourquoi est-ce important ?",
    answer: `<p>Le <strong>SEO local</strong> (Search Engine Optimization) permet à votre site d'apparaître dans les résultats Google quand un client cherche un artisan près de chez lui. Exemple : « plombier Nice », « climatisation Cannes », « cours de yoga Menton ».</p>
<p><strong>Notre méthode :</strong></p>
<ul>
  <li>Optimisation on-page avec des mots-clés géolocalisés</li>
  <li>Création et optimisation de votre <strong>fiche Google Business Profile</strong></li>
  <li>Maillage local (liens depuis d'autres sites de la région)</li>
  <li>Contenu optimisé pour chaque ville où vous intervenez</li>
</ul>
<p>C'est le moyen le plus efficace d'attirer des clients de votre zone géographique, sans payer de publicité.</p>`,
  },
  {
    question: "Proposez-vous la maintenance après la création du site ?",
    answer: `<p>Oui, notre formule <strong>Confort (350 €/mois)</strong> inclut :</p>
<ul>
  <li>Hébergement sécurisé et rapide</li>
  <li>Mises à jour régulières (sécurité, fonctionnalités)</li>
  <li>Modifications de contenu à la demande</li>
  <li>Suivi SEO mensuel avec rapport</li>
  <li>Support prioritaire par email et téléphone</li>
</ul>
<p>Votre site reste toujours à jour, rapide et sécurisé. Vous pouvez vous concentrer sur votre métier.</p>`,
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
<p>Nous avons des <strong>pages dédiées</strong> pour chaque ville avec du contenu SEO local optimisé.</p>`,
  },
  {
    question: "Comment se déroule la création de mon site web étape par étape ?",
    answer: `<p>Notre processus en 5 étapes :</p>
<ol>
  <li><strong>Brief & découverte</strong> — On échange sur votre activité, vos clients, vos objectifs. On définit ensemble le ton et le style.</li>
  <li><strong>Maquette visuelle</strong> — Sous 5 jours ouvrés, vous recevez une proposition de design. Vous validez ou demandez des ajustements.</li>
  <li><strong>Développement & SEO</strong> — On code le site, on rédige les textes, on optimise pour Google. Le tout en 1 à 2 semaines.</li>
  <li><strong>Formation</strong> — On vous apprend à modifier vos textes, ajouter des photos, consulter vos statistiques.</li>
  <li><strong>Mise en ligne</strong> — Votre site est en ligne, indexé sur Google, et vous commencez à recevoir des appels.</li>
</ol>`,
  },
  {
    question: "Qu'est-ce qui distingue Agence Grey des autres agences web ?",
    answer: `<ul>
  <li><strong>Spécialisation artisans</strong> — On ne fait pas de sites pour tout le monde. On connaît vos problématiques : appels manqués, devis, saisonnalité.</li>
  <li><strong>IA intégrée</strong> — Agent vocal 24/7, SMS automatiques, rappels de RDV. Des outils concrets qui vous font gagner du temps.</li>
  <li><strong>Prix transparents</strong> — Pas de surprise. Tout est affiché, clair, sans engagement caché.</li>
  <li><strong>Proximité</strong> — Basés à Breil-sur-Roya, on se déplace sur la Côte d'Azur. Vous avez un interlocuteur humain, pas un chatbot.</li>
  <li><strong>Design premium</strong> — Chaque site est unique. Pas de template générique.</li>
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
