/*
21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
*/
const devolverCuadrados = (arr = undefined) => {
  if (arr === undefined)
    return console.warn('No ingrsaste un arreglo de numeros');
  if (!(arr instanceof Array))
    return console.error('El valor que ingrsaste no es un arreglo');
  if (arr.length === 0) return console.error('El arreglo esta vacio');
  for (const num of arr) {
    if (typeof num !== 'number')
      return console.error(`El valor "${num}"ingresado, NO es un numero`);
  }
  const newArr = arr.map((el) => el * el);
  return console.info(
    `Arreglo original:${arr}\nArreglo elevado al cuadrado:${newArr}`
  );
};
// devolverCuadrados();
// devolverCuadrados(3);
// devolverCuadrados([]);
// devolverCuadrados([1, '3', 4]);
// devolverCuadrados([1, 4, {}]);
// devolverCuadrados([1, 4, 8]);

/*
22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
*/

const arrayMinMax = (arr = undefined) => {
  if (arr === undefined)
    return console.warn('No ingrsaste un arreglo de numeros');
  if (!(arr instanceof Array))
    return console.error('El valor que ingrsaste no es un arreglo');
  if (arr.length === 0) return console.error('El arreglo esta vacio');
  for (const num of arr) {
    if (typeof num !== 'number')
      return console.error(`El valor "${num}"ingresado, NO es un numero`);
  }
  return console.info(
    `Arreglo original:${arr}\nValor mayor:${Math.max(
      ...arr
    )}\nValor menor:${Math.min(...arr)}`
  );
};
// arrayMinMax();
// arrayMinMax(false);
// arrayMinMax([]);
// arrayMinMax([2, 3, true]);
// arrayMinMax([2, 3, true]);
// arrayMinMax([1, 4, 5, 99, -60]);

/*
23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.
*/
const separarParesImpares = (arr = undefined) => {
  if (arr === undefined)
    return console.warn('No ingrsaste un arreglo de numeros');
  if (!(arr instanceof Array))
    return console.error('El valor que ingrsaste no es un arreglo');
  if (arr.length === 0) return console.error('El arreglo esta vacio');
  for (const num of arr) {
    if (typeof num !== 'number')
      return console.error(`El valor "${num}"ingresado, NO es un numero`);
  }
  return console.info({
    pares: arr.filter((num) => num % 2 === 0),
    impares: arr.filter((num) => num % 2 === 1),
  });
};
separarParesImpares();
separarParesImpares(false);
separarParesImpares([]);
separarParesImpares([2, 3, true]);
separarParesImpares([2, 3, true]);
separarParesImpares([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
