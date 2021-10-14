// const $divsEventos = document.querySelectorAll('.eventos-flujo div');
// const $linkEventos = document.querySelectorAll('.eventos-flujo a');

function flujoEventos(e) {
  console.log(
    `Hola te saluda ${this} el click lo originó ${e.target.className}`
  );
  // e.stopPropagation();
}

// Se agrega al document y se identifica donde se hace click
// document.addEventListener('click', (e) => {
//   console.log('Click en', e.target);
// });

document.addEventListener('click', (e) => {
  console.log('Click en', e.target);

  if (e.target.matches('.eventos-flujo div')) {
    flujoEventos(e);
  }
  if (e.target.matches('.eventos-flujo a')) {
    alert('Hola soy tu amigo y docente digital... Jonathan MirCha');
    e.preventDefault();
    //e.stopPropagation();
  }
});
