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
// contarLetras();
// contarLetras(3);
// contarLetras('hola mundo');
// contarLetras('ñoño');

/*
19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.
*/

const validarNombre = (nombre = '') => {
  if (!nombre) return console.warn('No ingresaste una cadena de texto');
  if (typeof nombre !== 'string')
    return console.error(
      `El valor "${nombre}" ingresado NO es una cadena de texto`
    );
  let expReg = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/g.test(nombre);
  return expReg
    ? console.info(`"${nombre}", es un nombre valido`)
    : console.info(`"${nombre}", NO es un nombre valido`);
};
// validarNombre();
// validarNombre(3);
// validarNombre('John');
// validarNombre('John Herrera');
// validarNombre('John Herrera,');
// validarNombre('John Herrera, 34');

/*
20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.
alt + 94 = ^, la ü es alt + 129, alt + 154 = Ü y alt + 92 = \,
La expresión regular que uso para el email en este video /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i
*/

const validarEmail = (email = '') => {
  if (!email) return console.warn('No ingresaste un email');
  if (typeof email !== 'string')
    return console.error(
      `El valor "${email}" ingresado NO es una cadena de texto`
    );
  let expReg =
    /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(
      email
    );
  return expReg
    ? console.info(`"${email}", es un Email valido`)
    : console.warn(`"${email}", NO es un email valido`);
};
// validarEmail();
// validarEmail(3);
// validarEmail('jon,mir,cha@gmail');
// validarEmail('jonmircha@gmail.com');

/*
 Punto Extra -> Fusion 19-20
*/
const validarPatron = (cadena = '', patron = undefined) => {
  if (!cadena)
    return console.warn('No ingresaste una cadena de texto a evaluar');
  if (typeof cadena !== 'string')
    return console.error(
      `El valor "${cadena}" ingresado, NO es una cadena de texto`
    );
  if (patron === undefined)
    return console.warn('No ingresaste una patron a evaluar');
  if (!(patron instanceof RegExp))
    return console.error(
      `El valor "${patron}" ingresado, NO es una expresion regular`
    );

  let expReg = patron.test(cadena);
  return expReg
    ? console.info(`"${cadena}", cumple con el patron ingresado`)
    : console.warn(`"${cadena}", NO cumple con el patron ingresado`);
};
validarPatron();
validarPatron(3);
validarPatron('Jonathan Mircha');
validarPatron('Jonathan Mircha', 'hola');
validarPatron('Jonathan Mircha', [1, 2, 3]);
validarPatron('Jonathan Mircha', /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/g);
validarPatron('Jonathan Mircha 19', /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/g);
validarPatron(
  'jonmircha@gmail.com',
  /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i
);
validarPatron(
  'jonmircha@gmail',
  /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i
);
validarPatron(
  'jonmircha@gmail.com',
  new RegExp(
    '/[a-z0-9]+(.[_a-z0-9]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,15})/',
    'i'
  )
);
validarPatron(
  'jonmircha@gmail',
  new RegExp(
    '/[a-z0-9]+(.[_a-z0-9]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,15})/',
    'i'
  )
);
