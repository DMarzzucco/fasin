// respon
let menuVisible = false;
function showAndHideM() {
    if (menuVisible) {
        document.getElementById("nav").classList = "";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}
function selecionar() {
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

// tabla
function openTab(tabName) {
    var tablas = document.querySelectorAll('.tab');
    tablas.forEach(function (tab) {
        tab.classList.remove('active', 'scale-up-center');
    });

    document.getElementById(tabName).classList.add('active', 'scale-up-center');
}
//redir
function redireccionar(url) {
    if (url && url !== '#') {
        window.location.href = url;
    }
}


// 
let currentSlide = 0;
const slides = document.querySelectorAll('.res-cons');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${100 * (i - index)}%)`;
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

showSlide(currentSlide);
