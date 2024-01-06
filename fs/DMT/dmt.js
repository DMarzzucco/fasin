// Navegación responsive
const $hideShow = document.getElementById("hideShow-res");
const $aside = document.getElementById("aside-respon");

$hideShow.addEventListener("click", () => {
    $aside.classList.toggle("desplegar");
});

//acordeón responsive precauciones
document.addEventListener('DOMContentLoaded', function () {
    var accordionTitles = document.querySelectorAll('.accordion-item-title');

    accordionTitles.forEach(function (title) {
        title.addEventListener('click', function () {
            var content = this.nextElementSibling;
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        });
    });
});

