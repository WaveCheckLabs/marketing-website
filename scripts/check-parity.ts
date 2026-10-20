/**
 * Compares every page built in dist/ with the original hand-written HTML (the last commit before the Astro migration):
 * visible text, image alt text, head metadata and link targets must all be identical.
 */
import { load, type CheerioAPI } from 'cheerio';
import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';

const pages = [
  'index.html',
  'privacy.html',
  'terms.html',
  'support.html',
  'delete-account.html',
  'share.html',
  'pt-br/index.html',
  'pt-br/privacy.html',
  'pt-br/terms.html',
  'pt-br/support.html',
  'pt-br/delete-account.html',
];

const originalCommit = '9720891';

const addedOnPurpose = new Set(['og:url']);

const readOriginal = (page: string) => {
  return execFileSync('git', ['show', `${originalCommit}:${page}`], { encoding: 'utf8' });
};

const readBuilt = (page: string) => {
  return readFileSync(`dist/${page}`, 'utf8');
};

const normalizeText = (text: string) => {
  return text.replace(/\s+/g, ' ').trim();
};

const normalizeUrl = (href: string, page: string) => {
  if (/^(mailto:|https?:\/\/(?!wavecheck\.app))/.test(href)) {
    return href;
  }

  const { pathname } = new URL(href, `https://wavecheck.app/${page}`);
  const cleanPath = pathname.replace(/\.html$/, '').replace(/\/index$/, '').replace(/\/$/, '');

  return cleanPath || '/';
};

const visibleText = ($: CheerioAPI) => {
  $('script, style').remove();

  return $('body *')
    .contents()
    .filter((_, node) => node.type === 'text')
    .map((_, node) => normalizeText($(node).text()))
    .get()
    .filter((text) => text !== '')
    .join(' ');
};

const imageAlts = ($: CheerioAPI) => {
  return $('img').map((_, img) => $(img).attr('alt') ?? '').get().join(' | ');
};

const metadata = ($: CheerioAPI, page: string) => {
  const meta = $('meta[name], meta[property]')
    .map((_, tag) => {
      const key = $(tag).attr('name') ?? $(tag).attr('property') ?? '';
      return { key, value: $(tag).attr('content') ?? '' };
    })
    .get()
    .filter(({ key }) => !addedOnPurpose.has(key));

  const links = $('link[rel="canonical"], link[rel="alternate"]')
    .map((_, tag) => {
      const key = `${$(tag).attr('rel')} ${$(tag).attr('hreflang') ?? ''}`.trim();
      return { key, value: normalizeUrl($(tag).attr('href') ?? '', page) };
    })
    .get();

  return [{ key: 'title', value: $('title').text() }, ...meta, ...links]
    .map(({ key, value }) => `${key}=${value}`)
    .sort()
    .join('\n');
};

const linkTargets = ($: CheerioAPI, page: string) => {
  return $('a[href]').map((_, link) => normalizeUrl($(link).attr('href') ?? '', page)).get().join('\n');
};

const describe = (html: string, page: string) => {
  const $ = load(html);

  return {
    metadata: metadata($, page),
    links: linkTargets($, page),
    alts: imageAlts($),
    text: visibleText($),
  };
};

const firstDifference = (before: string, after: string) => {
  const index = [...before].findIndex((char, position) => char !== after[position]);
  const start = Math.max(0, (index === -1 ? before.length : index) - 60);

  return `\n    before: …${before.slice(start, start + 160)}…\n    after:  …${after.slice(start, start + 160)}…`;
};

const differences = pages.flatMap((page) => {
  const before = describe(readOriginal(page), page);
  const after = describe(readBuilt(page), page);

  return (Object.keys(before) as (keyof typeof before)[])
    .filter((aspect) => before[aspect] !== after[aspect])
    .map((aspect) => `${page} — ${aspect} differs:${firstDifference(before[aspect], after[aspect])}`);
});

if (differences.length > 0) {
  console.error(differences.join('\n\n'));
  process.exit(1);
}

console.log(`✓ ${pages.length} pages match the originals (text, image alt text, metadata, links).`);
