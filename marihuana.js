function openModal() {
    document.getElementById('myModal').style.display = 'block';
  }
  
  function closeModal() {
    document.getElementById('myModal').style.display = 'none';
  }
  
  // Cierra el modal si se toca afuera
  window.onclick = function(event) {
    if (event.target == document.getElementById('myModal')) {
      closeModal();
    }
  };
  

  /*consecuencias*/
  let currentPosition = 1;

  function showCard(position) {
    currentPosition = position;
    updateCarousel();
  }

  function updateCarousel() {
    const carousel = document.getElementById("carousel");
    carousel.style.setProperty("--position", currentPosition);
  }

 // funcion de redireccion 
 function redireccionar(url) {
  if (url && url !== '#') {
      window.location.href = url;
  }
}

// nav responsive
document.getElementById("hideShow-res").addEventListener("click", function () {
  var asideRespon = document.getElementById("aside-respon");
  asideRespon.style.display = (asideRespon.style.display === "none" || asideRespon.style.display === "") ? "block" : "none";
});



//acordeón responsive consumo
document.addEventListener('DOMContentLoaded', function () {
  var accordionTitles = document.querySelectorAll('.accordion-item-title');

  accordionTitles.forEach(function (title) {
      title.addEventListener('click', function () {
          var content = this.nextElementSibling;
          content.style.display = content.style.display === 'block' ? 'none' : 'block';
      });
  });
});