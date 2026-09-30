#!/usr/bin/env node
/**
 * Submits all production site routes to the IndexNow protocol (Bing, Yandex, Naver, Seznam).
 * Usage: npm run ping:indexnow
 */
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(fileURLToPath(new URL(".", import.meta.url)), "..");
const SITE = "https://www.nexoviodigitalsolutions.com";
const INDEXNOW_KEY = "c8d35f791a4b4e5088e2bf57613769c0";

const manifest = await readFile(join(ROOT, "src/lib/routes.ts"), "utf8");
const routes = [...manifest.matchAll(/^\s*"([^"]+)",$/gm)].map((m) => m[1]);
const urlList = routes.map((r) => `${SITE}${r === "/" ? "" : r}`);

console.log(`Submitting ${urlList.length} URLs to IndexNow (Bing, Yandex, Seznam, Naver)...`);

try {
  const host = new URL(SITE).host;
  const payload = {
    host,
    key: INDEXNOW_KEY,
    keyLocation: `${SITE}/${INDEXNOW_KEY}.txt`,
    urlList,
  };

  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(payload),
  });

  if (res.status === 200 || res.status === 202) {
    console.log(`✓ Successfully notified IndexNow for ${urlList.length} URLs! (Status: ${res.status})`);
  } else {
    const text = await res.text();
    console.warn(`IndexNow responded with HTTP ${res.status}: ${text}`);
  }
} catch (err) {
  console.error("IndexNow ping failed:", err.message);
}
