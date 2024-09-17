import { test, expect,type FullConfig } from '@playwright/test'

test('set up', async ({ page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
    await expect(page.getByRole('heading')).toContainText('Dashboard');
    // await page.context().storageState({ path: storageState as string });
    await page.context().storageState({ path: './playwright/.auth/auth.json'});

})