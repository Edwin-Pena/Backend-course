import type { ICita } from './ICita.js';
export declare class CitaMedica implements ICita {
    private nombrePaciente;
    private fechaCita;
    private motivoCita;
    constructor(nombrePaciente: string, fechaCita: Date, motivoCita: string);
    resumenInfoCita(): string;
    cambiarFechaCita(nuevaFecha: Date): void;
}
//# sourceMappingURL=CitaMedica.d.ts.map