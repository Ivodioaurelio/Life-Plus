const toggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
const overlay = document.getElementById('overlay');

toggle.addEventListener('click', () => {
  menu.classList.toggle('show');
  overlay.classList.toggle('active');
  toggle.innerHTML = menu.classList.contains('show') ? '&#10006;' : '&#9776;';
  
});
overlay.addEventListener('click', () => {
    menu.classList.remove('show');
    overlay.classList.remove('active');
    toggle.innerHTML = '&#9776;'; // Voltar para o ícone ☰
  });

// Se clicar fora (no overlay), fecha o menu
overlay.addEventListener('click', () => {
  menu.classList.remove('show');
  overlay.classList.remove('active');
});



// Slider com setas
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const anteriorBtn = document.getElementById('anterior');
const proximoBtn = document.getElementById('proximo');

function mostrarSlideManual(index) {
    slideIndex = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => {
        slide.classList.remove('ativo');
        if (i === slideIndex) slide.classList.add('ativo');
    });
}

function proximoSlide() {
    mostrarSlideManual(slideIndex + 1);
}

function slideAnterior() {
    mostrarSlideManual(slideIndex - 1);
}

anteriorBtn.addEventListener('click', slideAnterior);
proximoBtn.addEventListener('click', proximoSlide);

// Troca automática a cada 7 segundos
setInterval(proximoSlide, 5000);
mostrarSlideManual(slideIndex); // Inicia com o primeiro slide

const modoBtn = document.getElementById('modo-btn');

modoBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    // Altera o ícone também
    modoBtn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});
