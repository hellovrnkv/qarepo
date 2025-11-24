import { test, expect } from '@playwright/test';
import { LoginPage } from '../../src/pages/LoginPage';

test.describe('Login page tests', () => {

  test('Page loads correct URL', async ({ page }) => {
    const p = new LoginPage(page);
    await p.open();
    await expect(page).toHaveURL('https://practicetestautomation.com/practice-test-login/');
  });

  test('Username and password fields are visible', async ({ page }) => {
    const p = new LoginPage(page);
    await p.open();
    await expect(p.usernameInput).toBeVisible();
    await expect(p.passwordInput).toBeVisible();
  });

  test('Username and password fields accept input', async ({ page }) => {
    const p = new LoginPage(page);
    await p.open();
    await p.usernameInput.fill('demoUser');
    await p.passwordInput.fill('demoPass');
    await expect(p.usernameInput).toHaveValue('demoUser');
    await expect(p.passwordInput).toHaveValue('demoPass');
  });

  test('Submit button is visible and enabled', async ({ page }) => {
    const p = new LoginPage(page);
    await p.open();
    await expect(p.loginButton).toBeVisible();
    await expect(p.loginButton).toBeEnabled();
  });

  test('Valid login redirects to success page', async ({ page }) => {
    const p = new LoginPage(page);
    await p.open();
    await p.login('student', 'Password123');
    await expect(page).toHaveURL(/.*logged-in-successfully/);
  });

  test('Invalid login shows error', async ({ page }) => {
    const p = new LoginPage(page);
    await p.open();
    await p.login('wrong', 'wrong');
    await expect(p.errorMessage).toBeVisible();
  });

});
