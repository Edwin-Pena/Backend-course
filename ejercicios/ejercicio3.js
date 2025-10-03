/*s.

Ejemplo 1:

La entrada: [ 3, 8, 2, 10 ]
La salida: 3
Ejemplo 2:

La entrada: [ 2.2, -0.2, -7, 2.7 ]
La salida: 2 */

function contarPares(listaNumeros) {
  if (!listaNumeros || listaNumeros.length === 0) {
    return 0;
  }

  return listaNumeros.filter((n) => {
    const num = Number(n);
    return Number.isInteger(num) && num % 2 === 0;
  }).length;
}

// Implementación de la solución
// Escribe tu implementación. Es hora de que tu mismo invoques la funcion e imprimas el resultado
