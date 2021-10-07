const saludar = function () {
  console.log(`Hola`);
};

const saludarArrow = () => {
  console.log(`Hola`);
};

const saludarArrow2 = () => console.log(`Hola`);

const saludarArrow3 = (nombre) => console.log(`Hola ${nombre}`);

// saludar();
// saludarArrow();
// saludarArrow2();
// saludarArrow3('john');

const sumar = function (a, b) {
  return a + b;
};

const sumarArrow = (a, b) => a + b;

const funcionVariasLineas = (a, b) => {
  console.log(`uno`);
  console.log(`dos`);
  console.log(`tres`);
};

// console.log(sumar(1, 2));
// console.log(sumarArrow(1, 2));
// funcionVariasLineas();

const numeros = [1, 2, 3, 4, 5];

// numeros.forEach(function (el, index) {
//   console.log(`${el} esta en la posicion ${index}`);
// });

numeros.forEach((el, index) =>
  console.log(`${el} esta en la posicion ${index}`)
);

function Perro() {
  console.log(this);
}
// Perro();

/*
Al declarar funtions en Objetos literales el this es el objeto 
{nombre: 'Kenai', ladrar: ƒ}
*/
const perro2 = {
  nombre: 'Kenai',
  ladrar: function () {
    console.log(this);
  },
};
perro2.ladrar();

/*
Al declarar Arrow funtions en Objetos literales el this es el objeto global Window e,d se saltan contexto en el que estam que es el objeto
Window {window: Window,
*/
const perro3 = {
  nombre: 'Kenai',
  ladrar: () => console.log(this),
};
perro3.ladrar();
