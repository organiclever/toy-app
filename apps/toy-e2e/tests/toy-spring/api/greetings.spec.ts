import { test, expect } from '@playwright/test';

test.describe('Greetings API', () => {
  const baseUrl = 'http://localhost:8080';
  const endpoint = `${baseUrl}/api/v1/greetings`;
});
