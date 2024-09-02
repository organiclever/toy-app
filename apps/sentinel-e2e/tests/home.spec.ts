import { test, expect } from '@playwright/test';
import { BASE_URL } from '../config';

test('Home page should display hello', async ({ page }) => {
  // Navigate to the home page
  await page.goto(BASE_URL);

  // Check if the h1 element contains the text "hello"
  const heading = await page.locator('h1');
  await expect(heading).toHaveText('hello');

  // Check if the h1 element has the correct styles
  await expect(heading).toHaveClass(/text-4xl/);
  await expect(heading).toHaveClass(/font-bold/);
  await expect(heading).toHaveClass(/text-black/);
});
