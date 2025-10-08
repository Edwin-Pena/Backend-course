import type { PuertoGestionCitas } from '../dominio/puertos/PuertoGestionCitas.js';
export declare class CLIAdaptadorCitas {
    private gestorCitas;
    private rl;
    constructor(gestorCitas: PuertoGestionCitas);
    private validarFecha;
    private agendarCita;
    private reagendarCita;
    private cancelarCita;
    private listarCitas;
    private preguntarAlUsuario;
    iniciarAplicacion(): Promise<void>;
}
//# sourceMappingURL=CLIAdaptadorCitas.d.ts.map