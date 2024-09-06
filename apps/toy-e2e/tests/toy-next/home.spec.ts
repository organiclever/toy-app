import { test, expect } from '@playwright/test';
import { toyNext } from '../config';

test.describe('Home page', () => {
  test('should display hello', async ({ page }) => {
    // Navigate to the home page
    await page.goto(toyNext.baseUrl);

    // Check if the h1 element contains the text "hello"
    const heading = page.locator('h1');
    await expect(heading).toHaveText('hello');
  });
});

test.describe('Navigation on Home page', () => {
  test('should have navigation links', async ({ page }) => {
    // Navigate to the home page
    await page.goto(toyNext.baseUrl);

    // Check if the navigation links are present
    const navLinks = page.locator('nav a');
    await expect(navLinks).toHaveCount(2);
  });

  test('should navigate to Home page correctly', async ({ page }) => {
    // Navigate to the home page
    await page.goto(toyNext.baseUrl);

    // Check if the Home link is present and navigates correctly
    const homeLink = page.locator('nav a:has-text("Home")');
    await expect(homeLink).toBeVisible();
    await homeLink.click();
    await expect(page).toHaveURL(toyNext.baseUrl);
  });

  test('should navigate to Greeting page correctly', async ({ page }) => {
    // Navigate to the home page
    await page.goto(toyNext.baseUrl);

    // Check if the Greeting link is present and navigates correctly
    const greetingLink = page.locator('nav a:has-text("Greeting")');
    await expect(greetingLink).toBeVisible();
    await greetingLink.click();
    await expect(page).toHaveURL(`${toyNext.baseUrl}/greeting`);
  });
});
