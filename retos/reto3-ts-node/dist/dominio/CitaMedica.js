export class CitaMedica {
    nombrePaciente;
    fechaCita;
    motivoCita;
    constructor(nombrePaciente, fechaCita, motivoCita) {
        this.nombrePaciente = nombrePaciente;
        this.fechaCita = fechaCita;
        this.motivoCita = motivoCita;
    }
    resumenInfoCita() {
        return `Paciente: ${this.nombrePaciente} || Fecha de la cita: ${this.fechaCita} || Motivo de consulta: ${this.motivoCita}`;
    }
    cambiarFechaCita(nuevaFecha) {
        this.fechaCita = nuevaFecha;
    }
}
//# sourceMappingURL=CitaMedica.js.map