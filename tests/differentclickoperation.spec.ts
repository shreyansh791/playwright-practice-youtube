import { test, expect } from '@playwright/test';

test('different click operations demo', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/add_remove_elements/');
    await page.getByRole('button', { name: 'Add Element' }).dblclick();

    // Right click
    // .click({button:'right'})

    // programmatic click
    // locator.dispatchEvent('click')

  });