import type { RepositorioGestionCitas } from '../aplicacion/puertos/RepositorioGestionCitas.js';
import type { ICita } from '../dominio/ICita.js';

export class RepositorioCitasMemoria implements RepositorioGestionCitas {
  constructor(private citas: ICita[]) {}

  agendarCita(cita: ICita): void {
    this.citas.push(cita);
  }

  actualizarCita(nuevaCita: ICita): void {
    let indexCita = this.citas.findIndex((cita) => cita.idPaciente === nuevaCita.idPaciente);
    this.citas[indexCita] = nuevaCita;
  }

  cancelarCita(citaACancelar: ICita): void {
    this.citas = this.citas.filter((cita) => cita.idPaciente !== citaACancelar.idPaciente);
  }

  mostrarCitas(): ICita[] {
    return [...this.citas];
  }
}
