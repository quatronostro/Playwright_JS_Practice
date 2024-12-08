import { test } from '@playwright/test';

test.beforeEach(async({page}) => {
    await page.goto('https://tradingview.com/symbols/BTCUSD/');
});

test.describe('suite 1', () => {
    test.beforeEach(async({page}) => {
        await page.getByText('Get Started').click();
    });

    test('first test', async ({ page }) => {
        await page.getByText('Explore available markets').click();
    });
    
    test('second test', async ({ page }) => {
        await page.getByText('Economy').click();
    });
})

test.describe('suite 2', () => {
    test.beforeEach(async({page}) => {
        await page.getByText('Brokers').click();
    });

    test('other test', async ({ page }) => {
        await page.getByText('Best rated').click();
    });
    
})