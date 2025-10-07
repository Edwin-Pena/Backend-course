import type { ICita } from '../../dominio/ICita.js';
export interface PuertoGestionCitas {
    programarCita(nombrePaciente: string, idPaciente: string, fechaCita: Date, motivoCita: string): ICita;
    reprogramarCita(idPaciente: string, nuevaFechaCita: Date): ICita;
    cancelarCita(idPaciente: string): ICita;
    ListarCitas(): ICita[];
}
//# sourceMappingURL=PuertoGestionCitas.d.ts.map