//recorrer un array e imprimer la posicion de cada elmento y su valor

const arr = ['pepe', 'jonh', 'camila', 'lucia'];

const printInfo = (arr) => {
  arr.forEach((e, i) => console.log(`el valor es ${e} y la posicion es ${i}`));
};

console.log(printInfo(arr));
