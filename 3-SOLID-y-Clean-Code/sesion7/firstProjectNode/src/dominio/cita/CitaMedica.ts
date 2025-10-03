import { error } from 'console';
import type { ICita } from './ICita.js';

export class CitaMedica implements ICita {
  private idCita: number | undefined;

  constructor(
    public nombrePaciente: string,
    public fechaCita: string,
    public motivoCita: string,
    idCita?: number | undefined
  ) {
    try {
      this.idCita = idCita;
      this.validarCita();
    } catch (e) {
      console.log(e);
    }
  }
  private validarCita(): void {
    if (this.nombrePaciente.length < 3) {
      throw new Error('Nombre muy corto');
    }
  }
}
