    document.addEventListener('DOMContentLoaded', function() {
        const carouselInner = document.querySelector('.carousel-inner');
        const items = document.querySelectorAll('.carousel-item');
        let currentIndex = 0;

        function updateCarousel() {
            carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
            currentIndex = (currentIndex + 1) % items.length;
        }
        setInterval(updateCarousel, 1600);
    });
