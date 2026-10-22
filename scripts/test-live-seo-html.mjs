import http from "node:http";

const TEST_URLS = [
  "/",
  "/services",
  "/services/web-design",
  "/services/ui-ux-design",
  "/services/web-development",
  "/services/mobile-app-development",
  "/services/ai-development",
  "/services/graphic-design",
  "/case-studies/parts-connexion",
  "/blog/customer-self-service-portal-business-guide"
];

function fetchHtml(path) {
  return new Promise((resolve, reject) => {
    http.get(`http://localhost:3000${path}`, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => resolve({ statusCode: res.statusCode, html: data }));
    }).on("error", reject);
  });
}

async function run() {
  console.log("=================================================");
  console.log("🔍 TESTING LIVE RENDERED HTML SEO & SCHEMAS 🔍");
  console.log("=================================================\n");

  let allPassed = true;

  for (const urlPath of TEST_URLS) {
    try {
      const { statusCode, html } = await fetchHtml(urlPath);
      if (statusCode !== 200) {
        console.error(`❌ ${urlPath}: Returned HTTP ${statusCode}`);
        allPassed = false;
        continue;
      }

      // Title
      const titleMatch = html.match(/<title>([^<]+)<\/title>/i);
      const title = titleMatch ? titleMatch[1] : null;

      // Meta description
      const descMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["']/i) ||
                        html.match(/<meta[^>]*content=["']([^"']+)["'][^>]*name=["']description["']/i);
      const desc = descMatch ? descMatch[1] : null;

      // Canonical
      const canonicalMatch = html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["']/i) ||
                            html.match(/<link[^>]*href=["']([^"']+)["'][^>]*rel=["']canonical["']/i);
      const canonical = canonicalMatch ? canonicalMatch[1] : null;

      // OpenGraph URL
      const ogUrlMatch = html.match(/<meta[^>]*property=["']og:url["'][^>]*content=["']([^"']+)["']/i);
      const ogUrl = ogUrlMatch ? ogUrlMatch[1] : null;

      // Schemas
      const schemaMatches = [...html.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
      const schemas = [];
      for (const m of schemaMatches) {
        try {
          const parsed = JSON.parse(m[1]);
          const types = Array.isArray(parsed["@type"]) ? parsed["@type"].join(", ") : parsed["@type"];
          schemas.push(types || "Custom Schema");
        } catch {
          schemas.push("INVALID_JSON");
        }
      }

      // H1 count
      const h1Count = (html.match(/<h1\b[^>]*>/gi) || []).length;

      console.log(`🌐 URL: ${urlPath}`);
      console.log(`   - HTTP Status: ${statusCode} OK`);
      console.log(`   - Title:       "${title?.substring(0, 60)}..." (${title?.length} chars)`);
      console.log(`   - Description: "${desc?.substring(0, 65)}..." (${desc?.length} chars)`);
      console.log(`   - Canonical:   ${canonical}`);
      console.log(`   - OG URL:      ${ogUrl}`);
      console.log(`   - Schemas:     [${schemas.join(" | ")}]`);
      console.log(`   - H1 Count:    ${h1Count === 1 ? "✓ Exactly 1 H1" : `⚠️ ${h1Count} H1 tags`}`);
      console.log("-------------------------------------------------");

      if (!title || !desc || !canonical || schemas.length === 0 || h1Count !== 1) {
        allPassed = false;
      }
    } catch (err) {
      console.error(`❌ Error fetching ${urlPath}:`, err.message);
      allPassed = false;
    }
  }

  if (allPassed) {
    console.log("🎉 ALL LIVE RENDERED PAGES VERIFIED WITH ACCURATE SEO & SCHEMAS! 🎉");
  } else {
    console.log("⚠️ Some live checks did not meet the criteria.");
    process.exit(1);
  }
}

run();
