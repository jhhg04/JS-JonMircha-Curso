/*
Los eventos son los mecanismos que tenemos en JavaScript para controlar las acciones del usuario y definir el comportamiento del documento en cierto momento o cuando se cumplan ciertas condiciones.
Las funciones que se ejecutan en un evento se llaman Event Handler (Manejador de Eventos).
https://developer.mozilla.org/en-US/docs/Web/Events
*/
function holaMundo() {
  alert('Hola Mundo');
  console.log(event);
}

function saludar(nombre = 'Desconocid@') {
  alert(`Hola ${nombre}`);
  console.log(event);
}

const $eventoSemantico = document.getElementById('evento-semantico');
const $eventoMultiple = document.getElementById('evento-multiple');
const $eventoRemover = document.getElementById('evento-remover');

$eventoSemantico.onclick = holaMundo;
$eventoSemantico.onclick = function (e) {
  alert('Hola Mundo Manejador de Eventos Semántico');
  console.log(e);
  console.log(event);
};

$eventoMultiple.addEventListener('click', holaMundo);
$eventoMultiple.addEventListener('click', (e) => {
  alert('Hola Mundo Manejador de Eventos Múltiple');
  console.log(e);
  console.log(e.type);
  console.log(e.target);
  console.log(event);
});

// $eventoMultiple.addEventListener('click', () => saludar());
$eventoMultiple.addEventListener('click', () => {
  saludar();
  saludar('Jon');
});

// $eventoRemover.addEventListener('dblclick', (e) => {
//   alert(`Removiendo el evento de tipo ${e.type}`);
//   console.log(e);
//   // No funciona por que debe enviar 2 params
//   $eventoRemover.removeEventListener('dblclick');
// });

const removerDobleClick = (e) => {
  alert(`Removiendo el evento de tipo ${e.type}`);
  console.log(e);
  $eventoRemover.removeEventListener('dblclick', removerDobleClick);
  $eventoRemover.disabled = true;
};
$eventoRemover.addEventListener('dblclick', removerDobleClick);
