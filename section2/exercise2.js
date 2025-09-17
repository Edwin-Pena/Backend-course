//Do this exercise with for and while for home

const numbers = [1, 2, 3, 4, 5];

const sum = (arr) => {
  return arr.reduce((acc, c) => acc + c, 0);
};

console.log(sum(numbers));
