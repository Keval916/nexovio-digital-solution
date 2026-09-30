"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Share2,
  Utensils,
  Package,
  FileText,
  PenTool,
  BarChart3,
  ShoppingBag,
  Layers,
  Zap,
  Boxes,
  Palette,
  Check,
  ExternalLink,
  ShieldCheck,
  Eye,
  Workflow,
  Rocket,
  Clock3,
  Store,
  Coffee,
  Building2,
  Stethoscope,
  GraduationCap,
  Briefcase,
  Maximize2,
  X,
  ChevronRight,
  Calendar,
  Layout,
  MessageSquare,
  Sparkle,
  Award,
  Sliders,
  TrendingUp,
  Heart,
  Car,
  Factory,
  Ticket,
  Users,
} from "lucide-react";
import { Breadcrumbs } from "@/src/components/layout/Breadcrumbs";
import { SectionHeading } from "@/src/components/ui/SectionHeading";
import { Button } from "@/src/components/ui/Button";
import { Card } from "@/src/components/ui/Card";
import { FaqSection } from "@/src/components/sections/FaqSection";
import { getServiceSchema, getBreadcrumbSchema, getOrganizationSchema } from "@/src/lib/schema";


// ==========================================
// 1. DATA STRUCTURES: 9 CORE SERVICE DISCIPLINES
// ==========================================

interface GraphicServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  keywordCluster: string;
  image: string;
  imageAlt: string;
  icon: React.ComponentType<{ className?: string }>;
  deliverables: string[];
}

const GRAPHIC_SERVICES: GraphicServiceItem[] = [
  {
    id: "social-media",
    number: "01",
    title: "Social Media Graphic Design",
    tagline: "Scroll-Stopping Creatives for Instagram, LinkedIn, Facebook & X",
    description:
      "Social media is often the first place customers discover your business. We craft cohesive feed posts, multi-slide carousels, stories, promotional launch graphics, and reusable brand templates engineered to drive engagement and maintain a unified visual identity.",
    keywordCluster: "social media design · Instagram carousels · social post templates",
    image: "/images/services/graphic-design/gallery-social-posts.jpg",
    imageAlt: "Social media post design",
    icon: Share2,
    deliverables: [
      "Instagram posts, carousels & Stories (1:1, 4:5, 9:16)",
      "LinkedIn business graphics & corporate slide decks",
      "Facebook feed posts & promotional ad creatives",
      "Seasonal & festive social campaign sets",
      "Reusable Figma & Canva post templates for your team",
    ],
  },
  {
    id: "food-restaurant",
    number: "02",
    title: "Restaurant, Café & Food Promotion Design",
    tagline: "Appetizing Visuals That Make People Hungry, Curious & Ready to Order",
    description:
      "Food businesses need design that highlights taste, quality, and urgency. From mouthwatering pizza combo offers, burger promotions, and table tent cards to dine-in menus, delivery flyers, and digital menu boards, we design appetizing marketing that converts cravings into orders.",
    keywordCluster: "restaurant menu design · pizza combo graphics · food promotions",
    image: "/images/services/graphic-design/gallery-pizza-promo.jpg",
    imageAlt: "Pizza promotion design",
    icon: Utensils,
    deliverables: [
      "Dine-in menu cards & digital menu board layouts",
      "Artisanal pizza combo & weekend special offer posters",
      "Burger, fast-food & café promotional ad graphics",
      "Food delivery app banners (UberEats, DoorDash, Zomato)",
      "Table tents, takeaway leaflets & restaurant packaging",
    ],
  },
  {
    id: "packaging-labels",
    number: "03",
    title: "Product Packaging & Label Design",
    tagline: "Tangible Shelf Presence & Unboxing Experiences That Drive Repurchase",
    description:
      "Packaging is an essential part of your product experience. Customers form their first impression from a bottle, pouch, jar, or box before using the product itself. We combine brand identity, visual hierarchy, typography, and print dielines to create packaging that excels both in retail and on e-commerce screens.",
    keywordCluster: "product packaging design · bottle label artwork · pouch design",
    image: "/images/services/graphic-design/gallery-packaging-cosmetics.jpg",
    imageAlt: "Product packaging and label design",
    icon: Package,
    deliverables: [
      "Custom product boxes & carton packaging artwork",
      "Specialty pouches, bags & stand-up zip pouches",
      "Bottle, jar & can labels with foil/emboss specs",
      "Cosmetics, wellness & food nutrition label compliance",
      "100% print-ready vector dielines with bleed margins",
    ],
  },
  {
    id: "print-brochures",
    number: "04",
    title: "Brochure, Flyer & Print Design",
    tagline: "Tactile Marketing Collateral Customers Can Hold, Share & Trust",
    description:
      "Need high-impact collateral for sales meetings, exhibitions, trade shows, or direct mail? We engineer print materials with structured layouts, crisp editorial hierarchies, and premium print finishes that leave an unforgettable commercial impression.",
    keywordCluster: "corporate brochure design · marketing flyers · sales sheets",
    image: "/images/services/graphic-design/gallery-corporate-brochure.jpg",
    imageAlt: "Brochure design",
    icon: FileText,
    deliverables: [
      "Company profiles & multi-page corporate brochures",
      "Bi-fold & tri-fold marketing flyers and product sheets",
      "Case study one-sheeters & sales enablement collateral",
      "Exhibition roll-up banners, backdrops & signage",
      "Print-ready CMYK PDFs with crop marks & bleed margins",
    ],
  },
  {
    id: "advertising-marketing",
    number: "05",
    title: "Advertising & Marketing Creative Design",
    tagline: "High-Converting Digital & Print Ads That Communicate the Hook Fast",
    description:
      "Good advertising communicates value within a split-second glance. We craft performance-driven ad creatives for social media campaigns, Google Display networks, website hero banners, and retail promotions—adapting one core concept into all standard ad dimensions seamlessly.",
    keywordCluster: "digital ad creatives · display banners · sale promotional graphics",
    image: "/images/services/graphic-design/gallery-sale-ad-banner.jpg",
    imageAlt: "Digital banner ad design",
    icon: Zap,
    deliverables: [
      "Paid social ad creatives (Meta, LinkedIn, X, TikTok)",
      "Google Display network responsive banner sets",
      "Website hero promo banners & homepage takeovers",
      "Flash sale, seasonal discount & launch campaign assets",
      "Multi-format responsive creative adaptations",
    ],
  },
  {
    id: "logo-identity",
    number: "06",
    title: "Logo Design & Brand Identity Systems",
    tagline: "Distinctive Visual Foundations That Build Instant Credibility",
    description:
      "A strong brand identity provides consistency wherever customers encounter your company. We design memorable logo marks, cohesive color palettes, typographic hierarchies, and comprehensive brand guideline books that ensure your brand looks established from day one.",
    keywordCluster: "logo design services · brand identity system · brand style guide",
    image: "/images/services/graphic-design/gallery-logos-branding.jpg",
    imageAlt: "Corporate branding and logo design",
    icon: PenTool,
    deliverables: [
      "Primary logo, alternate marks & favicon systems",
      "Carefully calibrated HSL/Pantone brand color palettes",
      "Typography pairing & editorial styling guidelines",
      "Business cards, letterheads & stationery mockups",
      "Comprehensive Brand Guidelines PDF & vector assets",
    ],
  },
  {
    id: "ecommerce-graphics",
    number: "07",
    title: "E-Commerce & Product Marketing Graphics",
    tagline: "Visual Communication That Answers Questions & Accelerates Checkout",
    description:
      "Online shoppers rely on imagery to validate quality before buying. We design high-converting Amazon & Shopify listing graphics, feature callout banners, product comparison matrices, and infographics that explain product benefits clearly and reduce return rates.",
    keywordCluster: "ecommerce product graphics · Amazon listing images · product infographics",
    image: "/images/services/graphic-design/gallery-coffee-packaging.jpg",
    imageAlt: "E-commerce product graphic",
    icon: ShoppingBag,
    deliverables: [
      "Hero e-commerce listing images & lifestyle compositing",
      "Feature callouts & product dimension breakdown graphics",
      "Competitive comparison tables & benefit infographics",
      "Marketplace banner graphics (Amazon A+, Shopify, Etsy)",
      "High-resolution 3D photorealistic packaging mockups",
    ],
  },
  {
    id: "presentations-pitch",
    number: "08",
    title: "Presentation & Business Deck Design",
    tagline: "Turn Complex Data Into Crisp, Persuasive Executive Slide Decks",
    description:
      "Your presentation should look as polished as the business you lead. We transform raw data, complex workflows, and wordy bullet points into clean, structured PowerPoint, Keynote, and Google Slides presentations that captivate investors, boards, and enterprise prospects.",
    keywordCluster: "pitch deck design · investor presentations · corporate PowerPoint design",
    image: "/images/services/graphic-design/gallery-pitch-deck.jpg",
    imageAlt: "Business presentation pitch deck design",
    icon: BarChart3,
    deliverables: [
      "Investor pitch decks & capital raise presentations",
      "Enterprise sales capability decks & client proposals",
      "Executive data visualizations & financial KPI charts",
      "Company overview decks & quarterly report layouts",
      "Fully editable master templates in PowerPoint & Figma",
    ],
  },
  {
    id: "illustrations-icons",
    number: "09",
    title: "Custom Illustrations, Icons & Infographics",
    tagline: "Bespoke Vector Graphics Tailored to Your Specific Brand Language",
    description:
      "Some concepts are best explained visually. We create custom vector illustration sets, branded business icon libraries, technical process diagrams, and explanatory infographics that make complex workflows intuitive and visually delightful across web and print.",
    keywordCluster: "custom vector illustrations · branded icon sets · technical infographics",
    image: "/images/services/graphic-design/gallery-festival-promo.jpg",
    imageAlt: "Festival promotional creative",
    icon: Palette,

    deliverables: [
      "Custom vector illustrations tailored to brand tone",
      "Cohesive SVG icon sets for websites & mobile apps",
      "Process flow diagrams & technical data explainers",
      "Editorial infographics for whitepapers & reports",
      "Scalable vector assets ready for web and print reproduction",
    ],
  },
];

// ==========================================
// 2. VALUE PROPOSITION PILLARS
// ==========================================

const VALUE_PROPOSITION_PILLARS = [
  {
    title: "Design Shapes Feelings in Seconds",
    description:
      "A customer evaluates your business in less than 50 milliseconds based on visual presentation. Professional design instantly signals authority, attention to detail, and trustworthiness.",
  },
  {
    title: "Human-Centered Creative Thinking",
    description:
      "We design around your audience's real motivations, reading habits, and visual triggers rather than pushing generic, cookie-cutter templates that blend into the noise.",
  },
  {
    title: "One Connected Partner for Digital & Print",
    description:
      "Eliminate disjointed branding where social posts look different from printed packaging and pitch decks. We create unified visual systems that work harmoniously everywhere.",
  },
  {
    title: "Custom Designs Built for Your Brand",
    description:
      "No prefabricated template kits. Every typography choice, color harmony, and layout grid is custom-tailored to communicate your unique competitive advantage.",
  },
  {
    title: "Print-Tested & Production-Ready Files",
    description:
      "We understand bleed margins, CMYK color profiles, vector paths, dielines, and paper finishes—preventing costly printing mistakes and ensuring flawless reproduction.",
  },
  {
    title: "Built for Effortless Team Reuse",
    description:
      "We provide organized source files, style tokens, and editable Canva/Figma templates that empower your internal marketing team to publish on-brand content quickly.",
  },
];

// ==========================================
// 3. INTERACTIVE GALLERY DATA (12 REALISTIC ASSETS)
// ==========================================

interface GalleryItem {
  id: string;
  title: string;
  category: "all" | "food" | "branding" | "social" | "packaging" | "print";
  categoryLabel: string;
  description: string;
  image: string;
  imageAlt: string;
  aspect: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "pizza-special",
    title: "Artisanal Wood-Fired Pizza Weekend Combo",
    category: "food",
    categoryLabel: "Restaurant & Food",
    description: "Appetizing weekend promo poster designed for an artisanal pizzeria featuring mouthwatering crust, melting mozzarella, and bold typography.",
    image: "/images/services/graphic-design/gallery-pizza-promo.jpg",
    imageAlt: "Pizza promotion design",
    aspect: "aspect-square",
  },
  {
    id: "burger-bash",
    title: "Gourmet Burger & Fries Craft Combo Offer",
    category: "food",
    categoryLabel: "Restaurant & Food",
    description: "Vibrant fast-casual burger cafe social media campaign creative with punchy typography and dynamic food photography layout.",
    image: "/images/services/graphic-design/gallery-burger-promo.jpg",
    imageAlt: "Cafe social media graphic",
    aspect: "aspect-square",
  },
  {
    id: "fine-dining-menu",
    title: "Candlelit Fine Dining Dinner & Wine Menu",
    category: "food",
    categoryLabel: "Restaurant & Food",
    description: "Elegant restaurant menu card mockup resting on rustic wood with classic serif typography, wine pairing hierarchy, and leather holder.",
    image: "/images/services/graphic-design/gallery-restaurant-menu.jpg",
    imageAlt: "Restaurant menu design",
    aspect: "aspect-square",
  },
  {
    id: "minimalist-logos",
    title: "Minimalist Corporate Brand Identities & Logos",
    category: "branding",
    categoryLabel: "Branding & Logos",
    description: "Precision vector logo marks, typography scales, and brand geometric grid construction for modern technology and finance brands.",
    image: "/images/services/graphic-design/gallery-logos-branding.jpg",
    imageAlt: "Corporate branding and logo design",
    aspect: "aspect-square",
  },
  {
    id: "stationery-suite",
    title: "Embossed Stationery & Brand Identity Kit",
    category: "branding",
    categoryLabel: "Branding & Logos",
    description: "Executive stationery suite flatlay featuring holographic foil business cards, Pantone color swatches, letterhead, and brand guidelines.",
    image: "/images/services/graphic-design/brand-craftsmanship.jpg",
    imageAlt: "Brand identity and stationery design",
    aspect: "aspect-square",
  },
  {
    id: "saas-carousel",
    title: "SaaS Growth Strategy Instagram Carousel",
    category: "social",
    categoryLabel: "Social Media & Ads",
    description: "Educational multi-slide carousel mockup with electric cyan gradients, 3D financial charts, and high-retention typographic hooks.",
    image: "/images/services/graphic-design/gallery-social-posts.jpg",
    imageAlt: "Social media post design",
    aspect: "aspect-square",
  },
  {
    id: "flash-sale-banner",
    title: "50% Off Flash Sale Megasale Ad Banner",
    category: "social",
    categoryLabel: "Social Media & Ads",
    description: "High-impact digital advertising banner for e-commerce with glowing neon lighting, 3D typography, and conversion-focused CTA button.",
    image: "/images/services/graphic-design/gallery-sale-ad-banner.jpg",
    imageAlt: "Digital banner ad design",
    aspect: "aspect-square",
  },
  {
    id: "festive-promo",
    title: "Royal Festive Celebration Sale Campaign",
    category: "social",
    categoryLabel: "Social Media & Ads",
    description: "Luxurious festival promotional creative with ornate golden patterns, warm celebration lighting, and special holiday discount copy.",
    image: "/images/services/graphic-design/gallery-festival-promo.jpg",
    imageAlt: "Festival promotional creative",
    aspect: "aspect-square",
  },
  {
    id: "botanical-cosmetics",
    title: "Luxury Botanical Skincare Serum Packaging",
    category: "packaging",
    categoryLabel: "Packaging & Labels",
    description: "Minimalist amber dropper bottle label and embossed paper carton packaging on travertine stone with natural botanical shadows.",
    image: "/images/services/graphic-design/gallery-packaging-cosmetics.jpg",
    imageAlt: "Product packaging and label design",
    aspect: "aspect-square",
  },
  {
    id: "coffee-pouch",
    title: "Specialty Roasted Coffee Bean Matte Pouch",
    category: "packaging",
    categoryLabel: "Packaging & Labels",
    description: "Stand-up matte black coffee pouch packaging with copper foil typography, origin tasting notes, and degassing valve details.",
    image: "/images/services/graphic-design/gallery-coffee-packaging.jpg",
    imageAlt: "Food packaging design",
    aspect: "aspect-square",
  },
  {
    id: "annual-report-brochure",
    title: "Corporate Tri-Fold Brochure & Annual Report",
    category: "print",
    categoryLabel: "Print & Presentation",
    description: "Multi-page corporate editorial report booklet and matching tri-fold brochure with business data charts and clean architectural layouts.",
    image: "/images/services/graphic-design/gallery-corporate-brochure.jpg",
    imageAlt: "Brochure design",
    aspect: "aspect-square",
  },
  {
    id: "investor-pitch-deck",
    title: "Enterprise Investor Pitch Deck Slide Layouts",
    category: "print",
    categoryLabel: "Print & Presentation",
    description: "Persuasive pitch deck slides laid out on a glass conference desk showcasing market opportunity graphs and executive typography.",
    image: "/images/services/graphic-design/gallery-pitch-deck.jpg",
    imageAlt: "Business presentation pitch deck design",
    aspect: "aspect-square",
  },

];

// ==========================================
// 4. GRAPHIC DESIGN FOR 15 BUSINESS TYPES
// ==========================================

const BUSINESS_TYPES = [
  {
    title: "Restaurants & Food Businesses",
    icon: Utensils,
    focus: "Menus, pizza offers, food promotions, takeaway flyers, table tents, delivery app creatives, and food packaging graphics.",
  },
  {
    title: "Cafés & Bakeries",
    icon: Coffee,
    focus: "Menu boards, beverage promotions, pastry cards, festive social creatives, loyalty punch cards, and branded coffee cups.",
  },
  {
    title: "Retail Stores & Boutiques",
    icon: Store,
    focus: "Sale posters, store window banners, product tags, seasonal catalogues, promotional flyers, and in-store signage.",
  },
  {
    title: "E-Commerce & D2C Brands",
    icon: ShoppingBag,
    focus: "Product listing infographics, unboxing packaging, marketplace banners, promotional sale creatives, and comparison cards.",
  },
  {
    title: "Fashion & Lifestyle Brands",
    icon: Sparkle,
    focus: "Editorial lookbooks, collection launch campaigns, social media aesthetics, garment hangtags, and premium shopping bags.",
  },
  {
    title: "Beauty, Salon & Wellness",
    icon: Heart,
    focus: "Treatment service menus, appointment offer creatives, promotional brochures, cosmetics packaging, and holiday gift vouchers.",
  },
  {
    title: "Real Estate Businesses",
    icon: Building2,
    focus: "Luxury property brochures, floorplan sales sheets, project launch decks, social media listing cards, and yard signage.",
  },
  {
    title: "Hospitality & Travel",
    icon: Clock3,
    focus: "Hotel service guides, dining menus, resort promotional banners, travel itinerary brochures, and event display collateral.",
  },
  {
    title: "Healthcare & Professional Services",
    icon: Stethoscope,
    focus: "Patient educational infographics, corporate service brochures, clinical presentation decks, and informative white papers.",
  },
  {
    title: "Technology, SaaS & Startups",
    icon: Layout,
    focus: "Brand identity systems, investor pitch decks, product interface graphics, social media content kits, and technical diagrams.",
  },
  {
    title: "Education & Training",
    icon: GraduationCap,
    focus: "Course prospectus brochures, graduation certificates, educational infographics, event flyers, and webinar promotional posts.",
  },
  {
    title: "Automotive Businesses",
    icon: Car,
    focus: "Vehicle showroom banners, seasonal service promotion flyers, dealership social media posts, and specification sheets.",
  },
  {
    title: "Manufacturing & B2B Enterprises",
    icon: Factory,
    focus: "Technical product catalogues, specification sales sheets, industrial exhibition roll-up banners, and corporate capability profiles.",
  },
  {
    title: "Events & Entertainment",
    icon: Ticket,
    focus: "Concert and event posters, VIP invitations, event tickets, stage backdrop banners, and digital countdown graphics.",
  },
  {
    title: "Agencies & Marketing Teams",
    icon: Users,
    focus: "White-label design production, overflow campaign creatives, client pitch decks, social media batches, and client presentation assets.",
  },
];

// ==========================================
// 5. EVERYDAY BUSINESS MARKETING QUOTES
// ==========================================

const EVERYDAY_REQUESTS = [
  "“Create a weekend pizza combo offer”",
  "“Design our new seasonal café menu”",
  "“Make a Diwali promotion for our store”",
  "“Create five Instagram posts for our product launch”",
  "“Design packaging for our latest cosmetic line”",
  "“Turn this complex text into a professional brochure”",
  "“Create a promotional flyer for our upcoming event”",
  "“Design a high-converting banner for our website”",
  "“Prepare a professional company profile deck”",
  "“Create social media designs for the entire month”",
];

// ==========================================
// 6. 5-STAGE GRAPHIC DESIGN PROCESS
// ==========================================

const PROCESS_STEPS = [
  {
    step: "01",
    phase: "Discover",
    title: "Understand Your Requirement",
    description:
      "We start by learning about your business, target audience, core message, required dimensions, references, and preferred visual tone.",
    deliverable: "Creative Brief & Objectives",
    icon: Eye,
  },
  {
    step: "02",
    phase: "Explore",
    title: "Explore the Creative Direction",
    description:
      "We research your industry, competitor landscape, and brand guidelines to establish layout directions, moodboards, and aesthetic hooks.",
    deliverable: "Visual Direction Moodboard",
    icon: Workflow,
  },
  {
    step: "03",
    phase: "Design",
    title: "Design & Refine With Feedback",
    description:
      "Our designers craft the chosen concept, fine-tuning visual hierarchy, typography, color harmony, and imagery based on your direct review.",
    deliverable: "Refined High-Fidelity Drafts",
    icon: PenTool,
  },
  {
    step: "04",
    phase: "Finalize",
    title: "Prepare Production-Ready Assets",
    description:
      "We export high-resolution, pixel-perfect assets formatted specifically for their intended destination: print (CMYK), digital (RGB), or web.",
    deliverable: "Print & Digital Master Files",
    icon: Package,
  },
  {
    step: "05",
    phase: "Scale",
    title: "Build for Future Reuse",
    description:
      "For recurring requirements, we package reusable templates, component libraries, and style tokens to make future design iterations fast and consistent.",
    deliverable: "Reusable Template Kit",
    icon: Rocket,
  },
];

// ==========================================
// 7. COMPREHENSIVE PROJECT DELIVERABLES
// ==========================================

const GRAPHIC_DELIVERABLES = [
  "100% Vector source artwork files (.AI, .EPS, .SVG) for infinite scalability",
  "High-resolution print-ready PDFs (CMYK color profile, 300 DPI, bleed margins)",
  "Optimized digital files for social media and web (PNG, JPEG, WebP)",
  "Fully editable Canva and Figma templates for internal marketing teams",
  "Commercial usage font pairings, license details, and typography rules",
  "Carefully calibrated color palette formulas (RGB, HEX, CMYK, Pantone)",
  "High-resolution 3D photorealistic mockups for presentations & advertising",
  "Organized cloud delivery folder structured by platform and medium",
  "Standard & customized sizes for multi-channel ad campaigns",
  "Social media banner and cover dimensions for LinkedIn, X, and Facebook",
  "Print-tested dielines with cutting guides and fold specifications",
  "Dedicated ongoing support and flexible revisions until 100% satisfaction",
];

// ==========================================
// 8. WHY NEXOVIO ADVANTAGES
// ==========================================

const WHY_NEXOVIO_ADVANTAGES = [
  {
    title: "Human-Centered Creative",
    desc: "We understand that businesses need more than pretty pictures. We design visuals that communicate clear value and prompt action.",
    icon: Heart,
  },
  {
    title: "Brand Consistency Across Touchpoints",
    desc: "Your social media, menus, packaging, and presentations will speak the same visual language, reinforcing authority wherever customers look.",
    icon: Workflow,
  },
  {
    title: "Digital & Print Versatility",
    desc: "Our team is equally skilled in digital interface aesthetics and strict physical print production standards, eliminating the need for multiple vendors.",
    icon: Layers,
  },
  {
    title: "Custom Tailored, Zero Generic Clichés",
    desc: "We build tailored concepts from scratch around your brand story, avoiding the recycled templates that make competitors look identical.",
    icon: Sparkles,
  },
  {
    title: "Reusable Design Systems",
    desc: "We create systematic templates that save your business time and money on future campaigns, social posts, and product launches.",
    icon: Boxes,
  },
  {
    title: "Scalable Support for Ongoing Needs",
    desc: "Whether you need a single urgent pizza promo flyer or 30 monthly marketing creatives, we scale seamlessly alongside your workflow.",
    icon: Rocket,
  },
];

// ==========================================
// 9. FAQS DATA
// ==========================================

const GRAPHIC_DESIGN_FAQS = [
  {
    question: "What graphic design services does Nexovio provide?",
    answer:
      "We provide end-to-end custom graphic design services including logo design and visual branding, social media posts and carousels, advertising creatives, food and restaurant promotions, product packaging and label artwork, brochures, flyers, posters, menu cards, business presentations, pitch decks, infographics, custom vector illustrations, and e-commerce listing graphics.",
  },
  {
    question: "Do you design social media posts and monthly content sets?",
    answer:
      "Yes. We design high-converting social media posts, multi-slide carousels, Instagram Stories, promotional graphics, product launch announcements, seasonal sale designs, and reusable Canva/Figma templates. Whether you need 5 individual graphics or a complete monthly creative set of 20 to 30 posts, we keep your visual identity consistent.",
  },
  {
    question: "Can you design restaurant and café menus and promotional offers?",
    answer:
      "Yes. Food and beverage design is one of our key specialties. We create restaurant dine-in menu cards, café beverage boards, weekend specials, pizza combo offer graphics, burger promotions, buy-one-get-one deals, table tents, food packaging, and digital menu boards that make your food look delicious and encourage orders.",
  },
  {
    question: "Do you design pizza shop offers and promotional posters?",
    answer:
      "Yes. We design high-impact pizza deals, weekend combo graphics, discount posters, delivery app promotional graphics, seasonal campaign posts, and takeaway leaflets tailored specifically to pizza restaurants, takeaways, and cloud kitchens.",
  },
  {
    question: "Do you provide product packaging and label design?",
    answer:
      "Yes. We create packaging artwork, product labels, boxes, pouches, bottles, jars, and product sleeves. Every design is built to meet real production standards with proper bleed margins, dielines, and CMYK color profiles, accompanied by photorealistic 3D mockups.",
  },
  {
    question: "Can you create brochures, flyers, and print marketing collateral?",
    answer:
      "Yes. We design bi-fold and tri-fold company brochures, service flyers, sales sheets, product catalogues, posters, annual reports, business cards, letterheads, and exhibition roll-up banners formatted with 300 DPI high-resolution CMYK print specs.",
  },
  {
    question: "Do you work with small businesses, restaurants, and startups?",
    answer:
      "Yes. Our graphic design services support businesses of all sizes—from local restaurants, cafés, and retail shops to ambitious startups, direct-to-consumer e-commerce brands, corporate enterprises, and marketing agencies seeking dependable white-label design support.",
  },
  {
    question: "Can Nexovio provide ongoing monthly graphic design support?",
    answer:
      "Yes. We support both one-off design projects and ongoing retainer partnerships for businesses that need continuous marketing creatives, monthly social media graphics, advertising updates, packaging iterations, and sales enablement collateral.",
  },
  {
    question: "Can you work with our existing brand guidelines and assets?",
    answer:
      "Yes. If you already have a logo, color palette, or typography guidelines, we work strictly within your established brand parameters to create fresh collateral that fits your company identity seamlessly without visual disconnect.",
  },
  {
    question: "What file formats will I receive upon project completion?",
    answer:
      "You receive complete, industry-standard file packages: 100% scalable vector master files (.AI, .EPS, .SVG), print-ready PDFs (CMYK, 300 DPI, bleed margins), high-resolution web formats (PNG, JPG, WebP), and editable Canva or Figma templates where requested.",
  },
  {
    question: "How fast is the turnaround time for graphic design projects?",
    answer:
      "Turnaround depends on scope: urgent promotional posts, pizza offers, or single banners can often be delivered in 24 to 48 hours. Comprehensive brochure projects, pitch decks, or complete packaging sets typically take 3 to 7 business days, with iterative review checkpoints throughout.",
  },
];

// ==========================================
// MAIN COMPONENT
// ==========================================

export default function GraphicDesignPage() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<GalleryItem | null>(null);

  const filteredGallery =
    activeFilter === "all"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  const organizationSchema = getOrganizationSchema();
  const serviceSchema = getServiceSchema({
    name: "Graphic Design Services for Businesses",
    description:
      "Custom graphic design services for branding, social media, packaging, menus, brochures, advertising, print and marketing materials. Work with Nexovio.",
    url: "/services/graphic-design",
    serviceType: "GraphicDesignServices",
    image: "/images/services/graphic-design/hero-graphic-designer.jpg",
  });

  const breadcrumbsSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "Graphic Design", url: "/services/graphic-design" },
  ]);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: GRAPHIC_DESIGN_FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ================================================================== */}
      {/* 1. HERO BANNER SECTION                                             */}
      {/* ================================================================== */}
      <section className="pt-24 sm:pt-28 md:pt-32 lg:pt-40 pb-20 bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <Breadcrumbs
            items={[
              { name: "Services", url: "/services" },
              { name: "Graphic Design", url: "/services/graphic-design" },
            ]}
          />

          {/* Background Radial Glow & Futuristic Grid Lines */}
          <div className="absolute inset-0 bg-radial-glow pointer-events-none opacity-70" />
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-brand-bright/15 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-brand-electric/20 rounded-full blur-[100px] pointer-events-none" />

          {/* Subtle Geometric Grid */}
          <div
            className="absolute inset-0 opacity-[0.035] pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(#FFFFFF 1px, transparent 1px)`,
              backgroundSize: "32px 32px",
            }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center pt-4 relative z-10">
            {/* Left Copy */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider border border-brand-cyan/30 bg-surface-elevated/90 text-brand-cyan shadow-[0_0_20px_rgba(0,198,255,0.2)]">
                <Sparkles className="w-3.5 h-3.5 text-brand-bright animate-pulse" />
                <span>GRAPHIC DESIGN SERVICES FOR BRANDS &amp; BUSINESSES</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight !leading-[1.14]">
                Graphic Design Services for{" "}
                <span className="bg-gradient-brand bg-clip-text text-transparent">
                  Brands, Businesses &amp; Growing Teams
                </span>
              </h1>

              <div className="space-y-4 text-base sm:text-lg text-muted leading-relaxed">
                <p className="font-normal text-slate-700 dark:text-slate-300">
                  Your customers see your design before they read your message. A social media post, restaurant offer, product package, brochure, menu, advertisement, website banner, or pitch deck shapes how people feel about your brand in just seconds.
                </p>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
                  At Nexovio Digital Solutions, we provide custom graphic design services for businesses of all sizes—from startups, restaurants, and cafés to e-commerce brands, retail stores, and growing enterprises. Whether you need a mouthwatering pizza promo, custom product packaging, or an ongoing stream of marketing creatives, we design visuals that communicate clearly and drive real business results. Our creative work connects directly with our{" "}
                  <Link href="/services/web-design" className="text-brand-cyan hover:underline font-medium">
                    web design services
                  </Link>
                  ,{" "}
                  <Link href="/services/ui-ux-design" className="text-brand-cyan hover:underline font-medium">
                    UI/UX design services
                  </Link>
                  , and{" "}
                  <Link href="/services/mobile-app-development" className="text-brand-cyan hover:underline font-medium">
                    mobile app development services
                  </Link>
                  .
                </p>
              </div>

              {/* 6 Quick Feature Highlights with Interactive Micro-Glow Hover */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1">
                {[
                  { name: "Social Media Posts", icon: Share2 },
                  { name: "Restaurant & Pizza Offers", icon: Utensils },
                  { name: "Packaging & Labels", icon: Package },
                  { name: "Brochures & Print Media", icon: FileText },
                  { name: "Logo & Visual Identity", icon: PenTool },
                  { name: "Pitch Decks & Presentations", icon: BarChart3 },
                ].map((badge) => {
                  const BadgeIcon = badge.icon;
                  return (
                    <div
                      key={badge.name}
                      className="group flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#070F22] text-xs font-semibold text-slate-800 dark:text-slate-200 shadow-xs hover:border-brand-cyan/60 hover:bg-brand-cyan/5 hover:scale-[1.03] transition-all duration-300 cursor-default"
                    >
                      <BadgeIcon className="w-3.5 h-3.5 text-brand-cyan group-hover:scale-125 transition-transform duration-300 shrink-0" />
                      <span className="truncate group-hover:text-brand-cyan transition-colors">{badge.name}</span>
                    </div>
                  );
                })}
              </div>

              {/* Hero Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Button
                  href="/contact"
                  variant="primary"
                  size="lg"
                  trackingName="graphic_design_hero_start_project"
                  trackingLocation="service_hero"
                  icon={<ArrowRight className="w-4 h-4" />}
                  className="w-full sm:w-auto shadow-glow font-bold"
                >
                  Start Your Graphic Design Project
                </Button>
              </div>
            </div>

            {/* Right Side Realistic Human Designer Studio Hero Visual */}
            <div className="lg:col-span-6 relative flex items-center justify-center h-full">
              <div className="absolute inset-0 bg-gradient-brand opacity-20 blur-3xl rounded-3xl -z-10" />
              <div className="relative w-full rounded-2xl border border-brand-cyan/30 dark:border-brand-cyan/40 bg-surface-elevated/80 backdrop-blur-xl p-2.5 sm:p-3 shadow-[0_25px_60px_rgba(0,0,0,0.3)] overflow-hidden group">
                <div className="relative overflow-hidden rounded-xl h-[380px] sm:h-[450px] lg:h-[500px] w-full bg-[#050914]">
                  <Image
                    src="/images/services/graphic-design/hero-graphic-designer.jpg"
                    alt="Graphic designer and creative director in studio"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                    className="w-full h-full object-cover object-center rounded-xl transform group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#040814]/80 via-transparent to-transparent pointer-events-none rounded-xl" />

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 2. STICKY VALUE PROPOSITION SECTION                                */}
      {/* Hover Effect: Left Accent Border Slide Down + Subtle Tint Shift   */}
      {/* ================================================================== */}
      <section className="section-blue py-16 sm:py-24 border-y border-slate-200/80 dark:border-blue-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Side Graphic Banner (Sticky on Top during Scroll) */}
            <div className="lg:col-span-6 lg:sticky lg:top-28 self-start z-10 relative flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-brand opacity-20 blur-3xl rounded-3xl -z-10" />
              <div className="relative w-full rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#071024] p-2.5 sm:p-3 shadow-xl overflow-hidden group">
                <div className="relative overflow-hidden rounded-xl h-[360px] sm:h-[440px] lg:h-[500px] w-full">
                  <Image
                    src="/images/services/graphic-design/brand-craftsmanship.jpg"
                    alt="Brand identity and stationery design"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                    className="w-full h-full object-cover object-center rounded-xl transform group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#040814]/80 via-transparent to-transparent pointer-events-none rounded-xl" />
                </div>
              </div>
            </div>

            {/* Right Side Value Proposition Content */}
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-brand-cyan/30 bg-surface-elevated text-brand-cyan">
                VALUE PROPOSITION
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Creative Design That Helps Your Business{" "}
                <span className="bg-gradient-brand bg-clip-text text-transparent">
                  Get Noticed
                </span>
              </h2>

              <div className="space-y-4 text-base text-muted leading-relaxed">
                <p className="font-semibold text-slate-900 dark:text-white">
                  A common headache for businesses is juggling different designers for every need: one freelancer for social media, another for brochures, and someone else for packaging. Soon, everything looks fragmented and disconnected.
                </p>
                <p>
                  Nexovio unites those requirements under one roof. We craft connected visual systems across digital and print materials so your customers immediately recognize and trust your brand wherever they encounter it—amplified by our{" "}
                  <Link href="/services/seo-digital-marketing" className="text-brand-cyan hover:underline font-medium">
                    SEO and digital marketing services
                  </Link>{" "}
                  to maximize organic reach.
                </p>
              </div>


              {/* 6 Value Proposition Pillars with Left Border Slide-Down Hover */}
              <div className="space-y-3 pt-2">
                {VALUE_PROPOSITION_PILLARS.map((vp) => (
                  <div
                    key={vp.title}
                    className="relative overflow-hidden group flex items-start gap-3.5 p-3.5 rounded-xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#070F22] hover:border-brand-cyan/60 hover:bg-brand-cyan/[0.04] hover:translate-x-2 transition-all duration-300 shadow-xs"
                  >
                    {/* Hover: Left Accent Border Slide Down */}
                    <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-brand-cyan via-brand-bright to-brand-electric scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />

                    <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5 group-hover:scale-125 group-hover:text-brand-bright transition-transform duration-300" />
                    <div>
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white group-hover:text-brand-cyan transition-colors">
                        {vp.title}
                      </h3>
                      <p className="text-xs text-muted leading-relaxed mt-0.5">
                        {vp.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Core Promise Callout Banner */}
              <div className="p-4 rounded-xl border border-brand-cyan/30 bg-brand-cyan/10 space-y-1 text-xs">
                <span className="font-bold text-brand-cyan block uppercase tracking-wider">
                  CORE PROMISE: PRACTICAL &amp; ON-BRAND VISUALS
                </span>
                <p className="text-slate-800 dark:text-slate-200 italic leading-relaxed">
                  We don&apos;t just create attractive graphics. We design visuals built around your target audience, commercial offer, and real-world production requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 3. END-TO-END SERVICES SECTION (9 CORE CAPABILITIES)               */}
      {/* Hover Effect: TOP BORDER ANIMATE LEFT TO RIGHT + ELEVATION LIFT   */}
      {/* ================================================================== */}
      <section className="bg-white dark:bg-background py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="OUR DESIGN SERVICES"
            title="Our Graphic"
            highlightText="Design Services"
            description="From daily social media creatives and irresistible food promotions to luxury product packaging, brochures, and executive investor pitch decks."
            align="center"
          />


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12">
            {GRAPHIC_SERVICES.map((srv, idx) => {
              const Icon = srv.icon;
              return (
                <Card
                  key={srv.id}
                  className="relative overflow-hidden group flex flex-col justify-between h-full bg-white dark:bg-[#071328] p-6 sm:p-7 border-slate-200/90 dark:border-white/10 hover:border-brand-cyan/60 dark:hover:border-brand-cyan/60 shadow-sm hover:shadow-[0_20px_45px_rgba(0,198,255,0.16)] hover:-translate-y-2 transition-all duration-400 rounded-2xl"
                >
                  {/* Top Border Animate Left to Right on Hover */}
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-cyan via-brand-bright to-brand-electric scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ease-out z-20" />

                  <div className="space-y-4">
                    {/* Visual Graphic Mockup Matched Per Card */}
                    <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-slate-200/90 dark:border-white/10 bg-slate-950 group-hover:border-brand-cyan/50 shadow-sm transition-all duration-500">
                      <Image
                        src={srv.image}
                        alt={srv.imageAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-[1.06] transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute top-2.5 right-2.5">
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-950/80 text-brand-cyan border border-brand-cyan/30 backdrop-blur-md">
                          {srv.number}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 pt-2">
                      <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan shrink-0 group-hover:scale-110 group-hover:bg-brand-cyan/20 transition-all duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono font-bold text-brand-cyan uppercase tracking-wider block">
                          Capability 0{idx + 1}
                        </span>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-brand-cyan transition-colors">
                          {srv.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-xs font-semibold text-brand-cyan/90 italic">
                      {srv.tagline}
                    </p>

                    <p className="text-xs sm:text-sm text-muted leading-relaxed">
                      {srv.description}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-white/10">
                      <span className="text-xs font-bold text-slate-800 dark:text-slate-200 block">
                        Included Deliverables &amp; Formats:
                      </span>
                      <ul className="space-y-1.5">
                        {srv.deliverables.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300 leading-snug"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-brand-cyan shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 dark:border-white/10 flex items-center justify-between text-[11px] font-mono text-muted">
                    <span className="text-slate-500 dark:text-slate-400 truncate max-w-[200px]">
                      {srv.keywordCluster}
                    </span>
                    <Link
                      href="/contact"
                      className="text-brand-cyan font-bold flex items-center gap-1 group-hover:translate-x-1.5 transition-transform shrink-0"
                    >
                      Inquire <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 4. INTERACTIVE GRAPHIC DESIGN DEMO GALLERY (12 SHOWCASE DESIGNS)   */}
      {/* Filter Tabs + Modal Zoom Preview                                   */}
      {/* ================================================================== */}
      <section id="gallery" className="section-blue py-16 sm:py-24 border-y border-slate-200/80 dark:border-blue-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="CREATIVE SHOWCASE GALLERY"
            title="Explore Our Graphic Design"
            highlightText="Demo Portfolio"
            description="Inspect a curated collection of real design assets crafted for restaurants, pizza parlors, tech startups, beauty brands, e-commerce, and corporate enterprises."
            align="center"
          />

          {/* Interactive Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-10">
            {[
              { id: "all", label: "All Work (12)" },
              { id: "food", label: "Restaurant & Pizza (3)" },
              { id: "branding", label: "Branding & Logos (2)" },
              { id: "social", label: "Social Media & Ads (3)" },
              { id: "packaging", label: "Packaging & Labels (2)" },
              { id: "print", label: "Print & Presentations (2)" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${activeFilter === tab.id
                  ? "bg-gradient-brand text-slate-950 font-bold shadow-[0_0_20px_rgba(0,198,255,0.4)] scale-105"
                  : "bg-white dark:bg-[#071328] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10 hover:border-brand-cyan/60 hover:text-brand-cyan"
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Gallery Grid (12 Items) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-10">
            {filteredGallery.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedGalleryItem(item)}
                className="group relative overflow-hidden rounded-2xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#071328] p-3 shadow-md hover:shadow-[0_20px_40px_rgba(0,198,255,0.2)] hover:border-brand-cyan/60 hover:-translate-y-1.5 transition-all duration-400 cursor-pointer flex flex-col"
              >
                {/* Image Container with Zoom */}
                <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-slate-950">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                  {/* Top Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-slate-950/85 text-brand-cyan border border-brand-cyan/40 backdrop-blur-md">
                      {item.categoryLabel}
                    </span>
                  </div>

                  {/* Hover Inspect Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 rounded-full bg-brand-cyan/90 text-slate-950 flex items-center justify-center shadow-glow transform scale-75 group-hover:scale-100 transition-transform duration-300">
                      <Maximize2 className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Card Meta Content */}
                <div className="p-3 pt-4 space-y-1.5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-brand-cyan transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-muted leading-relaxed line-clamp-2 mt-1">
                      {item.description}
                    </p>
                  </div>
                  <div className="pt-2 flex items-center justify-between text-xs font-semibold text-brand-cyan">
                    <span>Click to inspect preview</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Gallery Callout Action */}
          <div className="mt-14 p-6 sm:p-8 rounded-2xl border border-brand-cyan/30 bg-gradient-to-r from-brand-cyan/10 via-surface-elevated to-brand-electric/10 text-center max-w-4xl mx-auto space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-cyan block">
              CUSTOM DESIGN ON DEMAND
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              Need Something Unique For Your Brand?
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Whether you need an urgent weekend pizza combo promo, 15 social carousels, or an entire luxury packaging collection, we design around your exact specs and deadlines.
            </p>
            <div className="pt-2">
              <Button
                href="/contact"
                variant="primary"
                size="md"
                trackingName="graphic_design_gallery_quote"
                trackingLocation="gallery_section"
                icon={<ArrowRight className="w-4 h-4" />}
                className="shadow-glow font-bold"
              >
                Request Custom Design Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* MODAL LIGHTBOX FOR GALLERY INSPECTION                              */}
      {/* ================================================================== */}
      {selectedGalleryItem && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedGalleryItem(null)}
        >
          <div
            className="relative w-full max-w-3xl bg-[#081226] border border-brand-cyan/40 rounded-2xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.6)] animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Close Button */}
            <button
              type="button"
              onClick={() => setSelectedGalleryItem(null)}
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-slate-900/80 text-[#fff] hover:text-[#fff] hover:bg-slate-800 border border-white/10 flex items-center justify-center transition-all cursor-pointer"
              aria-label="Close Preview"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="relative w-full aspect-square sm:aspect-[4/3] bg-slate-950">
              <Image
                src={selectedGalleryItem.image}
                alt={selectedGalleryItem.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-contain"
                priority
              />
            </div>

            {/* Modal Footer Description */}
            <div className="p-6 bg-[#060D1D] border-t border-white/10 space-y-3">
              <div className="flex items-center justify-between gap-4">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-brand-cyan/15 text-brand-cyan border border-brand-cyan/30">
                  {selectedGalleryItem.categoryLabel}
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#fff]">
                {selectedGalleryItem.title}
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                {selectedGalleryItem.description}
              </p>
              <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs text-gray-300">
                  Available for print, social media, and digital advertising
                </span>
                <Button
                  href="/contact"
                  variant="primary"
                  size="sm"
                  trackingName="gallery_modal_inquire"
                  trackingLocation="gallery_modal"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Order This Design Style
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================================================================== */}
      {/* 5. EVERYDAY BUSINESS MARKETING DESIGN SUPPORT (FAST TURNAROUND)    */}
      {/* Interactive Quick Quotes Banner                                    */}
      {/* ================================================================== */}
      <section className="bg-white dark:bg-background py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="EVERYDAY MARKETING NEEDS"
            title="Design Services for"
            highlightText="Everyday Business Marketing"
            description="Sometimes you do not need a complete multi-month rebrand. You simply need a reliable designer who can handle the next crucial piece of content without delay."
            align="center"
          />

          {/* Interactive Quotes Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 mt-12">
            {EVERYDAY_REQUESTS.map((req, index) => (
              <div
                key={req}
                className="group flex items-center gap-3 p-4 rounded-xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#070F22] hover:border-brand-cyan/60 hover:bg-brand-cyan/[0.03] hover:translate-x-1.5 transition-all duration-300 cursor-default shadow-xs"
              >
                <div className="w-8 h-8 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan font-mono text-xs font-bold shrink-0 group-hover:scale-110 group-hover:bg-brand-cyan group-hover:text-slate-950 transition-all duration-300">
                  0{index + 1}
                </div>
                <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 italic leading-snug group-hover:text-brand-cyan transition-colors">
                  {req}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              Need individual project support or an ongoing monthly creative partner? We adapt our delivery to your speed.
            </p>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 6. GRAPHIC DESIGN FOR 15 BUSINESS TYPES & INDUSTRIES               */}
      {/* Hover Effect: Corner Radial Flare Spotlight + Icon Rotate & Bounce */}
      {/* ================================================================== */}
      <section className="section-blue py-16 sm:py-24 border-y border-slate-200/80 dark:border-blue-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="INDUSTRY SPECIALIZATIONS"
            title="Graphic Design for Different"
            highlightText="Types of Businesses"
            description="Graphic design is not one-size-fits-all. A neighborhood pizza parlor requires a completely different visual strategy than an enterprise SaaS platform or a luxury cosmetic brand."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {BUSINESS_TYPES.map((biz) => {
              const BizIcon = biz.icon;
              return (
                <div
                  key={biz.title}
                  className="relative overflow-hidden group p-6 rounded-2xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#070F22] hover:border-brand-cyan/60 hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(0,198,255,0.12)] transition-all duration-400 flex flex-col justify-between"
                >
                  {/* Hover: Top-Right Radial Glow Spotlight */}
                  <div className="absolute -top-12 -right-12 w-32 h-32 bg-brand-cyan/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div className="space-y-3 relative z-10">
                    <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan group-hover:scale-115 group-hover:rotate-6 group-hover:bg-brand-cyan/20 transition-all duration-300">
                      <BizIcon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-brand-cyan transition-colors">
                      {biz.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted leading-relaxed">
                      {biz.focus}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 7. FESTIVAL, SEASONAL & PROMOTIONAL DESIGN CAMPAIGNS               */}
      {/* Glowing Festive Banner Callout                                     */}
      {/* ================================================================== */}
      <section className="bg-white dark:bg-background py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-amber-500/30 bg-gradient-to-br from-[#0C1A14] via-[#071328] to-[#120B20] p-8 sm:p-12 lg:p-16 shadow-2xl">
            {/* Ambient Festive Glows */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-7 space-y-4 text-left">
                <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-amber-400/40 bg-amber-400/10 text-amber-300">
                  <Sparkles className="w-3.5 h-3.5" />
                  SEASONAL &amp; FESTIVAL CAMPAIGNS
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#fff] tracking-tight">
                  Festival, Seasonal &amp; Promotional Design
                </h2>

                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  Businesses experience significant revenue surges around festive dates and seasonal milestones. We design coordinated creative campaign sets across social media, print flyers, email newsletters, website banners, and in-store displays.
                </p>

                {/* Holiday Pills Grid */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {[
                    "Diwali Campaigns",
                    "Christmas & New Year",
                    "Black Friday & Cyber Monday",
                    "Valentine's Day Specials",
                    "Mother's & Father's Day",
                    "End-of-Season Megasales",
                    "Independence Day Offers",
                    "Store Openings & Anniversaries",
                  ].map((holiday) => (
                    <span
                      key={holiday}
                      className="px-3 py-1 rounded-lg text-xs font-medium bg-white/5 border border-white/10 text-amber-600"
                    >
                      &bull; {holiday}
                    </span>
                  ))}
                </div>

                <div className="pt-4">
                  <Button
                    href="/contact"
                    variant="primary"
                    size="md"
                    trackingName="graphic_design_festive_inquiry"
                    trackingLocation="festive_banner"
                    icon={<ArrowRight className="w-4 h-4" />}
                    className="shadow-glow font-bold"
                  >
                    Plan Your Next Seasonal Campaign
                  </Button>
                </div>
              </div>

              {/* Right Side Visual Graphic */}
              <div className="lg:col-span-5 relative">
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden border border-amber-400/30 shadow-[0_0_35px_rgba(251,191,36,0.2)] group">
                  <Image
                    src="/images/services/graphic-design/gallery-festival-promo.jpg"
                    alt="Festive holiday celebration sale promotional banner design with golden decorative accents"
                    fill
                    sizes="(max-width: 1024px) 100vw, 400px"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-slate-950/80 border border-amber-400/30 backdrop-blur-md text-[11px] text-amber-200 font-mono">
                    High-Converting Festive Visual Systems
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 8. OUR GRAPHIC DESIGN PROCESS (5-STAGE STRUCTURED GRID)            */}
      {/* Hover Effect: Light Sheen Sweep + Luminous Step Number Zoom       */}
      {/* ================================================================== */}
      <section className="section-blue py-16 sm:py-24 border-y border-slate-200/80 dark:border-blue-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="OUR WORKFLOW"
            title="Our Structured Graphic"
            highlightText="Design Process"
            description="A collaborative 5-stage design methodology ensuring your visuals communicate with precision, meet real production guidelines, and get delivered on time."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-12">
            {PROCESS_STEPS.map((st) => {
              const StepIcon = st.icon;
              return (
                <div
                  key={st.step}
                  className="relative overflow-hidden group p-6 rounded-2xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#070F22] hover:border-brand-cyan/60 hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(0,198,255,0.14)] transition-all duration-400 flex flex-col justify-between space-y-4"
                >
                  {/* Hover: Light Sheen Sweep Across Card */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent pointer-events-none" />

                  <div className="space-y-3 relative z-10">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-mono font-extrabold text-brand-cyan group-hover:scale-110 group-hover:text-brand-bright transition-all duration-300">
                        {st.step}
                      </span>
                      <div className="w-8 h-8 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan group-hover:rotate-[360deg] transition-transform duration-700">
                        <StepIcon className="w-4 h-4" />
                      </div>
                    </div>
                    <div>
                      <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold block mb-1">
                        Phase: {st.phase}
                      </span>
                      <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-brand-cyan transition-colors">
                        {st.title}
                      </h3>
                    </div>
                    <p className="text-xs text-muted leading-relaxed">
                      {st.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 dark:border-white/10 flex items-center gap-1.5 text-[11px] font-mono text-brand-cyan relative z-10">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-bright shrink-0" />
                    <span className="truncate group-hover:text-white transition-colors">{st.deliverable}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 9. DELIVERABLES: WHAT YOU RECEIVE                                  */}
      {/* Hover Effect: Number Badge Inversion & Horizontal Text Slide       */}
      {/* ================================================================== */}
      <section className="bg-white dark:bg-background py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="PROJECT DELIVERABLES"
            title="What You Receive With Every"
            highlightText="Graphic Design Project"
            description="Clear, 100% production-ready vector assets, high-resolution print files, and editable digital templates ensuring complete brand ownership."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-12">
            {GRAPHIC_DELIVERABLES.map((deliv, index) => (
              <div
                key={deliv}
                className="group flex items-start gap-3.5 p-4 rounded-xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#071328] shadow-xs hover:border-brand-cyan/60 hover:bg-brand-cyan/[0.03] hover:translate-x-1.5 transition-all duration-300 cursor-default"
              >
                <div className="w-7 h-7 rounded-lg bg-brand-cyan/10 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan font-mono text-xs font-bold shrink-0 mt-0.5 group-hover:bg-brand-cyan group-hover:text-slate-950 group-hover:border-brand-cyan group-hover:scale-110 transition-all duration-300">
                  {index < 9 ? `0${index + 1}` : index + 1}
                </div>
                <p className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 leading-snug group-hover:text-slate-950 dark:group-hover:text-white transition-colors">
                  {deliv}
                </p>
              </div>
            ))}
          </div>

          {/* Full Ownership Callout */}
          <div className="mt-12 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#070F22] text-left">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-cyan block mb-1">
              FULL COMMERCIAL RIGHTS &bull; ZERO RESTRICTIONS
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2">
              Complete File Ownership &amp; Production Freedom
            </h3>
            <p className="text-xs sm:text-sm text-muted leading-relaxed">
              You own 100% of all approved designs, source vector files, and master deliverables. We don&apos;t hold files hostage or charge hidden licensing fees. You are free to print, distribute, and publish your assets anywhere in the world.
            </p>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 10. WHY BUSINESSES CHOOSE NEXOVIO FOR GRAPHIC DESIGN               */}
      {/* Hover Effect: Ambient Halo Glow + Floating Upward Icon             */}
      {/* ================================================================== */}
      <section className="section-blue py-16 sm:py-24 border-y border-slate-200/80 dark:border-blue-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="WHY NEXOVIO"
            title="Why Businesses Choose Nexovio"
            highlightText="For Graphic Design?"
            description="We combine marketing strategy, creative intuition, and rigorous production standards to produce designs that help you stand out and sell."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {WHY_NEXOVIO_ADVANTAGES.map((adv) => {
              const AdvIcon = adv.icon;
              return (
                <div
                  key={adv.title}
                  className="relative overflow-hidden group p-6 rounded-2xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#070F22] hover:border-brand-cyan/60 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(0,198,255,0.18)] transition-all duration-400 shadow-xs space-y-3"
                >
                  {/* Hover: Bottom Border Slide Right-to-Left */}
                  <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-gradient-to-l from-brand-cyan via-brand-bright to-brand-electric scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right ease-out pointer-events-none" />

                  {/* Hover: Ambient Halo Glow in Background */}
                  <div className="absolute inset-0 bg-radial-glow opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none" />

                  <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan group-hover:-translate-y-1.5 group-hover:scale-110 group-hover:bg-brand-cyan/25 transition-all duration-300 relative z-10">
                    <AdvIcon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-brand-cyan transition-colors relative z-10">
                    {adv.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted leading-relaxed relative z-10">
                    {adv.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Bottom Banner */}
          <div className="mt-12 p-6 sm:p-8 rounded-2xl border border-brand-cyan/30 bg-surface-elevated/90 text-left">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-cyan block mb-1">
              ONE DESIGN PARTNER FOR DIGITAL AND PRINT
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2">
              One Design Partner for Digital and Print
            </h3>
            <p className="text-sm text-muted leading-relaxed">
              Instead of scattering your graphic design across multiple disconnected freelance designers, Nexovio provides a centralized creative team. From your initial logo and corporate pitch deck to social media campaigns, pizza promo posters, and retail product packaging, we ensure consistent quality, rapid turnaround, and on-brand visual communication. We also offer dedicated{" "}
              <Link href="/agency-partnership" className="text-brand-cyan hover:underline font-medium">
                agency partnership
              </Link>{" "}
              programs for agencies needing white-label design bandwidth. Explore our{" "}
              <Link href="/case-studies" className="text-brand-cyan hover:underline font-medium">
                case studies
              </Link>{" "}
              and{" "}
              <Link href="/portfolio" className="text-brand-cyan hover:underline font-medium">
                portfolio
              </Link>{" "}
              to see our work in action.
            </p>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 11. COMPREHENSIVE FAQS                                             */}
      {/* ================================================================== */}
      <FaqSection
        variant="white"
        faqs={GRAPHIC_DESIGN_FAQS}
        badge="GRAPHIC DESIGN FAQ"
        title="Frequently Asked"
        highlightText="Questions"
        description="Clear answers regarding turnaround times, restaurant promos, packaging dielines, file formats, and ongoing monthly design support."
      />
    </div>
  );
}
