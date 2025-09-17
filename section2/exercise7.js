//Recorre un array de numeros  e imprime la posicion y el valor de cada elemento, sumando tambien todos los valores

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const printInfo = (arr) => {
  let sum = 0;
  arr.forEach((e, i) => {
    console.log(`the value of the element is ${e} and the position is ${i}`);
    sum += e;
  });

  console.log(`The total sum is ${sum}`);
};

printInfo(numbers);
