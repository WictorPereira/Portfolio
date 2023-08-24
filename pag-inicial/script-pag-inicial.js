/*Carosel*/ 
const carousels = document.querySelectorAll('.lista-projetos');

carousels.forEach((carousel) => {
    const prevButton = carousel.querySelector('.prev-button');
    const nextButton = carousel.querySelector('.next-button');
    const ulProjetos = carousel.querySelector('.ul-projetos');

    let currentSlide = 0;
    const slideWidth = 480 + 10; // Largura do slide + gap
    const animationDuration = 300; // Duração da animação em milissegundos

    prevButton.addEventListener('click', () => {
        currentSlide = Math.max(currentSlide - 1, 0);
        ulProjetos.style.transition = `transform ${animationDuration}ms ease-in-out`;
        ulProjetos.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    });

    nextButton.addEventListener('click', () => {
        const maxSlide = ulProjetos.children.length - 1;
        currentSlide = Math.min(currentSlide + 1, maxSlide);
        ulProjetos.style.transition = `transform ${animationDuration}ms ease-in-out`;
        ulProjetos.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    });

    ulProjetos.addEventListener('transitionend', () => {
        ulProjetos.style.transition = 'none';
    });
});
    /*Barra de Rolagem*/ 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
