import { test, expect } from '@playwright/test';

test('API: site availability check', async ({ request }) => {
  const response = await request.get('/');
  expect(response.status()).toBe(200);
});
