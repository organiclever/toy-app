import { test, expect } from '@playwright/test';

const BASE_URL = 'http://localhost:8080';

test.describe('Sentinel Backend API', () => {
  test('GET /api/v1/hello should return hello world message', async ({
    request,
  }) => {
    const response = await request.get(`${BASE_URL}/api/v1/hello`);

    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    expect(responseBody).toEqual({
      data: {
        message: 'Hello World!',
      },
    });
  });

  test('GET /api/v1/hello with name parameter should return personalized message', async ({
    request,
  }) => {
    const response = await request.get(`${BASE_URL}/api/v1/hello?name=John`);

    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    expect(responseBody).toEqual({
      data: {
        message: 'Hello John!',
      },
    });
  });
});
