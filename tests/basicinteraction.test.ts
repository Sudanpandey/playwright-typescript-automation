import { expect,test} from "@playwright/test";

test("Interact with components",async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo")
    const messageInput = page.locator("input#user-message");
    console.log(await messageInput.getAttribute("placeholder"));
    expect(messageInput).toHaveAttribute("placeholder","Please enter your Message")
    console.log('Before entering Data: ' + await messageInput.inputValue());
    await messageInput.type("Hii Lewin");
    console.log('After Entering Data:' + await messageInput.inputValue());

})
test("Sum",async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
    const sum1input = page.locator("#sum1");
    const sum2input = page.locator("#sum2");

    const getValuesBtn = page.locator("//button[text()='Get Sum']")
    // const getValuesBtn = page.locator("button#showInput");

    let num1 = 220;
    let num2 = 230;
    await sum1input.type(""+ num1);
    await sum2input.type(""+ num2);
    await getValuesBtn.click();
    const result = page.locator("#addmessage");
    console.log(await result.textContent());
    let expectedResult = num1+num2;
    expect(result).toHaveText( "" + expectedResult);
})
