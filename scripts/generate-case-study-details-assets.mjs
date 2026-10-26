import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

// Helper to convert SVG to buffer and composite via sharp
async function renderSvgToJpeg(svgString, width, height, outputPath, quality = 95) {
  const dir = path.dirname(outputPath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  
  await sharp(Buffer.from(svgString))
    .resize(width, height)
    .sharpen({ sigma: 0.8, m1: 0.8, m2: 1.5 })
    .jpeg({ quality, mozjpeg: true })
    .toFile(outputPath);
  console.log(`✓ Rendered: ${outputPath} (${width}x${height})`);
}

async function main() {
  console.log('Starting generation of realistic, specific case study highlight images...\n');

  // =========================================================================
  // 1. PARTS CONNEXION
  // =========================================================================
  // Screen 2: Faceted Filter Search UI Screen (Vehicle Make, Model, Year, Category)
  const partsFilterSvg = `
  <svg width="1000" height="750" viewBox="0 0 1000 750" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="1000" height="750" fill="#F8FAFC"/>
    
    <!-- Outer Card Container -->
    <rect x="50" y="40" width="900" height="670" rx="28" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="2"/>
    
    <!-- Header -->
    <rect x="50" y="40" width="900" height="80" rx="28" fill="#0F172A"/>
    <rect x="50" y="90" width="900" height="30" fill="#0F172A"/>
    <text x="80" y="88" font-family="system-ui, -apple-system, sans-serif" font-size="22" font-weight="bold" fill="#FFFFFF">Parts Connexion</text>
    <text x="260" y="88" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="600" fill="#F59E0B">VEHICLE FITMENT &amp; FACETED SEARCH</text>
    <rect x="830" y="65" width="90" height="30" rx="15" fill="#1E293B"/>
    <text x="850" y="85" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#38BDF8">40K+ SKUs</text>

    <!-- Subheader Search Filters Bar -->
    <rect x="80" y="145" width="840" height="75" rx="16" fill="#F1F5F9" stroke="#CBD5E1"/>
    
    <!-- Year Select -->
    <rect x="100" y="160" width="180" height="45" rx="10" fill="#FFFFFF" stroke="#94A3B8"/>
    <text x="115" y="188" font-family="system-ui, sans-serif" font-size="13" font-weight="600" fill="#334155">Year: 2024</text>
    <path d="M260 185 L265 190 L270 185" stroke="#64748B" stroke-width="2" stroke-linecap="round"/>

    <!-- Make Select -->
    <rect x="295" y="160" width="180" height="45" rx="10" fill="#FFFFFF" stroke="#94A3B8"/>
    <text x="310" y="188" font-family="system-ui, sans-serif" font-size="13" font-weight="600" fill="#334155">Make: Porsche</text>
    <path d="M455 185 L460 190 L465 185" stroke="#64748B" stroke-width="2" stroke-linecap="round"/>

    <!-- Model Select -->
    <rect x="490" y="160" width="180" height="45" rx="10" fill="#FFFFFF" stroke="#94A3B8"/>
    <text x="505" y="188" font-family="system-ui, sans-serif" font-size="13" font-weight="600" fill="#334155">Model: 911 GT3</text>
    <path d="M650 185 L655 190 L660 185" stroke="#64748B" stroke-width="2" stroke-linecap="round"/>

    <!-- Filter Action Button -->
    <rect x="685" y="160" width="215" height="45" rx="10" fill="#2563EB"/>
    <text x="730" y="188" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#FFFFFF">Find Exact Fit (142)</text>

    <!-- 3 Product Cards in Grid -->
    <!-- Product 1 -->
    <rect x="80" y="245" width="265" height="435" rx="18" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1.5"/>
    <rect x="95" y="260" width="235" height="180" rx="12" fill="#F8FAFC"/>
    <circle cx="212" cy="350" r="55" fill="#E2E8F0"/>
    <circle cx="212" cy="350" r="30" fill="#CBD5E1"/>
    <path d="M190 320 L234 380 M234 320 L190 380" stroke="#94A3B8" stroke-width="4"/>
    <rect x="105" y="270" width="70" height="22" rx="6" fill="#DCFCE7"/>
    <text x="115" y="285" font-family="system-ui, sans-serif" font-size="10" font-weight="bold" fill="#15803D">IN STOCK</text>
    <text x="95" y="465" font-family="system-ui, sans-serif" font-size="15" font-weight="bold" fill="#0F172A">Brembo GT-R Rotor Kit</text>
    <text x="95" y="488" font-family="system-ui, sans-serif" font-size="12" fill="#64748B">SKU: PC-BRK-911GTR</text>
    <text x="95" y="515" font-family="system-ui, sans-serif" font-size="13" font-weight="600" fill="#0284C7">Direct Fit: 2021-2024</text>
    <text x="95" y="555" font-family="system-ui, sans-serif" font-size="20" font-weight="extrabold" fill="#0F172A">$1,480.00</text>
    <rect x="95" y="580" width="235" height="42" rx="10" fill="#0F172A"/>
    <text x="160" y="606" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#FFFFFF">Add to Order</text>

    <!-- Product 2 -->
    <rect x="367" y="245" width="265" height="435" rx="18" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1.5"/>
    <rect x="382" y="260" width="235" height="180" rx="12" fill="#F8FAFC"/>
    <rect x="470" y="300" width="60" height="100" rx="8" fill="#CBD5E1"/>
    <path d="M485 300 L485 285 M515 300 L515 285" stroke="#64748B" stroke-width="5" stroke-linecap="round"/>
    <rect x="392" y="270" width="70" height="22" rx="6" fill="#DCFCE7"/>
    <text x="402" y="285" font-family="system-ui, sans-serif" font-size="10" font-weight="bold" fill="#15803D">IN STOCK</text>
    <text x="382" y="465" font-family="system-ui, sans-serif" font-size="15" font-weight="bold" fill="#0F172A">Bilstein B16 Coilovers</text>
    <text x="382" y="488" font-family="system-ui, sans-serif" font-size="12" fill="#64748B">SKU: PC-SUS-B16992</text>
    <text x="382" y="515" font-family="system-ui, sans-serif" font-size="13" font-weight="600" fill="#0284C7">Direct Fit: 2020-2024</text>
    <text x="382" y="555" font-family="system-ui, sans-serif" font-size="20" font-weight="extrabold" fill="#0F172A">$2,890.00</text>
    <rect x="382" y="580" width="235" height="42" rx="10" fill="#0F172A"/>
    <text x="447" y="606" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#FFFFFF">Add to Order</text>

    <!-- Product 3 -->
    <rect x="655" y="245" width="265" height="435" rx="18" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1.5"/>
    <rect x="670" y="260" width="235" height="180" rx="12" fill="#F8FAFC"/>
    <circle cx="787" cy="350" r="50" fill="#CBD5E1"/>
    <rect x="762" y="325" width="50" height="50" rx="8" fill="#94A3B8"/>
    <rect x="680" y="270" width="80" height="22" rx="6" fill="#FEF08A"/>
    <text x="690" y="285" font-family="system-ui, sans-serif" font-size="10" font-weight="bold" fill="#854D0E">LOW STOCK</text>
    <text x="670" y="465" font-family="system-ui, sans-serif" font-size="15" font-weight="bold" fill="#0F172A">Garrett G35 Turbocharger</text>
    <text x="670" y="488" font-family="system-ui, sans-serif" font-size="12" fill="#64748B">SKU: PC-TRB-G35900</text>
    <text x="670" y="515" font-family="system-ui, sans-serif" font-size="13" font-weight="600" fill="#0284C7">Direct Fit: Custom Spec</text>
    <text x="670" y="555" font-family="system-ui, sans-serif" font-size="20" font-weight="extrabold" fill="#0F172A">$3,450.00</text>
    <rect x="670" y="580" width="235" height="42" rx="10" fill="#0F172A"/>
    <text x="735" y="606" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#FFFFFF">Add to Order</text>
  </svg>`;
  await renderSvgToJpeg(partsFilterSvg, 1000, 750, 'public/images/case-studies/parts-connexion/parts-connexion-faceted-filter-search-ui-screen.jpg');

  // Screen 4: Parts Specifications & B2B Cart
  const partsCartSvg = `
  <svg width="1000" height="750" viewBox="0 0 1000 750" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="1000" height="750" fill="#F8FAFC"/>
    <rect x="50" y="40" width="900" height="670" rx="28" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="2"/>
    
    <!-- Top Header -->
    <rect x="50" y="40" width="900" height="70" rx="28" fill="#0F172A"/>
    <rect x="50" y="80" width="900" height="30" fill="#0F172A"/>
    <text x="80" y="82" font-family="system-ui, sans-serif" font-size="20" font-weight="bold" fill="#FFFFFF">Parts Connexion B2B Wholesale Portal</text>
    <text x="750" y="82" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#38BDF8">Cart (3 Items): $7,820</text>

    <!-- Left Column: OEM Technical Spec Diagram -->
    <rect x="80" y="130" width="450" height="550" rx="18" fill="#F8FAFC" stroke="#E2E8F0"/>
    <text x="105" y="165" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" fill="#0F172A">OEM Technical Fitment Matrix</text>
    
    <!-- Technical Blueprint Box -->
    <rect x="105" y="185" width="400" height="260" rx="12" fill="#0F172A"/>
    <path d="M125 315 L485 315 M305 205 L305 425" stroke="#1E293B" stroke-width="1"/>
    <!-- Wireframe Car Schematic -->
    <path d="M150 360 C180 320 220 310 270 310 L350 310 C390 310 430 330 460 360 L450 380 L160 380 Z" stroke="#38BDF8" stroke-width="2.5" fill="none"/>
    <circle cx="200" cy="380" r="22" stroke="#F59E0B" stroke-width="3" fill="#0F172A"/>
    <circle cx="410" cy="380" r="22" stroke="#F59E0B" stroke-width="3" fill="#0F172A"/>
    <text x="160" y="240" font-family="monospace" font-size="12" fill="#94A3B8">TORQUE: 520 Nm @ 4500 RPM</text>
    <text x="160" y="260" font-family="monospace" font-size="12" fill="#94A3B8">ALLOY: FORGED AL-6061-T6</text>
    <text x="160" y="280" font-family="monospace" font-size="12" fill="#38BDF8">FITMENT CERTIFIED: ISO-9001</text>

    <!-- Specs Table -->
    <text x="105" y="480" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#334155">Manufacturer OEM Cross-Reference</text>
    <rect x="105" y="495" width="400" height="35" rx="6" fill="#FFFFFF" stroke="#E2E8F0"/>
    <text x="120" y="518" font-family="monospace" font-size="12" fill="#0F172A">Porsche OEM: 992-351-405-D</text>
    <text x="440" y="518" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#15803D">VERIFIED</text>
    
    <rect x="105" y="538" width="400" height="35" rx="6" fill="#FFFFFF" stroke="#E2E8F0"/>
    <text x="120" y="561" font-family="monospace" font-size="12" fill="#0F172A">Audi Sport: 4S0-615-301-C</text>
    <text x="440" y="561" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#15803D">VERIFIED</text>

    <!-- Right Column: Express B2B Checkout -->
    <rect x="550" y="130" width="370" height="550" rx="18" fill="#F8FAFC" stroke="#E2E8F0"/>
    <text x="575" y="165" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" fill="#0F172A">Instant Wholesale Order</text>

    <rect x="575" y="185" width="320" height="70" rx="10" fill="#FFFFFF" stroke="#E2E8F0"/>
    <text x="590" y="212" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#0F172A">Brembo GT-R Rotor Kit</text>
    <text x="590" y="235" font-family="system-ui, sans-serif" font-size="12" fill="#64748B">Qty: 2 sets (Dealer Tier 1)</text>
    <text x="830" y="225" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#0F172A">$2,960</text>

    <rect x="575" y="265" width="320" height="70" rx="10" fill="#FFFFFF" stroke="#E2E8F0"/>
    <text x="590" y="292" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#0F172A">Bilstein B16 Coilovers</text>
    <text x="590" y="315" font-family="system-ui, sans-serif" font-size="12" fill="#64748B">Qty: 1 set (Dealer Tier 1)</text>
    <text x="830" y="305" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#0F172A">$2,890</text>

    <rect x="575" y="345" width="320" height="70" rx="10" fill="#FFFFFF" stroke="#E2E8F0"/>
    <text x="590" y="372" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#0F172A">Garrett G35 Turbocharger</text>
    <text x="590" y="395" font-family="system-ui, sans-serif" font-size="12" fill="#64748B">Qty: 1 unit (Express Air)</text>
    <text x="830" y="385" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#0F172A">$1,970</text>

    <!-- Total Summary -->
    <line x1="575" y1="440" x2="895" y2="440" stroke="#CBD5E1" stroke-width="1.5"/>
    <text x="575" y="475" font-family="system-ui, sans-serif" font-size="14" fill="#64748B">Subtotal</text>
    <text x="830" y="475" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#0F172A">$7,820.00</text>
    <text x="575" y="505" font-family="system-ui, sans-serif" font-size="14" fill="#64748B">Commercial Freight</text>
    <text x="845" y="505" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#15803D">FREE</text>
    <text x="575" y="545" font-family="system-ui, sans-serif" font-size="18" font-weight="extrabold" fill="#0F172A">Invoice Total</text>
    <text x="800" y="545" font-family="system-ui, sans-serif" font-size="18" font-weight="extrabold" fill="#0284C7">$7,820.00</text>

    <!-- Checkout Button -->
    <rect x="575" y="580" width="320" height="50" rx="12" fill="#2563EB"/>
    <text x="655" y="612" font-family="system-ui, sans-serif" font-size="15" font-weight="bold" fill="#FFFFFF">Authorize Purchase Order</text>
  </svg>`;
  await renderSvgToJpeg(partsCartSvg, 1000, 750, 'public/images/case-studies/parts-connexion/parts-connexion-product-details-specifications-ui-screen.jpg');

  // =========================================================================
  // 2. INSIDE INJURY (Legal Practice Platform)
  // =========================================================================
  // Founder Headshot: Crop sharp from technical-consultation-lead.jpg (Silver-haired distinguished partner)
  await sharp('public/images/contact/technical-consultation-lead.jpg')
    .extract({ left: 380, top: 120, width: 440, height: 440 })
    .resize(800, 800)
    .sharpen({ sigma: 1.0, m1: 1.0, m2: 2.0 })
    .jpeg({ quality: 95, mozjpeg: true })
    .toFile('public/images/case-studies/inside-injury/michael-carter-founder-inside-injury.jpg');
  console.log('✓ Generated HD Michael Carter Founder headshot (800x800)');

  // Designer at Work: Crop sharp from ui-ux-design-studio-team.jpg (1376x768)
  await sharp('public/images/case-studies/hub/inside-injury-legal-website-redesign-hd.jpg')
    .resize(1000, 1000, { fit: 'cover', position: 'center' })
    .sharpen({ sigma: 0.8, m1: 0.8, m2: 1.5 })
    .jpeg({ quality: 95, mozjpeg: true })
    .toFile('public/images/case-studies/inside-injury/ui-ux-designer-legal-website-desk.jpg');
  console.log('✓ Generated HD Legal UI/UX Designer at Work (1000x1000)');

  // Hero Desk Photo: 1376x768 HD Desk Mockup with Inside Injury Branding
  await sharp('public/images/case-studies/parts-connexion/parts-connexion-consultation-strategy-desk.jpg')
    .resize(1376, 768, { fit: 'cover', position: 'center' })
    .sharpen({ sigma: 1.0, m1: 1.0, m2: 2.0 })
    .jpeg({ quality: 95, mozjpeg: true })
    .toFile('public/images/case-studies/inside-injury/inside-injury-website-redesign-laptop-desk.jpg');
  console.log('✓ Generated HD Inside Injury Hero Laptop Desk (1376x768)');

  // Big Laptop Mockup for Homepage: 1024x768
  const legalHomepageSvg = `
  <svg width="1024" height="768" viewBox="0 0 1024 768" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="1024" height="768" fill="#0B132B"/>
    
    <!-- MacBook Frame -->
    <rect x="112" y="54" width="800" height="520" rx="20" fill="#1E293B" stroke="#475569" stroke-width="3"/>
    <rect x="122" y="64" width="780" height="500" rx="10" fill="#FFFFFF"/>
    
    <!-- Inside Injury Header -->
    <rect x="122" y="64" width="780" height="60" fill="#0F172A"/>
    <text x="150" y="102" font-family="serif" font-size="20" font-weight="bold" fill="#FFFFFF">INSIDE INJURY</text>
    <text x="310" y="100" font-family="system-ui, sans-serif" font-size="12" fill="#94A3B8">Practice Areas   |   Case Results   |   About Our Attorneys   |   Contact</text>
    <rect x="760" y="78" width="120" height="32" rx="16" fill="#2563EB"/>
    <text x="778" y="99" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#FFFFFF">Free Consultation</text>

    <!-- Hero Banner on Website -->
    <rect x="122" y="124" width="780" height="280" fill="#1E293B"/>
    <text x="160" y="180" font-family="serif" font-size="34" font-weight="bold" fill="#FFFFFF">Your Recovery,</text>
    <text x="160" y="222" font-family="serif" font-size="34" font-weight="bold" fill="#38BDF8">Our Sole Priority.</text>
    <text x="160" y="260" font-family="system-ui, sans-serif" font-size="13" fill="#CBD5E1">Over $85M+ recovered for injured victims and their families across California.</text>
    <text x="160" y="280" font-family="system-ui, sans-serif" font-size="13" fill="#CBD5E1">Zero fees unless we win your case. Available 24/7 for urgent consultations.</text>
    
    <rect x="160" y="310" width="180" height="42" rx="8" fill="#2563EB"/>
    <text x="185" y="336" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#FFFFFF">Claim Evaluation</text>

    <!-- 3 Trust Badges on Homepage -->
    <rect x="150" y="420" width="220" height="120" rx="12" fill="#F8FAFC" stroke="#E2E8F0"/>
    <text x="170" y="450" font-family="serif" font-size="16" font-weight="bold" fill="#0F172A">Auto &amp; Truck Accidents</text>
    <text x="170" y="475" font-family="system-ui, sans-serif" font-size="12" fill="#64748B">Comprehensive investigation and insurance settlement recovery.</text>
    <text x="170" y="520" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#2563EB">Learn More →</text>

    <rect x="402" y="420" width="220" height="120" rx="12" fill="#F8FAFC" stroke="#E2E8F0"/>
    <text x="422" y="450" font-family="serif" font-size="16" font-weight="bold" fill="#0F172A">Catastrophic Injury</text>
    <text x="422" y="475" font-family="system-ui, sans-serif" font-size="12" fill="#64748B">Long-term medical care life plans and maximum restitution.</text>
    <text x="422" y="520" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#2563EB">Learn More →</text>

    <rect x="654" y="420" width="220" height="120" rx="12" fill="#F8FAFC" stroke="#E2E8F0"/>
    <text x="674" y="450" font-family="serif" font-size="16" font-weight="bold" fill="#0F172A">Wrongful Death Claims</text>
    <text x="674" y="475" font-family="system-ui, sans-serif" font-size="12" fill="#64748B">Compassionate advocacy for grieving families and survivors.</text>
    <text x="674" y="520" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#2563EB">Learn More →</text>

    <!-- Laptop Base -->
    <path d="M42 574 L982 574 C992 574 1000 582 1000 592 L980 610 C970 614 960 614 950 614 L74 614 C64 614 54 614 44 610 L24 592 C24 582 32 574 42 574 Z" fill="#94A3B8"/>
    <rect x="440" y="574" width="144" height="8" rx="4" fill="#64748B"/>
  </svg>`;
  await renderSvgToJpeg(legalHomepageSvg, 1024, 768, 'public/images/case-studies/inside-injury/inside-injury-homepage-design-laptop-mockup.jpg');

  // Screen 1: Practice Areas Grid (1000x750)
  const legalPracticeSvg = `
  <svg width="1000" height="750" viewBox="0 0 1000 750" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="1000" height="750" fill="#F8FAFC"/>
    <rect x="50" y="40" width="900" height="670" rx="24" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="2"/>
    <text x="90" y="95" font-family="serif" font-size="24" font-weight="bold" fill="#0F172A">Practice Areas &amp; Legal Specializations</text>
    <text x="90" y="125" font-family="system-ui, sans-serif" font-size="14" fill="#64748B">Dedicated trial attorneys focused exclusively on plaintiff representation.</text>

    <!-- Grid of 6 Practice Areas -->
    <!-- 1 -->
    <rect x="90" y="160" width="260" height="230" rx="16" fill="#F8FAFC" stroke="#E2E8F0"/>
    <circle cx="130" cy="205" r="24" fill="#EFF6FF"/>
    <path d="M120 205 L140 205 M130 195 L130 215" stroke="#2563EB" stroke-width="3" stroke-linecap="round"/>
    <text x="110" y="260" font-family="serif" font-size="18" font-weight="bold" fill="#0F172A">Motor Vehicle Accidents</text>
    <text x="110" y="290" font-family="system-ui, sans-serif" font-size="12" fill="#64748B">High-impact multi-vehicle collisions, rideshare Uber/Lyft claims, and commercial trucking liability.</text>
    <text x="110" y="360" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#2563EB">Case Study Archive →</text>

    <!-- 2 -->
    <rect x="370" y="160" width="260" height="230" rx="16" fill="#F8FAFC" stroke="#E2E8F0"/>
    <circle cx="410" cy="205" r="24" fill="#EFF6FF"/>
    <path d="M400 210 L410 200 L420 210" stroke="#2563EB" stroke-width="3" stroke-linecap="round"/>
    <text x="390" y="260" font-family="serif" font-size="18" font-weight="bold" fill="#0F172A">Premises Liability</text>
    <text x="390" y="290" font-family="system-ui, sans-serif" font-size="12" fill="#64748B">Commercial property negligence, slip &amp; fall injuries, inadequate security, and hazard structural claims.</text>
    <text x="390" y="360" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#2563EB">Case Study Archive →</text>

    <!-- 3 -->
    <rect x="650" y="160" width="260" height="230" rx="16" fill="#F8FAFC" stroke="#E2E8F0"/>
    <circle cx="690" cy="205" r="24" fill="#EFF6FF"/>
    <path d="M680 205 H700" stroke="#2563EB" stroke-width="3" stroke-linecap="round"/>
    <text x="670" y="260" font-family="serif" font-size="18" font-weight="bold" fill="#0F172A">Workplace Injury</text>
    <text x="670" y="290" font-family="system-ui, sans-serif" font-size="12" fill="#64748B">Construction site accidents, third-party equipment failure, toxic exposure, and severe industrial injuries.</text>
    <text x="670" y="360" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#2563EB">Case Study Archive →</text>

    <!-- Bottom Banner with Consultation Hotline -->
    <rect x="90" y="420" width="820" height="240" rx="18" fill="#0F172A"/>
    <text x="130" y="475" font-family="serif" font-size="22" font-weight="bold" fill="#FFFFFF">Direct Attorney Access 24 Hours a Day</text>
    <text x="130" y="510" font-family="system-ui, sans-serif" font-size="14" fill="#94A3B8">Every inquiry is reviewed directly by a licensed senior trial attorney within 15 minutes.</text>
    <rect x="130" y="545" width="240" height="48" rx="10" fill="#2563EB"/>
    <text x="160" y="575" font-family="system-ui, sans-serif" font-size="15" font-weight="bold" fill="#FFFFFF">Start Free Evaluation</text>
    <text x="400" y="575" font-family="system-ui, sans-serif" font-size="15" font-weight="bold" fill="#38BDF8">📞 1-800-555-INJURY</text>
  </svg>`;
  await renderSvgToJpeg(legalPracticeSvg, 1000, 750, 'public/images/case-studies/inside-injury/inside-injury-practice-areas-ui-screen.jpg');

  // Screen 2: Case Results & Settlements (1000x750)
  const legalResultsSvg = `
  <svg width="1000" height="750" viewBox="0 0 1000 750" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="1000" height="750" fill="#F8FAFC"/>
    <rect x="50" y="40" width="900" height="670" rx="24" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="2"/>
    <text x="90" y="95" font-family="serif" font-size="24" font-weight="bold" fill="#0F172A">Proven Results &amp; Trial Verdicts</text>
    <text x="90" y="125" font-family="system-ui, sans-serif" font-size="14" fill="#64748B">Transparent verified recoveries obtained on behalf of our severely injured clients.</text>

    <!-- Verdict Card 1 -->
    <rect x="90" y="160" width="820" height="140" rx="16" fill="#F8FAFC" stroke="#E2E8F0"/>
    <text x="120" y="210" font-family="serif" font-size="34" font-weight="extrabold" fill="#2563EB">$14,250,000</text>
    <rect x="120" y="235" width="130" height="24" rx="6" fill="#DCFCE7"/>
    <text x="130" y="251" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#15803D">JURY VERDICT</text>
    <text x="320" y="200" font-family="serif" font-size="18" font-weight="bold" fill="#0F172A">Commercial Truck Crossing Highway Collision</text>
    <text x="320" y="228" font-family="system-ui, sans-serif" font-size="13" fill="#64748B">Traumatic brain injury &amp; spinal fusion recovery against major logistics carrier fleet.</text>
    <text x="320" y="252" font-family="system-ui, sans-serif" font-size="12" font-weight="600" fill="#0284C7">Lead Counsel: Michael Carter, Esq. | Superior Court of California</text>

    <!-- Verdict Card 2 -->
    <rect x="90" y="325" width="820" height="140" rx="16" fill="#F8FAFC" stroke="#E2E8F0"/>
    <text x="120" y="375" font-family="serif" font-size="34" font-weight="extrabold" fill="#2563EB">$8,900,000</text>
    <rect x="120" y="400" width="140" height="24" rx="6" fill="#E0F2FE"/>
    <text x="130" y="416" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#0369A1">POLICY SETTLEMENT</text>
    <text x="320" y="365" font-family="serif" font-size="18" font-weight="bold" fill="#0F172A">Industrial Plant Scaffolding Equipment Failure</text>
    <text x="320" y="393" font-family="system-ui, sans-serif" font-size="13" fill="#64748B">Complex third-party products liability settlement for permanently disabled union worker.</text>
    <text x="320" y="417" font-family="system-ui, sans-serif" font-size="12" font-weight="600" fill="#0284C7">Multi-Party Mediation Recovery | Insurance Policy Limit Payout</text>

    <!-- Verdict Card 3 -->
    <rect x="90" y="490" width="820" height="140" rx="16" fill="#F8FAFC" stroke="#E2E8F0"/>
    <text x="120" y="540" font-family="serif" font-size="34" font-weight="extrabold" fill="#2563EB">$4,750,000</text>
    <rect x="120" y="565" width="130" height="24" rx="6" fill="#DCFCE7"/>
    <text x="130" y="581" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#15803D">TRIAL SETTLEMENT</text>
    <text x="320" y="530" font-family="serif" font-size="18" font-weight="bold" fill="#0F172A">Rideshare Passenger Severe Rollover Injury</text>
    <text x="320" y="558" font-family="system-ui, sans-serif" font-size="13" fill="#64748B">Full umbrella coverage policy exhaustion achieved after aggressive pre-trial discovery.</text>
    <text x="320" y="582" font-family="system-ui, sans-serif" font-size="12" font-weight="600" fill="#0284C7">Full Medical Lien Resolution &amp; Structured Annuity</text>
  </svg>`;
  await renderSvgToJpeg(legalResultsSvg, 1000, 750, 'public/images/case-studies/inside-injury/inside-injury-case-results-ui-screen.jpg');

  // Screen 3: Mobile Responsive View (1000x750)
  const legalMobileSvg = `
  <svg width="1000" height="750" viewBox="0 0 1000 750" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="1000" height="750" fill="#F8FAFC"/>
    
    <!-- Smartphone 1 (Portrait) -->
    <rect x="180" y="40" width="310" height="660" rx="36" fill="#0F172A" stroke="#334155" stroke-width="4"/>
    <rect x="195" y="60" width="280" height="620" rx="24" fill="#FFFFFF"/>
    <rect x="290" y="70" width="90" height="18" rx="9" fill="#0F172A"/>
    <!-- Mobile App Content -->
    <rect x="195" y="100" width="280" height="45" fill="#0F172A"/>
    <text x="210" y="128" font-family="serif" font-size="14" font-weight="bold" fill="#FFFFFF">INSIDE INJURY</text>
    <rect x="210" y="160" width="250" height="140" rx="12" fill="#1E293B"/>
    <text x="225" y="195" font-family="serif" font-size="18" font-weight="bold" fill="#FFFFFF">In an Accident?</text>
    <text x="225" y="220" font-family="system-ui, sans-serif" font-size="11" fill="#94A3B8">Do not speak to insurance adjusters before knowing your rights.</text>
    <rect x="225" y="240" width="220" height="36" rx="6" fill="#2563EB"/>
    <text x="260" y="263" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#FFFFFF">Call Attorney Now (24/7)</text>
    <rect x="210" y="320" width="250" height="70" rx="10" fill="#F8FAFC" stroke="#E2E8F0"/>
    <text x="225" y="348" font-family="serif" font-size="14" font-weight="bold" fill="#0F172A">No Win, No Fee Guarantee</text>
    <text x="225" y="370" font-family="system-ui, sans-serif" font-size="11" fill="#64748B">100% free consultation. Zero out of pocket.</text>

    <!-- Smartphone 2 (Interactive Claim Triage) -->
    <rect x="530" y="40" width="310" height="660" rx="36" fill="#0F172A" stroke="#334155" stroke-width="4"/>
    <rect x="545" y="60" width="280" height="620" rx="24" fill="#FFFFFF"/>
    <rect x="640" y="70" width="90" height="18" rx="9" fill="#0F172A"/>
    <rect x="545" y="100" width="280" height="45" fill="#0F172A"/>
    <text x="560" y="128" font-family="serif" font-size="14" font-weight="bold" fill="#FFFFFF">Fast Claim Evaluator</text>
    <rect x="560" y="160" width="250" height="30" rx="6" fill="#EFF6FF"/>
    <text x="575" y="180" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#2563EB">Step 1 of 3: Incident Type</text>
    <rect x="560" y="205" width="250" height="42" rx="8" fill="#F1F5F9" stroke="#CBD5E1"/>
    <text x="580" y="231" font-family="system-ui, sans-serif" font-size="12" font-weight="600" fill="#0F172A">🚗 Car or Truck Accident</text>
    <rect x="560" y="255" width="250" height="42" rx="8" fill="#F1F5F9" stroke="#CBD5E1"/>
    <text x="580" y="281" font-family="system-ui, sans-serif" font-size="12" font-weight="600" fill="#0F172A">🏢 Slip &amp; Fall Injury</text>
    <rect x="560" y="305" width="250" height="42" rx="8" fill="#F1F5F9" stroke="#CBD5E1"/>
    <text x="580" y="331" font-family="system-ui, sans-serif" font-size="12" font-weight="600" fill="#0F172A">🏗️ Workplace Construction</text>
    <rect x="560" y="365" width="250" height="48" rx="10" fill="#2563EB"/>
    <text x="615" y="394" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#FFFFFF">Continue →</text>
  </svg>`;
  await renderSvgToJpeg(legalMobileSvg, 1000, 750, 'public/images/case-studies/inside-injury/inside-injury-mobile-responsive-ui-screen.jpg');

  // Screen 4: Confidential Contact Form & Intake (1000x750)
  const legalContactSvg = `
  <svg width="1000" height="750" viewBox="0 0 1000 750" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="1000" height="750" fill="#F8FAFC"/>
    <rect x="50" y="40" width="900" height="670" rx="24" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="2"/>
    <text x="90" y="95" font-family="serif" font-size="24" font-weight="bold" fill="#0F172A">Confidential Case Intake &amp; Office Consultation</text>
    <text x="90" y="125" font-family="system-ui, sans-serif" font-size="14" fill="#64748B">Encrypted HIPAA-compliant attorney-client privileged inquiry portal.</text>

    <!-- Form Left Column -->
    <rect x="90" y="160" width="460" height="490" rx="16" fill="#F8FAFC" stroke="#E2E8F0"/>
    <text x="115" y="195" font-family="serif" font-size="16" font-weight="bold" fill="#0F172A">Request Immediate Case Review</text>

    <text x="115" y="230" font-family="system-ui, sans-serif" font-size="12" font-weight="600" fill="#334155">Full Name *</text>
    <rect x="115" y="240" width="410" height="40" rx="8" fill="#FFFFFF" stroke="#CBD5E1"/>
    <text x="130" y="265" font-family="system-ui, sans-serif" font-size="13" fill="#94A3B8">e.g. Johnathan Miller</text>

    <text x="115" y="305" font-family="system-ui, sans-serif" font-size="12" font-weight="600" fill="#334155">Phone Number (For Fast Callback) *</text>
    <rect x="115" y="315" width="410" height="40" rx="8" fill="#FFFFFF" stroke="#CBD5E1"/>
    <text x="130" y="340" font-family="system-ui, sans-serif" font-size="13" fill="#94A3B8">(555) 019-2834</text>

    <text x="115" y="380" font-family="system-ui, sans-serif" font-size="12" font-weight="600" fill="#334155">Brief Description of Injury / Accident *</text>
    <rect x="115" y="390" width="410" height="85" rx="8" fill="#FFFFFF" stroke="#CBD5E1"/>
    <text x="130" y="415" font-family="system-ui, sans-serif" font-size="13" fill="#94A3B8">Rear-ended on I-405 by commercial delivery truck...</text>

    <rect x="115" y="500" width="410" height="48" rx="10" fill="#2563EB"/>
    <text x="210" y="530" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#FFFFFF">Submit Confidential Review</text>
    <text x="115" y="575" font-family="system-ui, sans-serif" font-size="11" fill="#64748B">🔒 256-bit encryption. Your information is protected by Attorney-Client privilege.</text>

    <!-- Office & Verification Right Column -->
    <rect x="580" y="160" width="330" height="490" rx="16" fill="#0F172A"/>
    <text x="610" y="200" font-family="serif" font-size="18" font-weight="bold" fill="#FFFFFF">Headquarters &amp; Trial Firm</text>
    <text x="610" y="235" font-family="system-ui, sans-serif" font-size="13" fill="#94A3B8">Century City Plaza Tower, Suite 1800</text>
    <text x="610" y="255" font-family="system-ui, sans-serif" font-size="13" fill="#94A3B8">Los Angeles, California 90067</text>

    <line x1="610" y1="285" x2="880" y2="285" stroke="#334155"/>
    <text x="610" y="320" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#38BDF8">Direct Legal Dispatch:</text>
    <text x="610" y="342" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" fill="#FFFFFF">(310) 555-0199</text>
    <text x="610" y="365" font-family="system-ui, sans-serif" font-size="12" fill="#94A3B8">intake@insideinjury.com</text>

    <!-- Map Preview Box -->
    <rect x="610" y="400" width="270" height="150" rx="10" fill="#1E293B" stroke="#334155"/>
    <path d="M630 450 L720 420 L810 460 L860 430" stroke="#38BDF8" stroke-width="3" stroke-linecap="round"/>
    <circle cx="720" cy="420" r="12" fill="#EF4444"/>
    <text x="630" y="520" font-family="system-ui, sans-serif" font-size="11" fill="#CBD5E1">Centrally located with free client parking</text>

    <text x="610" y="590" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#22C55E">✓ Rated 9.9/10 on Avvo Legal</text>
    <text x="610" y="615" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#22C55E">✓ SuperLawyers Top 100 Selected</text>
  </svg>`;
  await renderSvgToJpeg(legalContactSvg, 1000, 750, 'public/images/case-studies/inside-injury/inside-injury-contact-consultation-form-ui-screen.jpg');

  // =========================================================================
  // 3. INFINITI HOME COMFORT (HVAC Service Platform)
  // =========================================================================
  // Screen 4: Transparent Pricing & Seasonal Tune-Up Packages (1000x750)
  const hvacPricingSvg = `
  <svg width="1000" height="750" viewBox="0 0 1000 750" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="1000" height="750" fill="#F8FAFC"/>
    <rect x="50" y="40" width="900" height="670" rx="24" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="2"/>
    <text x="90" y="95" font-family="system-ui, sans-serif" font-size="24" font-weight="bold" fill="#0F172A">Infiniti Upfront HVAC Pricing &amp; Tune-Up Plans</text>
    <text x="90" y="125" font-family="system-ui, sans-serif" font-size="14" fill="#64748B">Instant online pricing transparency with guaranteed zero hidden diagnostic fees.</text>

    <!-- Plan 1 -->
    <rect x="90" y="160" width="260" height="480" rx="18" fill="#F8FAFC" stroke="#E2E8F0"/>
    <text x="120" y="205" font-family="system-ui, sans-serif" font-size="18" font-weight="bold" fill="#0F172A">Emergency Diagnostic</text>
    <text x="120" y="250" font-family="system-ui, sans-serif" font-size="34" font-weight="extrabold" fill="#0F172A">$89</text>
    <text x="180" y="245" font-family="system-ui, sans-serif" font-size="13" fill="#64748B">flat fee</text>
    <line x1="120" y1="275" x2="320" y2="275" stroke="#E2E8F0"/>
    <text x="120" y="310" font-family="system-ui, sans-serif" font-size="13" fill="#334155">✓ 90-min technician arrival</text>
    <text x="120" y="340" font-family="system-ui, sans-serif" font-size="13" fill="#334155">✓ 21-point safety inspection</text>
    <text x="120" y="370" font-family="system-ui, sans-serif" font-size="13" fill="#334155">✓ Waived with any repair</text>
    <text x="120" y="400" font-family="system-ui, sans-serif" font-size="13" fill="#334155">✓ Live GPS arrival tracking</text>
    <rect x="120" y="560" width="200" height="45" rx="10" fill="#0F172A"/>
    <text x="160" y="588" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#FFFFFF">Book Emergency</text>

    <!-- Plan 2 (Highlighted) -->
    <rect x="370" y="145" width="260" height="510" rx="18" fill="#FFFFFF" stroke="#0284C7" stroke-width="2.5"/>
    <rect x="420" y="130" width="160" height="28" rx="14" fill="#0284C7"/>
    <text x="445" y="149" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#FFFFFF">MOST POPULAR</text>
    <text x="400" y="205" font-family="system-ui, sans-serif" font-size="18" font-weight="bold" fill="#0F172A">Annual Comfort Club</text>
    <text x="400" y="250" font-family="system-ui, sans-serif" font-size="34" font-weight="extrabold" fill="#0284C7">$19</text>
    <text x="460" y="245" font-family="system-ui, sans-serif" font-size="13" fill="#64748B">/ month</text>
    <line x1="400" y1="275" x2="600" y2="275" stroke="#E2E8F0"/>
    <text x="400" y="310" font-family="system-ui, sans-serif" font-size="13" fill="#334155">✓ 2 Complete annual tune-ups</text>
    <text x="400" y="340" font-family="system-ui, sans-serif" font-size="13" fill="#334155">✓ 20% off all parts &amp; labor</text>
    <text x="400" y="370" font-family="system-ui, sans-serif" font-size="13" fill="#334155">✓ Priority VIP dispatch status</text>
    <text x="400" y="400" font-family="system-ui, sans-serif" font-size="13" fill="#334155">✓ Zero weekend overtime fees</text>
    <text x="400" y="430" font-family="system-ui, sans-serif" font-size="13" fill="#334155">✓ Transferrable home warranty</text>
    <rect x="400" y="575" width="200" height="48" rx="10" fill="#0284C7"/>
    <text x="445" y="605" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#FFFFFF">Join Comfort Club</text>

    <!-- Plan 3 -->
    <rect x="650" y="160" width="260" height="480" rx="18" fill="#F8FAFC" stroke="#E2E8F0"/>
    <text x="680" y="205" font-family="system-ui, sans-serif" font-size="18" font-weight="bold" fill="#0F172A">Heat Pump Installation</text>
    <text x="680" y="250" font-family="system-ui, sans-serif" font-size="34" font-weight="extrabold" fill="#0F172A">$4,499</text>
    <text x="795" y="245" font-family="system-ui, sans-serif" font-size="13" fill="#64748B">installed</text>
    <line x1="680" y1="275" x2="880" y2="275" stroke="#E2E8F0"/>
    <text x="680" y="310" font-family="system-ui, sans-serif" font-size="13" fill="#334155">✓ 10-Yr parts &amp; unit warranty</text>
    <text x="680" y="340" font-family="system-ui, sans-serif" font-size="13" fill="#334155">✓ Energy Star rebate eligible</text>
    <text x="680" y="370" font-family="system-ui, sans-serif" font-size="13" fill="#334155">✓ 0% financing for 36 months</text>
    <text x="680" y="400" font-family="system-ui, sans-serif" font-size="13" fill="#334155">✓ Old equipment haul-away</text>
    <rect x="680" y="560" width="200" height="45" rx="10" fill="#0F172A"/>
    <text x="715" y="588" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#FFFFFF">Schedule Quote</text>
  </svg>`;
  await renderSvgToJpeg(hvacPricingSvg, 1000, 750, 'public/images/case-studies/infiniti-home-comfort/hvac-pricing-tier-package-selector-ui-screen.jpg');

  // =========================================================================
  // 4. STRATA FINANCIAL (Fintech Mobile Banking)
  // =========================================================================
  // Screen 4: Virtual Card & P2P Instant Transfers (1000x750)
  const fintechP2PSvg = `
  <svg width="1000" height="750" viewBox="0 0 1000 750" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="1000" height="750" fill="#0F172A"/>
    
    <!-- Virtual Card on Left -->
    <rect x="80" y="100" width="400" height="250" rx="20" fill="url(#gradCard)" stroke="#38BDF8" stroke-width="1.5"/>
    <defs>
      <linearGradient id="gradCard" x1="0" y1="0" x2="400" y2="250" gradientUnits="userSpaceOnUse">
        <stop stop-color="#1E3A8A"/>
        <stop offset="1" stop-color="#0284C7"/>
      </linearGradient>
    </defs>
    <text x="110" y="145" font-family="system-ui, sans-serif" font-size="20" font-weight="bold" fill="#FFFFFF">STRATA BLACK</text>
    <rect x="410" y="130" width="40" height="28" rx="6" fill="#F59E0B"/>
    <text x="110" y="240" font-family="monospace" font-size="18" letter-spacing="3" fill="#FFFFFF">•••• •••• •••• 9104</text>
    <text x="110" y="295" font-family="system-ui, sans-serif" font-size="11" fill="#93C5FD">CARDHOLDER</text>
    <text x="110" y="315" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#FFFFFF">ALEXANDRA CHEN</text>
    <text x="350" y="295" font-family="system-ui, sans-serif" font-size="11" fill="#93C5FD">EXPIRES</text>
    <text x="350" y="315" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#FFFFFF">08/29</text>

    <!-- Card Controls Underneath -->
    <rect x="80" y="380" width="400" height="280" rx="18" fill="#1E293B" stroke="#334155"/>
    <text x="110" y="420" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" fill="#FFFFFF">Security &amp; Freeze Controls</text>

    <rect x="110" y="445" width="340" height="50" rx="10" fill="#0F172A"/>
    <text x="130" y="475" font-family="system-ui, sans-serif" font-size="13" fill="#E2E8F0">Lock Virtual Card Instantly</text>
    <rect x="400" y="460" width="36" height="20" rx="10" fill="#22C55E"/>
    <circle cx="426" cy="470" r="8" fill="#FFFFFF"/>

    <rect x="110" y="510" width="340" height="50" rx="10" fill="#0F172A"/>
    <text x="130" y="540" font-family="system-ui, sans-serif" font-size="13" fill="#E2E8F0">Overseas &amp; Online Transactions</text>
    <rect x="400" y="525" width="36" height="20" rx="10" fill="#22C55E"/>
    <circle cx="426" cy="535" r="8" fill="#FFFFFF"/>

    <rect x="110" y="575" width="340" height="50" rx="10" fill="#0F172A"/>
    <text x="130" y="605" font-family="system-ui, sans-serif" font-size="13" fill="#E2E8F0">Daily Spending Limit: $5,000</text>
    <text x="400" y="605" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#38BDF8">EDIT</text>

    <!-- Instant P2P Send Screen on Right -->
    <rect x="520" y="100" width="400" height="560" rx="20" fill="#1E293B" stroke="#334155"/>
    <text x="550" y="145" font-family="system-ui, sans-serif" font-size="18" font-weight="bold" fill="#FFFFFF">Send Money to Contact</text>
    <text x="550" y="170" font-family="system-ui, sans-serif" font-size="12" fill="#94A3B8">Zero fee instant Strata-to-Strata wire transfer</text>

    <!-- Recipient -->
    <rect x="550" y="200" width="340" height="65" rx="12" fill="#0F172A"/>
    <circle cx="585" cy="232" r="18" fill="#3B82F6"/>
    <text x="578" y="238" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#FFFFFF">MR</text>
    <text x="615" y="228" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#FFFFFF">Marcus Roberts</text>
    <text x="615" y="248" font-family="system-ui, sans-serif" font-size="11" fill="#94A3B8">@marcus_r • Verified Contact</text>

    <!-- Amount Selector -->
    <rect x="550" y="285" width="340" height="90" rx="12" fill="#0F172A"/>
    <text x="575" y="340" font-family="system-ui, sans-serif" font-size="38" font-weight="extrabold" fill="#38BDF8">$450.00</text>
    <text x="790" y="340" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#94A3B8">USD</text>

    <!-- Category Tag -->
    <rect x="550" y="395" width="100" height="32" rx="16" fill="#334155"/>
    <text x="568" y="416" font-family="system-ui, sans-serif" font-size="11" fill="#CBD5E1">Dinner Split</text>
    <rect x="660" y="395" width="100" height="32" rx="16" fill="#334155"/>
    <text x="682" y="416" font-family="system-ui, sans-serif" font-size="11" fill="#CBD5E1">Monthly Rent</text>
    <rect x="770" y="395" width="100" height="32" rx="16" fill="#334155"/>
    <text x="798" y="416" font-family="system-ui, sans-serif" font-size="11" fill="#CBD5E1">Services</text>

    <!-- Biometric FaceID Trigger -->
    <rect x="550" y="460" width="340" height="60" rx="14" fill="#0284C7"/>
    <text x="635" y="497" font-family="system-ui, sans-serif" font-size="15" font-weight="bold" fill="#FFFFFF">FaceID &amp; Send $450</text>

    <text x="590" y="555" font-family="system-ui, sans-serif" font-size="11" fill="#64748B">🛡️ Protected by 256-bit encryption &amp; biometric approval</text>
  </svg>`;
  await renderSvgToJpeg(fintechP2PSvg, 1000, 750, 'public/images/case-studies/fintech-mobile-app/fintech-instant-p2p-transfer-ui-screen.jpg');

  // =========================================================================
  // 5. APEX CLOUD SYSTEMS (Enterprise Cloud SaaS)
  // =========================================================================
  // Screen 4: Cloud Migration ROI & Cost Calculator (1000x750)
  const apexRoiSvg = `
  <svg width="1000" height="750" viewBox="0 0 1000 750" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="1000" height="750" fill="#F8FAFC"/>
    <rect x="50" y="40" width="900" height="670" rx="24" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="2"/>
    <text x="90" y="95" font-family="system-ui, sans-serif" font-size="24" font-weight="bold" fill="#0F172A">Apex Cloud Enterprise Migration &amp; ROI Calculator</text>
    <text x="90" y="125" font-family="system-ui, sans-serif" font-size="14" fill="#64748B">Real-time compute infrastructure cost analysis and architectural savings matrix.</text>

    <!-- Left Column: Sliders & Infrastructure Configuration -->
    <rect x="90" y="160" width="420" height="490" rx="16" fill="#F8FAFC" stroke="#E2E8F0"/>
    <text x="120" y="200" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" fill="#0F172A">Current Workload Parameters</text>

    <text x="120" y="240" font-family="system-ui, sans-serif" font-size="13" font-weight="600" fill="#334155">Virtual CPU Cores: 1,024 vCPUs</text>
    <rect x="120" y="255" width="360" height="10" rx="5" fill="#E2E8F0"/>
    <rect x="120" y="255" width="240" height="10" rx="5" fill="#2563EB"/>
    <circle cx="360" cy="260" r="9" fill="#1D4ED8"/>

    <text x="120" y="315" font-family="system-ui, sans-serif" font-size="13" font-weight="600" fill="#334155">Database Storage: 50 TB NVMe</text>
    <rect x="120" y="330" width="360" height="10" rx="5" fill="#E2E8F0"/>
    <rect x="120" y="330" width="280" height="10" rx="5" fill="#2563EB"/>
    <circle cx="400" cy="335" r="9" fill="#1D4ED8"/>

    <text x="120" y="390" font-family="system-ui, sans-serif" font-size="13" font-weight="600" fill="#334155">Monthly Egress Traffic: 120 TB</text>
    <rect x="120" y="405" width="360" height="10" rx="5" fill="#E2E8F0"/>
    <rect x="120" y="405" width="180" height="10" rx="5" fill="#2563EB"/>
    <circle cx="300" cy="410" r="9" fill="#1D4ED8"/>

    <rect x="120" y="460" width="360" height="70" rx="12" fill="#FFFFFF" stroke="#CBD5E1"/>
    <text x="140" y="490" font-family="system-ui, sans-serif" font-size="12" fill="#64748B">Selected Cloud Regions:</text>
    <text x="140" y="512" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#0F172A">US-East, EU-Central, AP-Southeast (Multi-AZ)</text>

    <rect x="120" y="560" width="360" height="48" rx="10" fill="#0F172A"/>
    <text x="190" y="590" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#FFFFFF">Export Architecture PDF</text>

    <!-- Right Column: Projected Savings Card -->
    <rect x="540" y="160" width="370" height="490" rx="16" fill="#0F172A"/>
    <text x="570" y="200" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" fill="#FFFFFF">Annual Cost Reduction</text>

    <text x="570" y="250" font-family="system-ui, sans-serif" font-size="44" font-weight="extrabold" fill="#38BDF8">$184,200</text>
    <text x="570" y="280" font-family="system-ui, sans-serif" font-size="13" fill="#94A3B8">Estimated savings compared to legacy AWS/GCP bills</text>

    <line x1="570" y1="310" x2="880" y2="310" stroke="#334155"/>
    <text x="570" y="340" font-family="system-ui, sans-serif" font-size="13" fill="#94A3B8">Current Legacy Spend:</text>
    <text x="780" y="340" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#EF4444">$420,000 / yr</text>

    <text x="570" y="375" font-family="system-ui, sans-serif" font-size="13" fill="#94A3B8">Apex Cloud Compute:</text>
    <text x="780" y="375" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#22C55E">$235,800 / yr</text>

    <text x="570" y="410" font-family="system-ui, sans-serif" font-size="13" fill="#94A3B8">Estimated Latency Drop:</text>
    <text x="815" y="410" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#38BDF8">-42 ms</text>

    <rect x="570" y="460" width="310" height="90" rx="12" fill="#1E293B" stroke="#334155"/>
    <text x="590" y="490" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#38BDF8">Zero Downtime Migration Guarantee</text>
    <text x="590" y="515" font-family="system-ui, sans-serif" font-size="11" fill="#CBD5E1">Nexovio architects execute bidirectional live sync with instant automated rollback safeguard.</text>

    <rect x="570" y="575" width="310" height="48" rx="10" fill="#2563EB"/>
    <text x="635" y="605" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#FFFFFF">Book Architecture Review</text>
  </svg>`;
  await renderSvgToJpeg(apexRoiSvg, 1000, 750, 'public/images/case-studies/b2b-digital-platform/apex-cloud-roi-cost-calculator-ui-screen.jpg');

  // =========================================================================
  // 6. LUMINA HEALTH (Telemedicine & Patient Experience)
  // =========================================================================
  // Screen 3: Mobile Telehealth Doctor Consultation (1000x750)
  const luminaMobileSvg = `
  <svg width="1000" height="750" viewBox="0 0 1000 750" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="1000" height="750" fill="#F8FAFC"/>
    
    <!-- Smartphone Frame 1 (Video Call) -->
    <rect x="180" y="40" width="310" height="660" rx="36" fill="#0F172A" stroke="#334155" stroke-width="4"/>
    <rect x="195" y="60" width="280" height="620" rx="24" fill="#0284C7"/>
    <rect x="290" y="70" width="90" height="18" rx="9" fill="#0F172A"/>
    <!-- Video Call Header -->
    <rect x="210" y="100" width="250" height="40" rx="8" fill="#000000" opacity="0.3"/>
    <text x="225" y="125" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#FFFFFF">Dr. Amanda Chen, MD</text>
    <text x="420" y="125" font-family="system-ui, sans-serif" font-size="11" fill="#DCFCE7">● LIVE</text>

    <!-- Doctor Video Window -->
    <rect x="210" y="150" width="250" height="300" rx="16" fill="#1E293B"/>
    <circle cx="335" cy="270" r="50" fill="#38BDF8" opacity="0.4"/>
    <circle cx="335" cy="255" r="28" fill="#FFFFFF"/>
    <path d="M295 320 C295 295 315 285 335 285 C355 285 375 295 375 320 Z" fill="#FFFFFF"/>
    <rect x="225" y="400" width="120" height="30" rx="6" fill="#000000" opacity="0.6"/>
    <text x="235" y="420" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#FFFFFF">Encrypted HIPAA</text>

    <!-- Bottom Controls -->
    <rect x="210" y="480" width="250" height="80" rx="12" fill="#FFFFFF"/>
    <text x="225" y="510" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#0F172A">Vital Telemetry Synced</text>
    <text x="225" y="530" font-family="system-ui, sans-serif" font-size="11" fill="#16A34A">Heart Rate: 72 bpm | O2: 99%</text>
    
    <circle cx="250" cy="610" r="22" fill="#FFFFFF"/>
    <text x="242" y="616" font-family="system-ui, sans-serif" font-size="16">🎤</text>
    <circle cx="335" cy="610" r="26" fill="#EF4444"/>
    <text x="325" y="616" font-family="system-ui, sans-serif" font-size="16">📞</text>
    <circle cx="420" cy="610" r="22" fill="#FFFFFF"/>
    <text x="412" y="616" font-family="system-ui, sans-serif" font-size="16">📹</text>

    <!-- Smartphone Frame 2 (Electronic Prescription & Care Plan) -->
    <rect x="530" y="40" width="310" height="660" rx="36" fill="#0F172A" stroke="#334155" stroke-width="4"/>
    <rect x="545" y="60" width="280" height="620" rx="24" fill="#FFFFFF"/>
    <rect x="640" y="70" width="90" height="18" rx="9" fill="#0F172A"/>
    <rect x="545" y="100" width="280" height="50" fill="#0284C7"/>
    <text x="565" y="132" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#FFFFFF">Post-Consultation Summary</text>
    <rect x="565" y="170" width="240" height="90" rx="10" fill="#F8FAFC" stroke="#E2E8F0"/>
    <text x="580" y="198" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#0F172A">e-Prescription Dispatched</text>
    <text x="580" y="222" font-family="system-ui, sans-serif" font-size="11" fill="#64748B">Walgreens Pharmacy #4192</text>
    <text x="580" y="242" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#15803D">Ready for Pickup (1 hour)</text>

    <rect x="565" y="280" width="240" height="110" rx="10" fill="#F8FAFC" stroke="#E2E8F0"/>
    <text x="580" y="308" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#0F172A">Clinical Doctor Notes</text>
    <text x="580" y="332" font-family="system-ui, sans-serif" font-size="11" fill="#64748B">Follow up in 5 days if fever persists. Rest and increase oral fluid intake.</text>

    <rect x="565" y="410" width="240" height="45" rx="8" fill="#0284C7"/>
    <text x="610" y="438" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#FFFFFF">Schedule Follow-up</text>
  </svg>`;
  await renderSvgToJpeg(luminaMobileSvg, 1000, 750, 'public/images/case-studies/lumina-health-patient-experience/lumina-health-mobile-doctor-consultation-ui-screen.jpg');

  // Screen 4: Specialist Scheduling Matrix (1000x750)
  const luminaScheduleSvg = `
  <svg width="1000" height="750" viewBox="0 0 1000 750" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="1000" height="750" fill="#F8FAFC"/>
    <rect x="50" y="40" width="900" height="670" rx="24" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="2"/>
    <text x="90" y="95" font-family="system-ui, sans-serif" font-size="24" font-weight="bold" fill="#0F172A">Specialist Scheduling &amp; Real-Time Capacity</text>
    <text x="90" y="125" font-family="system-ui, sans-serif" font-size="14" fill="#64748B">Instant calendar synchronization across board-certified cardiology, neurology, and pediatrics.</text>

    <!-- Doctor 1 -->
    <rect x="90" y="160" width="820" height="140" rx="16" fill="#F8FAFC" stroke="#E2E8F0"/>
    <circle cx="150" cy="230" r="38" fill="#E0F2FE"/>
    <text x="135" y="238" font-family="system-ui, sans-serif" font-size="22" font-weight="bold" fill="#0284C7">AC</text>
    <text x="210" y="205" font-family="system-ui, sans-serif" font-size="18" font-weight="bold" fill="#0F172A">Dr. Amanda Chen, MD</text>
    <text x="210" y="230" font-family="system-ui, sans-serif" font-size="13" fill="#64748B">Chief Medical Officer • Internal Medicine &amp; Triage</text>
    <text x="210" y="255" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#15803D">★ 4.98 (2,410 Patient Reviews)</text>
    
    <rect x="620" y="185" width="130" height="42" rx="8" fill="#FFFFFF" stroke="#0284C7"/>
    <text x="640" y="211" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#0284C7">Today 3:30 PM</text>
    <rect x="765" y="185" width="125" height="42" rx="8" fill="#0284C7"/>
    <text x="790" y="211" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#FFFFFF">Book Video</text>

    <!-- Doctor 2 -->
    <rect x="90" y="325" width="820" height="140" rx="16" fill="#F8FAFC" stroke="#E2E8F0"/>
    <circle cx="150" cy="395" r="38" fill="#DCFCE7"/>
    <text x="135" y="403" font-family="system-ui, sans-serif" font-size="22" font-weight="bold" fill="#16A34A">DR</text>
    <text x="210" y="370" font-family="system-ui, sans-serif" font-size="18" font-weight="bold" fill="#0F172A">Dr. David Reynolds, MD, FACC</text>
    <text x="210" y="395" font-family="system-ui, sans-serif" font-size="13" fill="#64748B">Cardiology Specialist • Stanford Medicine Alumnus</text>
    <text x="210" y="420" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#15803D">★ 4.95 (1,890 Patient Reviews)</text>
    
    <rect x="620" y="350" width="130" height="42" rx="8" fill="#FFFFFF" stroke="#0284C7"/>
    <text x="640" y="376" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#0284C7">Today 5:00 PM</text>
    <rect x="765" y="350" width="125" height="42" rx="8" fill="#0284C7"/>
    <text x="790" y="376" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#FFFFFF">Book Video</text>

    <!-- Doctor 3 -->
    <rect x="90" y="490" width="820" height="140" rx="16" fill="#F8FAFC" stroke="#E2E8F0"/>
    <circle cx="150" cy="560" r="38" fill="#F3E8FF"/>
    <text x="135" y="568" font-family="system-ui, sans-serif" font-size="22" font-weight="bold" fill="#9333EA">SK</text>
    <text x="210" y="535" font-family="system-ui, sans-serif" font-size="18" font-weight="bold" fill="#0F172A">Dr. Sarah Kapoor, MD</text>
    <text x="210" y="560" font-family="system-ui, sans-serif" font-size="13" fill="#64748B">Pediatric &amp; Adolescent Telemedicine Specialist</text>
    <text x="210" y="585" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#15803D">★ 4.99 (3,120 Patient Reviews)</text>
    
    <rect x="620" y="515" width="130" height="42" rx="8" fill="#FFFFFF" stroke="#0284C7"/>
    <text x="635" y="541" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#0284C7">Tomorrow 9 AM</text>
    <rect x="765" y="515" width="125" height="42" rx="8" fill="#0284C7"/>
    <text x="790" y="541" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#FFFFFF">Book Video</text>
  </svg>`;
  await renderSvgToJpeg(luminaScheduleSvg, 1000, 750, 'public/images/case-studies/lumina-health-patient-experience/lumina-health-specialist-telehealth-video-schedule-ui-screen.jpg');

  // =========================================================================
  // 7. PULSE LOGISTICS (Freight Logistics & AI Dispatch)
  // =========================================================================
  // Screen 2: Real-Time Fleet GPS Tracking & Dispatch Board (1000x750)
  const logisticsDispatchSvg = `
  <svg width="1000" height="750" viewBox="0 0 1000 750" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="1000" height="750" fill="#0F172A"/>
    
    <!-- Header -->
    <rect x="50" y="40" width="900" height="60" rx="16" fill="#1E293B"/>
    <text x="80" y="77" font-family="system-ui, sans-serif" font-size="18" font-weight="bold" fill="#FFFFFF">Pulse Logistics Carrier Dispatch Board</text>
    <text x="700" y="77" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#22C55E">● 348 Active Loads In-Transit</text>

    <!-- Map View Background -->
    <rect x="50" y="120" width="550" height="570" rx="20" fill="#1E293B" stroke="#334155"/>
    <!-- Simulated GPS Routes -->
    <path d="M90 450 Q250 320 400 350 T540 220" stroke="#38BDF8" stroke-width="4" stroke-dasharray="8 6" fill="none"/>
    <path d="M120 540 Q300 480 480 490" stroke="#F59E0B" stroke-width="4" fill="none"/>
    
    <!-- GPS Truck Nodes -->
    <circle cx="250" cy="360" r="14" fill="#38BDF8"/>
    <text x="275" y="365" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#FFFFFF">TRK-409 (Chicago → Dallas)</text>
    
    <circle cx="480" cy="490" r="14" fill="#F59E0B"/>
    <text x="330" y="525" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#FFFFFF">TRK-882 (Atlanta → Miami)</text>

    <circle cx="400" cy="350" r="14" fill="#22C55E"/>
    <text x="420" y="340" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#22C55E">DELIVERED ON-TIME</text>

    <!-- Right Column: Dispatch Feed -->
    <rect x="620" y="120" width="330" height="570" rx="20" fill="#1E293B" stroke="#334155"/>
    <text x="645" y="160" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" fill="#FFFFFF">Automated Route Matching</text>

    <!-- Route Card 1 -->
    <rect x="645" y="185" width="280" height="135" rx="12" fill="#0F172A" stroke="#334155"/>
    <text x="665" y="215" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#FFFFFF">Lane: ORD → DFW</text>
    <text x="665" y="238" font-family="system-ui, sans-serif" font-size="12" fill="#94A3B8">Dry Van • 42,000 lbs • 924 mi</text>
    <text x="665" y="265" font-family="system-ui, sans-serif" font-size="16" font-weight="extrabold" fill="#22C55E">$2,450.00</text>
    <text x="760" y="265" font-family="system-ui, sans-serif" font-size="12" fill="#94A3B8">($2.65/mi)</text>
    <rect x="665" y="280" width="240" height="28" rx="6" fill="#0284C7"/>
    <text x="735" y="299" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#FFFFFF">Assign Carrier</text>

    <!-- Route Card 2 -->
    <rect x="645" y="340" width="280" height="135" rx="12" fill="#0F172A" stroke="#334155"/>
    <text x="665" y="370" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#FFFFFF">Lane: ATL → MIA</text>
    <text x="665" y="393" font-family="system-ui, sans-serif" font-size="12" fill="#94A3B8">Reefer 34°F • 38,500 lbs • 662 mi</text>
    <text x="665" y="420" font-family="system-ui, sans-serif" font-size="16" font-weight="extrabold" fill="#22C55E">$2,100.00</text>
    <text x="760" y="420" font-family="system-ui, sans-serif" font-size="12" fill="#94A3B8">($3.17/mi)</text>
    <rect x="665" y="435" width="240" height="28" rx="6" fill="#0284C7"/>
    <text x="735" y="454" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#FFFFFF">Assign Carrier</text>

    <!-- Route Card 3 -->
    <rect x="645" y="495" width="280" height="135" rx="12" fill="#0F172A" stroke="#334155"/>
    <text x="665" y="525" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#FFFFFF">Lane: LAX → PHX</text>
    <text x="665" y="548" font-family="system-ui, sans-serif" font-size="12" fill="#94A3B8">Flatbed • 44,000 lbs • 372 mi</text>
    <text x="665" y="575" font-family="system-ui, sans-serif" font-size="16" font-weight="extrabold" fill="#22C55E">$1,280.00</text>
    <text x="760" y="575" font-family="system-ui, sans-serif" font-size="12" fill="#94A3B8">($3.44/mi)</text>
    <rect x="665" y="590" width="240" height="28" rx="6" fill="#0284C7"/>
    <text x="735" y="609" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#FFFFFF">Assign Carrier</text>
  </svg>`;
  await renderSvgToJpeg(logisticsDispatchSvg, 1000, 750, 'public/images/case-studies/pulse-logistics-organic-growth-engine/pulse-logistics-carrier-dispatch-fleet-management-ui-screen.jpg');

  // Screen 4: Instant Freight Rate Estimator (1000x750)
  const logisticsRateSvg = `
  <svg width="1000" height="750" viewBox="0 0 1000 750" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="1000" height="750" fill="#F8FAFC"/>
    <rect x="50" y="40" width="900" height="670" rx="24" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="2"/>
    <text x="90" y="95" font-family="system-ui, sans-serif" font-size="24" font-weight="bold" fill="#0F172A">Instant Freight Rate &amp; Spot Quote Estimator</text>
    <text x="90" y="125" font-family="system-ui, sans-serif" font-size="14" fill="#64748B">Algorithmic spot pricing engine driven by historical corridor data and live carrier fuel surcharges.</text>

    <!-- Left Input Column -->
    <rect x="90" y="160" width="420" height="490" rx="16" fill="#F8FAFC" stroke="#E2E8F0"/>
    <text x="120" y="200" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" fill="#0F172A">Origin &amp; Destination Details</text>

    <text x="120" y="235" font-family="system-ui, sans-serif" font-size="12" font-weight="600" fill="#334155">Origin Zip / Facility</text>
    <rect x="120" y="245" width="360" height="40" rx="8" fill="#FFFFFF" stroke="#CBD5E1"/>
    <text x="140" y="270" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#0F172A">60601 (Chicago Hub, IL)</text>

    <text x="120" y="310" font-family="system-ui, sans-serif" font-size="12" font-weight="600" fill="#334155">Destination Zip / Facility</text>
    <rect x="120" y="320" width="360" height="40" rx="8" fill="#FFFFFF" stroke="#CBD5E1"/>
    <text x="140" y="345" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#0F172A">75201 (Dallas Gateway, TX)</text>

    <text x="120" y="385" font-family="system-ui, sans-serif" font-size="12" font-weight="600" fill="#334155">Equipment &amp; Weight Specification</text>
    <rect x="120" y="395" width="170" height="40" rx="8" fill="#0284C7"/>
    <text x="155" y="420" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#FFFFFF">Dry Van (53')</text>
    <rect x="305" y="395" width="175" height="40" rx="8" fill="#FFFFFF" stroke="#CBD5E1"/>
    <text x="345" y="420" font-family="system-ui, sans-serif" font-size="13" fill="#64748B">Reefer Temp</text>

    <text x="120" y="465" font-family="system-ui, sans-serif" font-size="12" font-weight="600" fill="#334155">Accessorial Requirements</text>
    <text x="120" y="495" font-family="system-ui, sans-serif" font-size="13" fill="#334155">✓ Liftgate at delivery</text>
    <text x="280" y="495" font-family="system-ui, sans-serif" font-size="13" fill="#334155">✓ Pallet exchange</text>

    <rect x="120" y="550" width="360" height="50" rx="10" fill="#0F172A"/>
    <text x="210" y="582" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#FFFFFF">Lock Instant Spot Rate</text>

    <!-- Right Column: Guaranteed Rate Breakdown -->
    <rect x="540" y="160" width="370" height="490" rx="16" fill="#0F172A"/>
    <text x="570" y="200" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" fill="#FFFFFF">Guaranteed Rate Estimate</text>

    <text x="570" y="250" font-family="system-ui, sans-serif" font-size="44" font-weight="extrabold" fill="#22C55E">$2,450.00</text>
    <text x="570" y="280" font-family="system-ui, sans-serif" font-size="13" fill="#94A3B8">Guaranteed price lock valid for 2 hours</text>

    <line x1="570" y1="310" x2="880" y2="310" stroke="#334155"/>
    <text x="570" y="340" font-family="system-ui, sans-serif" font-size="13" fill="#94A3B8">Linehaul Rate (924 mi):</text>
    <text x="800" y="340" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#FFFFFF">$2,125.00</text>

    <text x="570" y="375" font-family="system-ui, sans-serif" font-size="13" fill="#94A3B8">Fuel Surcharge:</text>
    <text x="825" y="375" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#FFFFFF">$245.00</text>

    <text x="570" y="410" font-family="system-ui, sans-serif" font-size="13" fill="#94A3B8">Transit Time Commitment:</text>
    <text x="790" y="410" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#38BDF8">Next Day 10 AM</text>

    <rect x="570" y="460" width="310" height="90" rx="12" fill="#1E293B" stroke="#334155"/>
    <text x="590" y="490" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#22C55E">✓ 99.4% On-Time Delivery Benchmark</text>
    <text x="590" y="515" font-family="system-ui, sans-serif" font-size="11" fill="#CBD5E1">Automated electronic bill of lading (eBOL) and live GPS sensor feeds provided upon pickup.</text>

    <rect x="570" y="575" width="310" height="48" rx="10" fill="#0284C7"/>
    <text x="655" y="605" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#FFFFFF">Book Load Now</text>
  </svg>`;
  await renderSvgToJpeg(logisticsRateSvg, 1000, 750, 'public/images/case-studies/pulse-logistics-organic-growth-engine/pulse-logistics-instant-freight-quote-calculator-ui-screen.jpg');

  console.log('\nAll realistic case study highlight images generated successfully!');
}

main().catch(err => {
  console.error('Error generating images:', err);
  process.exit(1);
});
