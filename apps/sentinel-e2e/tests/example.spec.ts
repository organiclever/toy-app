import { test, expect } from "@playwright/test";

test.describe("UI Tests", () => {
  test("homepage has title", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/sentinel-ui/);
  });

  test("navigation to about page", async ({ page }) => {
    await page.goto("/");
    await page.click("text=About");
    await expect(page).toHaveURL("/about");
    await expect(page.locator("h1")).toContainText("About Us");
  });

  test("form submission", async ({ page }) => {
    await page.goto("/contact");
    await page.fill('input[name="name"]', "John Doe");
    await page.fill('input[name="email"]', "john.doe@example.com");
    await page.fill(
      'textarea[name="message"]',
      "Hello, this is a test message."
    );
    await page.click("text=Submit");
    await expect(page.locator(".success-message")).toContainText(
      "Thank you for your message"
    );
  });
});
