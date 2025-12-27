import { test, expect } from '@playwright/test';

test('Example test for Allure', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});
