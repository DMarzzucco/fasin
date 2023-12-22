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

