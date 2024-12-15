import { test, expect } from '@playwright/test';

test('Registration Test', async ({ page }) => {
  // Needs to change informations to successful run
  await page.goto('https://automationteststore.com/');
  await page.getByRole('link', { name: '  Account' }).click();
  await page.getByRole('button', { name: ' Continue' }).click();
  await page.locator('#AccountFrm_firstname').click();
  await page.locator('#AccountFrm_firstname').fill('Berke');
  await page.locator('#AccountFrm_lastname').click();
  await page.locator('#AccountFrm_lastname').fill('Baramuk');
  await page.locator('#AccountFrm_email').click();
  await page.locator('#AccountFrm_email').fill('berke.bartest@hotmail.com');
  await page.locator('#AccountFrm_address_1').click();
  await page.locator('#AccountFrm_address_1').fill('istanbul');
  await page.locator('#AccountFrm_city').click();
  await page.locator('#AccountFrm_city').fill('istanbul');
  await page.locator('#AccountFrm_zone_id').selectOption('3535');
  await page.locator('#AccountFrm_postcode').click();
  await page.locator('#AccountFrm_postcode').fill('34567');
  await page.locator('#AccountFrm_loginname').click();
  await page.locator('#AccountFrm_loginname').fill('BerkeRegisterTest');
  await page.locator('#AccountFrm_password').click();
  await page.locator('#AccountFrm_password').fill('testQA123?');
  await page.locator('#AccountFrm_confirm').click();
  await page.locator('#AccountFrm_confirm').fill('testQA123?');
  await page.getByLabel('No').check();
  await page.getByLabel('I have read and agree to the').check();
  await page.getByRole('button', { name: ' Continue' }).click();
  await expect(page.getByText('My Account Berke 1 0 0 $0.00')).toBeVisible();
  await page.getByRole('link', { name: '   Logout' }).click();
  await page.getByRole('link', { name: ' Continue' }).click();
  await expect(page.getByRole('heading', { name: 'Welcome to the Automation' })).toBeVisible();
});