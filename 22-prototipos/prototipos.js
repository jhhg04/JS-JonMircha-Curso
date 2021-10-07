/* 
Platon el tratado de las ideas ,primer programador
instancia -> representacion fisica de una idea
POO
  clases -> Modelo a seguir, Molde
  Objeto -> Instancia de una clase, Copia del Molde
  Atributo -> CAracteristica o propiedad del objeto(variables dentro de codigo)
  Metodo-> Accion que un objeto puede realizar(son funciones en un objeto)
*/

// Object literal se crea a de a uno
const animal = {
  nombre: 'Rex',
  sonar() {
    console.log('Hago sonidos por que estoy vivo');
  },
};

const animal2 = {
  nombre: 'Sacha',
  sonar() {
    console.log('Hago sonidos por que estoy vivo');
  },
};

console.log(animal);
console.log(animal2);

/*
// Funcion constructora para generar instancias, una funcion genera un prototipo vacio
function Animal(nombre, genero) {
  // Atributos
  this.nombre = nombre;
  this.genero = genero;

  // Metodos
  this.sonar = function () {
    console.log('Hago sonidos por que estoy vivo');
  };
  this.saludar = function (params) {
    console.log(`Hola me llamo ${this.nombre}`);
  };
}
*/

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
Animal.prototype.saludar = function (params) {
  console.log(`Hola me llamo ${this.nombre}`);
};

const rex = new Animal('Rex', 'Macho');
const sacha = new Animal('Sacha', 'Hembra');

console.log(rex);
console.log(sacha);

rex.sonar();
rex.saludar();

sacha.sonar();
sacha.saludar();
