let a = new String('Hola');
// console.log(a);

const b = {};
// console.log(b);

const c = new Object();
// console.log(c);

const jon = {
  nombre: 'Jon',
  apellido: 'Herrera',
  edad: 30,
  pasatiempos: ['Correr', 'Programar', 'Dar Clases'],
  soltero: false,
  contacto: {
    mail: 'jon@mail.com',
    twitter: '@jon',
    movil: '3001234567',
  },
  saludar: function () {
    console.log(`Hola:)`);
  },
  decirMiNombre: function () {
    console.log(
      `Hola me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años, y me puedes seguir como ${this.contacto.twitter} en twitter`
    );
  },
};
// console.log(jon);
console.log(jon['apellido']);
console.log(jon['edad']);
console.log(jon.nombre);
console.log(jon.pasatiempos);
console.log(jon.pasatiempos[1]);
console.log(jon.contacto.twitter);
jon.saludar();
jon.decirMiNombre();
// Keys lista todas las props del objeto
console.log(Object.keys(jon));
// Values lista todas las valores del objeto
console.log(Object.values(jon));
// hasOwnProperty valida si existe la propiedad
console.log(jon.hasOwnProperty('nombre'));
console.log(jon.hasOwnProperty('nacimineto'));
