import type { ICita } from '../interfaces/ICita.js';

export class CitaMedica implements ICita {
  protected idCita: number;

  constructor(
    public nombrePaciente: string,
    public fechaCita: string,
    public motivoCita: string,
    idCita: number
  ) {
    this.idCita = idCita;
  }

  mostrarResumen(): {
    nombrePaciente: string;
    fechaCita: string;
    motivo: string;
  } | null {
    return null;
  }
}
