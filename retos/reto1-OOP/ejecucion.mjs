import Paquete from './clasePaquete.mjs';
import Repartidor from './repartidor.mjs';

const paquete1 = new Paquete(1, 3.5, 'Cali', 'Medellin');
const paquete2 = new Paquete(2, 10, 'Barranquilla', 'Medellin');

const repartidor1 = new Repartidor('Edwin', 'ED1256');
const repartidor2 = new Repartidor('Alberto', 'AL4569');

repartidor1.asignarPaquete(paquete1);
repartidor2.asignarPaquete(paquete2);

console.log('Lista de paquetes:');
repartidor1.listarPaquetes();
repartidor2.listarPaquetes();

repartidor1.entregarPaquete(1);
repartidor2.entregarPaquete(2);

repartidor1.consultarPaquete(1);
repartidor2.consultarPaquete(2);
