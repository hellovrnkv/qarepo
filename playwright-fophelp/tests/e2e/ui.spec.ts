import { test, expect } from '@playwright/test';

test('UI: main page loads successfully', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/FOP/i);
});
