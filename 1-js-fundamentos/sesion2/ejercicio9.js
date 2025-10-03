//Crear una funcion que calcule el area de un rectangulo => base * altura

function rectangleArea(width, length) {
  return width * length;
}

//with arrow function:
const getRectangleArea = (width, length) => width * length;

console.log(`The rectangle area is ${rectangleArea(5, 7)} cm2`);
console.log(`The rectangle area is ${getRectangleArea(5, 7)} cm2`);
