import { test, expect } from '@playwright/test';

test('handle radio button', async ({ page }) => {
    await page.goto('https://artoftesting.com/samplesiteforselenium');
    await page.locator('#male').check();
    await expect(page.locator('#male')).toBeChecked();
    await page.locator('#female').check();
    await expect(page.locator('#male')).not.toBeChecked();
    await expect(page.locator('#female')).toBeChecked();

});