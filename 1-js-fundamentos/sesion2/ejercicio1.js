//Declara dos numeros y usa un condicional para ver cual es mayor de esos dos:

const numberA = 8;
const numberB = 34;

//more readeble version:
function largestNumber(a, b) {
  if (a > b) {
    console.log(a);
  } else {
    return console.log(b);
  }
}

const getLargestNumber = (a, b) => (a > b ? console.log(a) : console.log(b));

largestNumber(90, 85);
getLargestNumber(60, 34);
