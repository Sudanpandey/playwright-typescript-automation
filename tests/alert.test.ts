import {expect, test} from '@playwright/test'
import { execPath } from 'process';

test("Handling Alerts",async ({ page }) =>{
    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");
    page.on("dialog", async(alert)=>{
        const text = alert.message();
        console.log(text);
        await alert.accept();
    })
    // await page.locator("button:has-text('Click Me')").nth(0).click();
    await page.locator("button:has-text('Click Me')").nth(1).click();
    expect(page.locator("id=confirm-demo")).toContainText("You pressed OK!")
})
test("Modal Alert", async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-modal-demo");
    await page.click("//button[@data-target='#myModal']");
    await page.click("(//button[text()='Save Changes'])[1]");
})

test("Dropdown select", async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo");
    await page.selectOption("#select-demo", {
        // label: "Tuesday"
        value: "Friday"
    })
    await page.waitForTimeout(5000);

})