class Persona {
  #id;
  constructor(nombre, id) {
    this.nombre = nombre;
    this.#id = id;
  }

  get idPersona() {
    return this.#id;
  }
}

export default Persona;
