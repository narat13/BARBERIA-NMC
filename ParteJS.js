let currentSlide = 0;
let slideInterval;

// Mostrar la diapositiva actual
function showSlide(index) {
    const slides = document.querySelectorAll('.carrusel-slide');
    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? 'block' : 'none';
    });
}

// Mover la diapositiva
function moveSlide(direction) {
    const slides = document.querySelectorAll('.carrusel-slide');
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Inicializar el carrusel
function initCarousel() {
    showSlide(currentSlide);
    slideInterval = setInterval(() => moveSlide(1), 5000); // Cambiar cada 5 segundos
}

// Detener el carrusel al pasar el mouse
function stopCarousel() {
    clearInterval(slideInterval);
}

// Reiniciar el carrusel al salir el mouse
function startCarousel() {
    slideInterval = setInterval(() => moveSlide(1), 5000);
}

// Validar el formulario de contacto
function validateForm(event) {
    event.preventDefault(); // Evitar el envío del formulario
    const name = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const message = document.querySelector('textarea').value;

    if (name === '' || email === '' || message === '') {
        alert('Por favor, completa todos los campos.');
    } else {
        alert('Gracias por tu mensaje, ' + name + '! Nos pondremos en contacto contigo pronto.');
        document.querySelector('form').reset(); // Reiniciar el formulario
    }
}

// Agregar eventos
document.addEventListener('DOMContentLoaded', () => {
    initCarousel();

    // Agregar eventos para detener y reiniciar el carrusel
    const carousel = document.querySelector('.carrusel');
    carousel.addEventListener('mouseenter', stopCarousel);
    carousel.addEventListener('mouseleave', startCarousel);

    // Agregar evento de validación al formulario
    const form = document.querySelector('form');
    form.addEventListener('submit', validateForm);

    // Suavizar el desplazamiento al hacer clic en los enlaces
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
