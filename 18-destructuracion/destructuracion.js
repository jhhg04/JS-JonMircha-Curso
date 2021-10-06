const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// sin destrucutracion
let uno = numeros[0],
  dos = numeros[1],
  tres = numeros[2];
console.log(uno, dos, tres);

// con destructuracion
const [one, two, three] = numeros;
console.log(one, two, three);

const persona = {
  nombre: 'Jon',
  apellido: 'Herrera',
  edad: 30,
  pasatiempos: ['Correr', 'Programar', 'Dar Clases'],
  soltero: false,
};

let { nombre, apellido, edad, soltero } = persona;
console.log(nombre, apellido, edad, soltero);
