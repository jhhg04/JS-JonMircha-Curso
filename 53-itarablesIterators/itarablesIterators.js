/*
  Iterable -> Elemento que su contenido se puede recorrer
  Iterator -> apuntador que esta recorriendo los elementos
*/

const iterable = [1, 2, 3, 4, 5];
//const iterable = "Hola Mundo";
//const iterable = new Set([1, 2, 3, 3, 4, 5]);
//const iterable = new Map([["nombre", "jon"], ["edad", 35]]);
const iterable2 = 'Hola Mundo';

// Accedemos al iterador de iterable
const iterador = iterable[Symbol.iterator]();
const iterador2 = iterable2[Symbol.iterator]();

console.log(iterable);
console.log(iterador);

console.log(iterable2);
console.log(iterador2);

// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());

let next = iterador.next();
while (!next.done) {
  console.log(next.value);
  next = iterador.next();
}
