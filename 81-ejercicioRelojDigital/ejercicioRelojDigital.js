import hamburgerMenu from './menu_hamburguesa.js';
import { digitalClock, alarm } from './reloj.js';

const d = document;
d.addEventListener('DOMContentLoaded', (e) => {
  hamburgerMenu('.panel-btn', '.panel', '.menu a');
  digitalClock('#reloj', '#activar-reloj', '#desactivar-reloj');
});
