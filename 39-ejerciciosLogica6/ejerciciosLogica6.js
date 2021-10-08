/*
18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
*/

const contarLetras = (cadena = '') => {
  if (!cadena) return console.warn('No ingresaste una cadena de texto');
  if (typeof cadena !== 'string')
    return console.error(
      `El valor "${cadena}" ingresado NO es una cadena de texto`
    );
  let vocales = 0;
  let consonantes = 0;
  cadena = cadena.toLocaleLowerCase();
  for (const letra of cadena) {
    if (/[aeiouáéíóú]/.test(letra)) {
      vocales++;
    }
    if (/[bcdfghjklmnñpqrstvwxyz]/.test(letra)) {
      consonantes++;
    }
  }
  return console.info({ cadena, vocales, consonantes });
};
contarLetras();
contarLetras(3);
contarLetras('hola mundo');
contarLetras('ñoño');

/*
19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.
*/

/*
20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.
*/
