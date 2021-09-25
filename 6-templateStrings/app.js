let name = 'John';
let lastName = 'Herrera';

/*
    Concatenacion de varibles
*/

let saludo = 'Hi my name is ' + name + ' ' + lastName + '.';
console.log(saludo);

let ul =
  '<ul><li>Primavera</li><li>Verano</li><li>Otoño</li><li>Invierno</li></ul>';
console.log(ul);

let ul2 = '<ul>';
ul2 += '<li>Primavera</li>';
ul2 += '<li>Verano</li>';
ul2 += '<li>Otoño</li>';
ul2 += '<li>Invierno</li>';
ul2 += '</ul>';
console.log(ul2);
/*
    Interpolacion de varibles
    Template String
*/

let saludo2 = `Hi my name is ${name} ${lastName}.`;
// console.log(saludo2);

let ul3 = `
    <ul>
        <li>Primavera</li>
        <li>Verano</li>
        <li>Otoño</li>
        <li>Invierno</li>
    </ul>`;
console.log(ul3);
