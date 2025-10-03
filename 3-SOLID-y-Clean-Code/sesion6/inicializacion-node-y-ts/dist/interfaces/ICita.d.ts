export interface ICita {
    nombrePaciente: string;
    fechaCita: string;
    motivoCita: string;
    mostrarResumen(): {
        nombrePaciente: string;
        fechaCita: string;
        motivo: string;
    } | null;
}
//# sourceMappingURL=ICita.d.ts.map