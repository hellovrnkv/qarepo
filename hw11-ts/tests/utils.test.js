import { describe, it, expect, vi, afterEach } from 'vitest';
import { sum, applyTax, getUserFullName, fetchProducts, formatPrice } from '../src/utils.js';

afterEach(() => {
  vi.restoreAllMocks();
});

describe('utils', () => {
  it('sum() корректно складывает числа', () => {
    expect(sum(2, 3)).toBe(5);
    expect(sum('2', 3)).toBe(5);
  });

  it('applyTax() считает налог и округляет до 2 знаков', () => {
    expect(applyTax(100, 0.2)).toBe(120.00);
  });

  it('getUserFullName() собирает ФИО из частичных данных', () => {
    expect(getUserFullName({ firstName: 'Yevhen' })).toBe('Yevhen');
    expect(getUserFullName({ firstName: 'Yevhen', lastName: 'Voronkov' }))
      .toBe('Yevhen Voronkov');
  });

  it('fetchProducts() использует мок объекта api.get и возвращает массив', async () => {
    const api = { get: vi.fn().mockResolvedValue({ data: [{ id: 1 }, { id: 2 }] }) };
    const data = await fetchProducts(api);
    expect(api.get).toHaveBeenCalledWith('/products');
    expect(data).toEqual([{ id: 1 }, { id: 2 }]);
  });

  it('formatPrice() форматирует сумму (мок Intl.NumberFormat не нужен)', () => {
    const s = formatPrice(12.5, 'USD', 'en-US');
    expect(s).toMatch(/\$\s?12\.50/);
  });
});
