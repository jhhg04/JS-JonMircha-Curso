// guardar en var elementos del DOM para diferenciarlas de var de code se le antepone $
const $card = document.querySelector('.card');
console.log($card);

// Acceder a propiedades de la class
console.log($card.className);
console.log($card.classList);

// Saber si existe propiedad contains y add para agregarla y revome quitarla
console.log($card.classList.contains('rotate-45'));

// add class
$card.classList.add('rotate-45');
console.log($card.classList.contains('rotate-45'));
console.log($card.className);
console.log($card.classList);

// remove class
$card.classList.remove('rotate-45');
console.log($card.classList.contains('rotate-45'));

// toogle=palanca si tiene la clase la quita y viceversa
$card.classList.toggle('rotate-45');
console.log($card.classList.contains('rotate-45'));
$card.classList.toggle('rotate-45');
console.log($card.classList.contains('rotate-45'));

// replace remplaza la clase
$card.classList.toggle('rotate-45');
$card.classList.replace('rotate-45', 'rotate-135');

// add varias clases al tiempo
$card.classList.add('opacity-80', 'sepia');
$card.classList.remove('opacity-80', 'sepia');
$card.classList.toggle('opacity-80', 'sepia');
