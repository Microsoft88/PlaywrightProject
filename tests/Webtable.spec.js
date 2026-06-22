import {test, expect} from '@playwright/test';
test('webtable', async ({ page }) => {
await page.goto('https://qavbox.github.io/demo/webtable/')

//Select 3rd row from the table
const rowdata = await page.locator('//table[@id="table02"]//tbody//tr[3]//td').allTextContents()
console.log(rowdata)

   await expect(rowdata).toContain('Junior Technical Author') //if available in any row then it will display entire row
   console.log(rowdata)
   await expect (rowdata).toEqual([   
   'Ashton Cox',
  'Junior Technical Author',
  'San Francisco',
  '66',
  '2009/01/12',
  '$86,000'])
   console.log(rowdata)
   
   //Select 1st column in 3rd row from the table 
const columndata = await page.locator('//table[@id="table02"]//tbody//tr[3]//td[1]').textContent()
console.log(columndata)})