class Paquete {
  constructor(dimensiones, pesoEnKg) {
    this.dimensiones = dimensiones;
    this.pesoEnKg = pesoEnKg;
  }
}

class Envio {
  constructor(paquete, distanciaEnKM) {
    this.paquete = paquete;
    this.distanciaEnKM = distanciaEnKM;
  }

  calcularCosto() {
    let calculo = this.paquete.pesoEnKg * 1000 * this.distanciaEnKM;
    console.log(`El costo del envio es de ${calculo}`);
  }
}

const paquete1 = new Paquete(
  (dimensiones = { largo: 50, ancho: 50, alto: 50 }),
  (peso = 20)
);

const envio1 = new Envio(paquete1, 10);

envio1.calcularCosto();
