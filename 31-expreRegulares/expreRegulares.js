/*
  Expresiones Regulares
  Son una secuencia de caracteres que forma un patrón de búsqueda, principalmente utilizada para la búsqueda de patrones de cadenas de caracteres.
*/
let cadena =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem fuga cupiditate dolores saepe, praesentium sit eaque recusandae id sapiente similique, laudantium voluptatum perferendis ea iure ad odio doloremque ea3rum voluptate.';

let expReg = new RegExp('lorem', 'ig');
// console.log(expReg.test(cadena));
// console.log(expReg.exec(cadena));

// buscar palabra param1 la pabra a buscar param2 la flag
// let expReg2 = /lorem/gi;
// console.log(expReg2.test(cadena));
// console.log(expReg2.exec(cadena));

// si se envia un numero y no hay return false y si hay true
let expReg2 = /3/;
// console.log(expReg2.test(cadena));

let expReg3 = /lorem{1,}/gi;
console.log(expReg2.test(cadena));
