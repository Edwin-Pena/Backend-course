export interface ICita {
  readonly idPaciente: string;
  resumenInfoCita(): string;
  cambiarFechaCita(nuevaFecha: Date): void;
}
