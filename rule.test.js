const { calcularNuevoMarcador } = require('./rules');

test('suma 2 puntos correctamente', () => {
  const resultado = calcularNuevoMarcador(10, 2);
  expect(resultado).toBe(12);
});

test('suma 3 puntos correctamente', () => {
  const resultado = calcularNuevoMarcador(10, 3);
  expect(resultado).toBe(13);
});
