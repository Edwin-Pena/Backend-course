/* Buscar Elemento
Edwin, tu trabajo será crear una solución que cumpla con los requisitos que te plantea el siguiente enunciado.

Dada una lista de numeros enteros.

const numeros = [ 3, 8, 2, 10 ];
Deberás construir una solución que permita al funcion buscarElemento() devolver un valor booleano true o false, segun encuentre o no el elemento solicitado.

Ejemplo 1:

La entrada:
listaElementos: [ 'rojo', 'azul', 'amarillo' ]
valorBusqueda: 'azul'
La salida: true
Ejemplo 2:

La entrada:
listaElementos: [ 3, 7, 2, 1, 8 ]
valorBusqueda: 9
La salida: false */

function buscarElemento(listaElementos, valorBusqueda) {
  if (listaElementos === undefined) {
    return 'No se ha proporcionado la lista de elementos a ordenar';
  } else if (valorBusqueda === undefined) {
    return 'No se proporciono el elemento a buscar';
  }
  return listaElementos.includes(valorBusqueda);
}

const listaElementos = [3, 7, 2, 1, 8];
const valorBusqueda = 9;

console.log(buscarElemento(listaElementos, valorBusqueda));
