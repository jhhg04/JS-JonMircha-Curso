/*
24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
*/

const ordenarArreglo = (arr = undefined) => {
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
    arr,
    asc: arr.filter((num) => num).sort(),
    desc: arr
      .filter((num) => num)
      .sort()
      .reverse(),
  });
};
// ordenarArreglo();
// ordenarArreglo(false);
// ordenarArreglo([]);
// ordenarArreglo([2, 3, true]);
// ordenarArreglo([7, 5, 7, 8, 6]);

/*
25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
*/

const quitarDuplicados = (arr = undefined) => {
  if (arr === undefined)
    return console.warn('No ingrsaste un arreglo de numeros');
  if (!(arr instanceof Array))
    return console.error('El valor que ingrsaste no es un arreglo');
  if (arr.length === 0) return console.error('El arreglo esta vacio');
  if (arr.length === 1)
    return console.error('El arreglo debe tener al menos 2 elementos');
  // Solucion con Filter
  // return console.info({
  //   arr,
  //   sinDuplicados: arr.filter(
  //     (value, index, self) => self.indexOf(value) === index
  //   ),
  // });
  // Solucion con Set
  return console.info({
    arr,
    sinDuplicados: [...new Set(arr)],
  });
};
// quitarDuplicados();
// quitarDuplicados(false);
// quitarDuplicados([]);
// quitarDuplicados([2]);
// quitarDuplicados(['x', 10, 'x', 2, '10', 10, true, true]);

/*
26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.
*/

const promedio = (arr = undefined) => {
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
    arr.reduce((total, num, index, arr) => {
      total += num;
      if (index === arr.length - 1) {
        return `El promedio de ${arr.join(' + ')} es ${total / arr.length}`;
      } else {
        return total;
      }
    })
  );
};
promedio();
promedio(false);
promedio([]);
promedio([2, 3, true]);
promedio([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);
