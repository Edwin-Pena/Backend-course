import type { ICita } from './ICita.js';
export declare class CitaMedica implements ICita {
    private nombrePaciente;
    private _idPaciente;
    private fechaCita;
    private motivoCita;
    constructor(nombrePaciente: string, _idPaciente: string, fechaCita: Date, motivoCita: string);
    get idPaciente(): string;
    resumenInfoCita(): string;
    cambiarFechaCita(nuevaFecha: Date): void;
}
//# sourceMappingURL=CitaMedica.d.ts.map