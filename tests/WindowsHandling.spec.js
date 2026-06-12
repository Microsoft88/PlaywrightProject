import {test} from '@playwright/test';

test('Windows Handling', async ({ browser }) => {
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto('https://www.amazon.in/')

    await page.locator('//input[@id="twotabsearchtextbox"]').fill('iphone 17 pro')
    await page.keyboard.press('Enter')

    const [newPage] = await Promise.all([context.waitForEvent('page'),
        page.click('//span[text()="Apple iPhone 17 Pro (128 GB)"]').click()
    ])
})
