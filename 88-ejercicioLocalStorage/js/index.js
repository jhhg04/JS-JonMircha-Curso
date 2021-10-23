import scrollTopButton from './boton_scroll.js';
import countdown from './cuenta_regresiva.js';
import hamburgerMenu from './menu_hamburguesa.js';
import { digitalClock, alarm } from './reloj.js';
import { moveBall, shortcuts } from './teclado.js';
import darkTheme from './tema_oscuro.js';

const d = document;

d.addEventListener('DOMContentLoaded', (e) => {
  hamburgerMenu('.panel-btn', '.panel', '.menu a');
  digitalClock('#reloj', '#activar-reloj', '#desactivar-reloj');
  alarm('assets/alarma.mp3', '#activar-alarma', '#desactivar-alarma');
  countdown('countdown', 'Apr 16,2022 22:04:00', 'Happy Birthday Master');
  scrollTopButton('.scroll-top-btn');
  darkTheme('.dark-theme-btn', 'dark-mode');
});

// cuando se presiona la tecla
d.addEventListener('keydown', (e) => {
  shortcuts(e);
  moveBall(e, '.ball', '.stage');
});
