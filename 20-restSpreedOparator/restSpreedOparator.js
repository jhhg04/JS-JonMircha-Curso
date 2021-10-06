/*
Se usa el spread operator para pasar un array a una lista de argumentos. 
Esto puede ser muy útil en casos donde tenemos que pasar una lista de argumentos (no un array) a un método/función.
*/
function sumar(a, b, ...c) {
  let resultado = a + b;
  c.forEach(function (n) {
    resultado += n;
  });
  return resultado;
}
console.log(sumar(1, 2));
console.log(sumar(1, 2, 3, 4, 5));
console.log(sumar(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

const arr1 = [1, 2, 3, 4, 5],
  arr2 = [6, 7, 8, 9, 0];
console.log(arr1, arr2);

const arr3 = [arr1, arr2];
console.log(arr3);

const arr4 = [...arr1, ...arr2];
console.log(arr4);
