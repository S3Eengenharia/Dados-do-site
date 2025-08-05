  document.addEventListener('DOMContentLoaded', function() {
        const slides = document.querySelectorAll('.hero-slide');
        const indicators = document.querySelectorAll('.carousel-indicator');
        const prevBtn = document.querySelector('.carousel-prev');
        const nextBtn = document.querySelector('.carousel-next');
        let currentSlide = 0;
        let autoSlideInterval;

        // Função para mostrar slide
        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.toggle('opacity-100', i === index);
                slide.classList.toggle('opacity-0', i !== index);
            });

            indicators.forEach((indicator, i) => {
                indicator.classList.toggle('bg-white', i === index);
                indicator.classList.toggle('bg-white/50', i !== index);
            });

            currentSlide = index;
        }

        // Avançar slide
        function nextSlide() {
            const nextIndex = (currentSlide + 1) % slides.length;
            showSlide(nextIndex);
        }

        // Retroceder slide
        function prevSlide() {
            const prevIndex = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(prevIndex);
        }

        // Iniciar autoplay
        function startAutoSlide() {
            autoSlideInterval = setInterval(nextSlide, 5000); // Muda a cada 5 segundos
        }

        // Parar autoplay quando interagir
        function pauseAutoSlide() {
            clearInterval(autoSlideInterval);
        }

        // Event listeners
        nextBtn.addEventListener('click', () => {
            nextSlide();
            pauseAutoSlide();
        });

        prevBtn.addEventListener('click', () => {
            prevSlide();
            pauseAutoSlide();
        });

        indicators.forEach(indicator => {
            indicator.addEventListener('click', () => {
                const slideIndex = parseInt(indicator.getAttribute('data-slide'));
                showSlide(slideIndex);
                pauseAutoSlide();
            });
        });

        // Iniciar
        startAutoSlide();
    });