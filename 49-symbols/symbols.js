/*
  SYMBOL
  tipo de datos cuyos valores son únicos e immutables. 
  Dichos valores pueden ser utilizados como identificadores (claves) de las propiedades de los objetos. 
  Cada valor del tipo Symbol tiene asociado un valor del tipo String o Undefined que sirve únicamente como descripción del símbolo.
*/

let id = 'hola';
let id2 = 'hola';
console.log(id === id2);

let id3 = Symbol();
let id4 = Symbol();
console.log(id3 === id4);

let id5 = Symbol('id5');
let id6 = Symbol('id6');
console.log(id5, id6);
console.log(typeof id5, typeof id6);

const NOMBRE = Symbol('nombre');
const SALUDAR = Symbol('saludar');

const persona = {
  [NOMBRE]: 'John',
  edad: 35,
};
console.log(persona);

persona.NOMBRE = 'John Herrera';
console.log(persona);
console.log(persona.NOMBRE);
console.log(persona[NOMBRE]);

persona[SALUDAR] = function () {
  console.log('hola');
};
console.log(persona);
persona[SALUDAR]();

for (const propiedad in persona) {
  console.log(propiedad, persona[propiedad]);
}

console.log(Object.getOwnPropertySymbols(persona));
