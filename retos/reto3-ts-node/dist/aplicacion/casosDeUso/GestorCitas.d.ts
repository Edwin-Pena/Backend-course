import type { ICita } from '../../dominio/ICita.js';
import type { PuertoGestionCitas } from '../../dominio/puertos/PuertoGestionCitas.js';
import type { RepositorioGestionCitas } from '../../dominio/puertos/RepositorioGestionCitas.js';
export declare class GestorCitas implements PuertoGestionCitas {
    private repositorioCita;
    constructor(repositorioCita: RepositorioGestionCitas);
    private validarSiExisteCita;
    ListarCitas(): ICita[];
    programarCita(nombrePaciente: string, idPaciente: string, fechaCita: Date, motivoCita: string): ICita;
    reprogramarCita(idPaciente: string, nuevaFechaCita: Date): ICita;
    cancelarCita(idPaciente: string): ICita;
}
//# sourceMappingURL=GestorCitas.d.ts.map