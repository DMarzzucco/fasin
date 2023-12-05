//ORIGINAL
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
  

//el culiao que solo se cierra cuando toco arriba

// document.addEventListener('DOMContentLoaded', function () {
//   const titulos = document.querySelectorAll('.acordeon h3');

//   titulos.forEach(titulo => {
//     titulo.addEventListener('click', function (event) {
//       // Cierra todos los acordeones menos el abierto
//       titulos.forEach(t => {
//         if (t !== this) {
//           t.classList.remove('active');
//         }
//       });

//       // Abre o cierra el acordeón
//       this.classList.toggle('active');
//     });
//   });

//   // Cierra todos los acordeones cuando tocas afuera
//   document.addEventListener('click', function () {
//     titulos.forEach(t => t.classList.remove('active'));
//   });

//   // Evitar que el tocar dentro del acordeón cierre los demás acordeones
//   document.querySelector('.acordeon').addEventListener('click', function (event) {
//     event.stopPropagation();
//   });

//   // Permitir la selección de texto dentro del acordeón
//   document.querySelectorAll('.acordeon .acor-content').forEach(content => {
//     content.addEventListener('mousedown', function (event) {
//       event.stopPropagation();
//     });
//   });
// });
