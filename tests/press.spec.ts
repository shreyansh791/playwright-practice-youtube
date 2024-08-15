import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://ultimateqa.com/filling-out-forms');
// fill
  await page.locator('#et_pb_contact_name_0').fill('shreyansh');
  await page.locator('#et_pb_contact_message_0').fill('test message');
  await page.locator('#et_pb_contact_name_1').fill('jain');
  await page.locator('#et_pb_contact_message_1').fill('test message 2 ');
  // press sequentially
  await page.locator('#et_pb_contact_name_0').pressSequentially('raghvendra pratap singh tomar');
});

test('press sequentially demo', async ({ page }) => {
  await page.goto('https://www.google.com/');
    // press sequentially
  await page.locator("[name='q']").pressSequentially('Playwright',{delay:500});
  // await page.locator("[name='q']").press("ArrowDown+ArrowDown+ArrowDown");
  // await page.locator("[name='q']").press("Enter");
  await page.locator("[name='q']").press("Backspace");
});