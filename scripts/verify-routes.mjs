#!/usr/bin/env node
/**
 * Fails the build if the app/ directory and the route manifest disagree.
 *
 * This makes "no URL changes" a guarantee: every one of these URLs is indexable,
 * so a renamed folder or a dropped page is an instant ranking loss.
 * Pattern mirrored from verbix-design-work.
 */
import { existsSync } from "node:fs";
import { readdir, readFile } from "node:fs/promises";
import { join, relative, sep } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(fileURLToPath(new URL(".", import.meta.url)), "..");
const APP_DIR = join(ROOT, "app");

/** Every directory under app/ holding a page.tsx, as a URL path pattern. */
async function routesOnDisk(dir = APP_DIR, found = []) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name.startsWith("(") || entry.name.startsWith("_") || entry.name === "api" || entry.name === "admin") continue;
      await routesOnDisk(full, found);
    } else if (entry.name === "page.tsx") {
      const rel = relative(APP_DIR, dir).split(sep).join("/");
      found.push(rel === "" ? "/" : `/${rel}`);
    }
  }
  return found;
}

const manifestSrc = await readFile(join(ROOT, "src/lib/routes.ts"), "utf8");
const expectedRoutes = [...manifestSrc.matchAll(/^\s*"([^"]+)",$/gm)].map((m) => m[1]);
const actualDiskPatterns = await routesOnDisk();

const diskPatternSet = new Set(actualDiskPatterns);
const failures = [];

// Verify every expected route has a valid page handler on disk
for (const route of expectedRoutes) {
  if (diskPatternSet.has(route)) continue;

  if (route.startsWith("/case-studies/")) {
    if (diskPatternSet.has("/case-studies/[slug]")) continue;
  }
  if (route.startsWith("/blog/")) {
    if (diskPatternSet.has("/blog/[slug]")) continue;
  }

  failures.push(`Missing handler for route: ${route}`);
}

// Verify every disk page pattern is represented in expected routes
for (const diskRoute of actualDiskPatterns) {
  if (diskRoute === "/case-studies/[slug]") {
    const hasCaseStudies = expectedRoutes.some((r) => r.startsWith("/case-studies/") && r !== "/case-studies");
    if (!hasCaseStudies) failures.push("app/case-studies/[slug]/page.tsx exists but no case study routes defined in manifest");
    continue;
  }
  if (diskRoute === "/blog/[slug]") {
    const hasBlogs = expectedRoutes.some((r) => r.startsWith("/blog/") && r !== "/blog");
    if (!hasBlogs) failures.push("app/blog/[slug]/page.tsx exists but no blog routes defined in manifest");
    continue;
  }

  if (!expectedRoutes.includes(diskRoute)) {
    failures.push(`Extra page on disk not in routes manifest: ${diskRoute}`);
  }
}

// Section 30 Production SEO Protection Checks
const seoLib = await readFile(join(ROOT, "src/lib/seo.ts"), "utf8");
if (/localhost|127\.0\.0\.1|staging\./i.test(seoLib)) {
  failures.push("Production SEO protection failed: src/lib/seo.ts contains localhost/staging URL!");
}

const robotsCode = await readFile(join(ROOT, "app/robots.ts"), "utf8");
if (/disallow:\s*\[?['"]\/['"]\]?/i.test(robotsCode)) {
  failures.push("Production SEO protection failed: robots.ts accidentally blocks the entire site ('/')!");
}

if (failures.length === 0) {
  console.log(`✓ ${expectedRoutes.length}/${expectedRoutes.length} routes verified`);
  console.log("✓ Production SEO protection checks passed (no localhost, staging, or blocked robots)");
  process.exit(0);
}

for (const err of failures) {
  console.error(`✗ ${err}`);
}
console.error(
  `\nRoute parity or SEO verification failed: ${failures.length} issue(s) detected.\n` +
    "Every route is an indexed URL. Update src/lib/routes.ts when deliberately adding or changing one."
);
process.exit(1);
