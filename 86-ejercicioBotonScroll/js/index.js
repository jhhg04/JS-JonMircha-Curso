import countdown from './cuenta_regresiva.js';
import hamburgerMenu from './menu_hamburguesa.js';
import { digitalClock, alarm } from './reloj.js';
import { moveBall, shortcuts } from './teclado.js';

const d = document;

d.addEventListener('DOMContentLoaded', (e) => {
  hamburgerMenu('.panel-btn', '.panel', '.menu a');
  digitalClock('#reloj', '#activar-reloj', '#desactivar-reloj');
  alarm('assets/alarma.mp3', '#activar-alarma', '#desactivar-alarma');
  countdown('countdown', 'Oct 20,2021 22:04:00', 'Happy Birthday Master ');
});

// cuando se presiona la tecla
d.addEventListener('keydown', (e) => {
  shortcuts(e);
  moveBall(e, '.ball', '.stage');
});
