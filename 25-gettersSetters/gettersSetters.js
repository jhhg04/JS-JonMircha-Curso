/*
 - Un metodo estatico se puede ejecutar sin necesidad de instanciar la clase
 - Los Setters y Getters son metodos especiales que nos permiten establecer y obtener los valores de los atributos de nuestra clase
*/

class Animal {
  // El constructor es un metodo especial que se ejecuta al momento de instanciar la clase
  constructor(nombre, genero) {
    this.nombre = nombre;
    this.genero = genero;
  }

  // Metodos en la clase
  sonar() {
    console.log('Hago sonidos por que estoy vivo');
  }
  saludar() {
    console.log(`Hola me llamo ${this.nombre}`);
  }
}

class Perro extends Animal {
  // El constructor es un metodo especial que se ejecuta al momento de instanciar la clase
  constructor(nombre, genero, tamanio) {
    // Con el super() se manda a llamar el contrusctor de la clase Padre
    super(nombre, genero);
    this.tamanio = tamanio;
    this.raza = null;
  }
  sonar() {
    console.log('Soy un Perro y mi sonido es un ladrido');
  }
  ladrar() {
    console.log(`Guauu Guauu!!!`);
  }
  // Metodos estatico
  static queEres() {
    console.log('Los Perros somos caninos y los mejores amigos del hombre');
  }
  // Metodos Estaticos Get y Set
  get getRaza() {
    return this.raza;
  }
  set setRaza(raza) {
    this.raza = raza;
  }
}

const rex = new Perro('Rex', 'Macho', 'Grande');
const sacha = new Animal('Sacha', 'Hembra');

console.log(rex);
console.log(sacha);

rex.sonar();
rex.saludar();
rex.ladrar();

sacha.sonar();
sacha.saludar();

Perro.queEres();

console.log(rex.getRaza);
rex.setRaza = 'Pastor Aleman';
console.log(rex.getRaza);
