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
  "/portfolio",
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
  "/case-studies",
  "/case-studies/parts-connexion",
  "/case-studies/inside-injury",
  "/case-studies/infiniti-home-comfort",
  "/case-studies/fintech-mobile-app",
  "/case-studies/b2b-digital-platform",
  "/blog",
  "/blog/custom-web-development-vs-website-builders",
  "/blog/why-slow-websites-sabotage-lead-conversion",
  "/blog/technical-seo-checklist-for-modern-websites",
  "/blog/ai-agents-and-automation-web-applications",
  "/blog/headless-cms-architecture-scalability",
  "/blog/mastering-core-web-vitals-performance",
] as const;

export const EXCLUDED_FROM_SITEMAP: ReadonlySet<string> = new Set([]);
