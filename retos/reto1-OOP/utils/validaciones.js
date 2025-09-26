export const validarFormatoString = (
  valor,
  nombreValor,
  longitudPalabra = 4
) => {
  if (typeof valor !== 'string' || valor.trim().length < longitudPalabra)
    throw new Error(
      `${nombreValor} debe ser una palabra de mínimo 4 carácteres`
    );
};
