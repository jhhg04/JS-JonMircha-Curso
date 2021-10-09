console.log(Date());

let fecha = new Date();
console.log(fecha);

//dia del mes
console.log(fecha.getDate());

//dia de la semana D L M M J V S -> 0 1 2 3 4 5 6
console.log(fecha.getDay());

//mes E F M A M J J A S O N D -> 0 1 2 3 4 5 6 7 8 9 10 11
console.log(fecha.getMonth());

//year
console.log(fecha.getFullYear());

//hours, minutes , second, mili
console.log(fecha.getHours());
console.log(fecha.getMinutes());
console.log(fecha.getSeconds());
console.log(fecha.getMilliseconds());

//strings
console.log(fecha.toString());
console.log(fecha.toDateString());
console.log(fecha.toLocaleString());
console.log(fecha.toLocaleTimeString());
console.log(fecha.getTimezoneOffset());

// use date
console.log(fecha.getUTCDate());
console.log(fecha.getUTCHours());
console.log(Date.now());
let cumpleJon = new Date(1984, 4, 23);
console.log(cumpleJon);
