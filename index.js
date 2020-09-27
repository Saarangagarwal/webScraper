const puppeteer = require('puppeteer');

//I AM UNABLE TO GO TO THE PAGE https://app-dev.condoworks.co/. I GET A SECURITY EXCEPTION

async function main() {
const browser = await puppeteer.launch({headless: false, slowMo: 75, defaultViewport: null});
  const page = await browser.newPage();
  await page.setViewport({width: 1200, height: 720});
  await page.goto('https://app-dev.condoworks.co/', { waitUntil: 'networkidle0' }); // wait until page load
  await page.type('#username', "coop.test@condoworks.co");
  await page.type('#password', "MyTesting711");
  // click and wait for navigation
  await Promise.all([
    page.click('#submit'),
    page.waitForNavigation({ waitUntil: 'networkidle0' }),
  ]);
}

main();