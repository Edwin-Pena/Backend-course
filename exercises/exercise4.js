//revertir el array que me dan

/* Ejemplo 1:

La entrada: [ 5, 1, 4, 2, 3, 9 ]
La salida: [ 9, 3, 2, 4, 1, 5 ]
Ejemplo 2:

La entrada: [ 'n', 'a', 'u', 'j' ]
La salida: [ 'j', 'u', 'a', 'n' ] */

const invertirLista = (arr) => {
  if (!arr) {
    return null;
  } else if (arr.length === 0) {
    return 0;
  }
  return arr.reverse();
};

console.log(revertArr([5, 1, 4, 2, 3, 9]));
