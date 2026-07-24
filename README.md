# 🚀 Kasidi Rodrigue Mwinyi — Site Officiel & Landing Page EdTech

[![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://kasidirodrigue.github.io/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/fr/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/fr/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/fr/docs/Web/JavaScript)
[![Design System](https://img.shields.io/badge/Design-Claude%20Design%20%2B%20OKLCH-8A2BE2?style=for-the-badge)](https://kasidirodrigue.github.io/)

Bienvenue sur le dépôt du site officiel de **Kasidi Rodrigue Mwinyi** — Coach Académique & Méthodologique, Ingénieur Civil en IA (Polytech ULB), Maître-Praticien PNL (NLPU Dilts), Fondateur de la startup EdTech [StuFlow.app](https://stuflow.app) et Réalisateur.

Site en ligne : **[https://kasidirodrigue.github.io/](https://kasidirodrigue.github.io/)**

---

## 📌 Sommaire

- [🎯 Vision & Objectif](#-vision--objectif)
- [🛠️ Stack Technique](#️-stack-technique)
- [📈 Processus de Conception & Démarche Pas à Pas](#-processus-de-conception--démarche-pas-à-pas)
  - [1. Prototypage & Design System avec Claude Design](#1-prototypage--design-system-avec-claude-design)
  - [2. Développement du Canvas Constellation & Animations JS](#2-développement-du-canvas-constellation--animations-js)
  - [3. Copywriting & Architecture de Conversion UX](#3-copywriting--architecture-de-conversion-ux)
  - [4. Compilation du Template DC & Accessibilité WCAG](#4-compilation-du-template-dc--accessibilité-wcag)
  - [5. Déploiement & Optimisation GitHub Pages](#5-déploiement--optimisation-github-pages)
- [✨ Fonctionnalités Clés du Site](#-fonctionnalités-clés-du-site)
- [📂 Structure des Fichiers](#-structure-des-fichiers)
- [📜 Historique des Commits & Jalons Majeurs](#-historique-des-commits--jalons-majeurs)
- [👤 Auteur & Contact](#-auteur--contact)

---

## 🎯 Vision & Objectif

L'objectif de cette landing page est d'offrir une expérience utilisateur fluide, élégante et percutante pour les étudiants universitaires à Bruxelles (ULB, UCLouvain, Solvay, Polytech, Droit, Médecine, Hautes Écoles) et les jeunes professionnels. 

Le site allie :
- **Rigueur scientifique & Ingénierie** (Master IA Polytech ULB)
- **Préparation mentale & PNL Systémique** (NLPU Robert Dilts / Spiral Academy)
- **Innovation EdTech** ([StuFlow.app](https://stuflow.app))
- **Storytelling humain** (Film documentaire *« Ce bout de tissu »* avec le CVB)

---

## 🛠️ Stack Technique

- **Markup & Structure** : HTML5 Sémantique, microdonnées Open Graph et balise canonique.
- **Styles & Thème** : CSS3 moderne, variables CSS, système de couleurs OKLCH (`#11131f` obsidian, accents Cyan `#60cedc` & Violet `#ac9ef0`).
- **Typographies Google Fonts** : `Space Grotesk` (Titres & Chiffres) et `IBM Plex Sans` (Corps de texte).
- **Animations & Interactifs** : Canvas 2D HTML5 pur avec `requestAnimationFrame`, algorithme de réseau de neurones / constellation, calcul de distance vectorielle et répulsion au curseur.
- **Compteurs Dynamiques** : JavaScript ES6+ asynchrone avec `IntersectionObserver`.
- **Hébergement & CI/CD** : GitHub Pages avec déploiement automatique multi-branches (`main`, `master`, `gh-pages`).

---

## 📈 Processus de Conception & Démarche Pas à Pas

La construction de ce site s'est déroulée en plusieurs étapes clés, en combinant la puissance de l'outil de prototypage **Claude Design**, des algorithmes d'animation sur-mesure et une optimisation continue pour les conversions.

### 1. Prototypage & Design System avec Claude Design
- Création de la maquette initiale via **Claude Design** dans des fichiers composants `.dc.html` ([Hero.dc.html](file:///c:/Users/melvi/Downloads/Animation%20hero%20pour%20Kasidi%20Rodrigue/Hero.dc.html) et [Landing.dc.html](file:///c:/Users/melvi/Downloads/Animation%20hero%20pour%20Kasidi%20Rodrigue/Landing.dc.html)).
- Élaboration du thème sombre premium avec palette dynamique OKLCH et contrastes travaillés pour éviter toute fatigue visuelle.
- Structuration des composants sous forme de templates réutilisables (`<x-dc>`, `<sc-for>`, `<sc-if>`).

### 2. Développement du Canvas Constellation & Animations JS
- Implémentation du script [assets/js/main.js](file:///c:/Users/melvi/OneDrive/Bureaublad/Rodrigue/kasidirodrigue.github.io/assets/js/main.js) avec la fonction `initHeroConstellation()`.
- Création d'un champ de nœuds interconnectés se déplaçant de manière fluide.
- Ajout d'une boucle de pulsation lumineuse (`shadowBlur = 8 * pulse`) simulant l'activité synaptique / cérébrale.
- Prise en charge des interactions souris (répulsion douce lorsque le curseur survole le canvas).

### 3. Copywriting & Architecture de Conversion UX
- Application des principes d'usabilité de Steve Krug (*"Don't Make Me Think"*) : boutons d'action clairs et visibles immédiatement.
- Alignement du copywriting sur la rentrée et les secondes sessions universitaires ("Sprint Seconde Session & Blocus").
- Remplacement des termes vagues par des appels à l'action précis : **"Session Stratégie Offerte (15 min)"**.
- Mise en valeur des preuves sociales : Avis Google (5.0 ★), témoignages, et barre de confiance d'affiliations (*ULB Polytech, NLPU Dilts, Spiral Academy, BrainCair, Study2Work, CVB*).

### 4. Compilation du Template DC & Accessibilité WCAG
- Conversion intégrale des balises de template Claude Design (`<sc-for>`, `<sc-if>`) en code natif HTML5 sémantique pour garantissant un affichage parfait sur n'importe quel navigateur web sans dépendance externe.
- Intégration du script `startCounters()` pour l'animation progressive des chiffres clés (`500+` étudiants, `100+` professionnels, `2` ebooks, `20+` séminaires, `1` film).
- Mise en conformité avec les normes WCAG (contrastes élevés, rings d'accessibilité `:focus-visible`, liens descriptifs).

### 5. Déploiement & Optimisation GitHub Pages
- Synchronisation complète des branches de production (`main`, `master`, `gh-pages`).
- Ajout de balises canoniques et de paramétrage de cache-busting (`?v=...`) pour forcer le rafraîchissement immédiat des scripts et des styles lors des mises à jour.

---

## ✨ Fonctionnalités Clés du Site

- 🌌 **Section Hero de Constellation Interactive** : Animation Canvas fluide évoquant l'IA, les neurosciences et la PNL.
- 📊 **Compteurs de Métriques Animés** : Déclenchement de l'incrémentation des chiffres dès l'arrivée de la section sur l'écran.
- 🎓 **Offre Coaching & Sprint Blocus** : Cartes détaillant l'accompagnement personnalisé et les méthodes cognitives (Active Recall, planning inversé).
- 🤝 **Barre de Partenariats & Autorité** : Affichage des institutions et certifications.
- 👤 **Biographie & Présentation** : Parcours croisé entre ingénierie, sciences humaines et cinéma.
- 📚 **Section Mémoire & Ebooks** : Intégration vidéo YouTube de présentation + liens de téléchargement directs des guides au format PDF.
- ⏳ **Parcours Chronologique Inverse** : Timeline détaillée retraçant les projets EdTech, la réalisation du film documentaire et les diplômes (2017 à 2026).
- ❓ **FAQ Accordéon & Réservation** : Réponses immédiates aux questions courantes et intégration de la réservation Calendly.

---

## 📂 Structure des Fichiers

```text
kasidirodrigue.github.io/
├── index.html                    # Page principale HTML5 compilée & optimisée
├── about.html                    # Page biographique complémentaire
├── projets.html                  # Galerie des projets et réalisations
├── README.md                     # Documentation officielle du projet
├── assets/
│   ├── css/
│   │   └── style.css             # Système de design, variables OKLCH & animations
│   ├── js/
│   │   └── main.js               # Canvas Constellation, compteurs & interactions JS
│   ├── images/
│   │   ├── kasidi_avatar.jpg     # Portrait officiel
│   │   ├── ebook_question_recherche.png
│   │   └── ebook_defense_memoire.png
│   └── ebooks/
│       ├── question-de-recherche-optimale.html   # Guide Question de recherche
│       └── defense-du-memoire-reussi.html        # Guide Défense du mémoire
```

---

## 📜 Historique des Commits & Jalons Majeurs

- `13e80f5` — Reconstitution complète de la landing page à partir de `Landing.dc.html` avec le système de design OKLCH, liens et images connectés.
- `0ae252b` — Application exacte de la palette de couleurs Cyan (`#60cedc`) et Violet (`#ac9ef0`) pour l'animation Canvas.
- `9dd1a0b` — Correction de la syntaxe JavaScript sur l'écouteur d'événement `scroll`.
- `93b05b9` — Configuration des URLs canoniques, des meta-tags Open Graph et liens de marque.
- `274d67f` — Intégration initiale du Canvas de particules Constellation dans la section Hero.
- `ad924ec` — Application des normes d'accessibilité WCAG & UI/UX Engineering.
- `ee4cf50` — Intégration de l'ensemble des profils sociaux et canaux de communication officiels.
- `db1406d` — Mise en place de l'architecture de conversion UX dédiée au marché étudiant bruxellois.

---

## 👤 Auteur & Contact

**Kasidi Rodrigue Mwinyi**
- **Site Web** : [https://kasidirodrigue.github.io/](https://kasidirodrigue.github.io/)
- **Startup EdTech** : [StuFlow.app](https://stuflow.app)
- **Réservation 15 min** : [Calendly Study2Work](https://calendly.com/kasidirodrigue-coaching/study-to-work-meeting)
- **LinkedIn** : [linkedin.com/in/kasidirodrigue](https://www.linkedin.com/in/kasidirodrigue)
- **Instagram** : [@kasidirodrigue](https://instagram.com/kasidirodrigue)
- **Email** : [kasidi@stuflow.app](mailto:kasidi@stuflow.app)

*© 2026 Kasidi Rodrigue Mwinyi. Tous droits réservés.*
