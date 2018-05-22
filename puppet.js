const puppeteer = require('puppeteer');

puppeteer.launch({
  executablePath: 'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
}).then(async browser => {
  const pages = await browser.pages();
  const page = pages[0];
  console.log(await browser.version());
  await browser.close();
})
.catch(e => {console.log('Error in launching', e)});
