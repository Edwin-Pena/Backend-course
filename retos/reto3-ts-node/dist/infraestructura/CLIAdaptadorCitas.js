import readline from 'node:readline';
export class CLIAdaptadorCitas {
    gestorCitas;
    rl;
    constructor(gestorCitas) {
        this.gestorCitas = gestorCitas;
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });
    }
    validarFecha(fechaCitaString) {
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
        if (mes < 1 || mes > 12)
            throw new Error('mes inválido: El valor del mes debe estar ente 01 y 12');
        if (dia < 1 || dia > 31)
            throw new Error('día inválido: El valor del día debe estar ente 01 y 31');
        const fechaCita = new Date(ano, mes - 1, dia);
        if (fechaCita.getDate() !== dia)
            throw new Error(`en el mes ${mes} no existe el día ${dia}`);
        return fechaCita;
    }
    agendarCita(nombrePaciente, idPaciente, fechaCitaString, motivoCita) {
        const fechaCita = this.validarFecha(fechaCitaString);
        const citaAgendada = this.gestorCitas.programarCita(nombrePaciente, idPaciente, fechaCita, motivoCita);
        return citaAgendada;
    }
    reagendarCita(idPaciente, nuevaFechaCitaStr) {
        const nuevaFechaCita = this.validarFecha(nuevaFechaCitaStr);
        const citaReagendada = this.gestorCitas.reprogramarCita(idPaciente, nuevaFechaCita);
        return citaReagendada;
    }
    cancelarCita(idPaciente) {
        const citaCancelada = this.gestorCitas.cancelarCita(idPaciente);
        return citaCancelada;
    }
    listarCitas() {
        return this.gestorCitas.ListarCitas();
    }
    preguntarAlUsuario(texto) {
        return new Promise((resolve) => this.rl.question(texto, resolve));
    }
    async iniciarAplicacion() {
        /* const rl = readline.createInterface({
          input: process.stdin,
          output: process.stdout,
        }); */
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
        const opcionStr = await this.preguntarAlUsuario('Selecciona una opción: ');
        const opcion = Number(opcionStr);
        if (isNaN(opcion))
            throw new Error('Tu respuesta debe ser un número');
        if (opcion < 1 || opcion > 5)
            throw new Error('Debes escoger una opcion válida entre 1 y 5');
        switch (opcion) {
            case 1: {
                const nombrePaciente = await this.preguntarAlUsuario('Nombre del paciente: ');
                const idPaciente = await this.preguntarAlUsuario('Cedula del paciente: ');
                const fechaCitaString = await this.preguntarAlUsuario('Fecha de la cita (MM-DD-AAA): ');
                const motivoCita = await this.preguntarAlUsuario('Motivo de la cita: ');
                const CitaAgendada = this.agendarCita(nombrePaciente, idPaciente, fechaCitaString, motivoCita);
                console.log(`\n Has agendado correctamente la cita: \n ${CitaAgendada.resumenInfoCita()}`);
                break;
            }
            case 2: {
                const idPaciente = await this.preguntarAlUsuario('Cedula del paciente: ');
                const nuevaFechaCitaString = await this.preguntarAlUsuario('Fecha de la cita (MM-DD-AAA): ');
                const citaReprogramada = this.reagendarCita(idPaciente, nuevaFechaCitaString);
                console.log(`\n Has reagendado correctamente la cita: ${citaReprogramada.resumenInfoCita()}`);
                break;
            }
            case 3: {
                const idPaciente = await this.preguntarAlUsuario('Cedula del paciente: ');
                const citaCancelada = this.cancelarCita(idPaciente);
                console.log(`\n Has cancelado correctamente la cita: ${citaCancelada.resumenInfoCita()}`);
                break;
            }
            case 4: {
                const citasAgendadas = this.listarCitas();
                console.log('\n Las citas agendadas son: ');
                if (citasAgendadas.length === 0) {
                    console.log('No hay citas agendadas en este momento');
                }
                citasAgendadas.forEach((cita) => {
                    console.log(cita.resumenInfoCita());
                });
                break;
            }
            case 5: {
                console.log('Saliendo de la aplicación...');
                this.rl.close();
                return;
            }
        }
        await this.iniciarAplicacion();
    }
}
//# sourceMappingURL=CLIAdaptadorCitas.js.map