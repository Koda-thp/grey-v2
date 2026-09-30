---
description: "Voie 2 : Industrialisation MPA, Backend & Sanctuarisation Front-End"
globs: "src/app/**/*.tsx,src/components/**/*.tsx,src/lib/**/*.ts,src/env.ts,src/server/**/*.ts"
alwaysApply: false
---
# Directives Voie 2 : Industrialisation MPA & Backend (Mode Ingénierie)

## 1. Règle d'Or : Sanctuarisation Absolue du Front-End
La Direction Artistique a été validée par le client en Voie 1. Le design est désormais **VERROUILLÉ**.
- **Interdiction Formelle de Modifier le JSX :** Vous ne devez en aucun cas altérer la hiérarchie du DOM, les balises HTML ou les classes Tailwind (`className`) des composants existants dans `src/components/`.
- **Principe des Composants Purs (Dumb Components) :** 
  - Les composants d'interface deviennent de purs composants de présentation.
  - La seule modification autorisée dans `src/components/` consiste à remplacer les données en dur par une interface TypeScript dédiée (`interface ComponentNameProps`).
  - Aucun appel de base de données, fetch API ou logique métier ne doit être écrit dans un composant de `src/components/`.

## 2. Découpage MPA & Architecture Next.js 15
- **Rôle du dossier `src/app/` :** Réservé exclusivement à l'orchestration des routes, au découpage multipage (MPA), à la gestion des métadonnées SEO (OpenGraph, canonicals), et au chargement asynchrone des données.
- **Server Components par Défaut :**
  - Toutes les pages (`page.tsx`) et layouts (`layout.tsx`) doivent être des React Server Components (RSC).
  - Éliminez la directive `'use client'` partout où elle n'est pas strictement requise par un hook React (`useState`, `useEffect`) ou un gestionnaire d'événement navigateur (`onClick`).
  - Les données sont récupérées côté serveur (Server Components ou Server Actions) puis passées en props aux composants de présentation sanctuarisés.

## 3. Typage Strict & Robustesse Runtime
- **Tolérance Zéro `any` :** Aucun type `any`, `unknown` forcé ou `Function` n'est toléré.
- **Validation Runtime :** 
  - Tout schéma de données externe (API, formulaires, paramètres d'URL, base de données) doit être validé par Zod.
  - Les variables d'environnement sont exclusivement consommées via `src/env.ts` (T3 Env).
- **Qualité de code :** Chaque modification doit passer sans erreur `biome check` et `tsc --noEmit`.

## 4. Protocole d'Exécution et Tests de Non-Régression
1. **Planification :** Avant toute modification, listez dans un plan clair les routes à créer, les schémas Zod requis et les interfaces Props à injecter.
2. **Exécution atomique :** Traitez une route ou un endpoint à la fois.
3. **Vérification de parité visuelle :** Exécutez Playwright (`pnpm exec playwright test`) pour garantir qu'aucune régression visuelle supérieure à 1% n'a été introduite par rapport à la maquette originale.
4. **Validation Git :** Rédigez un commit conventionnel conforme (`feat:`, `fix:`, `refactor:`) passant les hooks Lefthook.