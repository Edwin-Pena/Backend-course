/* Contar elementos mayores a X valor
Edwin, tu trabajo será crear una solución que cumpla con los requisitos que te plantea el siguiente enunciado.

Dada una lista de números y un valor, debes contar cuántos números de la lista son mayores que ese valor.

const numeros = [ 5, 10, 3, 8 ];
const valor = 6;
Ejemplo 1:

Entrada: [ 5, 10, 3, 8 ], valor: 6
Salida: 2 */

function contarMayoresQue(listaNumeros, valor) {
  if (listaNumeros === undefined || listaNumeros === null) {
    return 'No se ha proporcionado la lista de numeros';
  } else if (listaNumeros.length === 0) {
    return 0;
  } else if (valor === undefined || isNaN(valor)) {
    return 'Se debe proporcionar un valor valido para comparar';
  }

  if (!Array.isArray(listaNumeros)) {
    listaNumeros = listaNumeros
      .toString()
      .split(',')
      .map((n) => Number(n.trim()));
  }

  if (listaNumeros.some((n) => Number.isNaN(n))) {
    return 'La lista contiene valores no numéricos';
  }

  return listaNumeros.filter((n) => n > Number(valor)).length;
}

console.log(contarMayoresQue([5, 10, 3, 8], 6));
