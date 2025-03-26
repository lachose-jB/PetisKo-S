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
    }
  } else {
    // Si toutes les pages sont déjà tournées, recommencer depuis la première
    reversePages();
  }
}

// Fonction pour revenir progressivement à la première page
function reversePages() {
  for (var j = pages.length - 1; j >= 0; j--) {
    (function(index) {
      setTimeout(function() {
        pages[index].classList.remove('flipped');
      }, 200 * (pages.length - index)); // Ajout d'un délai pour un effet progressif
    })(j);
  }
}
