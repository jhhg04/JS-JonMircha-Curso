try {
  console.log('1 - En el Try se agrega el codigo a evaluar');
  // var sin declarar genera error
  noExiste;
  // al lanzar error no lee mas lineas
  console.log('2 - Segundo mensaje En el Try');
} catch (error) {
  console.log(
    'En el Catch se captura cualquierer error surgido o lanzado en el Try'
  );
  console.log(error);
} finally {
  console.log(
    'El bloque Finally se ejecutara siempre al final de un bloque Try-Cath'
  );
}

try {
  // let numero = 10;
  let numero = 'a';

  if (isNaN(numero)) {
    throw new Error('El caracter introducido no es numero');
  }
  console.log(numero ** 2);
} catch (error) {
  console.log(`Se produjo el siguiente error.${error}`);
}
