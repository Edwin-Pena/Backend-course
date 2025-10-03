/* Encontrar el número mayor
Edwin, tu trabajo será crear una solución que cumpla con los requisitos que te plantea el siguiente enunciado.

Dada una lista de numeros enteros.

const numeros = [ 5, 2, 9, 1 ];
Deberás construir una solución que permita al funcion numeroMayor() devolver el número mayor contenido en dicha lista.

Ejemplo 1:

La entrada: [ 5, 2, 9, 1 ]
La salida: 9
Ejemplo 2:

La entrada: [ 5.7, 4, 1.2 ]
La salida: 5.7 */
function numeroMayor(listaNumeros) {
  if (!listaNumeros || listaNumeros.length === 0) {
    return 0;
  }
  return Math.max(...listaNumeros);
}

// Implementación de la solución
const numeros = [
  5.7, 4, 1.2,
  /** asigna aqui los valores */
]; // Asigna la entrada, ej: [ 5.7, 4, 1.2 ]
const resultado = numeroMayor(numeros); // Se invoca la funcion y retorna el resultado
console.log(resultado); // Imprime el resultado -> 5.7
