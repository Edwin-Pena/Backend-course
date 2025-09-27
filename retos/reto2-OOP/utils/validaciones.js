export const validarFormatoString = (
  valor,
  nombreValor,
  longitudPalabra = 4
) => {
  if (typeof valor !== 'string' || valor.trim().length < longitudPalabra)
    throw new Error(
      `${nombreValor} debe ser una palabra de mínimo ${longitudPalabra} carácteres`
    );
};

export const validarPaquete = (paquete, clase) => {
  if (!(paquete instanceof clase)) {
    throw new Error(
      `El objeto no es un paquete válido para ser enviado o entregado por Coordinadora`
    );
  }
};
