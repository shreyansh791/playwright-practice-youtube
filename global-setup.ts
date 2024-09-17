// import { expect, chromium, type FullConfig } from '@playwright/test';
// import path from 'path';

// async function login(config: FullConfig) {
//     const browser = await chromium.launch();
//     const context = await browser.newContext();
//     const page = await context.newPage();
//     const { baseURL, storageState } = config.projects[0].use;
//     console.log("baseURL ******** ", baseURL)
//     console.log("storageState ******** ", storageState)
//     await page.goto(baseURL!);
//     // await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
//     await page.getByPlaceholder('Username').fill('Admin');
//     await page.getByPlaceholder('Password').click();
//     await page.getByPlaceholder('Password').fill('admin123');
//     await page.getByRole('button', { name: 'Login' }).click();
//     await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
//     await expect(page.getByRole('heading')).toContainText('Dashboard');
//     await page.context().storageState({ path: storageState as string });

//     // await page.context().storageState({path: "./playwright/.auth/auth.json"})  
//     console.log("**************************************************************")
// }

// export default login;