export class RepositorioCitasMemoria {
    citas;
    constructor(citas) {
        this.citas = citas;
    }
    agendarCita(cita) {
        this.citas.push(cita);
    }
    actualizarCita(nuevaCita) {
        let indexCita = this.citas.findIndex((cita) => cita.idPaciente === nuevaCita.idPaciente);
        this.citas[indexCita] = nuevaCita;
    }
    cancelarCita(citaACancelar) {
        this.citas = this.citas.filter((cita) => cita.idPaciente !== citaACancelar.idPaciente);
    }
    mostrarCitas() {
        return [...this.citas];
    }
}
//# sourceMappingURL=RepositorioCitasMemoria.js.map