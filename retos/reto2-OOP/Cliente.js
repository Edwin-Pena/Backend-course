import Paquete from './Paquete.js';
import Persona from './Persona.js';
import { validarFormatoString, validarPaquete } from './utils/validaciones.js';

class Cliente extends Persona {
  constructor(nombre, apellido, documentoIdentidad) {
    validarFormatoString(nombre, 'el nombre del cliente');
    validarFormatoString(apellido, 'El apellido de la persona');
    validarFormatoString(
      documentoIdentidad,
      'El documento de identidad del cliente',
      8
    );

    super(nombre, apellido, documentoIdentidad);
  }

  get infoCliente() {
    return `${this.nombre} ${this.apellido}`;
  }

  presentarse() {
    console.log(
      `Hola soy ${this.infoCliente}, la persona que solicitó la recogida del paquete, mi cédula es ${this.documentoIdentidad}`
    );
  }

  programarRecogida(id, peso, direccionOrigen, direccionDestino) {
    const paquete = new Paquete(id, peso, direccionOrigen, direccionDestino);
    console.log(
      `El cliente ${this.infoCliente} programó exitosamente la recogida del paquete ${paquete.id}`
    );

    return paquete;
  }

  entregarPaquete(paquete) {
    validarPaquete(paquete, Paquete);
    paquete.estadoPaquete = 'Enviado';
  }

  recibirPaquete(paquete) {
    validarPaquete(paquete, Paquete);
    paquete.estadoPaquete = 'Completado';
  }
}

export default Cliente;

/* try {
  const cliente1 = new Cliente('Edwin', 'Pena', '1468932476');
  const myPaquete = new Paquete('PQ04', 1, 'Medellin', 'Cartagena');

  cliente1.entregarPaquete(myPaquete);
} catch (error) {
  console.log(`Error en el código: ${error.message}`);
} */
