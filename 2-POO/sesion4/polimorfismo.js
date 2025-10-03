class Recurso {
  constructor(nombre, autor) {
    this.nombre = nombre;
    this.autor = autor;
  }

  mostrarInfo() {
    console.log({
      nombre: this.nombre,
      autor: this.autor,
    });
  }
}

class Revista extends Recurso {
  constructor(nombre, autor, tipoRevista, numeroPaginas, editorial) {
    super(nombre, autor);
    this.tipoRevista = tipoRevista;
    this.numeroPaginas = numeroPaginas;
    this.editorial = editorial;
  }

  mostrarInfo() {
    console.log(this);
  }
}

const revista1 = new Revista('semillero', 'Edwin', 'Informativa', 300, 'epa');

revista1.mostrarInfo();
