/*
console.log('inicio');
setTimeout(() => {
  console.log('Ejecutando SetTimeout, esto se ejecuta una sola vez');
}, 2000);

setInterval(() => {
  console.log(
    'Ejecutando SetInterval, esto se ejecuta indefinidamente cada cierto intervalo de tiempo'
  );
}, 3000);
*/

// setInterval(() => {
//   console.log(new Date().toLocaleTimeString());
// }, 3000);

/*
let temporizador = setTimeout(() => {
    console.log(new Date().toLocaleTimeString());
}, 1000);
clearTimeout(temporizador);
console.log('despues del clearTimeout');
*/

let temporizador2 = setInterval(() => {
  console.log(new Date().toLocaleTimeString());
}, 2000);
clearInterval(temporizador2);
console.log('despues del clearInterval');
