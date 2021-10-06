const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

for (let i = 0; i < numeros.length; i++) {
  const element = numeros[i];
  if (i === 5) {
    break;
  }
  // console.log(element);
}

for (let i = 0; i < numeros.length; i++) {
  const element = numeros[i];
  if (i === 5) {
    continue;
  }
  console.log(element);
}
