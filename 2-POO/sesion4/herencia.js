class Persona {
  constructor(nombre) {
    this.nombre = nombre;
  }

  hablar() {
    console.log(`Hola! me llamo ${this.nombre}`);
  }
}

class Repartidor extends Persona {
  constructor(nombre, idRepartidor) {
    super(nombre);
    this.idRepartidor = idRepartidor;
  }

  entregarPaquete(idPaquete) {
    console.log(`Entregando paquete ${idPaquete}`);
  }
}

const repartidor1 = new Repartidor('Juan Perez', 'REP1');

repartidor1.hablar();

console.log(repartidor1 instanceof Persona);
