import { test, expect } from '@playwright/test';

const APP = 'https://demo.playwright.dev/todomvc/#/';

test.beforeEach(async ({ page }) => {
  await page.goto(APP, { waitUntil: 'networkidle' });
  // Переконуємось, що ми справді в апці
  await expect.poll(async () => page.url()).toContain('todomvc');
  // Найнадійніший локатор для інпуту — за плейсхолдером
  await page.getByPlaceholder('What needs to be done?').waitFor({ state: 'visible', timeout: 30000 });
});

test('Selectors practice on TodoMVC › Add todo via CSS and assert text via XPath', async ({ page }) => {
  const input = page.getByPlaceholder('What needs to be done?');
  await input.fill('RZTK');
  await input.press('Enter');

  // Перевіряємо текст першого айтема XPath-ом
  const firstItemLabel = page.locator("//ul[contains(@class,'todo-list')]/li[1]//label");
  await expect(firstItemLabel).toHaveText('RZTK');
});

test('Selectors practice on TodoMVC › Toggle and filter using both CSS and XPath', async ({ page }) => {
  const input = page.getByPlaceholder('What needs to be done?');
  await input.fill('First');  await input.press('Enter');
  await input.fill('Second'); await input.press('Enter');

  // Позначаємо перший як completed
  await page.locator("//ul[contains(@class,'todo-list')]/li[1]//input[@class='toggle']").check();

  // Переходимо у Completed і переконуємось, що там лише 'First'
  await page.getByRole('link', { name: 'Completed' }).click();
  const labels = page.locator("//ul[contains(@class,'todo-list')]/li//label");
  await expect(labels).toHaveText(['First']);
});
