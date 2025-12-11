const { test, expect } = require('@playwright/test');

test('App loads', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page).toHaveTitle(/Expense/);
});

test('Add expense button exists', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page.locator('button')).toHaveCount(1);
});
