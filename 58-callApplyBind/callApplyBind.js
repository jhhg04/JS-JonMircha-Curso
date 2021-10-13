/*
  CALL - APPLY
 la función apply permite llamar a cualquier función JavaScript indicándole el objeto que actuará como this dentro de la función llamada, de la misma forma que con la función call. 
 La diferencia de apply con call está en que los parámetros se pasan con un array en vez de separados por comas.
 */
console.log(this);
this.lugar = 'Contexto Global';

function saludar(saludo, aQuien) {
  console.log(`${saludo} ${aQuien} desde el ${this.lugar}`);
}
saludar('Hola', 'Sacha');

const obj = {
  lugar: 'Contexto Objeto',
};
saludar.call(obj, 'Hola', 'Jon');
saludar.call(null, 'Hola', 'Jon');
saludar.call(this, 'Hola', 'Jon');

saludar.apply(obj, ['Adios', 'Harold']);
saludar.apply(null, ['Adios', 'Harold']);
saludar.apply(this, ['Adios', 'Harold']);

const persona = {
  nombre: 'Jon',
  saludar: function () {
    console.log(`Hola ${this.nombre}`);
  },
};
persona.saludar();

const otraPersona = {
  // saludar: persona.saludar,
  saludar: persona.saludar.bind(persona),
};
otraPersona.saludar();

// const obj2 = {
//   nombre: 'Contexto Objeto2',
//   imprimir,
// };
// obj2.imprimir();

// const obj3 = {
//   nombre: 'Contexto Objeto',
//   imprimir: () => {
//     console.log(this.nombre);
//   },
// };
// obj3.imprimir();

// function Persona(nombre) {
//   const that = this;
//   that.nombre = nombre;
//   return function () {
//     console.log(that.nombre, 44);
//   };

//   // this.nombre = nombre;
//   // return console.log(this.nombre);
//   // return function () {
//   //   console.log(this.nombre, 22);
//   // };
//   // return () => {
//   //   console.log(this.nombre);
//   // };
// }

// let jon = new Persona('Jon');
// jon();
