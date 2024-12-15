import { test, expect } from '@playwright/test';

test('first', async ({ page }) => {
    await page.goto('https://automationteststore.com/');
    await page.getByRole('link', { name: 'Hair Care' }).click();
    await page.locator('#maincontainer li').filter({ hasText: 'Conditioner' }).click();
});

test('second', async ({ page }) => {
    await page.goto('https://automationteststore.com/');
    await page.getByRole('link', { name: 'Books' }).click();
    await page.locator('li').filter({ hasText: 'Audio CD' }).nth(2).click();
    await page.getByRole('link', { name: 'About Us' }).click();
  });