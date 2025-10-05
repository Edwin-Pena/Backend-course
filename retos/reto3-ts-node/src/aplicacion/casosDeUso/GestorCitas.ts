import { CitaMedica } from '../../dominio/CitaMedica.js';
import type { ICita } from '../../dominio/ICita.js';
import type { PuertoGestionCitas } from '../puertos/PuertoGestionCitas.js';
import type { RepositorioGestionCitas } from '../puertos/RepositorioGestionCitas.js';

export class GestorCitas implements PuertoGestionCitas {
  constructor(private repositorioCita: RepositorioGestionCitas) {}

  private validarSiExisteCita(idPaciente: string, mensajeError: string): ICita {
    const listaCitas = this.ListarCitas();

    const validarCita = listaCitas.find((cita) => cita.idPaciente === idPaciente);

    if (!validarCita) {
      throw new Error(
        `No  se puede ${mensajeError} la cita del paciente con documento de indentidad ${idPaciente} porque no tiene cita agendada`
      );
    }

    return validarCita;
  }

  ListarCitas(): ICita[] {
    return this.repositorioCita.mostrarCitas();
  }

  programarCita(nombrePaciente: string, idPaciente: string, fechaCita: Date, motivoCita: string): ICita {
    const cita = new CitaMedica(nombrePaciente, idPaciente, fechaCita, motivoCita);

    this.repositorioCita.agendarCita(cita);

    return cita;
  }

  reprogramarCita(idPaciente: string, nuevaFechaCita: Date): ICita {
    const citaActual = this.validarSiExisteCita(idPaciente, 'reprogramar');

    citaActual.cambiarFechaCita(nuevaFechaCita);
    return citaActual;
  }

  cancelarCita(idPaciente: string): ICita {
    const citaPorCancelar = this.validarSiExisteCita(idPaciente, 'cancelar');

    this.repositorioCita.cancelarCita(citaPorCancelar);
    return citaPorCancelar;
  }
}
