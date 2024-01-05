// Navegación responsive
const $hideShow = document.getElementById("hideShow-res");
const $aside = document.getElementById("aside-respon");

$hideShow.addEventListener("click", () => {
    $aside.classList.toggle("desplegar");
});

