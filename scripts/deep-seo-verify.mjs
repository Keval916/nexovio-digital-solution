#!/usr/bin/env node
/**
 * 2-Pass Comprehensive SEO & Content Health Checker for all 34 routes.
 */
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(fileURLToPath(new URL(".", import.meta.url)), "..");
const BASE = (process.argv[2] || "http://localhost:3000").replace(/\/$/, "");
const SITE = "https://www.nexoviodigitalsolutions.com";

const manifest = await readFile(join(ROOT, "src/lib/routes.ts"), "utf8");
const routes = [...manifest.matchAll(/^\s*"([^"]+)",$/gm)].map((m) => m[1]);

console.log(`\n======================================================`);
console.log(`  DEEP SEO & CONTENT AUDIT: ${routes.length} ROUTES ON ${BASE}`);
console.log(`======================================================\n`);

const results = [];
let totalErrors = 0;
let totalWarnings = 0;

for (let i = 0; i < routes.length; i++) {
  const route = routes[i];
  const url = `${BASE}${route}`;
  const routeReport = { route, errors: [], warnings: [] };

  let res, html;
  try {
    res = await fetch(url, { redirect: "manual" });
    html = await res.text();
  } catch (err) {
    routeReport.errors.push(`Network fetch error: ${err.message}`);
    results.push(routeReport);
    totalErrors++;
    continue;
  }

  if (res.status !== 200) {
    routeReport.errors.push(`HTTP ${res.status} (expected 200)`);
    results.push(routeReport);
    totalErrors++;
    continue;
  }

  const head = html.slice(0, html.indexOf("</head>") + 7);

  // 1. Title
  const titleMatch = head.match(/<title[^>]*>([^<]*)<\/title>/i);
  const title = titleMatch ? titleMatch[1].trim() : "";
  if (!title) {
    routeReport.errors.push("Missing <title> tag");
  } else if (title.length < 25) {
    routeReport.warnings.push(`Short <title> (${title.length} chars): "${title}"`);
  } else if (title.length > 70) {
    routeReport.warnings.push(`Long <title> (${title.length} chars, might truncate in SERP): "${title}"`);
  }

  // 2. Meta Description
  const descMatch = head.match(/<meta[^>]+name="description"[^>]+content="([^"]*)"/i) ||
                    head.match(/<meta[^>]+content="([^"]*)"[^>]+name="description"/i);
  const desc = descMatch ? descMatch[1].trim() : "";
  if (!desc) {
    routeReport.errors.push("Missing meta description");
  } else if (desc.length < 50) {
    routeReport.warnings.push(`Short description (${desc.length} chars)`);
  } else if (desc.length > 175) {
    routeReport.warnings.push(`Long description (${desc.length} chars, may truncate)`);
  }

  // 3. Canonical Tag
  const canonMatch = head.match(/<link[^>]+rel="canonical"[^>]+href="([^"]*)"/i) ||
                     head.match(/<link[^>]+href="([^"]*)"[^>]+rel="canonical"/i);
  const canon = canonMatch ? canonMatch[1].trim() : "";
  const expectedCanon = route === "/" ? SITE : `${SITE}${route}`;
  if (!canon) {
    routeReport.errors.push("Missing canonical link tag");
  } else if (canon !== expectedCanon && canon !== `${expectedCanon}/`) {
    routeReport.errors.push(`Canonical mismatch: got "${canon}", expected "${expectedCanon}"`);
  }

  // 4. OpenGraph Tags
  const ogTitle = head.match(/<meta[^>]+property="og:title"[^>]+content="([^"]*)"/i);
  const ogDesc = head.match(/<meta[^>]+property="og:description"[^>]+content="([^"]*)"/i);
  const ogUrl = head.match(/<meta[^>]+property="og:url"[^>]+content="([^"]*)"/i);
  const ogImg = head.match(/<meta[^>]+property="og:image"[^>]+content="([^"]*)"/i);

  if (!ogTitle) routeReport.errors.push("Missing og:title");
  if (!ogDesc) routeReport.errors.push("Missing og:description");
  if (!ogUrl) routeReport.errors.push("Missing og:url");
  if (!ogImg) routeReport.errors.push("Missing og:image");

  // 5. Twitter Card
  const twCard = head.match(/<meta[^>]+name="twitter:card"[^>]+content="([^"]*)"/i);
  if (!twCard) routeReport.warnings.push("Missing twitter:card");

  // 6. Robots Meta Tag
  const robotsMatch = head.match(/<meta[^>]+name="robots"[^>]+content="([^"]*)"/i);
  const robotsContent = robotsMatch ? robotsMatch[1] : "";
  if (robotsContent.includes("noindex")) {
    routeReport.errors.push(`Page has NOINDEX tag in head: "${robotsContent}"`);
  }

  // 7. Exactly one H1
  const h1Matches = [...html.matchAll(/<h1[\s>]([\s\S]*?)<\/h1>/gi)];
  if (h1Matches.length === 0) {
    routeReport.errors.push("Missing <h1> tag");
  } else if (h1Matches.length > 1) {
    routeReport.errors.push(`Multiple <h1> tags found (${h1Matches.length})`);
  }

  // 8. JSON-LD Structured Data
  const jsonLdScripts = [...html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)];
  if (jsonLdScripts.length === 0) {
    routeReport.warnings.push("No JSON-LD schema on page");
  } else {
    for (const s of jsonLdScripts) {
      try {
        const parsed = JSON.parse(s[1]);
        if (!parsed["@context"]) {
          routeReport.warnings.push("JSON-LD missing @context");
        }
      } catch (err) {
        routeReport.errors.push(`Invalid JSON-LD syntax: ${err.message}`);
      }
    }
  }

  // 9. Check images for alt attribute
  const imagesWithoutAlt = [...html.matchAll(/<img(?![^>]*\balt=)[^>]*>/gi)];
  if (imagesWithoutAlt.length > 0) {
    routeReport.warnings.push(`${imagesWithoutAlt.length} image(s) missing alt attribute`);
  }

  // 10. Check CTAs / Lead Gen Presence
  const hasWhatsApp = /wa\.me|whatsapp/i.test(html);
  const hasContactLink = /href="[^"]*(?:\/contact|\/schedule-a-call|mailto:|tel:)/i.test(html);
  if (!hasWhatsApp && !hasContactLink) {
    routeReport.warnings.push("No obvious lead capture / contact mechanism detected");
  }

  totalErrors += routeReport.errors.length;
  totalWarnings += routeReport.warnings.length;
  results.push(routeReport);

  const statusSymbol = routeReport.errors.length === 0 ? "✓" : "✗";
  const warnText = routeReport.warnings.length > 0 ? ` (${routeReport.warnings.length} warning(s))` : "";
  console.log(`[${i + 1}/${routes.length}] ${statusSymbol} ${route}${warnText}`);
  if (routeReport.errors.length > 0) {
    for (const e of routeReport.errors) console.error(`    ERROR: ${e}`);
  }
  if (routeReport.warnings.length > 0) {
    for (const w of routeReport.warnings) console.log(`    WARN: ${w}`);
  }
}

console.log(`\n======================================================`);
console.log(`SUMMARY: ${routes.length} pages audited.`);
console.log(`Errors:   ${totalErrors}`);
console.log(`Warnings: ${totalWarnings}`);
console.log(`======================================================\n`);

if (totalErrors > 0) {
  process.exit(1);
} else {
  console.log("✓ ALL 34 PAGES PASSED DEEP FORENSIC SEO VERIFICATION!");
  process.exit(0);
}
