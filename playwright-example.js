const { chromium } = require('playwright');

(async () => {
  // Launch a headless browser
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Navigate to example.com and print the page title
  await page.goto('https://example.com');
  const title = await page.title();
  console.log('Page title:', title);

  await browser.close();
})();
