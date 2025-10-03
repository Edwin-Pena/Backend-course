# Arquitectura hexagonal

La arquitectura hexagonal, también conocida como **puertos y adaptadores**, es un patrón de diseño de software que desacopla el núcleo de la aplicación de la tecnología externa (como bases de datos o interfaces de usuario) utilizando **puertos** y **adaptadores**. Su objetivo principal es crear un código central de negocio independiente, flexible, mantenible y fácil de probar, separando la lógica de dominio de la infraestructura y permitiendo el intercambio de componentes sin afectar el núcleo.

![representacion](https://miro.medium.com/v2/resize:fit:1400/1*yR4C1B-YfMh5zqpbHzTyag.png)

Usualmente este patrón se divide en 3 capaz con las que se trabaja toda la lógica de mi programa: `Dominio`, `Aplicación` e `Infraestructura`.

### Dominio (el corazón del negocio)

Define las entidades (ej: CitaMedica, Paciente, etc.).

Define puertos (interfaces) que representan lo que el dominio o la aplicación necesitan del mundo exterior.

**Ejemplo:** RepositorioCitas(interfaz) con los métodos `guardar(cita)` y `buscarPorId(id)`.

Estos puertos son contratos, y se implementarán en la capa de** infraestructura**.

### Aplicacion (casos de uso)

Define las acciones que se pueden hacer con el dominio, orquestando entidades + repositorios.

**Ejemplo:** AgendarCita, CancelarCita. Estas son clases que realizan esas acciones con sus métodos. Y Usan inyección de dependencias para recibir un objeto que cumpla el contrato del puerto definido en dominio.

No sabe qué tecnología concreta hay detrás: solo sabe que alguien le dará un repositorio válido que puede guardar o buscar.

### Infraestructura (la parte tecnológica)

Implementa los adaptadores concretos que cumplen con las interfaces definidas en dominio.

**Ejemplo:** RepositorioCitasMongo, RepositorioCitasMySQL, RepositorioCitasEnMemoria.

Aquí ya decidimos con qué DB, framework, API, etc. trabajas.

### Ejemplo sencillo

#### Dominio

```ts
export class CitaMedica {
  constructor(
    public id: string,
    public paciente: string,
    public fecha: string
  ) {}
}

export interface RepositorioCitas {
  guardar(cita: CitaMedica): void;
}
```

#### Aplicación

```ts
import { CitaMedica, RepositorioCitas } from '../dominio';

export class AgendarCita {
  constructor(private repo: RepositorioCitas) {}

  ejecutar(paciente: string, fecha: string): CitaMedica {
    const cita = new CitaMedica(Date.now().toString(), paciente, fecha);
    this.repo.guardar(cita);
    return cita;
  }
}
```

#### Infraestructura

```ts
import { CitaMedica, RepositorioCitas } from '../dominio';

export class RepositorioCitasMongo implements RepositorioCitas {
  guardar(cita: CitaMedica): void {
    console.log('Guardando en Mongo', cita);
  }
}
```

#### Uso final (main.ts)

```ts
import { AgendarCita } from './aplicacion/AgendarCita';
import { RepositorioCitasMongo } from './infraestructura/RepositorioCitasMongo';

const repo = new RepositorioCitasMongo();
const agendarCita = new AgendarCita(repo);

agendarCita.ejecutar('Edwin', '2025-10-05');
```
