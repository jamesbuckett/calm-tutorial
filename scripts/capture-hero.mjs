import { chromium } from 'playwright';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');
const url = `file://${path.join(projectRoot, 'index.html')}`;
const out = path.join(projectRoot, 'assets', 'hero.png');

const browser = await chromium
  .launch({ channel: 'chrome' })
  .catch(() => chromium.launch())
  .catch(() => chromium.launch({ executablePath: '/snap/bin/chromium' }));
try {
  const ctx = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2,
    reducedMotion: 'reduce',
    colorScheme: 'light',
  });
  const page = await ctx.newPage();
  await page.goto(url, { waitUntil: 'load' });
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: out, fullPage: false });
  console.log(`Saved ${out}`);
} finally {
  await browser.close();
}
