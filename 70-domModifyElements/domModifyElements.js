// appendChild agrega al final del DOM
const $cards = document.querySelector('.cards');
const $newCard = document.createElement('figure');
const $cloneCards = $cards.cloneNode(true);

$newCard.innerHTML = `
  <img src="https://placeimg.com/200/200/any" alt="Any">
  <figcaption>Any</figcaption>
`;
$newCard.classList.add('card');

// remplazar card en posicion
// $cards.replaceChild($newCard, $cards.children[2]);

// Insertar card al inicio
// $cards.insertBefore($newCard, $cards.firstElementChild);

// Eliminar card al final
// $cards.removeChild($cards.lastElementChild);

// Clonar node, toda la seccion de cards
document.body.appendChild($cloneCards);
