import { Locator, Page, test } from '@playwright/test'
async function getLocator(page: Page, selector: string | Locator): Promise<Locator> {
  console.log("line 6", selector);
  console.log(typeof selector);
  return typeof selector === 'string' ? page.locator(selector) : selector;
}
const alertbtn = (page: Page) => getLocator(page, "#alertbtn")

test('Handle alert popup', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

  // Set up dialog handler
  page.on('dialog', dialog => dialog.accept());
  console.log("31 ", typeof page.locator("#alertbtn")) // prints object
  console.log("Constructor name:", page.locator("#alertbtn").constructor.name); // prints Locator
  console.log("Full object:", page.locator("#alertbtn")); // prints locator('#alertbtn')

  const loca = await getLocator(page, await alertbtn(page))
  await loca.click()
})