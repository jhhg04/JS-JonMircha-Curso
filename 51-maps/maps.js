/*
  MAP
  Es como un diccionario en python son un tipo de estructuras de datos que permite guardar un conjunto no ordenado de pares clave-valor, siendo las claves únicas dentro de un mismo diccionario (es decir que no pueden existir dos elementos con una misma clave
*/

let mapa = new Map();
mapa.set('nombre', 'John');
mapa.set('apellido', 'Herrera');
mapa.set('edad', 35);

console.log(mapa);
console.log(mapa.size);
console.log(mapa.has('correo'));
console.log(mapa.has('edad'));
console.log(mapa.get('edad'));

mapa.set('nombre', 'John Herrera');
console.log(mapa.get('nombre'));

mapa.delete('apellido');
console.log(mapa);

mapa.set(19, 'diecinueve');
mapa.set(false, 'falso');
mapa.set({}, {});
console.log(mapa);

for (const [key, value] of mapa) {
  console.log(`Llave: ${key}, Valor: ${value}`);
}

const mapa2 = new Map([
  ['nombre', 'kEnAi'],
  ['edad', 7],
  ['animal', 'perro'],
  [null, 'nulo'],
]);
console.log(mapa2);
const llavesMapa2 = [...mapa2.keys()];
const valoresMapa2 = [...mapa2.values()];
console.log(llavesMapa2);
console.log(valoresMapa2);
