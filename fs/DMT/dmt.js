function showContent(contentId) {
  // Abre el contenido seleccionado
  var selectedContent = document.getElementById(contentId);

  // Oculta el contenido al tocarlo nuevamnete
  if (selectedContent.classList.contains('active')) {
    selectedContent.classList.remove('active');
  } else {
    // Oculta todos los contenidos
    var contents = document.querySelectorAll('.tab-content');
    contents.forEach(function(content) {
      content.classList.remove('active');
    });

    // Muestra el contenido al tocarlo
    selectedContent.classList.add('active');
  }
}