// Récupération des projets et tri par popularité
const projets = Array.from(document.querySelectorAll('.projet-card'))
projets.sort((a, b) => b.querySelector('.badge-popularite').textContent - a.querySelector('.badge-popularite').textContent)

// Sélection des 3 premiers projets
const projetsPopulaires = projets.slice(0, 3)

// Ajout des projets populaires sur la page d'accueil
const projetsPopulairesContainer = document.getElementById('projets-populaires')
projetsPopulaires.forEach((projet) => {
  const clone = projet.cloneNode(true)
  projetsPopulairesContainer.appendChild(clone)
})