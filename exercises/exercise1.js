//Sumar una lista de numeros
/* Edwin, tu trabajo será crear una solución que cumpla con los requisitos que te plantea el siguiente enunciado.

Dada una lista de numeros enteros.

const numeros = [ 3, 0, -1, 7, -2 ];
Deberás construir una solución que permita al funcion sumarNumeros() devolver la suma total de dichos valores.

Ejemplo 1:

La entrada: [ 3, 0, -1, 7, -2 ]
La salida: 7
Ejemplo 2:

La entrada: [ 4.2, -1.2, -1, 5.7 ]
La salida: 7.7 */

const numeros = [3, 0, -1, 7, -2];

const sumarNumeros = (arr) => {
  if (!arr) {
    return 0;
  }
  const newArr = arr.map((num) => Number(num));

  return newArr.reduce((acc, c) => acc + c, 0);
};

console.log(sumarNumeros(['5', '6', '7']));
