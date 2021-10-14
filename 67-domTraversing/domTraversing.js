// DOM Traversing: Recorriendo el DOM
// var para Acceder a elementos del DOM
const $cards = document.querySelector('.cards');
console.log($cards);

// Acceder a los hijos y hijo particular
console.log($cards.children);
console.log($cards.children[2]);

// Acceder al padre
console.log($cards.parentElement);

// Acceder al primer y ultimo elemento del nodo hijo
console.log($cards.firstElementChild);
console.log($cards.lastElementChild);

// Acceder al anterior y posterior elemeto hermano
console.log($cards.previousElementSibling);
console.log($cards.nextElementSibling);

// busca el ancestro mas cercano hacia afuera
console.log($cards.closest('div'));
console.log($cards.closest('body'));
console.log($cards.children[3].closest('section'));
