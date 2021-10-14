/*
El evento DOMContentLoaded es disparado cuando el documento HTML ha sido completamente cargado y parseado, sin esperar hojas de estilo, imágenes y subtramas para finalizar la carga.
El evento load se dispara cuando se ha detectado la carga completa de la página.
Es un error frecuente usar load cuando DOMContentLoaded es mucho más apropiado.
Peticiones asíncronas pausan el parseo del DOM.
*/

// console.log(window.innerWidth);
// console.log(window.innerHeight);
// console.log(window.outerWidth);
// console.log(window.outerHeight);

window.addEventListener('resize', (e) => {
  console.clear();
  console.log('********** Evento Resize **********');
  console.log(window.innerWidth);
  console.log(window.innerHeight);
  console.log(window.outerWidth);
  console.log(window.outerHeight);
  console.log(e);
});

window.addEventListener('scroll', (e) => {
  console.clear();
  console.log('********** Evento Scroll **********');
  console.log(window.scrollX);
  console.log(window.scrollY);
  console.log(e);
});

window.addEventListener('load', (e) => {
  console.log('********** Evento Load **********');
  console.log(window.screenX);
  console.log(window.screenY);
  console.log(e);
});

document.addEventListener('DOMContentLoaded', (e) => {
  console.log('********** Evento DOMContentLoaded **********');
  console.log(window.screenX);
  console.log(window.screenY);
  console.log(e);
});
