import { validarFormatoString } from './utils/validaciones.js';

class Paquete {
  static validarString = validarFormatoString;
  static estadosDelPaquete = [
    'No asginado',
    'Asignado',
    'Entregado',
    'No entregado',
  ];

  #estadoPaquete;
  constructor(id, pesoKG, direccionOrigen, direccionDestino) {
    Paquete.validarString(id, 'El id del paquete');

    if (!Number.isFinite(pesoKG) || pesoKG < 0)
      throw new Error(
        `El peso del paquete debe ser un número válido mayor a 0`
      );

    Paquete.validarString(direccionOrigen, 'La dirección de origen');
    Paquete.validarString(direccionDestino, 'La dirección de destino');

    this.id = id;
    this.pesoKG = pesoKG;
    this.direccionOrigen = direccionOrigen;
    this.direccionDestino = direccionDestino;
    this.#estadoPaquete = 'No asignado';
  }

  get estadoPaquete() {
    return this.#estadoPaquete;
  }

  set estadoPaquete(nuevoEstadoPaquete) {
    if (!Paquete.estadosDelPaquete.includes(nuevoEstadoPaquete)) {
      throw new Error(
        `"${nuevoEstadoPaquete}" no es un estado válido para el paquete`
      );
    }

    this.#estadoPaquete = nuevoEstadoPaquete;
    console.log(`El estado del paquete cambió a ${nuevoEstadoPaquete}`);
  }
}

export default Paquete;
