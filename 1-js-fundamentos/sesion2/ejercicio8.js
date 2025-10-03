//Crear una funcion que calcule el promedio de un array de numeros
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const promedio = (arr) => {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }

  return total / arr.length;
};

console.log(`with for ${promedio(numbers)}`);

//short version:

const average = (arr) => {
  return arr.reduce((acc, c) => acc + c, 0) / arr.length;
};

console.log(`with reduce ${average(numbers)}`);
