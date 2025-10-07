import readline from 'node:readline';
export class CLIAdaptadorCitas {
    gestorCitas;
    constructor(gestorCitas) {
        this.gestorCitas = gestorCitas;
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
    agendarCita({ nombrePaciente, idPaciente, fechaCitaString, motivoCita }) {
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
    iniciarAplicacion() {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });
        rl.question(`What's your name?`, (name) => {
            console.log(`Hi ${name}!`);
            rl.close();
        });
    }
}
//# sourceMappingURL=CLIAdaptadorCitas.js.map