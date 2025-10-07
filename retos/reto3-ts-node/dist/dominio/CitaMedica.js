export class CitaMedica {
    nombrePaciente;
    _idPaciente;
    fechaCita;
    motivoCita;
    constructor(nombrePaciente, _idPaciente, fechaCita, motivoCita) {
        this.nombrePaciente = nombrePaciente;
        this._idPaciente = _idPaciente;
        this.fechaCita = fechaCita;
        this.motivoCita = motivoCita;
    }
    get idPaciente() {
        return this._idPaciente;
    }
    resumenInfoCita() {
        return `Paciente: ${this.nombrePaciente} || Documento de identidad: ${this.idPaciente} || Fecha de la cita: ${this.fechaCita} || Motivo de consulta: ${this.motivoCita}`;
    }
    cambiarFechaCita(nuevaFecha) {
        this.fechaCita = nuevaFecha;
    }
}
//# sourceMappingURL=CitaMedica.js.map