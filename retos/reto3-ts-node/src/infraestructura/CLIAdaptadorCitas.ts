import type { PuertoGestionCitas } from '../dominio/puertos/PuertoGestionCitas.js';
import type { ICita } from '../dominio/ICita.js';

import readline from 'node:readline';
import { resolve } from 'node:path';

interface infoCita {
  nombrePaciente: string;
  idPaciente: string;
  fechaCitaString: string;
  motivoCita: string;
}

export class CLIAdaptadorCitas {
  constructor(private gestorCitas: PuertoGestionCitas) {}

  private validarFecha(fechaCitaString: string): Date {
    const camposFecha = fechaCitaString.split('-');

    if (!(camposFecha.length === 3)) {
      throw new Error('La fecha debe tener el formato MM-DD-YYY');
    }

    const [mesStri, diaStri, anoStri] = camposFecha;
    const mes = Number(mesStri);
    const dia = Number(diaStri);
    const ano = Number(anoStri);

    if (Number.isNaN(mes) || Number.isNaN(dia) || Number.isNaN(ano)) {
      throw new Error('La fecha solo debe contener valores numéricos.');
    }

    if (mes < 1 || mes > 12) throw new Error('mes inválido: El valor del mes debe estar ente 01 y 12');
    if (dia < 1 || dia > 31) throw new Error('día inválido: El valor del día debe estar ente 01 y 31');

    const fechaCita = new Date(ano, mes - 1, dia);

    if (fechaCita.getDate() !== dia) throw new Error(`en el mes ${mes} no existe el día ${dia}`);

    return fechaCita;
  }

  private agendarCita({ nombrePaciente, idPaciente, fechaCitaString, motivoCita }: infoCita): ICita {
    const fechaCita = this.validarFecha(fechaCitaString);
    const citaAgendada = this.gestorCitas.programarCita(nombrePaciente, idPaciente, fechaCita, motivoCita);
    return citaAgendada;
  }

  private reagendarCita(idPaciente: string, nuevaFechaCitaStr: string): ICita {
    const nuevaFechaCita = this.validarFecha(nuevaFechaCitaStr);

    const citaReagendada = this.gestorCitas.reprogramarCita(idPaciente, nuevaFechaCita);

    return citaReagendada;
  }

  private cancelarCita(idPaciente: string): ICita {
    const citaCancelada = this.gestorCitas.cancelarCita(idPaciente);

    return citaCancelada;
  }

  private listarCitas(): ICita[] {
    return this.gestorCitas.ListarCitas();
  }

  private preguntarAlUsuario(rl: readline.Interface, texto:string){
    return new Promise((resolve)=> )
  }

  iniciarAplicacion() {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    console.log(`
----------------------------
   MENÚ DE GESTIÓN DE CITAS
----------------------------
1. Agendar cita
2. Reagendar cita
3. Cancelar cita
4. Listar citas
5. Salir
----------------------------
`);

    rl.question(`Selecciona una opción`, (opcionStr: string) => {
      /* console.log(`Hi ${name}!`);
      rl.close(); */
      const opcion = Number(opcionStr);

      if (isNaN(opcion)) throw new Error('Tu respuesta debe ser un número');
      if (opcion < 1 || opcion > 5) throw new Error('Debes escoger una opcion válida entre 1 y 5');

      switch (opcion) {
        case 1:
          
      }
    });
  }
}
