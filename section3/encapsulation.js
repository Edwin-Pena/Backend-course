class Person {
  #contrasena; //de esta forma escondemos una propiedad en js en ts seria con private
  static tamanoMinimo = 10; //esta variable la puedo usar dentro de la clase por ejemplo si en un metodo que esta dentro de la clase pero no desde una instacia (objeto creado a partir de esta clase) tambien se puede usar para metodos
  constructor(nombre, apellido, edad, contrasena) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.#contrasena = contrasena;
  }

  get contrasena() {
    return this.#contrasena;
  }

  set contrasena(nuevaConstrasena) {
    if (nuevaConstrasena === this.#contrasena) {
      console.log('No se puede usar la misma contrasena');
      return;
    }
    this.#contrasena = nuevaConstrasena;
  }
}

let persona = new Person('Edwin', 'Pena', 25, 555555);

console.log(persona);
console.log(persona.contrasena);

persona.contrasena = 555555;
