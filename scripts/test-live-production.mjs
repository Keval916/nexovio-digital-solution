
async function testLive() {
  const base = "https://www.nexoviodigitalsolutions.com";
  console.log("=== CHECKING PRODUCTION LIVE ASSETS ===");
  
  // 1. robots.txt
  const robotsRes = await fetch(`${base}/robots.txt`);
  const robotsText = await robotsRes.text();
  console.log(`\n1. robots.txt status: ${robotsRes.status}`);
  console.log(`robots.txt snippet:\n${robotsText.slice(0, 300)}`);
  
  // 2. sitemap.xml
  const sitemapRes = await fetch(`${base}/sitemap.xml`);
  const sitemapText = await sitemapRes.text();
  const urlCount = (sitemapText.match(/<loc>/g) || []).length;
  console.log(`\n2. sitemap.xml status: ${sitemapRes.status}, Total URLs: ${urlCount}`);
  
  // 3. Check live pricing page
  const pricingRes = await fetch(`${base}/pricing`);
  const pricingHtml = await pricingRes.text();
  const titleMatch = pricingHtml.match(/<title>([^<]+)<\/title>/i);
  const descMatch = pricingHtml.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["']/i);
  const canonMatch = pricingHtml.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["']/i);
  const robotsMatch = pricingHtml.match(/<meta[^>]*name=["']robots["'][^>]*content=["']([^"']+)["']/i);
  console.log(`\n3. /pricing:`);
  console.log(`Status: ${pricingRes.status}`);
  console.log(`Title: ${titleMatch ? titleMatch[1] : "NONE"}`);
  console.log(`Description: ${descMatch ? descMatch[1] : "NONE"}`);
  console.log(`Canonical: ${canonMatch ? canonMatch[1] : "NONE"}`);
  console.log(`Meta Robots: ${robotsMatch ? robotsMatch[1] : "NONE"}`);
  
  // 4. Check /services/seo-digital-marketing
  const seoRes = await fetch(`${base}/services/seo-digital-marketing`);
  const seoHtml = await seoRes.text();
  const seoTitle = seoHtml.match(/<title>([^<]+)<\/title>/i);
  const seoCanon = seoHtml.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["']/i);
  const hasKeywordFocusLabel = seoHtml.includes("Keyword Focus");
  console.log(`\n4. /services/seo-digital-marketing:`);
  console.log(`Status: ${seoRes.status}`);
  console.log(`Title: ${seoTitle ? seoTitle[1] : "NONE"}`);
  console.log(`Canonical: ${seoCanon ? seoCanon[1] : "NONE"}`);
  console.log(`Contains visible "Keyword Focus": ${hasKeywordFocusLabel}`);
  
  // 5. Check Homepage H1 & metadata
  const homeRes = await fetch(base);
  const homeHtml = await homeRes.text();
  const h1Match = homeHtml.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  const cleanH1 = h1Match ? h1Match[1].replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim() : "NONE";
  console.log(`\n5. Homepage /:`);
  console.log(`Status: ${homeRes.status}`);
  console.log(`Clean H1: ${cleanH1}`);

  // 6. Structured data check on homepage
  const jsonLdMatches = homeHtml.match(/<script type=["']application\/ld\+json["']>([\s\S]*?)<\/script>/gi) || [];
  console.log(`Structured Data Blocks on /: ${jsonLdMatches.length}`);
  for (let i = 0; i < jsonLdMatches.length; i++) {
    const raw = jsonLdMatches[i].replace(/<script[^>]*>/i, "").replace(/<\/script>/i, "");
    try {
      const parsed = JSON.parse(raw);
      console.log(`  - Block ${i + 1}: @type = ${parsed["@type"] || (parsed["@graph"] ? "Graph (" + parsed["@graph"].map(g => g["@type"]).join(", ") + ")" : "unknown")}`);
    } catch {
      console.log(`  - Block ${i + 1}: Parse failed`);
    }
  }
  // 7. Check local server if running
  try {
    const localBase = "http://localhost:3000";
    const localHome = await fetch(localBase);
    const localHtml = await localHome.text();
    const localH1 = localHtml.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
    console.log(`\n7. Local Server (http://localhost:3000):`);
    console.log(`Status: ${localHome.status}`);
    console.log(`H1: ${localH1 ? localH1[1].replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim() : "NONE"}`);
    
    const localPricing = await fetch(`${localBase}/pricing`);
    const localPricingHtml = await localPricing.text();
    const lpTitle = localPricingHtml.match(/<title>([^<]+)<\/title>/i);
    console.log(`Local /pricing Title: ${lpTitle ? lpTitle[1] : "NONE"}`);
  } catch (err) {
    console.log("\n7. Local server check note:", err.message);
  }
}

testLive().catch(console.error);
