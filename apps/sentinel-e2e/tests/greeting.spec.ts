import { test, expect } from '@playwright/test';
import { BASE_URL } from '../config';

test('Greeting page should display hello and have navigation', async ({
  page,
}) => {
  // Navigate to the greeting page with a query string
  const name = 'John';
  await page.goto(`${BASE_URL}/greeting?name=${name}`);

  // Check if the h1 element contains the text "Hello John"
  const heading = await page.locator('h1');
  await expect(heading).toHaveText(`Hello ${name}`);

  // Check if the navigation links are present
  const navLinks = await page.locator('nav a');
  await expect(navLinks).toHaveCount(2);

  // Check if the Home link is present and navigates correctly
  const homeLink = await page.locator('nav a:has-text("Home")');
  await expect(homeLink).toBeVisible();
  await homeLink.click();
  await expect(page).toHaveURL(BASE_URL);

  // Check if the Greeting link is present and navigates correctly
  const greetingLink = await page.locator('nav a:has-text("Greeting")');
  await expect(greetingLink).toBeVisible();
  await greetingLink.click();
  await expect(page).toHaveURL(`${BASE_URL}/greeting`);
});
