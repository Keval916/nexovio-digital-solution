async function testFormsAndCtas() {
  const base = "http://localhost:3000";
  console.log("=== TESTING INTERACTIVE FORMS & CTA DESTINATIONS ===");

  // 1. Contact API endpoint test
  try {
    const contactPayload = {
      name: "Test Verification Suite",
      email: "test-verify@nexoviodigitalsolutions.com",
      phone: "+1 555-0199",
      service: "web-development",
      budget: "$5,000+",
      timeline: "Immediately",
      message: "Automated verification test of API enquiry route integrity.",
    };
    const contactRes = await fetch(`${base}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(contactPayload),
    });
    const contactData = await contactRes.json();
    console.log(`1. POST /api/contact: Status ${contactRes.status}, Success: ${contactData.success !== undefined ? contactData.success : "handled"}`);
  } catch (err) {
    console.log(`1. POST /api/contact: Error ${err.message}`);
  }

  // 2. Newsletter API endpoint test
  try {
    const newsRes = await fetch(`${base}/api/newsletter`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: "subscriber-test@nexoviodigitalsolutions.com" }),
    });
    const newsData = await newsRes.json();
    console.log(`2. POST /api/newsletter: Status ${newsRes.status}, Success: ${newsData.success !== undefined ? newsData.success : "handled"}`);
  } catch (err) {
    console.log(`2. POST /api/newsletter: Error ${err.message}`);
  }

  // 3. CTA Destination routes
  const ctaRoutes = [
    "/contact",
    "/pricing",
    "/schedule-a-call",
    "/agency-partnership",
    "/case-studies",
    "/services",
    "/services/web-development",
    "/services/web-design",
    "/services/ui-ux-design",
    "/services/mobile-app-development",
    "/services/seo-digital-marketing",
    "/services/graphic-design",
    "/services/ai-development",
    "/services/generative-ai-development",
    "/services/ai-agent-development",
    "/services/ai-chatbot-development",
    "/services/ai-automation-solutions",
  ];

  console.log(`\n3. Verifying ${ctaRoutes.length} key CTA & Navigation Destinations:`);
  let passedCtas = 0;
  for (const route of ctaRoutes) {
    const res = await fetch(`${base}${route}`);
    if (res.status === 200) {
      passedCtas++;
    } else {
      console.log(`   FAIL: ${route} -> Status ${res.status}`);
    }
  }
  console.log(`   Passed: ${passedCtas}/${ctaRoutes.length} CTA destinations returned HTTP 200 OK.`);
}

testFormsAndCtas().catch(console.error);
