/*
  CALLBACK
  Es una función “A” que se usa como argumento de otra función “B”. Cuando se llama a “B”, ésta ejecuta “A”.
  function B (resultadoDeA) {
  return resultadoDeA + " mundo!"
  }
  function A () {
  return “hola”
  }
  B(A())
*/

function cuadradoCallback(value, cb) {
  setTimeout(() => {
    cb(value, value * value);
  }, 0 | (Math.random() * 1000));
}

cuadradoCallback(0, (value, result) => {
  console.log('inicia Callback');
  console.log(`Callback ${value}, ${result}`);
  cuadradoCallback(1, (value, result) => {
    console.log(`Callback ${value}, ${result}`);
    cuadradoCallback(2, (value, result) => {
      console.log(`Callback ${value}, ${result}`);
      cuadradoCallback(3, (value, result) => {
        console.log(`Callback ${value}, ${result}`);
        cuadradoCallback(4, (value, result) => {
          console.log(`Callback ${value}, ${result}`);
          cuadradoCallback(5, (value, result) => {
            console.log(`Callback ${value}, ${result}`);
            console.log('Fin Callback');
            console.log('Callback Hell !!!!!😈🤘');
            console.log('http://callbackhell.com/');
          });
        });
      });
    });
  });
});
