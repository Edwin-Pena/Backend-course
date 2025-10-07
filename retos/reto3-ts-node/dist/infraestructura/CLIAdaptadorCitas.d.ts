import type { PuertoGestionCitas } from '../dominio/puertos/PuertoGestionCitas.js';
export declare class CLIAdaptadorCitas {
    private gestorCitas;
    constructor(gestorCitas: PuertoGestionCitas);
    private validarFecha;
    private agendarCita;
    private reagendarCita;
    private cancelarCita;
    private listarCitas;
    iniciarAplicacion(): void;
}
//# sourceMappingURL=CLIAdaptadorCitas.d.ts.map