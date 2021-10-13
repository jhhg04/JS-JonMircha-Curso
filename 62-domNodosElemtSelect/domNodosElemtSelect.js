// Los 3 primeros ya no se usan, lo remplazaron querySelector devuelven coleccion de html
console.log(document.getElementsByTagName('li'));
console.log(document.getElementsByClassName('card'));
console.log(document.getElementsByName('nombre'));
console.log(document.getElementById('menu'));

// querySelector solo trae el promer selector que encuentre
console.log(document.querySelector('#menu'));
console.log(document.querySelector('a'));

// querySelectorAll trae una NodeList con todos los que encuentre
// Aunque NodeList no es un Array, tiene algunos metodos, es posible iterar sobre él utilizando forEach().
console.log(document.querySelectorAll('a'));
document.querySelectorAll('a').forEach((el) => console.log(el));

console.log(document.querySelector('.card'));
console.log(document.querySelectorAll('.card'));
console.log(document.querySelectorAll('.card')[2]);
console.log(document.querySelector('#menu li'));
console.log(document.querySelectorAll('#menu li'));
