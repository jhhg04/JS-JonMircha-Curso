/*
.insertAdjacent...
  .insertAdjacentElement(position, el)
  .insertAdjacentHTML(position, html)
  .insertAdjacentText(position, text)
Posiciones:
  beforebegin(hermano anterior)
  afterbegin(primer hijo)
  beforeend(ultimo hijo)
  afterend(hermano siguiente)
*/

const $cards = document.querySelector('.cards');
const $newCard = document.createElement('figure');
let $contenCard = `
  <img src="https://placeimg.com/200/200/any" alt="Any">
  <figcaption></figcaption>
`;
$newCard.classList.add('card');
$newCard.insertAdjacentHTML('beforeend', $contenCard);
$newCard.querySelector('figcaption').insertAdjacentText('afterbegin', 'Any');
$cards.insertAdjacentElement('afterbegin', $newCard);

// $cards.prepend($newCard);
// $cards.append($newCard);
// $cards.before($newCard);
// $cards.after($newCard);
