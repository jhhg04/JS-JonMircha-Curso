let contador = 0;
/*
El while se usa cuando no se conoce la cantidad de elementos a iterar,  por ejemplo, los generadores (números primos, fibonacci, etc), o cuando se quiere controlar una entrada de usuario, para que intente hasta que entre los valores bien. También es útil para crear ciclos infinitos explícitos, por ejemplo monitorear archivos, redes, o crear un servicio que ejecute permanentemente. 
El do-while si está en deshuso, ya que es simulable con un while y una inicialización verdadera para que se ejecute al menos una vez.
*/

// while (contador < 10) {
//   console.log('while' + contador);
//   contador++;
// }

// do {
//   console.log('doWhile' + contador);
//   contador++;
// } while (contador < 10);

for (let i = 0; i < 10; i++) {
  console.log('for' + i);
}

let numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90];
for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}

// forin desde EC6 para recorrer propiedades de un Object
const jon = {
  nombre: 'Jon',
  apellido: 'Herrera',
  edad: 30,
  pasatiempos: ['Correr', 'Programar', 'Dar Clases'],
  soltero: false,
};

// for (const propiedad in jon) {
//   console.log(propiedad);
// }

// En forin no sirve la notacion de . toca usar []
for (const propiedad in jon) {
  console.log(`Key: ${propiedad}, Value: ${jon[propiedad]}`);
}

// forof desde EC6 para recorrer propiedades de cualquier cosa que se iterable como array y string
for (const elemento of numeros) {
  console.log(elemento);
}

let cadena = 'Hola Mundo';
for (const caracter of cadena) {
  console.log(caracter);
}

for (const elemento of numeros) {
  console.log(elemento);
}
