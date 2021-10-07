// Las clasees no reciben params los recibe el constructor
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
    super(nombre, genero);
    this.tamanio = tamanio;
  }
  sonar() {
    console.log('Soy un Perro y mi sonido es un ladrido');
  }
  ladrar() {
    console.log(`Guauu Guauu!!!`);
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
