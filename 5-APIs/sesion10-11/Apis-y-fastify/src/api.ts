import Fastify from 'fastify';

const app = Fastify({ logger: true });

//Objetos de menu
interface Plato {
  idPlato: string;
  nombrePlato: string;
  ingredienteAdicional?: string;
}

const platos: Plato[] = [
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

//Método get y Query paramns
app.get('/platos', (req, res) => {
  const { limite } = req.query as { limite: number };

  const menuFiltrado = limite ? platos.slice(0, limite) : platos;

  return res.code(200).send({ mensaje: 'Este es el menu disponible', menu: menuFiltrado });
});

//Path params
app.get('/platos/:idPlato', (req, res) => {
  const { idPlato } = req.params as { idPlato: string };
  const plato = platos.find((plato) => plato.idPlato === idPlato);

  if (!plato) {
    return res.code(404).send({ error: 'El plato no fue encontrado' });
  }

  return res.code(200).send({ mensaje: 'Plato encontrado satisfactoriamente', plato: plato });
});

// Método Post
app.post('/platos', (req, res) => {
  const body = req.body as Plato;
  platos.push(body);
  return res.code(200).send({ mensaje: `Plato creado correctamente`, plato: body });
});
