import { test, expect } from '@playwright/test';

test.describe('Sentinel Backend API', () => {
  test('GET /api/v1/hello should return hello world message', async ({
    request,
  }) => {
    const response = await request.get('http://localhost:8080/api/v1/hello');

    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    expect(responseBody).toEqual({
      data: {
        message: 'hello world',
      },
    });
  });
});
