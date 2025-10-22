import { IPlatosCasosUso } from '../casos-uso/IPlatosCasosUso';
import { IPlato } from '../../dominio/IPlato';
import { PlatoDTO } from '../../../../presentacion/esquemas/platoEsquema';
import { v4 as uuidv4 } from 'uuid';
import { Plato } from '../../dominio/Plato';

const platos: IPlato[] = [
  { idPlato: '1', nombrePlato: 'sancocho' },
  { idPlato: '2', nombrePlato: 'Perro Colombia' },
];

export class PlatosCasosUso implements IPlatosCasosUso {
  async obtenerPlatos(limite?: number): Promise<IPlato[]> {
    const platosFiltrados = limite ? platos.slice(0, limite) : platos;
    return platosFiltrados;
  }

  async obtenerPlatoPorId(idPlato: string): Promise<IPlato | null> {
    const platoEncontrado = platos.find((p) => p.idPlato === idPlato);

    console.log(platoEncontrado);

    return platoEncontrado ? platoEncontrado : null;
  }

  async crearPlato(plato: PlatoDTO): Promise<string> {
    const idPlato = uuidv4();
    const nuevoPlato = new Plato(plato, idPlato);

    await platos.push(nuevoPlato);
    return nuevoPlato.idPlato;
  }

  async actualizarPlato(idPlato: string, plato: IPlato): Promise<IPlato | null> {
    const platoEncontrado = platos.findIndex((p) => p.idPlato === idPlato);
    platos[platoEncontrado] = { ...platos[platoEncontrado], ...plato };

    return platos[platoEncontrado];
  }

  async eliminarPlato(idPlato: string): Promise<void> {
    const platoEncontrado = platos.findIndex((p) => p.idPlato === idPlato);
    platos.splice(platoEncontrado, 1);
  }
}
