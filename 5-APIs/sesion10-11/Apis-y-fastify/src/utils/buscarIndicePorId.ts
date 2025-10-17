import { Plato } from '../interfaces/plato';

export const buscarIndicePorId = (platos: Plato[], idBuscado: string): number => {
  return platos.findIndex((plato) => plato.idPlato === idBuscado);
};
