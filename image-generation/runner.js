const puppeteer = require('puppeteer');
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

  console.log('Starting puppeteer');
  const browser = await puppeteer.launch({});

  console.log('Fetching page');
  const page = await browser.newPage();
  await page.goto('http://localhost:3000/');

  await (await page.$('#eink-content')).screenshot({ path: 'element.png' })
  await page.screenshot({ path: 'example.png' });

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
