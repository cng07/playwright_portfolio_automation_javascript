import { test, expect } from '@playwright/test'
import { Helper } from '../page-objects/helper';
import { HomePage } from '../page-objects/homePage';

test.describe('Home page', () => {
    test('Verify Home page @runSolo', async ({ page }) => {

        const h = new Helper(page);
        const _page = new HomePage(page);

        // Navigate directly to Wikipedia
        await _page.goToHomePage();
    });
});