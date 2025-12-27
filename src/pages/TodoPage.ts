import { Page, Locator } from '@playwright/test';

export class TodoPage {
  readonly page: Page;
  readonly input: Locator;
  readonly todoItems: Locator;

  constructor(page: Page) {
    this.page = page;
    this.input = page.locator('.new-todo');
    this.todoItems = page.locator('.todo-list li');
  }

  async open() {
    await this.page.goto('https://demo.playwright.dev/todomvc');
  }

  async addTodo(text: string) {
    await this.input.fill(text);
    await this.input.press('Enter');
  }

  async getTodoCount() {
    return this.todoItems.count();
  }

  async getTodoText(index: number) {
    return this.todoItems.nth(index).locator('label').textContent();
  }
}
