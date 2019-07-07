/* eslint-disable no-console */

const puppeteer = require('puppeteer-core');
const handler = require('serve-handler');
const http = require('http');

async function serve() {
  const htserver = http.createServer((request, response) => {
    return handler(request, response, {
      public: 'dist'
    });
  });
  return htserver.listen(3000);
}

async function grab() {
  console.log('Starting server');
  const server = await serve();

  console.log(`Starting puppeteer (${process.env.CHROMIUM_BIN})`);
  const browser = await puppeteer.launch({
    executablePath: process.env.CHROMIUM_BIN,
    args: ['--headless', '--disable-gpu', '--disable-features=VizDisplayCompositor'],
  });

  console.log('Fetching page');
  const page = await browser.newPage();
  await page.goto('http://localhost:3000/');

  const el = await page.$('#eink-content');
  await el.screenshot({ path: 'output/eink.png' });

  console.log('Stopping puppeteer');
  await browser.close();

  console.log('Stopping server');
  await server.close();
  console.log('Done!');
}

function main() {
  grab().catch(reason => {
    console.error(reason);
    console.trace(reason);
  });
}

main();
