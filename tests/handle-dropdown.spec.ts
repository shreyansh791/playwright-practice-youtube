import { test, expect } from '@playwright/test';

// We can Select one or multiple options in the <select> element with locator.selectOption().
// You can specify option, value, label or index to select.

// Syntax
// locator.selectOption(<value / label / visible text>)
// locator.selectOption({value:’value attribute’s value’})
// locator.selectOption({label:’label attribute’s value’}) // if label attribute is not there then visible text can be provided but if label attribute is there then visible text will not work here.
// locator.selectOption({index:’index value’})
test('handle dropdown ', async ({ page }) => {
    await page.goto('https://artoftesting.com/samplesiteforselenium');
    await page.locator('#testingDropdown').selectOption('Performance Testing') // provided visible text
    await page.waitForTimeout(5000)
    await page.locator('#testingDropdown').selectOption('Manual') // provided value attribute
    await page.waitForTimeout(5000)
    await page.locator('#testingDropdown').selectOption({value:'Automation'}) // provided value attribute

});

test('handle multi select dropdown ', async ({ page }) => {
    await page.goto('https://demoqa.com/select-menu');
   await page.locator('#cars').selectOption(['Volvo','Saab','Opel'])
});