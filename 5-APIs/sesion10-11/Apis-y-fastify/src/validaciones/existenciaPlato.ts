import { Plato } from '../interfaces/plato';

export const existeIdPlato = (platos: Plato[], idParaValidar: string): Plato | undefined => {
  return platos.find((plato) => plato.idPlato === idParaValidar);
};

export const existeNombrePlato = (platos: Plato[], nombreParaValidar: string): Plato | undefined => {
  return platos.find((plato) => plato.nombrePlato.trim().toLowerCase() === nombreParaValidar.trim().toLowerCase());
};
