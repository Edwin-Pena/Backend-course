# APIs

Una API es un puente que permite que dos programas se puedan comunicar entre sí a través de métodos http. Un buen ejemplo de esto puede ser como varias aplicaciones usan google maps, necesitan hacer uso de estos mapas pero ellos no crean como tal el mapa solo usan la api de google para mostrar los mapas; esta app no sabe como google maps hace los mapas solo hace uso de esta API.

los métodos mas usados hoy en día son:

- **get:** obtener la información.
- **Post:** crear un nuevo elemento.
- **Patch o Put:** actualizar una parte de un elemento ya existente.
- **Delete:** eliminar un elemento.

## Qué es una promesa?

En JavaScript una promesa es un objeto que representa una tarea que se ejecutará en el futuro y que aún no se ha completado cuando el código se ejecuta. Sirve para manejar operaciones asíncronas, como pedir datos a una API o leer un archivo.

Tiene tres estados:

- **Pending (pendiente):** la operación aún no terminó.
- **Fulfilled (resuelta):** terminó con éxito.
- **Rejected (rechazada):** ocurrió un error.

## Fastify

Es un framework para crear servidores web y APIs en `Node.js`, muy similar a Express, pero con un enfoque en tener un mejor rendimiento y soporte moderno para TypeScript y plugins.

Nos permite :

- Crear rutas (endpoints) como GET, POST, PUT, DELETE.
- Recibir y responder solicitudes HTTP.
- Manejar JSON, autenticación, plugins, etc.
