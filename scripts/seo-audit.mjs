#!/usr/bin/env node
/**
 * Fetches every route from a running build or dev server and asserts SEO invariants.
 * Pattern mirrored directly from verbix-design-work.
 *
 *   node scripts/seo-audit.mjs [baseUrl]     (default http://localhost:3000)
 */
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(fileURLToPath(new URL(".", import.meta.url)), "..");
const BASE = (process.argv[2] || "http://localhost:3000").replace(/\/$/, "");
const SITE = "https://www.nexoviodigitalsolutions.com";

const manifest = await readFile(join(ROOT, "src/lib/routes.ts"), "utf8");
const routes = [...manifest.matchAll(/^\s*"([^"]+)",$/gm)].map((m) => m[1]);

const countTag = (html, re) => (html.match(re) || []).length;

const decode = (s) =>
  s === undefined
    ? s
    : s
        .replace(/&amp;/g, "&")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&quot;/g, '"')
        .replace(/&#x27;|&#39;/g, "'")
        .replace(/&#x2F;/g, "/")
        .replace(/&nbsp;/g, " ");

const attr = (html, re) => decode((html.match(re) || [])[1]);

const failures = [];
const titles = new Map();
const descs = new Map();

function check(route, cond, msg) {
  if (!cond) {
    failures.push(`${route}: ${msg}`);
    console.error(`  ✗ ${msg}`);
  }
}

console.log(`Starting SEO audit for ${routes.length} routes at ${BASE}...\n`);

for (let i = 0; i < routes.length; i++) {
  const route = routes[i];
  const url = `${BASE}${route}`;
  process.stdout.write(`[${i + 1}/${routes.length}] Checking ${route} ... `);

  let res, html;
  try {
    res = await fetch(url, { redirect: "manual" });
    html = await res.text();
  } catch (err) {
    console.log(`FAILED to fetch (${err.message})`);
    failures.push(`${route}: fetch failed — ${err.message}`);
    continue;
  }

  if (res.status !== 200) {
    console.log(`HTTP ${res.status}`);
    failures.push(`${route}: HTTP ${res.status}`);
    continue;
  }

  const head = html.slice(0, html.indexOf("</head>") + 7);

  // Exactly one of each SEO tag in the <head>
  const nTitle = countTag(head, /<title[^>]*>/g);
  const nDesc = countTag(head, /<meta[^>]+name="description"/g);
  const nCanon = countTag(head, /<link[^>]+rel="canonical"/g);
  const nOgTitle = countTag(head, /<meta[^>]+property="og:title"/g);
  const nOgUrl = countTag(head, /<meta[^>]+property="og:url"/g);

  check(route, nTitle === 1, `expected 1 <title>, found ${nTitle}`);
  check(route, nDesc === 1, `expected 1 meta description, found ${nDesc}`);
  check(route, nCanon === 1, `expected 1 canonical, found ${nCanon}`);
  check(route, nOgTitle === 1, `expected 1 og:title, found ${nOgTitle}`);
  check(route, nOgUrl === 1, `expected 1 og:url, found ${nOgUrl}`);

  // Canonical must point at this exact URL
  const canon = attr(head, /<link[^>]+rel="canonical"[^>]+href="([^"]+)"/);
  const ok =
    route === "/"
      ? canon === SITE || canon === `${SITE}/`
      : canon === `${SITE}${route}` || canon === `${SITE}${route}/`;
  check(route, ok, `canonical is "${canon || "(none)"}", expected "${SITE}${route}"`);

  const title = attr(head, /<title[^>]*>([^<]*)<\/title>/);
  const desc = attr(head, /<meta[^>]+name="description"[^>]+content="([^"]*)"/);

  check(route, !!title, "no <title> in raw HTML");
  check(route, !!desc, "no meta description in raw HTML");

  for (const [label, value] of [["title", title], ["description", desc]]) {
    check(
      route,
      !/&(amp|lt|gt|quot|nbsp|#\d+);/.test(value || ""),
      `${label} contains a double-encoded HTML entity`
    );
  }
  if (title) {
    if (titles.has(title)) failures.push(`${route}: title duplicates ${titles.get(title)}`);
    else titles.set(title, route);
  }
  if (desc) {
    if (descs.has(desc)) failures.push(`${route}: description duplicates ${descs.get(desc)}`);
    else descs.set(desc, route);
  }

  // Exactly one <h1> per page
  const nH1 = countTag(html, /<h1[\s>]/g);
  check(route, nH1 === 1, `expected 1 <h1>, found ${nH1}`);

  // Every JSON-LD block must parse
  for (const m of html.matchAll(
    /<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g
  )) {
    try {
      JSON.parse(m[1]);
    } catch {
      failures.push(`${route}: invalid JSON-LD`);
    }
  }

  console.log(`OK`);
}

// 404 test
process.stdout.write(`\nChecking 404 handler at ${BASE}/definitely-not-a-real-page-xyz-404 ... `);
try {
  const notFound = await fetch(`${BASE}/definitely-not-a-real-page-xyz-404`, { redirect: "manual" });
  const nfHtml = await notFound.text();
  if (notFound.status !== 404) failures.push(`/definitely-not-a-real-page-xyz-404: HTTP ${notFound.status}, expected 404`);
  if (!/name="robots"[^>]*content="[^"]*noindex/.test(nfHtml)) failures.push("404 page missing noindex");
  console.log(`OK (status ${notFound.status})`);
} catch (err) {
  failures.push(`404 check fetch failed — ${err.message}`);
  console.log(`FAILED (${err.message})`);
}

console.log(`\nAudited ${routes.length} routes.`);
console.log(`Unique titles: ${titles.size}/${routes.length}`);
console.log(`Unique descriptions: ${descs.size}/${routes.length}`);

if (failures.length === 0) {
  console.log("\n✓ ALL SEO CHECKS PASSED PERFECTLY!");
  process.exit(0);
}
console.error(`\n✗ ${failures.length} SEO issue(s) detected:\n`);
for (const f of failures) console.error("  " + f);
process.exit(1);
