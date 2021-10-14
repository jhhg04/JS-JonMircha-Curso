// guardar en var elementos del DOM para diferenciarlas de var de code se le antepone $
const $linkDOM = document.querySelector('.link-dom');

// Acceder a propiedades de css del DOM
console.log($linkDOM.style);
console.log($linkDOM.getAttribute('style'));
console.log($linkDOM.style.backgroundColor);
console.log($linkDOM.style.color);

// Acceder a propiedades de la ventana
console.log(window.getComputedStyle($linkDOM));
console.log(getComputedStyle($linkDOM).getPropertyValue('color'));

// Establecer valores
$linkDOM.style.setProperty('text-decoration', 'none');
$linkDOM.style.setProperty('display', 'block');
$linkDOM.style.width = '50%';
$linkDOM.style.textAlign = 'center';
$linkDOM.style.marginLeft = 'auto';
$linkDOM.style.marginRight = 'auto';
$linkDOM.style.padding = '1rem';
$linkDOM.style.borderRadius = '.5rem';

console.log($linkDOM.style);
console.log($linkDOM.getAttribute('style'));
console.log(getComputedStyle($linkDOM));

//Variables CSS - Custom Properties CSS
const $html = document.documentElement;
const $body = document.body;

// variables de color declarado
let varDarkColor = getComputedStyle($html).getPropertyValue('--dark-color');
let varYellowColor = getComputedStyle($html).getPropertyValue('--yellow-color');

// ver varibales
console.log(varDarkColor, varYellowColor);

// Aplicar variables
$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellowColor;

// Modificar variables
$html.style.setProperty('--dark-color', '#000');
varDarkColor = getComputedStyle($html).getPropertyValue('--dark-color');
$body.style.setProperty('background-color', varDarkColor);
