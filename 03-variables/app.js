/*
 Ambito bloque no existia
 con var hay Hoisting y tienen ambito global
 que es el objeto window
*/
var hola = 'Hi';
let hello = 'Hi';
console.log(hola);
console.log(hello);
// console.log(window);

if (true) {
  var a = 1;
}

/*
    Ambito bloque 
    con let
*/
