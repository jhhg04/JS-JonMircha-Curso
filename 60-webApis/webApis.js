/*
 API -> Interface de Programacion de Aplicacion
 Objetos y mecanismos para interacctuar con el navegador
 DOM: Document Object Model
 BOM: Browser Object Model
 CSSOM: CSS Object Model
 WEB APIs
  Eventos
  Forms
  AJAX - Fetch
  History
  Web Storage
  Geolocation
  Drag & Drop
  Indexed DB
  Canvas
  MatchMedia
  
 */
console.log(window);
console.log(document);

let texto = 'Hola Mundo John Herrera';

const hablar = (texto) =>
  speechSynthesis.speak(new SpeechSynthesisUtterance(texto));

hablar(texto);
