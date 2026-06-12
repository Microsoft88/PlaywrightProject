//@ts-check
// import { test } from '@playwright/test';

// test ('Validate Google Home Page', async ({ page }) => {
//   await page.goto('https://www.google.com/'); 
  
// })
  

import {test} from '@playwright/test';  
test('Validate Amazon  Home Page', async ({ page }) => { 
  await page.goto('https://www.amazon.in/');
  await page.waitForSelector('#nav-logo-sprites');
  await page.screenshot({ path: 'amazon-home-page.png' });
})


