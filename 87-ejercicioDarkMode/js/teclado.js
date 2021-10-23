const d = document;
let x = 0;
let y = 0;

export function moveBall(e, ball, stage) {
  const $ball = d.querySelector(ball);
  const $stage = d.querySelector(stage);
  const limitBall = $ball.getBoundingClientRect();
  const limitStage = $stage.getBoundingClientRect();
  console.log(limitBall, limitStage);
  console.log(e.keyCode);
  console.log(e.key);

  switch (e.keyCode) {
    case 37:
      if (limitBall.left > limitStage.left) {
        e.preventDefault();
        x--;
      }
      break;
    case 38:
      if (limitBall.top > limitStage.top) {
        e.preventDefault();
        y--;
      }
      break;
    case 39:
      if (limitBall.right < limitStage.right) {
        e.preventDefault();
        x++;
      }
      break;
    case 40:
      if (limitBall.bottom < limitStage.bottom) {
        e.preventDefault();
        y++;
      }
      break;
    default:
      break;
  }
  $ball.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
}

export function shortcuts(e) {
  // console.log(e.type);
  // console.log(e.key);
  // console.log(e.keyCode);
  // console.log(`ctrl: ${e.ctrlKey}`);
  // console.log(`alt: ${e.altKey}`);
  // console.log(`shift: ${e.shiftKey}`);
  // console.log(e);

  if (e.key === 'a' && e.altKey) {
    alert('Haz lanzado una alerta con el teclado');
  }

  if (e.key === 'c' && e.altKey) {
    confirm('Haz lanzado una confirmacion con el teclado');
  }

  if (e.key === 'p' && e.altKey) {
    prompt('Haz lanzado una aviso con el teclado');
  }
}
