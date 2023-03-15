import { test, expect } from '@playwright/test';

test('show all products', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByText('푸드코트')).toBeVisible();
  await expect(page.getByText('젠장')).toBeHidden();
});

test('Filter products', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByText('푸드코트')).toBeVisible();

  const searchInput = page.getByLabel('검색');

  await searchInput.fill('메');

  await expect(page.getByText('메가반점')).toBeVisible();

  await searchInput.fill('메롱');

  await expect(page.getByText('메가반점')).toBeHidden();

  await searchInput.fill('메');

  await expect(page.getByText('메가반점')).toBeVisible();
});
