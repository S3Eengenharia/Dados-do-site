// Carrega header e footer em todas as páginas
// document.addEventListener('DOMContentLoaded', () => {
//     fetch('./assets/partials/header.html')
//         .then(response => response.text())
//         .then(data => {
//             document.body.insertAdjacentHTML('afterbegin', data);
//         });

//     fetch('./assets/partials/footer.html')
//         .then(response => response.text())
//         .then(data => {
//             document.body.insertAdjacentHTML('beforeend', data);
//         });
// });

// Carrega Header e Footer dinamicamente
document.addEventListener('DOMContentLoaded', () => {
  // Carrega Header
  fetch('./assets/partials/header.html')
    .then(response => response.text())
    .then(data => {
      document.body.insertAdjacentHTML('afterbegin', data);
      highlightActiveLink();
    });

  // Carrega Footer
  fetch('./assets/partials/footer.html')
    .then(response => response.text())
    .then(data => {
      document.body.insertAdjacentHTML('beforeend', data);
    });

  // Destaca link ativo no menu
  function highlightActiveLink() {
    const currentPage = location.pathname.split('/').pop();
    document.querySelectorAll('nav a').forEach(link => {
      if (link.getAttribute('href') === currentPage) {
        link.classList.add('text-primary', 'font-semibold');
      }
    });
  }
});