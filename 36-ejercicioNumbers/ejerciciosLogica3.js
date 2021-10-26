/*
  9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
*/

const numeroAleatorio = () =>
  console.info(Math.round(Math.random() * 100 + 500));
// numeroAleatorio();

/*
  10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.

*/
const numeroCapicua = (numero = 0) => {
  if (!numero) return console.warn('No ingresaste ningun numero');
  if (typeof numero !== 'number')
    return console.error(`El valor "${numero}" ingresado NO es numero`);
  numero = numero.toString();
  let alReves = numero.split('').reverse().join('');
  return numero === alReves
    ? console.info(
        `SI es Capicua, numero original ${numero}, numero al reves ${alReves}`
      )
    : console.info(
        `NO es Capicua, numero original ${numero}, numero al reves ${alReves}`
      );
};
// numeroCapicua();
// numeroCapicua('19');
// numeroCapicua(200);
// numeroCapicua(2002);
// numeroCapicua(18.99);
// numeroCapicua(212.212);

/*
  11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.
*/

const numeroFactorial = (numero = undefined) => {
  if (numero === undefined) return console.warn('No ingresaste ningun numero');
  if (typeof numero !== 'number')
    return console.error(`El valor "${numero}" ingresado NO es numero`);
  if (numero === 0) return console.error('El numero NO puede ser 0');
  if (Math.sign(numero) === -1)
    return console.error('El numero NO puede ser negativo');

  factorial = 1;
  for (let i = numero; i > 1; i--) {
    factorial *= i;
  }
  return console.info(`El factorial del ${numero} es ${factorial}`);
};
numeroFactorial();
numeroFactorial('3');
numeroFactorial(0);
numeroFactorial(-1);
numeroFactorial(5);
