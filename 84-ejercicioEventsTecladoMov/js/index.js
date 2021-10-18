import hamburgerMenu from './menu_hamburguesa.js';
import { digitalClock, alarm } from './reloj.js';
import { shortcuts } from './teclado.js';

const d = document;

d.addEventListener('DOMContentLoaded', (e) => {
  hamburgerMenu('.panel-btn', '.panel', '.menu a');
  digitalClock('#reloj', '#activar-reloj', '#desactivar-reloj');
  alarm('assets/alarma.mp3', '#activar-alarma', '#desactivar-alarma');
});

// cuando se presiona la tecla
d.addEventListener('keydown', (e) => {
  shortcuts(e);
});

// cuando se sualta la tecla
// d.addEventListener('keyup', (e) => {
//   shortcuts(e);
// });

// mientras este presionada la tecla
// d.addEventListener('keypress', (e) => {
//   shortcuts(e);
// });
