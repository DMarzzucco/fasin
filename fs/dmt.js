// nav responsive
document.getElementById("hideShow-res").addEventListener("click", function () {
    var asideRespon = document.getElementById("aside-respon");
    asideRespon.style.display = (asideRespon.style.display === "none" || asideRespon.style.display === "") ? "block" : "none";
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
// 
