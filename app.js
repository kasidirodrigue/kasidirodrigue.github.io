// Attacher un gestionnaire d'événements au bouton "Rejoindre une équipe" de chaque projet
const joinButtons = document.querySelectorAll('.btn-primary');
joinButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // Récupérer le titre du projet correspondant
    const title = button.parentNode.querySelector('.card-title').textContent;

    // Naviguer vers la page d'inscription en incluant le titre du projet dans l'URL
    window.location.href = `inscription.html?titre=${encodeURIComponent(title)}`;
  });
});
