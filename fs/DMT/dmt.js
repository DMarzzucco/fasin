document.addEventListener('DOMContentLoaded', function () {
    const titulos = document.querySelectorAll('.acordeon h3');
  
    titulos.forEach(titulo => {
      titulo.addEventListener('click', function () {
        // Cierra todos los acordeones menos el cliqueado
        titulos.forEach(t => {
          if (t !== this) {
            t.classList.remove('active');
          }
        });
  
        // Abre o o cierra el acordeon
        this.classList.toggle('active');
      });
    });
  
    // Cierra todos los acordeones cuando tocas afuera
    document.body.addEventListener('click', function (event) {
      const isAcordeonTitle = event.target.matches('.acordeon h3');
      if (!isAcordeonTitle) {
        titulos.forEach(t => t.classList.remove('active'));
      }
    });
  });
  