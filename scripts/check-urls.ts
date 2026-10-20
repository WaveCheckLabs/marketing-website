/**
 * Confirms every URL served by the current site still resolves to a file in dist/,
 * following Vercel's `cleanUrls` rules (/privacy → privacy.html, /pt-br → pt-br/index.html).
 */
import { statSync } from 'node:fs';

const pages = ['', '/support', '/privacy', '/terms', '/delete-account'];

const urls = [
  ...pages.flatMap((page) => [page || '/', `/pt-br${page}`]),
  '/share',
  '/favicon.png',
  '/og-image.png',
  '/assets/icon.png',
  '/assets/logo-white.png',
  '/assets/logo-black.png',
  '/assets/apple-icon.png',
  '/assets/google-play-icon.png',
];

const isFile = (path: string) => {
  return statSync(path, { throwIfNoEntry: false })?.isFile() ?? false;
};

const resolves = (url: string) => {
  const path = `dist${url}`.replace(/\/$/, '');

  return [path, `${path}.html`, `${path}/index.html`].some(isFile);
};

const missing = urls.filter((url) => !resolves(url));

if (missing.length > 0) {
  console.error(`✗ Not found in dist/:\n${missing.map((url) => `  ${url}`).join('\n')}`);
  process.exit(1);
}

console.log(`✓ ${urls.length} URLs resolve.`);
