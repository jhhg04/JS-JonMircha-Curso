// Antes Si se ejecuta sin enviar da hola undifined
function saludar(nombre) {
  console.log(`Hola ${nombre}`);
}
saludar();

// Desde EC6 se puede dar params by default
function saludar2(nombre = 'unkown') {
  console.log(`Hola ${nombre}`);
}
saludar2('John');
saludar2();

// Antes || era el corto ciruito o condicional
function saludar3(nombre) {
  nombre = nombre || 'unknow';
  console.log(`Hola ${nombre}`);
}
saludar3('John');
saludar3();

/*
Cortocircuito OR - cuando el valor de la izquierda en la expresión siempre pueda validar a true, es el valor que se cargará por defecto
*/
console.log('cadena' || 'Valor de la derecha');
console.log(19 || 'Valor de la derecha');
console.log(true || 'Valor de la derecha');
console.log([] || 'Valor de la derecha');
console.log({} || 'Valor de la derecha');
console.log(-2 || 'Valor de la derecha');

// Falsy
console.log(false || 'Valor de la derecha');
console.log(null || 'Valor de la derecha');
console.log(undefined || 'Valor de la derecha');
console.log('' || 'Valor de la derecha');
console.log(0 || 'Valor de la derecha');
/*
Cortocircuito AND - cuando el valor de la izquierda en la expresión siempre pueda validar a false, es el valor que se cargará por defecto
*/
console.log(false && 'Valor de la derecha');
console.log(null && 'Valor de la derecha');
console.log(undefined && 'Valor de la derecha');
console.log('' && 'Valor de la derecha');
console.log(-2 && 'Valor de la derecha');
console.log(0 && 'Valor de la derecha');
console.log('cadena' && 'Valor de la derecha');
console.log(19 && 'Valor de la derecha');
console.log(true && 'Valor de la derecha');
console.log([] && 'Valor de la derecha');
console.log({} && 'Valor de la derecha');
