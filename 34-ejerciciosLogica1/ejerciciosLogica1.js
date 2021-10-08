/*
  1. Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFunción("Hola Mundo") devolverá 10 
*/

//   function contarCaracteres(cadena = "") {
//     if (!cadena) {
//       console.warn("No ingresaste ninguna cadena");
//     } else {
//       console.info(
//         `La cadena "${cadena}" tiene ${cadena.length} caracteres`
//       );
//     }
//   }

const contarCaracteres = (cadena = '') => {
  !cadena
    ? console.warn('No ingresaste ninguna cadena')
    : console.info(`La cadena "${cadena}" tiene ${cadena.length} caracteres`);
};
contarCaracteres();
contarCaracteres('Hola Mundo');

/* 
  2. Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFunción("Hola Mundo", 4) devolverá "Hola"
*/

const recortarTexto = (cadena = '', longitud = undefined) => {
  !cadena
    ? console.warn('No ingresaste ninguna cadena')
    : longitud === undefined
    ? console.warn('No ingresaste la longiud')
    : console.info(cadena.slice(0, longitud));
};
// recortarTexto();
// recortarTexto('Hola Mundo', 4);
// recortarTexto('Hola Mundo');
// recortarTexto('', 4);

/* 
  3. Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe.
 miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'] 
*/

const cadenaAArreglo = (cadena = '', separador = undefined) => {
  !cadena
    ? console.warn('No ingresaste ninguna cadena')
    : separador === undefined
    ? console.warn('No ingresaste el separador')
    : console.info(cadena.split(separador));
};
cadenaAArreglo(
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  ' '
);
// cadenaAArreglo('Lun,Mar,Mier,Juev,Vier', ',');
// cadenaAArreglo();
// cadenaAArreglo('hola');
// cadenaAArreglo('', '-');

/* 
  4. Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo 
*/

const repetirTexto = (texto = '', repite = undefined) => {
  if (!texto) return console.warn('No ingresaste ningun texto');
  if (repite === undefined)
    return console.warn('No ingresaste ningun numero repetir');
  if (repite === 0) return console.error('El numero de veces no puede ser 0');
  if (Math.sign(repite) === -1)
    return console.error('El numero de veces no puede ser negativo');
  for (let i = 1; i <= repite; i++) {
    console.info(`${texto}, ${i}`);
  }
};
repetirTexto('Hola');
repetirTexto();
repetirTexto('Hola', 0);
repetirTexto('Hola', -3);
repetirTexto('Hola', 5);
