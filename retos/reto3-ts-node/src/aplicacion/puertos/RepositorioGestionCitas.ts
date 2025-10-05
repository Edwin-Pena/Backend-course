import type { ICita } from '../../dominio/ICita.js';

export interface RepositorioGestionCitas {
  agendarCita(cita: ICita): void;
  reagendarCita(cita: ICita): void;
  cancelarCita(cita: ICita): void;
  mostrarCitas(): ICita[];
}
