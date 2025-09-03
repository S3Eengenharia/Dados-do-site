// Script para navegação do carrossel
        document.addEventListener('DOMContentLoaded', function () {
            const carrossel = document.querySelector('#servicos .overflow-x-auto');
            const prevBtn = document.querySelector('.servico-prev');
            const nextBtn = document.querySelector('.servico-next');

            let isDown = false;
            let startX;
            let scrollLeft;

            // Navegação por botões
            prevBtn.addEventListener('click', () => {
                carrossel.scrollBy({ left: -300, behavior: 'smooth' });
            });

            nextBtn.addEventListener('click', () => {
                carrossel.scrollBy({ left: 300, behavior: 'smooth' });
            });

            // Navegação por arraste (para mobile/desktop)
            carrossel.addEventListener('mousedown', (e) => {
                isDown = true;
                startX = e.pageX - carrossel.offsetLeft;
                scrollLeft = carrossel.scrollLeft;
            });

            carrossel.addEventListener('mouseleave', () => {
                isDown = false;
            });

            carrossel.addEventListener('mouseup', () => {
                isDown = false;
            });

            carrossel.addEventListener('mousemove', (e) => {
                if (!isDown) return;
                e.preventDefault();
                const x = e.pageX - carrossel.offsetLeft;
                const walk = (x - startX) * 2;
                carrossel.scrollLeft = scrollLeft - walk;
            });

            // Toque para dispositivos móveis
            carrossel.addEventListener('touchstart', (e) => {
                isDown = true;
                startX = e.touches[0].pageX - carrossel.offsetLeft;
                scrollLeft = carrossel.scrollLeft;
            });

            carrossel.addEventListener('touchend', () => {
                isDown = false;
            });

            carrossel.addEventListener('touchmove', (e) => {
                if (!isDown) return;
                const x = e.touches[0].pageX - carrossel.offsetLeft;
                const walk = (x - startX) * 2;
                carrossel.scrollLeft = scrollLeft - walk;
            });
        });