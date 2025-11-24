import { test, expect } from '@playwright/test';
import { TodoPage } from '../../src/pages/TodoPage';

test.describe('TodoMVC tests', () => {
  test('Add new todo item', async ({ page }) => {
    const todo = new TodoPage(page);
    await todo.open();

    await todo.addTodo('Test task');

    expect(await todo.getTodoCount()).toBe(1);
    expect(await todo.getTodoText(0)).toBe('Test task');
  });

  test('Add multiple todo items', async ({ page }) => {
    const todo = new TodoPage(page);
    await todo.open();

    await todo.addTodo('Task 1');
    await todo.addTodo('Task 2');

    expect(await todo.getTodoCount()).toBe(2);
  });
});
