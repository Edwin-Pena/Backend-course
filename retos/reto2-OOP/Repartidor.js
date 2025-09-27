import Paquete from './Paquete.js';
import Persona from './Persona.js';
import { validarFormatoString } from './utils/validaciones.js';

class Repartidor extends Persona {
  #idEmpleado;
  constructor(nombre, apellido, documentoIdentidad, idEmpleado) {
    validarFormatoString(nombre, 'El nombre del repartidor');
    validarFormatoString(apellido, 'El apellido del repartidor');
    validarFormatoString(
      documentoIdentidad,
      'El documento de identidad del repartidor',
      8
    );
    validarFormatoString(idEmpleado, 'El ID del repartidor');
    super(nombre, apellido, documentoIdentidad);

    this.#idEmpleado = idEmpleado;
    this.paquetesAsignados = [];
  }

  #validarPaquetesAsignados() {
    const totalPaquetes = this.paquetesAsignados.length;
    if (totalPaquetes === 0) {
      throw new Error(
        `El repartidor ${this.infoRepartidor} no tiene paquetes asignados aún.`
      );
    }
    return totalPaquetes;
  }

  #buscarPaquetePorId(idPaquete) {
    return this.paquetesAsignados.find((paquete) => paquete.id === idPaquete);
  }

  get infoRepartidor() {
    return `${this.nombre} ${this.apellido} con ID ${this.#idEmpleado}`;
  }

  asignarPaquete(paquete) {
    if (!(paquete instanceof Paquete)) {
      throw new Error(
        `${this.nombre} no puede recibir objetos que no sean paquetes válidos para Coordinadora`
      );
    }

    if (this.#buscarPaquetePorId(paquete.id)) {
      throw new Error(
        `El paquete ${paquete.id} no fue asignado porque ya fue asignado al repartidor ${this.infoRepartidor} anteriormente`
      );
    }

    paquete.estadoPaquete = 'Asignado';
    this.paquetesAsignados.push(paquete);
    console.log(
      `el paquete ${paquete.id} fue asignado al repartidor: ${this.infoRepartidor}`
    );
  }

  listarPaquetes() {
    const totalPaquetes = this.#validarPaquetesAsignados();
    console.log(
      `El repartidor ${this.infoRepartidor} tiene ${totalPaquetes} ${
        totalPaquetes === 1 ? 'paquete asignado:' : 'paquetes asignados:'
      }`
    );
    this.paquetesAsignados.forEach((paquete, i) => {
      const numeroDePaquete = i + 1;
      console.log(
        `Paquete ${numeroDePaquete}: ID: ${paquete.id} | Peso(kg): ${paquete.pesoKG} | Origen: ${paquete.direccionOrigen} | Destino: ${paquete.direccionDestino} | Estado: ${paquete.estadoPaquete}`
      );
    });
  }

  consultarPaquete(idPaquete) {
    this.#validarPaquetesAsignados();
    const paquete = this.#buscarPaquetePorId(idPaquete);

    if (!paquete) {
      throw new Error(
        `No se puede consultar el paquete ${idPaquete} porque no esta en los paquetes asignados del repartidor ${this.infoRepartidor}`
      );
    }

    console.log(`Paquete ${idPaquete}:`);
    console.log({
      id: paquete.id,
      peso: paquete.pesoKG,
      origen: paquete.direccionOrigen,
      destino: paquete.direccionDestino,
      estado: paquete.estadoPaquete,
    });
  }

  presentarse() {
    console.log(
      `Hola soy ${this.infoRepartidor}, el repartidor de Coordinadora encargado de transportar su paquete`
    );
  }

  entregarPaquete(idPaquete, cliente) {
    this.#validarPaquetesAsignados();
    const paquete = this.#buscarPaquetePorId(idPaquete);

    if (!paquete) {
      throw new Error(
        `El paquete ${idPaquete} no puede ser entregado porque no esta en los paquetes asignados al repartidor ${this.infoRepartidor}`
      );
    }

    if (!cliente) {
      throw new Error(
        `El paquete ${idPaquete} no puede ser entregado porque no se encontro al cliente que lo iba a recibir`
      );
    }

    cliente.recibirPaquete(paquete);
    console.log(
      `El paquete ${paquete.id} ha sido entregado con éxito por el repartidor ${this.infoRepartidor} a su destinatario ${cliente.infoCliente}`
    );
  }
}

export default Repartidor;
