let frutas = ['manzana', 'pera', 'tomate'];

const addLast = (arr, newValue) => {
  arr.push(newValue);
  return arr;
};

const addStart = (arr, newValue) => {
  arr.unshift(newValue);
  return arr;
};

console.log(addLast(frutas, 'uvas'));
console.log(addStart(frutas, 'fresa'));
