import { Given, Then } from '@cucumber/cucumber';
import { chromium } from 'playwright';

let browser, page;

Given('I open Google homepage', async () => {
  browser = await chromium.launch();
  page = await browser.newPage();
  await page.goto('https://google.com');
});

Then('Page title should contain Google', async () => {
  const title = await page.title();
  if (!title.includes('Google')) {
    throw new Error('Title does not contain Google');
  }
  await browser.close();
});
