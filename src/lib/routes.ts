/**
 * Single source of truth for all indexable application routes.
 * Follows the pattern established in verbix-design-work for route parity, sitemap generation, and SEO audits.
 */

export const ROUTES = [
  "/",
  "/about",
  "/agency-partnership",
  "/contact",
  "/pricing",
  "/schedule-a-call",
  "/privacy-policy",
  "/terms-and-conditions",
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
  "/case-studies",
  "/case-studies/parts-connexion",
  "/case-studies/inside-injury",
  "/case-studies/infiniti-home-comfort",
  "/case-studies/fintech-mobile-app",
  "/case-studies/b2b-digital-platform",
  "/case-studies/lumina-health-patient-experience",
  "/case-studies/pulse-logistics-organic-growth-engine",
  "/blog",
  "/blog/headless-cms-architecture-scalability",
  "/blog/mastering-core-web-vitals-performance",
  "/blog/ecommerce-solutions-for-businesses",
  "/blog/ai-automation-for-business",
  "/blog/customer-self-service-portal-business-guide",
] as const;

export const EXCLUDED_FROM_SITEMAP: ReadonlySet<string> = new Set([]);
