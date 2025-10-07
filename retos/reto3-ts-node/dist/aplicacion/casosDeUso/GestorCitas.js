import { CitaMedica } from '../../dominio/CitaMedica.js';
export class GestorCitas {
    repositorioCita;
    constructor(repositorioCita) {
        this.repositorioCita = repositorioCita;
    }
    validarSiExisteCita(idPaciente, mensajeError) {
        const listaCitas = this.ListarCitas();
        const validarCita = listaCitas.find((cita) => cita.idPaciente === idPaciente);
        if (!validarCita) {
            throw new Error(`No  se puede ${mensajeError} la cita del paciente con documento de indentidad ${idPaciente} porque no tiene cita agendada`);
        }
        return validarCita;
    }
    ListarCitas() {
        return this.repositorioCita.mostrarCitas();
    }
    programarCita(nombrePaciente, idPaciente, fechaCita, motivoCita) {
        const cita = new CitaMedica(nombrePaciente, idPaciente, fechaCita, motivoCita);
        this.repositorioCita.agendarCita(cita);
        return cita;
    }
    reprogramarCita(idPaciente, nuevaFechaCita) {
        const citaActual = this.validarSiExisteCita(idPaciente, 'reprogramar');
        citaActual.cambiarFechaCita(nuevaFechaCita);
        this.repositorioCita.actualizarCita(citaActual);
        return citaActual;
    }
    cancelarCita(idPaciente) {
        const citaPorCancelar = this.validarSiExisteCita(idPaciente, 'cancelar');
        this.repositorioCita.cancelarCita(citaPorCancelar);
        return citaPorCancelar;
    }
}
//# sourceMappingURL=GestorCitas.js.map