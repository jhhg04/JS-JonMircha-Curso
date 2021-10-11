/*
Antes de explicar como funciona el modelo de JavaScript es importante entender algunos conceptos:
Procesamiento Single thread y Multi thread.
Operaciones de CPU y Operaciones de I / O.
Operaciones Concurrentes y Paralelas.
Operaciones Bloqueantes y No Bloqueantes.
Operaciones Síncronas y Asíncronas.

Javascript usa un modelo asíncrono y no bloqueante, con un loop de eventos implementado en un sólo hilo, (single thread) para operaciones de entrada y salida (input/output).

http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
*/

//Código Síncrono Bloquenate
(() => {
  console.log('Código Síncrono');
  console.log('Inicio');
  function dos() {
    console.log('Dos');
  }
  function uno() {
    console.log('Uno');
    dos();
    console.log('Tres');
  }
  uno();
  console.log('Fin');
})();
console.log('********************');

//Código Asíncrono No Bloquenate
(() => {
  console.log('Código Asíncrono');
  console.log('Inicio');
  function dos() {
    setTimeout(function () {
      console.log('Dos');
    }, 1000);
  }
  function uno() {
    setTimeout(function () {
      console.log('Uno');
    }, 0);
    dos();
    console.log('Tres');
  }
  uno();
  console.log('Fin');
})();
