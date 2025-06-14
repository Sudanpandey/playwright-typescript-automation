import { test, expect } from '@playwright/test';

test('Github Invalid cred:',async ({page}) =>{
 await page.goto('https://github.com');
 await page.getByRole('link',{name: 'Sign in' }).click();
 await page.getByLabel( 'Username or email address').click();
 await page.getByLabel( 'Username or email address').fill('testerstalk');
 await page.getByLabel( 'Password').click();
 await page.getByLabel( 'Password').fill('Test@1234');
 await page.getByRole('button',{name: 'Sign in',exact :true}).click();
 await expect( page.getByRole('alert')).toContainText('Incorrect username or password.');
});

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
