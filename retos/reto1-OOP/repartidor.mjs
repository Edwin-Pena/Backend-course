class Repartidor {
  #idEmpleado;
  #paquetesAsignados;
  constructor(nombre, idEmpleado) {
    this.nombre = nombre;
    this.#idEmpleado = idEmpleado;
    this.#paquetesAsignados = [];
  }

  get datosRepartidor() {
    console.log(`Nombre: ${this.nombre} || ID: ${this.#idEmpleado}`);
  }

  asignarPaquete(paquete) {
    paquete.asignado();
    this.#paquetesAsignados.push(paquete);
  }

  listarPaquetes() {
    if (this.#paquetesAsignados === 0) {
      console.log(
        `El repartidor ${this.nombre} con id ${
          this.#idEmpleado
        } no tiene paquetes asignados`
      );
      return;
    }
    console.log(
      `Los paquetes que se le asignaron al repartidor ${this.nombre} con id ${
        this.#idEmpleado
      } son:`
    );

    this.#paquetesAsignados.forEach((paquete) => {
      console.log(
        `ID: ${paquete.id} || Peso: ${paquete.peso} || Origen: ${paquete.direccionOrigen} || Destino: ${paquete.direccionDestino} || Estado: ${paquete.estado}`
      );
    });
  }

  consultarPaquete(idPaquete) {
    const paquete = this.#paquetesAsignados.find(
      (paquete) => paquete.id === idPaquete
    );
    if (paquete) {
      console.log(
        `ID: ${paquete.id} || Peso: ${paquete.peso} || Origen: ${paquete.direccionOrigen} || Destino: ${paquete.direccionDestino} || Estado: ${paquete.estado}`
      );
      return;
    }
    console.log(
      `El repartidor ${this.nombre} con id ${
        this.#idEmpleado
      } no tiene asignado el paquete ${idPaquete}`
    );
  }

  entregarPaquete(idPaquete) {
    const paquete = this.#paquetesAsignados.find(
      (paquete) => paquete.id === idPaquete
    );

    if (paquete) {
      paquete.entregado();
      console.log(
        `El paquete fue recogido en ${paquete.direccionOrigen} y entregado en ${paquete.direccionDestino}`
      );
      return;
    }

    console.log(
      `el paquete ${idPaquete} no fue asignado al repartidor ${
        this.#idEmpleado
      }`
    );
  }
}

export default Repartidor;
