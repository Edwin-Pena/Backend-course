let estadoPaqueteS = [
  { codigo: 'PKG001', estado: 'En bodega' },
  { codigo: 'PKG002', estado: 'En camino' },
  { codigo: 'PKG003', estado: 'entregado' },
];

const estadoPaquete = (codigo) => {
  const paquete = estadoPaqueteS.find((p) => p.codigo === codigo);
  if (paquete) {
    return `el estado de tu paquete es: ${paquete.estado}`;
  } else return 'el paquete no existe';
};

console.log(estadoPaquete('PKG001'));
