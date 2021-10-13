console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute('lang'));
console.log(document.querySelector('.link-dom').href);
console.log(document.querySelector('.link-dom').getAttribute('href'));

// cambiar atriibutos
document.documentElement.lang = 'en';
console.log(document.documentElement.lang);

// set atriibutos
document.documentElement.setAttribute('lang', 'es-CO');
console.log(document.documentElement.lang);

// guardar en var elementos del DOM para diferenciarlas de var de code se le antepone $
const $linkDOM = document.querySelector('.link-dom');

$linkDOM.setAttribute('target', '_blank');
$linkDOM.setAttribute('rel', 'noopener');
$linkDOM.setAttribute(
  'href',
  'https://www.youtube.com/watch?v=l6npGZa_vgc&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=64'
);

// saber si tiene atributo hasAtribute
console.log($linkDOM.hasAttribute('rel'));

// Remover atributo
$linkDOM.removeAttribute('rel');
console.log($linkDOM.hasAttribute('rel'));

// Data atributes
console.log($linkDOM.getAttribute('data-description'));
console.log($linkDOM.dataset);
console.log($linkDOM.dataset.description);
$linkDOM.setAttribute('data-description', 'Modelo de Objeto del Documento');
console.log($linkDOM.dataset.description);

$linkDOM.dataset.description = 'Suscribete y Comparte';
console.log($linkDOM.dataset.description);

// Remover atributo
console.log($linkDOM.hasAttribute('data-id'));
console.log($linkDOM.removeAttribute('data-id'));
console.log($linkDOM.hasAttribute('data-id'));
