let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide_paquetes');
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    const offset = -currentSlide * 100;
    document.querySelector('.slides_paquetes').style.transform = `translateX(${offset}%)`;
}

function moveSlide(direction) {
    showSlide(currentSlide + direction);
}

// Opcional: Avanza automáticamente cada 5 segundos
setInterval(() => {
    moveSlide(1);
}, 5000);
