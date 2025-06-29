import { test, expect, chromium } from '@playwright/test';

test.skip('Login Test Demo:',async () =>{
    const browser = await chromium.launch({
        headless: false
    });
    const context = await browser.newContext();
    const page = await context.newPage();
    

await page.goto("https://ecommerce-playground.lambdatest.io/");
await page.hover("//a[@data-toggle='dropdown']//span[contains(.,'My account')]");
await page.click("text=Login");
await page.fill("input[name ='email']","lewin.pandey01+1@gmail.com")
await page.fill("input[name='password']","Test@1234");
await page.click("input[value='Login']");
await page.waitForTimeout(5000);


const newContext = await browser.newContext();
const newPage = await newContext.newPage();
await newPage.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/account");
await newPage.waitForTimeout(5000);

});