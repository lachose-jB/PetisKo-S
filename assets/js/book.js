var pages = document.getElementsByClassName('page');

// Initialisation des pages et de leur z-index
for (var i = 0; i < pages.length; i++) {
  var page = pages[i];
  if (i % 2 === 0) {
    page.style.zIndex = (pages.length - i);
  }
}

// Lorsque le DOM est complètement chargé, attribuer des événements de clic aux pages
document.addEventListener('DOMContentLoaded', function () {
  for (var i = 0; i < pages.length; i++) {
    pages[i].pageNum = i + 1;
  }
});

// Fonction pour tourner les pages avec un bouton "Page Suivante"
function rotatePage() {
  var currentPage = document.querySelector('.page:not(.flipped)');
  
  if (currentPage) {
    currentPage.classList.add('flipped');
    
    // Ajouter "flipped" à la page suivante
    var nextPage = currentPage.nextElementSibling;
    if (nextPage) {
      nextPage.classList.add('flipped');
    } else {
      // Si c'est la dernière page, revenir à la première page
      // Réinitialiser toutes les pages
      for (var j = 0; j < pages.length; j++) {
        pages[j].classList.remove('flipped');
      }
      
      // Revenir à la première page
      pages[0].classList.add('flipped');
    }
  }
}
