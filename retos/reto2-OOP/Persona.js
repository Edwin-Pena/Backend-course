class Persona {
  constructor(nombre, apellido, documentoIdentidad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.documentoIdentidad = documentoIdentidad;
  }

  presentarse() {
    console.log(
      `Hola soy ${this.nombre} ${this.apellido}, mi cédula es ${this.documentoIdentidad}`
    );
  }
}

export default Persona;
