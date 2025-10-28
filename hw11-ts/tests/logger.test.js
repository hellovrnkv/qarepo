import { describe, it, expect, vi, afterEach } from 'vitest';
import { logger } from '../src/services/logger.js';

afterEach(() => {
  vi.restoreAllMocks();
});

describe('logger', () => {
  it('logger.info() вызывает console.log и возвращает строку (spyOn на объект)', () => {
    const spy = vi.spyOn(console, 'log').mockImplementation(() => {});
    const ret = logger.info('hello');
    expect(spy).toHaveBeenCalledWith('[INFO] hello');
    expect(ret).toBe('[INFO] hello');
  });

  it('logger.error() вызывает console.error', () => {
    const spy = vi.spyOn(console, 'error').mockImplementation(() => {});
    const ret = logger.error('boom');
    expect(spy).toHaveBeenCalledWith('[ERROR] boom');
    expect(ret).toBe('[ERROR] boom');
  });
});
