import Cliente from './Cliente.js';
import Paquete from './Paquete.js';
import Repartidor from './Repartidor.js';

try {
  const repartidor1 = new Repartidor('Erick', 'Malandrino', '15463879', 'RE01');
  const repartidor2 = new Repartidor('John', 'Doee', '189635672', 'RE02');

  const clienteEnvia1 = new Cliente('Pedro', 'El escamozo', '12345678');
  const clienteEnvia2 = new Cliente('John', 'Carmack', '87654321');

  const clienteRecibe1 = new Cliente('Michael', 'Jordan', '4563217869');
  const clienteRecibe2 = new Cliente('Kobe', 'Bryant', '87693214789');

  console.log('Creación de los paquetes:');
  console.log('');

  const paquete1 = clienteEnvia1.programarRecogida(
    'PQ01',
    5.5,
    'Cali',
    'medellin'
  );
  const paquete2 = clienteEnvia1.programarRecogida(
    'PQ02',
    3,
    'Baranquilla',
    'Bogotá'
  );

  const paquete3 = clienteEnvia2.programarRecogida(
    'PQ03',
    7,
    'Cali',
    'Palmira'
  );

  const paquete4 = clienteEnvia2.programarRecogida(
    'PQ04',
    8,
    'Pasto',
    'Medellin'
  );

  console.log(`estado inicial del paquete ${paquete4.estadoPaquete}`);

  //console.log(repartidor1);
  console.log(
    '---------------------------------------------------------------'
  );

  console.log('Asignación de paquetes a repartidores:');
  console.log('');

  repartidor1.asignarPaquete(paquete1);
  repartidor1.asignarPaquete(paquete2);
  repartidor2.asignarPaquete(paquete3);
  repartidor2.asignarPaquete(paquete4);
  //repartidor1.asignarPaquete(paquete1);

  console.log(
    '---------------------------------------------------------------'
  );

  console.log(
    'Los repartidores y los clientes se presentan y los clientes entregan los paquetes a los repartifores:'
  );
  console.log('');

  repartidor1.presentarse();
  clienteEnvia1.presentarse();
  clienteEnvia1.entregarPaquete(paquete1);
  clienteEnvia1.entregarPaquete(paquete2);

  repartidor2.presentarse();
  clienteEnvia2.presentarse();
  clienteEnvia2.entregarPaquete(paquete3);
  clienteEnvia2.entregarPaquete(paquete4);

  console.log(
    '---------------------------------------------------------------'
  );

  console.log('Consultar info relacionada a los paquetes:');
  console.log('');

  repartidor1.listarPaquetes();
  repartidor1.consultarPaquete('PQ01');

  repartidor2.listarPaquetes();
  repartidor2.consultarPaquete('PQ03');

  console.log(
    '---------------------------------------------------------------'
  );

  console.log(
    'Los repartidores y los clientes que reciben el paquete se presentan y los repartidores entregan los paquetes a los destinatarios:'
  );

  console.log('');

  repartidor1.presentarse();
  clienteRecibe1.presentarse();
  repartidor1.entregarPaquete('PQ01', clienteRecibe1);
  repartidor1.entregarPaquete('PQ02', clienteRecibe1);
  clienteRecibe1.recibirPaquete(paquete1);
  clienteRecibe1.recibirPaquete(paquete2);

  repartidor2.presentarse();
  clienteRecibe2.presentarse();
  repartidor2.entregarPaquete('PQ03', clienteRecibe2);
  repartidor2.entregarPaquete('PQ04', clienteRecibe2);
  clienteRecibe2.recibirPaquete(paquete3);
  clienteRecibe2.recibirPaquete(paquete4);

  clienteRecibe1.console.log(
    `estado final del paquete ${paquete4.estadoPaquete}`
  );

  //console.log(repartidor1);
} catch (error) {
  console.log(`Error en el código: ${error.message}`);
}
