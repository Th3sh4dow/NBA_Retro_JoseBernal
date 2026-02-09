import { calcularNuevoMarcador } from './rules';

describe('Marcador', () => {

  test('10 + 2 = 12', () => {
    expect(calcularNuevoMarcador(10,2)).toBe(12);
  });

  test('10 + 3 = 13', () => {
    expect(calcularNuevoMarcador(10,3)).toBe(13);
  });

});
