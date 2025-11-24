import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['hw10-ts/vitest/**/*.test.ts'],
    environment: 'node',
    globals: true,
  },
});
