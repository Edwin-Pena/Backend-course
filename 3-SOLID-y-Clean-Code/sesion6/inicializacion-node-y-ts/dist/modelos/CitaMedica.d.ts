import type { ICita } from '../../src/interfaces/ICita.js';
export declare class CitaMedica implements ICita {
  nombrePaciente: string;
  fechaCita: string;
  motivoCita: string;
  protected idCita: number;
  constructor(
    nombrePaciente: string,
    fechaCita: string,
    motivoCita: string,
    idCita: number
  );
  mostrarResumen(): {
    nombrePaciente: string;
    fechaCita: string;
    motivo: string;
  } | null;
}
//# sourceMappingURL=CitaMedica.d.ts.map
