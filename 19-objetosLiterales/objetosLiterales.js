let nombre = 'Kenai',
  edad = 7;

const perro = {
  nombre: nombre,
  edad: edad,
  ladrar: function () {
    console.log('guauu guauu!!');
  },
};
console.log(perro);
perro.ladrar();

const dog = {
  nombre,
  edad,
  raza: 'criollo',
  ladrar() {
    console.log('guauu guauu guauu!!');
  },
};
console.log(dog);
dog.ladrar();
