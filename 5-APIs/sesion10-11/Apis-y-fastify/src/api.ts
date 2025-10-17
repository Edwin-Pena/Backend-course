import Fastify from 'fastify';
import { Plato } from './interfaces/plato';
import { existeIdPlato, existeNombrePlato } from './validaciones/existenciaPlato';
import { buscarIndicePorId } from './utils/buscarIndicePorId';

const app = Fastify({ logger: true });

let platos: Plato[] = [
  { idPlato: '1', nombrePlato: 'Arroz con pollo' },
  { idPlato: '2', nombrePlato: 'Bandeja paisa' },
  { idPlato: '3', nombrePlato: 'Choripan' },
  { idPlato: '4', nombrePlato: 'Perro' },
  { idPlato: '5', nombrePlato: 'Pollo asado', ingredienteAdicional: 'Papas fritas' },
];

//Servidor
export const iniciarCocina = () => {
  try {
    app.listen({ port: 3000 });
    app.log.info('La cocina esta lista para trabajar');
  } catch (err) {
    app.log.error('La cocina no esta funcionando');
  }
};

//Endpoints

//Consultar menu - Mesero o Endpoints

//Método get y Query paramns - para consultar datos
app.get('/platos', (req, res) => {
  const { limite } = req.query as { limite: number };

  const menuFiltrado = limite ? platos.slice(0, limite) : platos;

  return res.code(200).send({ mensaje: 'Este es el menu disponible', menu: menuFiltrado });
});

//Path params
app.get('/platos/:idPlato', (req, res) => {
  const { idPlato } = req.params as { idPlato: string };
  const plato = existeIdPlato(platos, idPlato);

  if (!plato) {
    return res.code(404).send({ error: 'El plato no fue encontrado' });
  }

  return res.code(200).send({ mensaje: 'Plato encontrado satisfactoriamente', plato: plato });
});

// Método Post -- para crear
app.post('/platos', (req, res) => {
  const body = req.body as Plato;
  const platoPorId = existeIdPlato(platos, body.idPlato);
  const platoPorNombre = existeNombrePlato(platos, body.nombrePlato);

  if (platoPorId || platoPorNombre) {
    return res.code(409).send({ error: `no se pudo crear el elemento porque ya existe un plato con esa información` });
  }

  platos.push(body);

  return res.code(201).send({ mensaje: `Plato creado correctamente`, plato: body });
});

// Método Put para modificar completamente elementos ya existentes
app.put('/platos/:idPlato', (req, res) => {
  const { idPlato } = req.params as { idPlato: string };
  const nuevoPlato = req.body as Plato;
  let indexPlato = buscarIndicePorId(platos, idPlato);

  if (indexPlato === -1) {
    return res.code(404).send({ error: 'El plato no pudo cambiarse porque no se encontró' });
  }

  platos[indexPlato] = nuevoPlato;

  res.code(200).send({ mensaje: `El plato fue actualizado exitosamente`, platoActualizado: nuevoPlato });
});
