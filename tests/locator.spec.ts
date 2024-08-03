// Windows/Linux: Shift + Alt + Down Arrow to duplicate the line below or
// Shift + Alt + Up Arrow to duplicate the line above.
import {test} from '@playwright/test'
test('locator with option demo',async ({page})=>{

    await page.goto('https://www.saucedemo.com/');
await page.locator('.form_group',{has:page.locator('#user-name')}).click(); 
await page.locator('.form_group',{has:page.locator('#user-name')}).pressSequentially('Learning Playwright!'); 
await page.locator('.form_group',{hasNot:page.locator('#user-name')}).click(); 
await page.locator('.form_group',{hasNot:page.locator('#user-name')}).pressSequentially('learning playwright!!') 
})

test('locator with option demo text',async ({page})=>{

    await page.goto('https://www.saucedemo.com/');
await page.locator('.form_group',{has:page.locator('#user-name')}).click(); 
await page.locator('.form_group',{has:page.locator('#user-name')}).pressSequentially('standard_user'); 
await page.locator('.form_group',{hasNot:page.locator('#user-name')}).click(); 
await page.locator('.form_group',{hasNot:page.locator('#user-name')}).pressSequentially('secret_sauce'); 
await page.locator('#login-button').click(); 

await page.locator('//a',{hasText:'Sauce Labs Backpack'}).click()
// provided //a in the locator because locator should be clickable.
})

test('locator with option demo not text',async ({page})=>{

    await page.goto('https://www.saucedemo.com/');
await page.locator('.form_group',{has:page.locator('#user-name')}).click(); 
await page.locator('.form_group',{has:page.locator('#user-name')}).pressSequentially('standard_user'); 
await page.locator('.form_group',{hasNot:page.locator('#user-name')}).click(); 
await page.locator('.form_group',{hasNot:page.locator('#user-name')}).pressSequentially('secret_sauce'); 
await page.locator('#login-button').click(); 

await page.locator('.inventory_item_label a',{hasNotText: /Sauce Labs/i}).click()
// await page.locator('.inventory_item_label a',{hasNotText: /Sauce Labs.*/}).click() // this is working too.

})