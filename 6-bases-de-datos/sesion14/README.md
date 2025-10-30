## Ejercicio API conectada a PostgresSQL

Ejercicio para conectar la base de datos que se creo en la sesion 13 de cursos. Con la implementacion de una API para poder crear y eliminar diferentes entidades del ejercicio como profesores, cursos, estudiantes, etc.

`EJERCICIO POR TERMINAR`

### Datos importantes vistos

#### Patron adaptador

El patrón Adaptador es un patrón de diseño estructural que permite que dos clases o componentes con interfaces incompatibles trabajen juntos. Actúa como un traductor entre ellos, adaptando una interfaz existente a la que el sistema necesita, sin modificar el código original. Se usa comúnmente cuando queremos integrar una librería, servicio o clase externa con nuestro propio código, manteniendo el sistema desacoplado y flexible.

Este es usado de forma sitemática en la arquitectura hexagonal, es lo que le permite al dominio comunicarse y entender como funcionara una entidad externa como una API pero sin saber cuál es como tal, solo sabe como se espera que funcione.

#### SQL injections

La SQL injection es una vulnerabilidad que ocurre cuando una aplicación construye consultas SQL incorporando entrada del usuario sin validar ni parametrizar, permitiendo que un atacante inyecte fragmentos de SQL que el motor ejecuta. Con ello se puede leer, modificar o borrar datos, saltarse autenticaciones o incluso ejecutar comandos peligrosos en la base de datos. La defensa principal es usar consultas preparadas / parámetros, validación/normalización de entradas, principios de menor privilegio y capas adicionales (ORMs, WAFs, escapes correctos).

Ejemplo de código inseguro y un ataque común `"' OR '1'='1"`:

```ts
const username = req.body.username; // entrada del usuario
const password = req.body.password;
const sql = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;
// Si username = "' OR '1'='1" y password = "x", la consulta queda:
// SELECT * FROM users WHERE username = '' OR '1'='1' AND password = 'x'
// -> '1'='1' es siempre true, puede devolver filas y permitir acceso.
```

La forma básica de evitar esto es parametrizando los datos que se le pasan a la base de datos:

```ts
import { Pool } from 'pg';

const pool = new Pool({
  host: 'localhost',
  user: 'mi_usuario_app',
  password: 'mi_password',
  database: 'mi_db',
  port: 5432,
});

async function getProductById(id) {
  if (!Number.isInteger(id)) throw new Error('id inválido');
  const res = await pool.query('SELECT id, name, price FROM products WHERE id = $1', [id]);
  return res.rows[0] ?? null;
}
```

el método `pool.query` de pg espera dos parametros el tecto de consulta y los values que son los datos que vamos a consultar pero que se pasan como parametros en un array el cual va añadiendolos segun su posición

#### DTO (Object Data Transfer)

Es un objeto simple que se usa para transportar datos entre distintas capas de una aplicación (por ejemplo, entre el backend y el frontend, o entre el controlador y el servicio), sin exponer directamente las entidades del dominio o de la base de datos.

Este objeto, junto con la librería `Zod`, se utiliza para validar el cuerpo (body) de una solicitud HTTP antes de procesarla. Si los datos no cumplen con la estructura o las reglas definidas en el esquema, `Zod` lanzará una excepción, evitando que la solicitud inválida continúe hacia la lógica de negocio o la base de datos.

ejemplo:

archivo zod para crear un DTO para validar la creación de platos:

```ts
import { z } from 'zod';

export const CrearPlatoEsquema = z.object({
  nombrePlato: z.string().nonempty('El nombre del plato es obligatorio').min(5).max(20),
  ingredienteAdicional: z
    .string()
    .optional()
    .transform((val) => val ?? null),
});

export type PlatoDTO = z.infer<typeof CrearPlatoEsquema>;
```

implementación:

```ts
import { PlatoDTO, CrearPlatoEsquema } from '../esquemas/platoEsquema';

crearPlato = async (request: FastifyRequest<{ Body: PlatoDTO }>, reply: FastifyReply) => {
  try {
    const nuevoPlato = CrearPlatoEsquema.parse(request.body);
    const idNuevoPlato = await this.platosCasosUso.crearPlato(nuevoPlato);

    return reply.code(200).send({
      mensaje: 'El plato se creó correctamente',
      idNuevoPlato: idNuevoPlato,
    });
  } catch (err) {
    if (err instanceof ZodError) {
      return reply.code(400).send({
        mensaje: 'Error crear un nuevo plato',
        error: err.issues[0]?.message || 'Error desconocido',
      });
    }
    return reply.code(500).send({
      mensaje: 'Error crear un nuevo plato',
      error: err instanceof Error ? err.message : String(err),
    });
  }
};
```
