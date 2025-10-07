import type { RepositorioGestionCitas } from '../dominio/puertos/RepositorioGestionCitas.js';
import type { ICita } from '../dominio/ICita.js';
export declare class RepositorioCitasMemoria implements RepositorioGestionCitas {
    private citas;
    constructor(citas: ICita[]);
    agendarCita(cita: ICita): void;
    actualizarCita(nuevaCita: ICita): void;
    cancelarCita(citaACancelar: ICita): void;
    mostrarCitas(): ICita[];
}
//# sourceMappingURL=RepositorioCitasMemoria.d.ts.map