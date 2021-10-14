const $figure = document.createElement('figure');
const $img = document.createElement('img');
const $figcaption = document.createElement('figcaption');
const $figcaptionText = document.createTextNode('Animals');
const $cards = document.querySelector('.cards');
const $figure2 = document.createElement('figure');

// Crear nodo para new card de uno por uno
$img.setAttribute('src', 'https://placeimg.com/200/200/animals');
$img.setAttribute('alt', 'Animals');
$figure.classList.add('card');
$figcaption.appendChild($figcaptionText);
$figure.appendChild($img);
$figure.appendChild($figcaption);
$cards.appendChild($figure);

// Crear nodo para new card de uno por uno
$figure2.innerHTML = `
<img src="https://placeimg.com/200/200/people" alt="People">
<figcaption>People</figcaption>
`;
$figure2.classList.add('card');
$cards.appendChild($figure2);

// Crear nodo para varios cards
const estaciones = ['Primavera', 'Verano', 'Otoño', 'Invierno'];
const $ul = document.createElement('ul');

document.write('<h3>Estaciones del Año</h3>');
document.body.appendChild($ul);

estaciones.forEach((el) => {
  const $li = document.createElement('li');
  $li.textContent = el;
  $ul.appendChild($li);
});

// Insertar directamente al DOM solo cuando sean pocos elementos
const continentes = ['África', 'América', 'Asia', 'Europa', 'Oceanía'];
const $ul2 = document.createElement('ul');
document.write('<h3>Continentes del Mundo</h3>');
document.body.appendChild($ul2);
$ul2.innerHTML = '';
continentes.forEach((el) => ($ul2.innerHTML += `<li>${el}</li>`));

// Fragmentos del dom, cuando son muchos elementos hace una sola insercion
const meses = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre',
];
const $ul3 = document.createElement('ul');
const $fragment = document.createDocumentFragment();

meses.forEach((el) => {
  const $li = document.createElement('li');
  $li.textContent = el;
  $fragment.appendChild($li);
});

document.write('<h3>Meses del Año</h3>');
$ul3.appendChild($fragment);
document.body.appendChild($ul3);
