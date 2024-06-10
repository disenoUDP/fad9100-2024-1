function nextSlide(button) {
    const carousel = button.closest('.carousel');
    const slides = carousel.querySelectorAll('img');
    let currentIndex = Array.from(slides).findIndex(slide => slide.classList.contains('active'));
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add('active');
}

function prevSlide(button) {
    const carousel = button.closest('.carousel');
    const slides = carousel.querySelectorAll('img');
    let currentIndex = Array.from(slides).findIndex(slide => slide.classList.contains('active'));
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    slides[currentIndex].classList.add('active');
}