## Modularización de una API

En esta sesión lo que hicimos fue ver un ejemplo de una api modularizada, en donde se buscaba tener las mejores prácticas para llegar a un resultado más escalable y mantenible en el tiempo.

Puentualmente podemos ver como en este ejercicio lo que se hace es separar las responsabilidades por ejemplo de la API, en donde en un archivo tenemos los endpoints, mientras que en otra tenemos las funciones que se le pasan como response a la consulta que se le hace a la API.

También se implementan algunas librerías que nos permiten hacer validaciones como `zod` la cual es utilizada para las validaciones de los esquemas. También usamos en este caso la librería de `uuid` para generar un `id` seguro para la API, en este caso es desde mi código porque no se tiene la base de datos conectada, pero tambien se puede usar `uuid` desde postgres directamente como plugin.
