import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(fileURLToPath(new URL(".", import.meta.url)), "..");

function extractField(content, fieldName) {
  // 1. Try double quotes with escaped quotes handling
  let match = content.match(new RegExp(`${fieldName}:\\s*"([^"\\\\]*(?:\\\\.[^"\\\\]*)*)"`, "s"));
  if (match) return match[1].replace(/\\"/g, '"').replace(/\s+/g, " ").trim();

  // 2. Try single quotes
  match = content.match(new RegExp(`${fieldName}:\\s*'([^'\\\\]*(?:\\\\.[^'\\\\]*)*)'`, "s"));
  if (match) return match[1].replace(/\\'/g, "'").replace(/\s+/g, " ").trim();

  // 3. Try template literal
  match = content.match(new RegExp(`${fieldName}:\\s*\`([^\`\\\\]*(?:\\\\.[^\`\\\\]*)*)\``, "s"));
  if (match) return match[1].replace(/\s+/g, " ").trim();

  return null;
}

async function auditSEO() {
  console.log("=================================================");
  console.log("🚀 STARTING COMPREHENSIVE SEO & SCHEMA AUDIT 🚀");
  console.log("=================================================\n");

  const manifestSrc = await readFile(join(ROOT, "src/lib/routes.ts"), "utf8");
  const routes = [...manifestSrc.matchAll(/^\s*"([^"]+)",$/gm)].map((m) => m[1]);

  // Load dynamic data for dynamic route verification
  let caseStudies = [];
  try {
    const csContent = await readFile(join(ROOT, "src/data/case-studies.ts"), "utf8");
    const slugs = [...csContent.matchAll(/slug:\s*"([^"]+)"/g)].map((m) => m[1]);
    for (const slug of slugs) {
      const titleMatch = csContent.match(new RegExp(`slug:\\s*"${slug}"[\\s\\S]*?seoTitle:\\s*"([^"]+)"`));
      const descMatch = csContent.match(new RegExp(`slug:\\s*"${slug}"[\\s\\S]*?seoDescription:\\s*"([^"]+)"`));
      caseStudies.push({
        slug,
        seoTitle: titleMatch ? titleMatch[1] : null,
        seoDescription: descMatch ? descMatch[1] : null,
      });
    }
  } catch (err) {
    console.warn("Could not load case-studies.ts:", err.message);
  }

  let blogArticles = [];
  try {
    const blogJson = JSON.parse(await readFile(join(ROOT, "src/data/blog-posts.json"), "utf8"));
    blogArticles = blogJson;
  } catch (err) {
    console.warn("Could not load blog-posts.json:", err.message);
  }

  const titles = new Map();
  const descriptions = new Map();
  const issues = [];
  const report = [];

  for (const route of routes) {
    let title = null;
    let desc = null;
    let pathParam = null;

    if (route.startsWith("/case-studies/") && route !== "/case-studies") {
      const slug = route.replace("/case-studies/", "");
      const cs = caseStudies.find((c) => c.slug === slug);
      if (cs) {
        title = cs.seoTitle;
        desc = cs.seoDescription;
        pathParam = `/case-studies/${slug}`;
      } else {
        issues.push(`[${route}] Dynamic case study not found in src/data/case-studies.ts`);
      }
    } else if (route.startsWith("/blog/") && route !== "/blog") {
      const slug = route.replace("/blog/", "");
      const article = blogArticles.find((a) => a.slug === slug);
      if (article) {
        title = article.seoTitle || article.title;
        desc = article.seoDescription || article.excerpt;
        pathParam = `/blog/${slug}`;
      } else {
        issues.push(`[${route}] Dynamic blog article not found in src/data/blog-posts.json`);
      }
    } else {
      const pagePath = route === "/" ? join(ROOT, "app/page.tsx") : join(ROOT, `app${route}/page.tsx`);
      try {
        const content = await readFile(pagePath, "utf8");
        title = extractField(content, "title");
        desc = extractField(content, "description");
        pathParam = extractField(content, "path");
      } catch (err) {
        issues.push(`[${route}] Error reading ${pagePath}: ${err.message}`);
      }
    }

    const pageReport = {
      route,
      title,
      desc,
      titleLen: title ? title.length : 0,
      descLen: desc ? desc.length : 0,
      hasCanonicalPath: !!pathParam,
    };

    if (!title) {
      issues.push(`[${route}] Missing meta title`);
    } else {
      if (titles.has(title)) {
        issues.push(`[${route}] DUPLICATE title with ${titles.get(title)}: "${title}"`);
      }
      titles.set(title, route);
    }

    if (!desc) {
      issues.push(`[${route}] Missing meta description`);
    } else {
      if (descriptions.has(desc)) {
        issues.push(`[${route}] DUPLICATE description with ${descriptions.get(desc)}: "${desc.substring(0, 40)}..."`);
      }
      descriptions.set(desc, route);
    }

    report.push(pageReport);
  }

  // Check service views for structured data schema injection & single H1
  console.log("Checking Service Views for Schemas & Single H1 Hierarchy...\n");
  const serviceFiles = [
    "src/views/services/AiDevelopment.tsx",
    "src/views/services/AiAutomationSolutions.tsx",
    "src/views/services/WebDevelopment.tsx",
    "src/views/services/WebDesign.tsx",
    "src/views/services/UiUxDesign.tsx",
    "src/views/services/MobileAppDevelopment.tsx",
    "src/views/services/GraphicDesign.tsx",
    "src/views/services/SeoDigitalMarketing.tsx",
    "src/views/services/GenerativeAiDevelopment.tsx",
    "src/views/services/AiAgentDevelopment.tsx",
    "src/views/services/AiChatbotDevelopment.tsx",
  ];

  for (const file of serviceFiles) {
    try {
      const src = await readFile(join(ROOT, file), "utf8");

      const hasOrgSchema =
        (src.includes("organizationSchema") || src.includes("getOrganizationSchema")) &&
        src.includes("application/ld+json");
      const hasServiceSchema =
        (src.includes("serviceSchema") || src.includes("getServiceSchema")) &&
        src.includes("application/ld+json");
      const hasBreadcrumbSchema =
        (src.includes("breadcrumbSchema") || src.includes("getBreadcrumbSchema")) &&
        src.includes("application/ld+json");
      const hasFaq = src.includes("<FaqSection");

      const h1Matches = [...src.matchAll(/<h1[^>]*>/gi)];
      const h1Count = h1Matches.length;

      console.log(`📄 ${file}:`);
      console.log(`   - Organization Schema: ${hasOrgSchema ? "✓" : "✗"}`);
      console.log(`   - Service Schema:      ${hasServiceSchema ? "✓" : "✗"}`);
      console.log(`   - Breadcrumb Schema:   ${hasBreadcrumbSchema ? "✓" : "✗"}`);
      console.log(`   - FaqSection (FAQ Schema): ${hasFaq ? "✓" : "✗"}`);
      console.log(`   - H1 Tag Count:        ${h1Count === 1 ? "✓ 1 H1" : `⚠️ ${h1Count} H1 tags`}`);

      if (!hasOrgSchema) issues.push(`${file} is missing organizationSchema injection`);
      if (!hasServiceSchema) issues.push(`${file} is missing serviceSchema injection`);
      if (!hasBreadcrumbSchema) issues.push(`${file} is missing breadcrumbSchema injection`);
      if (!hasFaq) issues.push(`${file} is missing FaqSection`);
      if (h1Count !== 1) issues.push(`${file} has ${h1Count} <h1> tags (should be exactly 1)`);
    } catch (e) {
      issues.push(`Could not read ${file}: ${e.message}`);
    }
  }

  console.log("\n=================================================");
  console.log("📊 ROUTE METADATA AUDIT REPORT (All 33 Routes):");
  console.log("=================================================");
  for (const r of report) {
    const tStatus = r.titleLen >= 30 && r.titleLen <= 75 ? "✓" : "⚠️";
    const dStatus = r.descLen >= 90 && r.descLen <= 180 ? "✓" : "⚠️";
    console.log(
      `${r.route.padEnd(48)} | Title (${String(r.titleLen).padStart(2)}) ${tStatus} | Desc (${String(r.descLen).padStart(3)}) ${dStatus} | Path: ${r.hasCanonicalPath ? "✓" : "✗"}`
    );
  }

  console.log("\n=================================================");
  if (issues.length === 0) {
    console.log("🎉 ALL SEO, METADATA & SCHEMA CHECKS PASSED WITH 0 ISSUES! 🎉");
  } else {
    console.log(`⚠️ FOUND ${issues.length} ISSUE(S):`);
    for (const issue of issues) {
      console.log(`  - ${issue}`);
    }
  }
  console.log("=================================================");

  if (issues.length > 0) {
    process.exit(1);
  }
}

auditSEO();
