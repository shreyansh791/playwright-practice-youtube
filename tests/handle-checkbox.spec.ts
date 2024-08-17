import { test, expect } from '@playwright/test';

test('handle checkbox ', async ({ page }) => {
    await page.goto('https://artoftesting.com/samplesiteforselenium');
    await page.locator('.Automation').check();
    await expect(page.locator('.Automation')).toBeChecked();
    const isChecked = await page.locator('.Automation').isChecked();
    console.log(isChecked);
    await page.locator('.Automation').uncheck();
    await page.locator('.Performance').check();
});