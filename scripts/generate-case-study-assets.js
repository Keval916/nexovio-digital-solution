const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

async function run() {
  const baseDir = path.join(__dirname, '..', 'public', 'images', 'case-studies');

  // ==========================================
  // 1. INFINITI HOME COMFORT
  // ==========================================
  const hvacDir = path.join(baseDir, 'infiniti-home-comfort');
  await ensureDir(hvacDir);
  console.log('Generating Infiniti Home Comfort assets...');

  // Hero showcase
  await sharp('public/images/case-studies/infiniti-home-comfort-booking-platform.jpg')
    .resize(1376, 768)
    .jpeg({ quality: 90 })
    .toFile(path.join(hvacDir, 'infiniti-home-comfort-hvac-booking-platform-laptop-desk.jpg'));

  // Designer at work (from uiux-wireframe-expert: 896 x 1200)
  await sharp('public/images/services/uiux-wireframe-expert.jpg')
    .extract({ left: 100, top: 150, width: 750, height: 850 })
    .resize(750, 850)
    .jpeg({ quality: 88 })
    .toFile(path.join(hvacDir, 'ui-ux-designer-hvac-booking-platform-desk.jpg'));

  // Founder headshot (Marcus Vance from technical-consultation-lead: 1376 x 768)
  await sharp('public/images/contact/technical-consultation-lead.jpg')
    .extract({ left: 520, top: 140, width: 360, height: 360 })
    .resize(400, 400)
    .jpeg({ quality: 90 })
    .toFile(path.join(hvacDir, 'marcus-vance-founder-infiniti-home-comfort.jpg'));

  // Homepage mockup (Laptop screen crop from booking platform: 1376 x 768)
  await sharp('public/images/case-studies/infiniti-home-comfort-booking-platform.jpg')
    .extract({ left: 320, top: 110, width: 620, height: 440 })
    .resize(900, 640)
    .jpeg({ quality: 88 })
    .toFile(path.join(hvacDir, 'infiniti-home-comfort-homepage-laptop-mockup.jpg'));

  // Mobile screen (Phone crop from booking platform: 1376 x 768)
  await sharp('public/images/case-studies/infiniti-home-comfort-booking-platform.jpg')
    .extract({ left: 1020, top: 290, width: 200, height: 400 })
    .resize(500, 800)
    .jpeg({ quality: 88 })
    .toFile(path.join(hvacDir, 'hvac-mobile-booking-flow-ui-screen.jpg'));

  // Booking calendar crop
  await sharp('public/images/case-studies/infiniti-home-comfort-booking-platform.jpg')
    .extract({ left: 360, top: 220, width: 300, height: 260 })
    .resize(600, 450)
    .jpeg({ quality: 88 })
    .toFile(path.join(hvacDir, 'hvac-service-booking-calendar-ui-screen.jpg'));

  // Live map crop
  await sharp('public/images/case-studies/infiniti-home-comfort-booking-platform.jpg')
    .extract({ left: 660, top: 270, width: 250, height: 200 })
    .resize(600, 450)
    .jpeg({ quality: 88 })
    .toFile(path.join(hvacDir, 'hvac-live-technician-dispatch-map-ui-screen.jpg'));


  // ==========================================
  // 2. FINTECH MOBILE APP (STRATA FINANCIAL)
  // ==========================================
  const fintechDir = path.join(baseDir, 'fintech-mobile-app');
  await ensureDir(fintechDir);
  console.log('Generating FinTech Mobile App assets...');

  // Hero showcase (1672 x 940)
  await sharp('public/images/case-studies/cross-platform-fintech-mobile-app-react-native.webp')
    .resize(1600, 900)
    .jpeg({ quality: 90 })
    .toFile(path.join(fintechDir, 'strata-financial-mobile-banking-app-hero-showcase.jpg'));

  // Designer at work (from uiux-hero-designer: 1200 x 896)
  await sharp('public/images/services/uiux-hero-designer.jpg')
    .extract({ left: 40, top: 50, width: 800, height: 800 })
    .resize(800, 800)
    .jpeg({ quality: 88 })
    .toFile(path.join(fintechDir, 'ui-ux-designer-fintech-mobile-app-desk.jpg'));

  // Headshot (Elena Rostova CTO from contact-hero-consultant: 896 x 1200)
  await sharp('public/images/contact/contact-hero-consultant.jpg')
    .extract({ left: 320, top: 260, width: 360, height: 360 })
    .resize(400, 400)
    .jpeg({ quality: 90 })
    .toFile(path.join(fintechDir, 'elena-rostova-cto-strata-financial.jpg'));

  // Homepage mockup (Center phone from fintech image: 1672 x 940)
  await sharp('public/images/case-studies/cross-platform-fintech-mobile-app-react-native.webp')
    .extract({ left: 630, top: 40, width: 380, height: 750 })
    .resize(600, 900)
    .jpeg({ quality: 88 })
    .toFile(path.join(fintechDir, 'strata-financial-mobile-banking-dashboard-mockup.jpg'));

  // KYC Verification crop
  await sharp('public/images/case-studies/cross-platform-fintech-mobile-app-react-native.webp')
    .extract({ left: 400, top: 140, width: 250, height: 500 })
    .resize(500, 750)
    .jpeg({ quality: 88 })
    .toFile(path.join(fintechDir, 'fintech-biometric-kyc-verification-ui-screen.jpg'));

  // Pricing / Plan crop
  await sharp('public/images/case-studies/cross-platform-fintech-mobile-app-react-native.webp')
    .extract({ left: 1000, top: 120, width: 250, height: 520 })
    .resize(500, 750)
    .jpeg({ quality: 88 })
    .toFile(path.join(fintechDir, 'fintech-account-tier-plans-ui-screen.jpg'));

  // Account verified card crop
  await sharp('public/images/case-studies/cross-platform-fintech-mobile-app-react-native.webp')
    .extract({ left: 1270, top: 180, width: 240, height: 460 })
    .resize(500, 750)
    .jpeg({ quality: 88 })
    .toFile(path.join(fintechDir, 'fintech-account-verified-success-ui-screen.jpg'));


  // ==========================================
  // 3. B2B DIGITAL PLATFORM (APEX CLOUD SYSTEMS)
  // ==========================================
  const b2bDir = path.join(baseDir, 'b2b-digital-platform');
  await ensureDir(b2bDir);
  console.log('Generating B2B Digital Platform assets...');

  // Hero showcase (1672 x 941)
  await sharp('public/images/case-studies/b2b-digital-platform-technical-seo-optimization.webp')
    .resize(1600, 900)
    .jpeg({ quality: 90 })
    .toFile(path.join(b2bDir, 'apex-cloud-enterprise-platform-laptop-desk.jpg'));

  // Designer at work (from case-studies-hero-team: 1376 x 768)
  await sharp('public/images/case-studies/case-studies-hero-team.jpg')
    .extract({ left: 450, top: 100, width: 600, height: 600 })
    .resize(800, 800)
    .jpeg({ quality: 88 })
    .toFile(path.join(b2bDir, 'ui-ux-designer-enterprise-saas-desk.jpg'));

  // Headshot (Elena Sommer from rohan-mehta-founder-testimonial: 1024 x 1024)
  await sharp('public/images/services/seo/rohan-mehta-founder-testimonial.jpg')
    .extract({ left: 200, top: 100, width: 600, height: 600 })
    .resize(400, 400)
    .jpeg({ quality: 90 })
    .toFile(path.join(b2bDir, 'elena-sommer-head-of-growth-apex-cloud.jpg'));

  // Homepage mockup (Laptop screen crop from b2b: 1672 x 941)
  await sharp('public/images/case-studies/b2b-digital-platform-technical-seo-optimization.webp')
    .extract({ left: 520, top: 440, width: 580, height: 400 })
    .resize(900, 600)
    .jpeg({ quality: 88 })
    .toFile(path.join(b2bDir, 'apex-cloud-enterprise-homepage-laptop-mockup.jpg'));

  // Floating marketing site screen
  await sharp('public/images/case-studies/b2b-digital-platform-technical-seo-optimization.webp')
    .extract({ left: 430, top: 35, width: 550, height: 380 })
    .resize(800, 550)
    .jpeg({ quality: 88 })
    .toFile(path.join(b2bDir, 'apex-cloud-marketing-portal-ui-screen.jpg'));

  // Organic search metrics card crop
  await sharp('public/images/case-studies/b2b-digital-platform-technical-seo-optimization.webp')
    .extract({ left: 1000, top: 65, width: 440, height: 280 })
    .resize(600, 420)
    .jpeg({ quality: 88 })
    .toFile(path.join(b2bDir, 'apex-cloud-organic-seo-growth-chart-ui-screen.jpg'));

  // Content hub card crop
  await sharp('public/images/case-studies/b2b-digital-platform-technical-seo-optimization.webp')
    .extract({ left: 80, top: 520, width: 440, height: 280 })
    .resize(600, 420)
    .jpeg({ quality: 88 })
    .toFile(path.join(b2bDir, 'apex-cloud-resource-content-hub-ui-screen.jpg'));


  // ==========================================
  // 4. LUMINA HEALTH PATIENT EXPERIENCE
  // ==========================================
  const luminaDir = path.join(baseDir, 'lumina-health-patient-experience');
  await ensureDir(luminaDir);
  console.log('Generating Lumina Health assets...');

  // Hero showcase (from enterprise-saas-ai-knowledge-agent-web-portal: 1672 x 941)
  await sharp('public/images/case-studies/enterprise-saas-ai-knowledge-agent-web-portal.webp')
    .resize(1600, 900)
    .jpeg({ quality: 90 })
    .toFile(path.join(luminaDir, 'lumina-health-telemedicine-portal-laptop-desk.jpg'));

  // Designer at work (from uiux-desk-laptop: 1200 x 896)
  await sharp('public/images/services/uiux-desk-laptop.jpg')
    .extract({ left: 200, top: 120, width: 750, height: 750 })
    .resize(800, 800)
    .jpeg({ quality: 88 })
    .toFile(path.join(luminaDir, 'ui-ux-designer-healthcare-portal-desk.jpg'));

  // Headshot (Dr. Amanda Chen from contact-hero-consultant: 896 x 1200)
  await sharp('public/images/contact/contact-hero-consultant.jpg')
    .extract({ left: 330, top: 270, width: 340, height: 340 })
    .resize(400, 400)
    .jpeg({ quality: 90 })
    .toFile(path.join(luminaDir, 'dr-amanda-chen-cmo-lumina-health.jpg'));

  // Homepage / Portal screen (Laptop screen crop: 1672 x 941)
  await sharp('public/images/case-studies/enterprise-saas-ai-knowledge-agent-web-portal.webp')
    .extract({ left: 250, top: 380, width: 580, height: 420 })
    .resize(900, 640)
    .jpeg({ quality: 88 })
    .toFile(path.join(luminaDir, 'lumina-health-telemedicine-homepage-laptop-mockup.jpg'));

  // Guided triage card (AI chat/triage agent crop)
  await sharp('public/images/case-studies/enterprise-saas-ai-knowledge-agent-web-portal.webp')
    .extract({ left: 960, top: 290, width: 400, height: 400 })
    .resize(600, 600)
    .jpeg({ quality: 88 })
    .toFile(path.join(luminaDir, 'lumina-health-accessible-symptom-triage-ui-screen.jpg'));

  // Documentation / Records card crop
  await sharp('public/images/case-studies/enterprise-saas-ai-knowledge-agent-web-portal.webp')
    .extract({ left: 1410, top: 130, width: 220, height: 400 })
    .resize(500, 750)
    .jpeg({ quality: 88 })
    .toFile(path.join(luminaDir, 'lumina-health-instant-insurance-ocr-verification-ui-screen.jpg'));


  // ==========================================
  // 5. PULSE LOGISTICS ORGANIC GROWTH ENGINE
  // ==========================================
  const pulseDir = path.join(baseDir, 'pulse-logistics-organic-growth-engine');
  await ensureDir(pulseDir);
  console.log('Generating Pulse Logistics assets...');

  // Hero showcase (from digital-marketing-growth-workspace: 1200 x 896)
  await sharp('public/images/services/seo/digital-marketing-growth-workspace.jpg')
    .resize(1376, 768)
    .jpeg({ quality: 90 })
    .toFile(path.join(pulseDir, 'pulse-logistics-freight-platform-laptop-desk.jpg'));

  // Designer at work (from agency-partner-consultation: 1264 x 848)
  await sharp('public/images/agency-partnership/agency-partner-consultation.jpg')
    .extract({ left: 300, top: 50, width: 700, height: 700 })
    .resize(800, 800)
    .jpeg({ quality: 88 })
    .toFile(path.join(pulseDir, 'ui-ux-designer-logistics-platform-desk.jpg'));

  // Headshot (Jason Miller VP from technical-consultation-lead: 1376 x 768)
  await sharp('public/images/contact/technical-consultation-lead.jpg')
    .extract({ left: 520, top: 140, width: 360, height: 360 })
    .resize(400, 400)
    .jpeg({ quality: 90 })
    .toFile(path.join(pulseDir, 'jason-miller-vp-pulse-logistics.jpg'));

  // Homepage mockup (Laptop screen crop from seo rankings laptop: 1200 x 896)
  await sharp('public/images/services/seo/google-search-seo-rankings-laptop.jpg')
    .extract({ left: 300, top: 120, width: 700, height: 480 })
    .resize(900, 600)
    .jpeg({ quality: 88 })
    .toFile(path.join(pulseDir, 'pulse-logistics-freight-homepage-laptop-mockup.jpg'));

  // Route corridors / rankings screen (1200 x 896)
  await sharp('public/images/services/seo/pay-per-click-ad-campaign-dashboard.jpg')
    .extract({ left: 250, top: 150, width: 680, height: 460 })
    .resize(800, 550)
    .jpeg({ quality: 88 })
    .toFile(path.join(pulseDir, 'pulse-logistics-national-freight-lane-corridors-ui-screen.jpg'));

  // Mobile freight screen (1200 x 896)
  await sharp('public/images/services/seo/social-media-management-mobile-feed.jpg')
    .extract({ left: 350, top: 80, width: 550, height: 750 })
    .resize(550, 750)
    .jpeg({ quality: 88 })
    .toFile(path.join(pulseDir, 'pulse-logistics-mobile-responsive-carrier-screen.jpg'));

  console.log('All case study assets generated successfully!');
}

run().catch(console.error);
