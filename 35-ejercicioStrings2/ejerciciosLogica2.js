/*
  5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
*/

const invertirTexto = (texto = '') => {
  !texto
    ? console.warn('no ingesaste texto')
    : console.info(texto.split('').reverse().join(''));
};
// invertirTexto();
// invertirTexto('hello world');

/*
  6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
*/
const contarPalabraRepetida = (texto = '', palabra = '') => {
  if (!texto) return console.warn('No ingresaste ningun texto');
  if (!palabra) return console.warn('No ingresaste ninguna palabra a evaluar');
  let i = 0;
  let contador = 0;
  while (i !== -1) {
    i = texto.indexOf(palabra, i);
    // console.log(i);
    if (i !== -1) {
      i++;
      contador++;
    }
  }
  return console.info(`La palabra ${palabra} se repite ${contador} veces`);
};
// contarPalabraRepetida();
// contarPalabraRepetida('hola mundo adios mundo');
// contarPalabraRepetida('', 'hola');
// contarPalabraRepetida('hola mundo adios mundo', 'mundo');

/*
  7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
*/

const palindromo = (palabra = '') => {
  if (!palabra) return console.warn('No ingresaste ningun texto');
  palabra = palabra.toLowerCase();
  let alReves = palabra.split('').reverse().join('');
  return palabra === alReves
    ? console.info(
        `SI es palindromo, palabra original ${palabra}, palabra al reves ${alReves}`
      )
    : console.info(
        `NO es palindromo, palabra original ${palabra}, palabra al reves ${alReves}`
      );
};
// palindromo();
// palindromo('hola mundo');
// palindromo('Salas');

/*
  8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
*/

const eliminarCarateres = (texto = '', patron = '') => {
  if (!texto) return console.warn('No ingresaste ningun texto');
  if (!patron) return console.warn('No ingresaste ningun patron');
  console.info(texto.replace(new RegExp(patron, 'ig'), ''));
};
eliminarCarateres();
eliminarCarateres('xyz1, xyz2, xyz3, xyz4 y xyz5');
eliminarCarateres('xyz1, xyz2, xyz3, xyz4 y xyz5', 'xyz');
eliminarCarateres('xyz1, xyz2, xyz3, xyz4 y xyz5', 'xy');
eliminarCarateres(
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  'o'
);
