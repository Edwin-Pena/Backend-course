import Paquete from './Paquete.js';
import Repartidor from './Repartidor.js';

try {
  const repartidor1 = new Repartidor('Erick', 'Malandrino', 'RE01');
  const repartidor2 = new Repartidor('John', 'Doee', 'RE02');

  const paquete1 = new Paquete('PQ01', 5.5, 'Cali', 'medellin');
  const paquete2 = new Paquete('PQ02', 3, 'Baranquilla', 'Bogotá');
  const paquete3 = new Paquete('PQ03', 10, 'Pasto', 'Leticia');
  const paquete4 = new Paquete('PQ04', 1, 'Medellin', 'Cartagena');

  console.log(`estado inicial del paquete ${paquete4.estadoPaquete}`);

  console.log(repartidor1);
  repartidor1.asignarPaquete(paquete1);
  repartidor1.asignarPaquete(paquete2);
  repartidor2.asignarPaquete(paquete3);
  repartidor2.asignarPaquete(paquete4);
  //repartidor1.asignarPaquete(paquete1);

  repartidor1.listarPaquetes();
  repartidor1.consultarPaquete('PQ01');

  repartidor2.listarPaquetes();
  repartidor2.consultarPaquete('PQ03');

  repartidor1.entregarPaquete('PQ02');
  repartidor2.entregarPaquete('PQ04');

  console.log(`estado final del paquete ${paquete4.estadoPaquete}`);

  //console.log(repartidor1);
} catch (error) {
  console.log(`Error en el código: ${error.message}`);
}
