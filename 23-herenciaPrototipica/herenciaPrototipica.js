// Funcion constructora donde se agregan los metodos al prototipo
function Animal(nombre, genero) {
  // Solo Atributos sin metodos
  this.nombre = nombre;
  this.genero = genero;
}

// Metodos agregados al prototipo de la funcion constructora
Animal.prototype.sonar = function () {
  console.log('Hago sonidos por que estoy vivo');
};
Animal.prototype.saludar = function () {
  console.log(`Hola me llamo ${this.nombre}`);
};

// Herencia Prototipica, Funcion Prototipica Perro
function Perro(nombre, genero, tamanio) {
  this.super = Animal;
  this.super(nombre, genero);
  this.tamanio = tamanio;
}

// Perro esta heredando de Animal
Perro.prototype = new Animal();
Perro.prototype.constructor = Perro;

// SobreEscritura de metodos del prototype padre en el hijo
Perro.prototype.sonar = function () {
  console.log('Soy un perro y mi sonido es un ladrido');
};

Perro.prototype.ladrar = function () {
  console.log('Guauu Guauu!!');
};

const rex = new Perro('Rex', 'Macho', 'Grande');
const sacha = new Animal('Sacha', 'Hembra');

console.log(rex);
console.log(sacha);

rex.sonar();
rex.saludar();
rex.ladrar();

sacha.sonar();
sacha.saludar();
