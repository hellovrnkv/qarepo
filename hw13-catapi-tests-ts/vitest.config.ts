import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    reporters: ['default'],
    timeout: 20000,
    setupFiles: ['dotenv/config']
  }
});
