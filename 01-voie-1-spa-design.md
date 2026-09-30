---
description: "Voie 1 : Création de Maquette SPA & Exploration Graphique (Focus DA & 21st.dev)"
globs: "src/app/**/*.tsx,src/components/**/*.tsx,src/app/globals.css"
alwaysApply: false
---
# Directives Voie 1 : Maquette SPA & Direction Artistique (Mode Créatif)

## 1. Objectif Unique
Produire un prototype SPA interactif, ultra-léché visuellement ("Wow factor") et fidèle à la Direction Artistique (DA) pour validation immédiate par le client. La priorité absolue est la qualité visuelle, la fluidité des micro-interactions et la vitesse d'itération.

## 2. Bibliothèques et Composants Visuels
- **Composants d'élite :** Exploitez sans restriction les bibliothèques d'interface modernes, en priorité les composants de [21st.dev](https://21st.dev/), Aceternity UI, Magic UI, et Shadcn UI.
- **Animations :** Intégrez Framer Motion, Tailwind Animate ou Canvas pour donner vie aux composants (hover effects, scroll animations, transitions douces).
- **Iconographie :** Utilisez Lucide React ou des icônes SVG inline adaptées à l'univers visuel de la marque.

## 3. Règles d'Assouplissement Technique (Mode Exploration)
Pour maximiser la créativité et éviter tout blocage d'ingénierie prématuré :
- **Directive `'use client'` :** Totalement autorisée sur tous les composants nécessitant des animations, des états locaux (`useState`) ou des écouteurs d'événements navigateur.
- **Classes Tailwind arbitraires :** Les valeurs spécifiques (ex: `w-[380px]`, `tracking-[-0.03em]`, `bg-gradient-to-tr`) sont tolérées pour ajuster les micro-détails au pixel près sans alourdir la configuration.
- **Données simulées (Mock Data) :** Les données doivent être injectées localement (tableaux en dur, JSON de mock) pour tester instantanément des états réalistes sans attendre le backend.

## 4. Exigences Minimales Incompressibles
- **Design System naissant :** Centralisez au minimum la palette chromatique clé et les polices de caractères principales dans `src/app/globals.css` sous la directive `@theme` (Tailwind v4).
- **Responsive Design :** La maquette doit être irréprochable sur desktop (1440px+), tablette (768px) et mobile (390px).
- **Découpage modulaire élémentaire :** Même en mode SPA, chaque bloc fonctionnel (Hero, Navigation, Services/Classes, Pricing, Footer) doit résider dans son propre composant dans `src/components/sections/`.