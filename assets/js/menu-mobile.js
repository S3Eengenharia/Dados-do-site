document.addEventListener('DOMContentLoaded', () => {
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

  mobileMenuButton.addEventListener('click', () => {
    // Alterna a visibilidade do menu mobile
    mobileMenu.classList.toggle('hidden');
    // Altera o ícone do botão (☰/✕)
    mobileMenuButton.textContent = mobileMenu.classList.contains('hidden') ? '☰' : '✕';
  });

  // Fecha o menu ao clicar em um link
  document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      mobileMenuButton.textContent = '☰';
    });
  });
});