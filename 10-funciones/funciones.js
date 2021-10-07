// funcion declarada
function estoEsUnaFuncion() {
  console.log('uno');
  console.log('dos');
  console.log('tres');
}
// invocacion de funcion
// estoEsUnaFuncion();
// estoEsUnaFuncion();
// estoEsUnaFuncion();

function funcionQueDevuelveValor() {
  console.log('uno');
  return 1;
  console.log('dos');
  console.log('tres');
  return 'La funcion ha retornado una cadena de texto';
}

// funcionQueDevuelveValor();
// let valorDeFuncion = funcionQueDevuelveValor();
// console.log(valorDeFuncion);

function saludar(nombre, edad) {
  console.log(`Hola mi nombre es ${nombre} y tengo ${edad} años`);
}

function saludar2(nombre = 'Desconocido', edad = 0) {
  console.log(`Hola mi nombre es ${nombre} y tengo ${edad} años`);
}
// saludar('Kenai', 7);
// saludar();
// saludar2();

// funcion declarada vs funcion Expresada
funcionDeclarada();
function funcionDeclarada() {
  console.log(
    'Funcion Declarada, puede invocarse en cualquier parte de nuestro codigo, incluso antes de que la funcion sea declarada'
  );
}
funcionDeclarada();

// funcion Expresada -> funcion anonima se asigna a una variable
// funcionExpresada();
const funcionExpresada = function () {
  console.log(
    'Funcion Expresada, es una funcion que se asigna a una variable, si se envoca antes de su definicion Js nos dira funciones.js:45 Uncaught ReferenceError: Cannot access funcionExpresada before initialization'
  );
};
funcionExpresada();
