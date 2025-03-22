import { expect, test } from "@playwright/test"

test('handle child window', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://demo.automationtesting.in/Windows.html');

    console.log(await page.title());

    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        page.locator('a button').click()
    ]);
    await newPage.locator("a[href*='downloads']").click();
    console.log(await newPage.title());
    await expect(newPage).toHaveTitle('Downloads | Selenium');

    // The Promise.all() method waits for all promises to resolve and returns their results as an array. Since we only care about the result of the first promise (the popup page), we can use array destructuring [popupPage] to extract it directly.
}) 