# Bases de datos

## Postgresql

usamos pgadmin para visualizar la tablas

- llaves foraneas investigar mas

El orden lógico de ejecución de una consulta SQL es el siguiente:

1. FROM y JOIN
2. WHERE
3. GROUP BY
4. HAVING
5. SELECT
6. ORDER BY

## Comandos para postgres:

### Crear un base de datos :

```sql
CREATE DATABASE nombre_de_la_db; --> no olvidar el ;
```

### conectarme a un servidor ya creado:

```sql
psql -h localhost(direccion o ip address) -p 5432 (puerto) -U postgres(el usuario) test(nombre del servidor)
```

o ingresar a al usuario con el comando `psql -U nombre_usuario` y luego con el comando `\l` veo las bases de datos disponibles y luego con el comando `\c nombre_db` me puedo conectar a la base de datos que yo quiera, y si ya me se el nombre no necesito correr primero el comando de `\l` ya directamente usaria el otro.

### Eliminar una base de datos:

```sql
DROP DATABASE nombre_de_la_db; --> no olvidar el ;
```

### Crear tablas (sin contraints):

```sql
Estructura:
CREATE TABLE table_name (
    column_name + data type + constraints if any
)


Ejemplo:
CREATE TABLE person (
    id int,
    first_name VARCHAR(10),
    last_name VARCHAR(10),
    gender VARCHAR(10),
    date_of_birth DATE
)

```

Para ver la lista de relaciones, que es la lista todas las tablas, vistas y secuencias del esquema actual (por ejemplo `public`), que tenemos en una base de datos usamos el comando `\d` y si queremos solo ver las tablas usamos el comando `\dt`. Y para ver los detalles de una tabla en especial (**NO** los datos como tal sino sus columnas y así) usamos el mismo comando más e nombre de la tabla `\d table_name`. Y si queremos que soo

**Ejemplos:**

```
test=# \d    ---> ver lista de relaciones por esquema

              List of relations
 Schema |     Name      |   Type   |  Owner
--------+---------------+----------+----------
 public | person        | table    | postgres
 public | person_id_seq | sequence | postgres
(2 rows)
```

```
test=# \d person     ---> tabla específica

                         Table "public.person"
    Column     |         Type          | Collation | Nullable | Default
---------------+-----------------------+-----------+----------+---------
 id            | integer               |           |          |
 first_name    | character varying(50) |           |          |
 last_name     | character varying(50) |           |          |
 gender        | character varying(7)  |           |          |
 date_of_birth | date                  |           |          |
```

### Eliminar tablas:

```sql
DROP TABLE nombre_de_la_tabla; --> no olvidar el ;
```

### Crear tablas (con contraints):

```sql

Ejemplo:
CREATE TABLE person (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    first_name VARCHAR(10) NOT NULL,
    last_name VARCHAR(10) NOT NULL,
    gender VARCHAR(10) NOT NULL,
    date_of_birth DATE NOT NULL,
    email VARCHAR(10) --> este lo dejamos sin el NOT NULL porque una persona puede que no tenga correo
)

```

### Insertar datos en una tabla (Insert into):

En la estructura primero decimos a cual tabla realizaremos la inserción y luego definimos la columnas y ponemos en `VALUES` los valores que iran en dichas columnas:

```sql
INSERT INTO person (
    first_name,
    last_name,
    gender,
    date_of_birth)
VALUES ('Anne', 'Smith', 'Female', DATE '1988-01-09');

```

### Generar 1000 columnas con Mockaroo:

En esa pagina se pueden crear tablas simuladas de forma rapida, definimos las columnas y el tipo de valor que contendrá cada una, luego descargarmos la tabla con el nombre que queramos como archivo sql. Para ejecutar este comando vamos a la temrinal y escribimos el siguiente comando `\i` + la ruta en la que esta el archivo y su nombre. Sebe ser con las lineas de acceder a la carperta hacia este sentido `/` ya que si lo hacemos al contrario no funcionara. Ejemplo del comando: `\i "C:/Users/edwin/Downloads/person.sql"`.

Este comando nos permite ejecutar varios comando que estan en un solo archivo, por ejemplo en este archivo de person del ejemplo creo la tabla y le inserto 1000 personas.

### Consultar datos con SELECT FROM:

La siguiente consulta trae todos las columnas de una tabla, si quiero especificar que traer lo pongo en donde esta el `*` y asi puedo hacer consultas enfocadas a ciertas columnas. Básicamente este me dice que columnas va a tener la tabla que voy a crear temporalmente con esta consulta.

```sql
SELECT * FROM person;
```

### Ordenar consultas (ORDER BY):

Con la palabra clave `ORDER BY` podemos definir como organizar los datos que estamos consultando dependiendo de la columna (o columnas) que seleccionemos:

```sql
SELECT * FROM person ORDER BY country_of_birth;
```

### Distinct (No repetir datos):

Nos permite hacer una consulta sin repetir datos, por ejemplo si varias personas nacieron en un mismo país y queremos que solo se nos muestre una vez dicho país en una consulta usamos la palabra `DISTINCT`:

```sql
SELECT DISTINCT country_of_birth FROM person ORDER BY country_of_birth;
```

### WHERE clause y AND :

`WHERE` nos permite filtrar la información de la consulta basandonóns en conficiones, por ejemplo una consulta en donde queremos que nos traigan las consultas que tengan mujer en la columna de género:

```sql
SELECT * FROM person WHERE gender = 'Female';
```

Y con el `AND` podemos añadir más condiciones para el `WHERE`, el en siguiente ejemplo validamos que sea hombre y que haya nacido en polonia o china y que su apellido sea malandrino:

```sql
SELECT * FROM person WHERE gender = 'Male' AND (country = 'Poland' OR country = 'China') AND last_name = 'Malandrino' ;
```

### Operadores de comparación (Comparison Operators):

Basicamente con los mismos de siempre:

- Operadores ariméticos: `+` `-` `/` `*`
- Operadores de comparación: `=` `<` `>` `<=` `>=` y el que si es diferente es el de diferencia que en este caso es `<>`.

### LIMIT, OFFSET y FETCH:

`LIMIT` Limita los datos de la consulta a los que yo quiera, por ejemplo si solo quiero ver los primeros 10 resultados de una consulta:

```sql
SELECT * FROM person LIMIT 10;
```

`OFFSET` Nos permite sacar una porción de datos de la consulta, por ejemplo quiero recibir a 5 personas pero a partir de la fila 5, donde con `OFFSET` decimos en que fila comenzar y con `LIMIT` definimos hasta donde:

```sql
SELECT * FROM person OFFSET 5 LIMIT 5;
```

Y si solo usamos `OFFSET` la consulta nos traera todos los datos después de la fila que le indiquemos.

A pesar de que muchos motores como postgres usan `LIMIT` la keyword oficial (en el estandar de SQL) con la que se hace una consulta limitada es con `FETCH`. Y esto es equivalente a lo que hacemos con `LIMIT`:

```sql
SELECT * FROM person OFFSET 5 FETCH FIRST 5 ROW ONLY;
```

### IN:

Si quisieramos hacer una consulta en donde mostremos las personas que nacieron en los países Colombia, Brazil y Costa Rica; lo podríamos hacer de esta forma larga:

```sql
SELECT * FROM person
WHERE country = 'Colombia' OR country = 'Brazil' OR country = 'Costa Rica';
```

pero estamos repitiendo country 3 veses y es más largo este código. La mejor forma de hacer esto y de forma resumida es con `IN`:

```sql
SELECT * FROM person WHERE country IN ('Colombia', 'Brazil', 'Costa Rica');
```

### BETWEEN:

Es para seleccionar datos de un rango, por ejemplo seleccionar por un rango de fechas fechas:

```sql
SELECT * FROM person
WHERE date_of_birth
BETWEEN DATE '2000-01-01' AND '2010-01-01'
ORDER BY date_of_birth DESC;
```

### Like y ILike:

`LIKE` nos ayuda a hacer consultas buscando datos que hagan match con una palabra que le indiquemos.

Ejemplos de consultas:

- 'a%' = empieza con "a"
- '%cafe%' = contiene "cafe"
- '%cafe' = termina en cafe

Ejemplo en donde queremos traer los emails que terminen en `.com`:

```sql
SELECT * FROM person WHERE email LIKE '%.com';
```

Por ejemplo si queremos encntrar todos los correos que tengan `@google` pero con cualquier terminacion ya sea `.com` u otra lo haríamos de esta forma:

```sql
SELECT * FROM person WHERE email LIKE '%@google.%';
```

Y con el guión `_` bajo le decimos que cada guion representa un carácter de la consulta con palabras, supongamos que queremos buscar todos los emails que tengan 5 carácteres antes del `@`, entonces escribiríamos 5 guiones bajos:

```sql
SELECT * FROM person WHERE email LIKE '_____%';
```

`ILIKE` esta palabra hace básicamente los mismo que `LIKE` solo que ignora las mayúsculas o minúsculas. Por ejemplo si queremos consultar los países que comiencen por la letra `p`, si no usamos `ILIKE` deberíamos usar la `p` tal cual la pusimos en la tabla:

```sql
SELECT * FROM person WHERE country LIKE 'p%'; --> esto no me trae países si la p es mayúscula
```

```sql
SELECT * FROM person WHERE country ILIKE 'p%'; --> si funciona
```

### GROUP BY:

Permite agrupar información basándonos en columnas. Por ejemplo el total de personas que han nacido en cada país:

```sql
SELECT country, COUNT(*) FROM person GROUP BY country ORDER BY country; --> en este ejemplo el * cuenta todas las filas así sean NULL, pero si lo hiciera por ejemplo con otro dato que fuer NOT NULL daría casi igual que usar *
```

### GROUP BY HAVING:

El `HAVING` Nos permite agregarle un extra filtro al `GROUP BY` y debe ir antes del `GROUP BY`, por ejemplo queremos hacer la misma consulta de cuantas personas han nacido por país pero esta vez solo queremos ver los países de la lista en los que han nacido 5 personas o más:

```sql
SELECT country, COUNT(*) FROM person GROUP BY country HAVING COUNT(*) > 5 ORDER BY country;
```

---

## Ejercicios de clase

1. Listado de estudiantes en un curso
   Obtén el nombre y email de los estudiantes inscritos en el curso “Bases de Datos” (BD301) en el periodo 2025-1, ordenados alfabéticamente por nombre.

```sql
SELECT --> desde aqui seleccionamos la columnas que queremos traer
    e.nombre AS nombre_estudiante,
    e.email,
	c.nombre AS nombre_curso
FROM
    inscripciones AS i
INNER JOIN
    estudiantes AS e ON i.id_estudiante = e.id_estudiante -->una las tablas mediante esta validacion
INNER JOIN
    cursos AS c ON i.codigo_curso = c.codigo
WHERE
    c.codigo = 'BD301' AND i.periodo = '2025-1'
ORDER BY
    e.nombre ASC;

```

2. Carga docente por periodo (incluyendo ceros)
   Muestra todos los profesores con el número de cursos distintos que dictan en 2025-1, ordenado de mayor a menor. Incluye a los profesores que no dictan ningún curso (conteo = 0).

   ```sql
   SELECT
    p.nombre AS nombre_profesor,
    COUNT(DISTINCT d.codigo_curso) AS total_cursos,
   d.periodo AS periodo
    FROM
    profesores p
    LEFT JOIN
    dicta d ON p.id_profesor = d.id_profesor AND d.periodo = '2025-1'
    GROUP BY
    p.id_profesor, p.nombre, d.periodo
    ORDER BY
    total_cursos DESC;
   ```

3. Cursos sin inscripciones
   Lista los cursos que no tienen ninguna inscripción en 2025-1 (muestra código y nombre).

   ```sql
   SELECT
   	c.nombre AS nombre_curso,
   	c.codigo AS codigo_curso
   FROM
   	cursos c
   LEFT JOIN
   	inscripciones i ON c.codigo = i.codigo_curso
   WHERE
   	i.codigo_curso IS NULL
   ```

4. **Agenda por salón con profesor(es):**
   Construye la agenda de salones para 2025-1 mostrando: salón, día, hora_inicio–hora_fin, código del curso, nombre del curso y profesor(es) asignado(s) ese periodo. Ordena por salón, día y hora.

   ```sql
   SELECT
        s.nombre AS salon,
        h.dia_semana AS dia,
        CONCAT(h.hora_inicio,' - ',h.hora_fin) AS horario,
        c.codigo,
        c.nombre AS curso,
        STRING_AGG(p.nombre, ', ') AS profesores
    FROM
        horarios h
    INNER JOIN
        salones s ON h.id_salon = s.id_salon
    INNER JOIN
        cursos c ON h.codigo_curso = c.codigo
    INNER JOIN
        dicta d ON c.codigo = d.codigo_curso
    INNER JOIN
        profesores p ON d.id_profesor = p.id_profesor
    WHERE
        h.periodo = '2025-1'
    GROUP BY
        s.nombre, h.dia_semana, h.hora_inicio, h.hora_fin, c.codigo, c.nombre
    ORDER BY
        salon,
        CASE h.dia_semana
   	        WHEN 'Lunes' THEN 1
   	        WHEN 'Martes' THEN 2
   	        WHEN 'Miércoles' THEN 3
   	        WHEN 'Jueves' THEN 4
   	        WHEN 'Viernes' THEN 5
   	        WHEN 'Sábado' THEN 6
   	        WHEN 'Domingo' THEN 7
   	        ELSE 8
        END,
        h.hora_inicio ASC
   ```

5. Top 3 cursos por demanda
   Muestra el Top 3 de cursos con más inscripciones en 2025-1 (código, nombre, total_inscritos). En caso de empate, ordena alfabéticamente por código.

```sql
SELECT
	c.codigo,
	c.nombre,
	COUNT(DISTINCT i.id_estudiante) AS total_inscritos
FROM
	inscripciones i
INNER JOIN
	cursos c ON i.codigo_curso = c.codigo
where
	i.periodo = '2025-1'
GROUP BY
	c.codigo, c.codigo
ORDER BY
	total_inscritos DESC, c.nombre ASC
LIMIT
3
```

donde voy: https://youtu.be/qw--VYLpxG4?t=6598
