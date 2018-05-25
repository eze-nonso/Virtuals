const puppeteer = require('puppeteer');


(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
  });

  const pages = await browser.pages();
  const page = pages[0];

  console.log(await browser.version());
  await browser.close();
})()


