//inicializacion de mi app
import { GestorCitas } from './aplicacion/casosDeUso/GestorCitas.js';
import { CLIAdaptadorCitas } from './infraestructura/CLIAdaptadorCitas.js';
import { RepositorioCitasMemoria } from './infraestructura/RepositorioCitasMemoria.js';
try {
    const agendaMemoria = new RepositorioCitasMemoria([]); //adaptador secundario
    const gestorDeAgenda = new GestorCitas(agendaMemoria); // Caso de uso al que se le inyecta el adaptador secundario
    const EntradaDelUsuario = new CLIAdaptadorCitas(gestorDeAgenda); // adaptador primario al que se le inyecta el caso de uso
    console.log(`------------------------------`);
    console.log(`  Sistema gestión de citas`);
    console.log(`------------------------------`);
    EntradaDelUsuario.iniciarAplicacion();
}
catch (error) {
    if (error instanceof Error) {
        console.error(`Ooops! hubo un error con la aplicación: ${error.message}`);
    }
}
//# sourceMappingURL=index.js.map