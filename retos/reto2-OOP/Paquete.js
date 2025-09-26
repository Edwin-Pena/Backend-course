class Paquete {
  #estado;
  constructor(id, peso, direccionOrigen, direccionDestino) {
    this.id = id;
    this.peso = peso;
    this.direccionOrigen = direccionOrigen;
    this.direccionDestino = direccionDestino;
    this.#estado = 'No Asignado';
  }

  asignado() {
    this.#estado = 'Asignado';
    console.log(`el paquete ${this.id} fue asignado`);
  }

  entregado() {
    this.#estado = 'Entregado';
    console.log(`el paquete ${this.id} fue entregado`);
  }

  get estado() {
    return this.#estado;
  }
}

export default Paquete;
