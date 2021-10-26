/*
  12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
*/

const numeroPrimo = (numero = undefined) => {
  if (numero === undefined) return console.warn('No ingresaste ningun numero');
  if (typeof numero !== 'number')
    return console.error(`El valor "${numero}" ingresado NO es numero`);
  if (numero === 0) return console.error('El numero NO puede ser 0');
  if (numero === 1) return console.error('El numero NO puede ser 1');
  if (Math.sign(numero) === -1)
    return console.error('El numero NO puede ser negativo');

  let divisible = false;
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      divisible = true;
      break;
    }
  }
  return divisible
    ? console.info(`El numero ${numero}, NO es Primo`)
    : console.info(`El numero ${numero}, SI es Primo`);
};

// numeroPrimo();
// numeroPrimo('3');
// numeroPrimo(0);
// numeroPrimo(-1);
// numeroPrimo(1);
// numeroPrimo(5);

/*
  13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
*/

const numeroPar = (numero = undefined) => {
  if (numero === undefined) return console.warn('No ingresaste ningun numero');
  if (typeof numero !== 'number')
    return console.error(`El valor "${numero}" ingresado NO es numero`);
  return numero % 2 === 0
    ? console.info(`El numero ${numero}, SI es Par`)
    : console.info(`El numero ${numero}, es Impar`);
};

// numeroPar();
// numeroPar('3');
// numeroPar(0);
// numeroPar(-1);
// numeroPar(1);
// numeroPar(5);
// numeroPar(50);

/*
  14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.
*/

const convertGrados = (grados = undefined, unidad = undefined) => {
  if (grados === undefined)
    return console.warn('No ingresaste los grados a convertir');
  if (typeof grados !== 'number')
    return console.error(`El valor "${grados}" ingresado NO es numero`);
  if (unidad === undefined)
    return console.warn('No ingresaste el tipo de dato a convertir');
  if (typeof unidad !== 'string')
    return console.error(`El valor "${unidad}" ingresado NO es una letra`);
  if (unidad.length !== 1 || !/(C|F)/.test(unidad))
    return console.error(`Valor "${unidad}" ingresado NO reconocido`);
  if (unidad === 'C') {
    return console.info(`${grados}°C = ${Math.round(grados * (9 / 5) + 32)}°F`);
  } else if (unidad === 'F') {
    return console.info(
      `${grados}°C = ${Math.round((grados - 32) * (5 / 9))}°F`
    );
  } else {
    console.error('El tipo de datos no es valido');
  }
};
convertGrados();
convertGrados('3');
convertGrados(2);
convertGrados(2, true);
convertGrados(2, 'hola');
convertGrados(2, 'E');
convertGrados(100, 'F');
convertGrados(100, 'C');
