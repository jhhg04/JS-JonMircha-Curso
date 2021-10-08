/*
15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
*/

const convertBinaarioADecimal = (numero = undefined, base = undefined) => {
  if (numero === undefined)
    return console.warn('No ingresaste el numero a convertir');
  if (typeof numero !== 'number')
    return console.error(`El valor "${numero}" ingresado NO es numero`);
  if (base === undefined)
    return console.warn('No ingresaste la base a convertir');
  if (typeof base !== 'number')
    return console.error(`El valor "${base}" ingresado NO es numero`);
  if (base === 2) {
    return console.info(
      `${numero} base ${base} = ${parseInt(numero, base)} base 10`
    );
  } else if (base === 10) {
    return console.info(
      `${numero} base ${base} = ${numero.toString(base)} base 2`
    );
  } else {
    return console.error(`El tipo de base "${base}" no es valido`);
  }
  o;
};
// convertBinaarioADecimal();
// convertBinaarioADecimal('2');
// convertBinaarioADecimal(100);
// convertBinaarioADecimal(100, '2');
// convertBinaarioADecimal(100, 2);
// convertBinaarioADecimal(11100100, 2);
// convertBinaarioADecimal(128, 10);
// convertBinaarioADecimal(255, 10);
// convertBinaarioADecimal(255, 3);

/*
16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
*/

const aplicarDescuento = (monto = undefined, descuento = 0) => {
  if (monto === undefined) return console.warn('No ingresaste el monto');
  if (typeof monto !== 'number')
    return console.error(`El valor "${monto}" ingresado NO es numero`);
  if (monto === 0) return console.error(`El monto no puede ser 0`);
  if (Math.sign(monto) === -1)
    return console.error(`El  monto no puede ser negativo`);
  if (typeof descuento !== 'number')
    return console.error(`El valor "${descuento}" ingresado NO es numero`);
  if (Math.sign(descuento) === -1)
    return console.error(`El valor del descuesto no puede ser negativo`);
  return console.info(
    `${monto} - ${descuento}% = ${monto - (monto * descuento) / 100}`
  );
};
// aplicarDescuento();
// aplicarDescuento('100');
// aplicarDescuento(0);
// aplicarDescuento(-100);
// aplicarDescuento(1000, '20');
// aplicarDescuento(1000, -20);
// aplicarDescuento(1000);
// aplicarDescuento(1000, 25);

/*
17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
*/
const calculaAnios = (fecha = undefined) => {
  if (fecha === undefined) return console.warn('No ingresaste la fecha');
  if (!(fecha instanceof Date))
    return console.error('El valor que ingresaste no es na fecha valida');
  let hoyMenosFecha = new Date().getTime() - fecha.getTime();
  let aniosEnMS = 1000 * 60 * 60 * 24 * 365;
  let aniosHumanos = Math.floor(hoyMenosFecha / aniosEnMS);

  return Math.sign(aniosHumanos) === -1
    ? console.info(
        `Faltan ${Math.abs(aniosHumanos)} años para el ${fecha.getFullYear()}`
      )
    : Math.sign(aniosHumanos) === 1
    ? console.info(
        `Han pasado ${aniosHumanos} años, desde ${fecha.getFullYear()}`
      )
    : console.info(`Estamos en el año actual ${fecha.getFullYear()}`);
};
calculaAnios();
calculaAnios({});
calculaAnios(false);
calculaAnios(new Date());
calculaAnios(new Date(1983, 3, 16));
calculaAnios(new Date(1883, 3, 16));
calculaAnios(new Date(2083, 3, 16));
