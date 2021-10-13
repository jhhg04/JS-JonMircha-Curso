/*
  THIS
  Objeto en el que se esta trabajando y contexto en el que se esta
 */
console.log(this);
console.log(window);
console.log(this === window);

this.nombre = 'Contexto Global';
console.log(this.nombre);

function imprimir() {
  console.log(this.nombre);
}
imprimir();

const obj = {
  nombre: 'Contexto Objeto',
  imprimir: function () {
    console.log(this.nombre);
  },
};
obj.imprimir();

const obj2 = {
  nombre: 'Contexto Objeto2',
  imprimir,
};
obj2.imprimir();

const obj3 = {
  nombre: 'Contexto Objeto',
  imprimir: () => {
    console.log(this.nombre);
  },
};
obj3.imprimir();

function Persona(nombre) {
  const that = this;
  that.nombre = nombre;
  return function () {
    console.log(that.nombre, 44);
  };

  // this.nombre = nombre;
  // return console.log(this.nombre);
  // return function () {
  //   console.log(this.nombre, 22);
  // };
  // return () => {
  //   console.log(this.nombre);
  // };
}

let jon = new Persona('Jon');
jon();
