import type { ICita } from './ICita.js';

export class CitaMedica implements ICita {
  constructor(
    private nombrePaciente: string,
    private _idPaciente: string,
    private fechaCita: Date,
    private motivoCita: string
  ) {}

  get idPaciente(): string {
    return this._idPaciente;
  }

  resumenInfoCita(): string {
    return `Paciente: ${this.nombrePaciente} || Documento de identidad: ${this.idPaciente} || Fecha de la cita: ${this.fechaCita} || Motivo de consulta: ${this.motivoCita}`;
  }

  cambiarFechaCita(nuevaFecha: Date): void {
    this.fechaCita = nuevaFecha;
  }
}
