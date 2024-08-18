import { test, expect } from "@playwright/test";

test("Handle alert Dialogs", async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    page.on('dialog', dialog => {

        expect(dialog.type()).toEqual('alert')
        expect(dialog.message()).toEqual('I am a JS Alert')
        dialog.accept()
    })
    await page.getByText('Click for JS Alert').click()
    await expect(page.locator("#result")).toHaveText("You successfully clicked an alert")

})


test("Handle confirm Dialogs", async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    page.on('dialog', dialog => {

        expect(dialog.type()).toEqual('confirm')
        expect(dialog.message()).toEqual('I am a JS Confirm')
        dialog.accept()
    })
    await page.getByRole('button', { name: 'Click for JS Confirm' }).click();
    await expect(page.locator("#result")).toHaveText("You clicked: Ok")

})


test("Handle Prompt Dialog", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    page.on("dialog", dialog => {
        expect(dialog.type()).toEqual("prompt");
        expect(dialog.message()).toEqual("I am a JS prompt");
        expect(dialog.defaultValue()).toEqual("");
        dialog.accept("abc");
    })

    await page.getByRole('button', { name: 'Click for JS Prompt' }).click();
    await expect(page.locator("#result")).toHaveText("You entered: abc")



})