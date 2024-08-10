
import { expect, test } from '@playwright/test'

test('assertion practice', async ({page}) => {
    await page.goto('https://www.saucedemo.com/');
    await expect(page.locator('[data-test="login-button"]')).toHaveCount(1);
    await expect(page.locator('[data-test="login-button"]')).toBeEnabled();
    await expect(page.locator('[data-test="login-button"]')).toBeVisible();
    await expect(page.locator('[data-test="login-button"]')).toHaveText('Login');
    await expect(page.locator('[data-test="login-button"]')).toHaveAttribute('data-test','login-button');
    await expect(page.locator('[data-test="login-button"]')).toHaveAttribute('type','submit');
    await expect(page.locator('[data-test="login-button"]')).toHaveAttribute('class','submit-button btn_action');
    await expect(page.locator('[data-test="login-button"]')).toHaveClass('submit-button btn_action');
    await expect(page.locator('[data-test="login-button"]')).toHaveAttribute('id','login-button');
    await expect(page.locator('[data-test="login-button"]')).toHaveId('login-button');
    await expect(page.locator('[data-test="login-button"]')).toHaveAttribute('name','login-button');
    await expect(page.locator('[data-test="login-button"]')).toHaveAttribute('value','Login');
    let title  = await page.title();
    console.log('Title is ', title);
    // Negative Matchers
  await expect(page).not.toHaveTitle('Google');
})