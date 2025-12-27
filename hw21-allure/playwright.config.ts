import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  reporter: [
    ['line'],
    ['allure-playwright']
  ],
  use: {
    headless: true,
  }
});
