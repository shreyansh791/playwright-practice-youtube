import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  const productName = 'IPHONE 13 PRO'
  await page.goto('https://rahulshettyacademy.com/client/');
  await page.getByPlaceholder('email@example.com').fill('anshika@gmail.com');
  await page.getByPlaceholder('enter your passsword').fill('Iamking@000');
  await page.getByRole('button', { name: 'Login' }).click();
  const products = page.locator('div.card-body');
  //   await products.first().waitFor();/
  // await expect(products).toHaveCount(8, { timeout: 10000 });
  await page.waitForSelector('div.card-body');
  const count = await products.count()
  for (let i = 0; i < count; i++) {
    // Access each product using index
    const product = products.nth(i);
    const title = await product.locator('b').textContent();
    console.log(`Product ${i + 1}: ${title}`);
    if (title === productName) {
      await products.nth(i).getByText("Add To Cart").click();
      break;
    }
  }
  await page.locator("[routerlink*='cart']").click();
  await page.locator("div li").first().waitFor();
  const bool = await page.locator("h3:has-text('IPHONE 13 PRO')").isVisible();
  expect(bool).toBeTruthy();
  await page.locator("text=Checkout").click();
  await page.locator("[placeholder*='Country']").pressSequentially("ind", { timeout: 10000 });
  const dropdown = page.locator('.ta-results');
  await dropdown.waitFor();
  const optionsCount = await dropdown.locator("button").count();
  console.log("option count ----------------", optionsCount)
  for (let i = 0; i < optionsCount; i++) {
    let text = await dropdown.locator("button").nth(i).textContent();
    console.log("TEXT ----------------------", text);
    if (text?.trim() === 'India') {
      await dropdown.locator("button").nth(i).click();
      break;
    }

  }
  // await page.locator('.user__name >label').textContent();
  await page.locator('.user__name >label').waitFor();
  console.log(await page.locator('.user__name >label').first().textContent());
  await expect(page.locator('.user__name >label')).toHaveText('anshika@gmail.com') // working
  expect(await page.locator('.user__name >label').textContent())
    .toContain('anshika@gmail.com') // this is working as well

  // await page.pause();
  await page.locator('.action__submit').click();
  await expect(page.locator(".hero-primary")).toHaveText(' Thankyou for the order. ');
  let orderId = await page.locator('.em-spacer-1 .ng-star-inserted').textContent();
  await page.getByRole("button", { name: 'ORDERS' }).click();
  let orderId2 = orderId?.replaceAll("|", "").trim();
  console.log("order id - ", orderId2);
  await page.locator('.table-bordered tbody tr').filter({ hasText: orderId2 })
    .getByRole("button", { name: "View" }).click();
  const actualOrderId = await page.locator('.col-title+div').textContent();
  expect(orderId2).toEqual(actualOrderId);
  await page.pause();



});