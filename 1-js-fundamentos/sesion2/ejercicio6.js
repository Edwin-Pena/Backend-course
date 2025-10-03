//crear el sigueinte array ['coordinadora', 'inexu-coordinadora', 'backend'] y retornar la posicion de coordinadora

const arrCoordinadora = ['coordinadora', 'inexu-coordinadora', 'backend'];

const findPosition = (value) => {
  return arrCoordinadora.findIndex((e) => e === value);
};

console.log(findPosition('backend'));
