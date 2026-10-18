async function testLocalServer() {
  const base = "http://localhost:3000";
  console.log("=== CHECKING LOCAL SERVER (http://localhost:3000) ===");
  
  // 1. Homepage
  const homeRes = await fetch(base);
  const homeHtml = await homeRes.text();
  const h1Match = homeHtml.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  const cleanH1 = h1Match ? h1Match[1].replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim() : "NONE";
  console.log("1. / Homepage:");
  console.log(`   Status: ${homeRes.status}`);
  console.log(`   H1: ${cleanH1}`);
  
  // 2. Pricing
  const pricingRes = await fetch(`${base}/pricing`);
  const pricingHtml = await pricingRes.text();
  const titleMatch = pricingHtml.match(/<title>([^<]+)<\/title>/i);
  const descMatch = pricingHtml.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["']/i);
  const canonMatch = pricingHtml.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["']/i);
  console.log("\n2. /pricing:");
  console.log(`   Status: ${pricingRes.status}`);
  console.log(`   Title: ${titleMatch ? titleMatch[1] : "NONE"}`);
  console.log(`   Description: ${descMatch ? descMatch[1] : "NONE"}`);
  console.log(`   Canonical: ${canonMatch ? canonMatch[1] : "NONE"}`);

  // 3. /services/seo-digital-marketing
  const seoRes = await fetch(`${base}/services/seo-digital-marketing`);
  const seoHtml = await seoRes.text();
  const hasKeywordFocus = seoHtml.includes("Keyword Focus");
  const has010 = /010\b/.test(seoHtml);
  console.log("\n3. /services/seo-digital-marketing:");
  console.log(`   Status: ${seoRes.status}`);
  console.log(`   Contains "Keyword Focus": ${hasKeywordFocus}`);
  console.log(`   Contains "010" glitch: ${has010}`);

  // 4. /services/graphic-design
  const gdRes = await fetch(`${base}/services/graphic-design`);
  const gdHtml = await gdRes.text();
  const gd010 = /010\b/.test(gdHtml);
  console.log("\n4. /services/graphic-design:");
  console.log(`   Status: ${gdRes.status}`);
  console.log(`   Contains "010" glitch: ${gd010}`);

  // 5. /services/mobile-app-development
  const mobRes = await fetch(`${base}/services/mobile-app-development`);
  const mobHtml = await mobRes.text();
  const mob010 = /010\b/.test(mobHtml);
  console.log("\n5. /services/mobile-app-development:");
  console.log(`   Status: ${mobRes.status}`);
  console.log(`   Contains "010" glitch: ${mob010}`);

  // 6. Navigation links check on Header/Footer
  const hasRagNav = homeHtml.includes("/services/ai-development#ai-services");
  console.log("\n6. Navigation & Consistency:");
  console.log(`   Contains /services/ai-development#ai-services: ${hasRagNav}`);
}

testLocalServer().catch(console.error);
