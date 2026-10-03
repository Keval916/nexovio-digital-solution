/**
 * ============================================================================
 * PRICING PACKAGES CONFIGURATION
 * ============================================================================
 * You can easily change your prices, currency amounts, and features here!
 * Supported Currencies:
 *   - INR (₹)  -> Automatically shown for visitors from India
 *   - AED (AED)-> Automatically shown for visitors from UAE (United Arab Emirates)
 *   - USD ($)  -> Automatically shown for visitors outside India & UAE
 * ============================================================================
 */

export type SupportedCurrency = "USD" | "INR" | "AED";

export interface CurrencyPrice {
  symbol: string;
  amount: string;
  suffix?: string;
  display: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  isPopular?: boolean;
  pricing: {
    USD: CurrencyPrice;
    INR: CurrencyPrice;
    AED: CurrencyPrice;
  };
  features: string[];
  cta: {
    text: string;
    href: string;
  };
}

export const CURRENCY_CONFIG: Record<
  SupportedCurrency,
  { name: string; symbol: string; flag: string; code: SupportedCurrency }
> = {
  USD: { name: "US Dollar", symbol: "$", flag: "🇺🇸", code: "USD" },
  INR: { name: "Indian Rupee", symbol: "₹", flag: "🇮🇳", code: "INR" },
  AED: { name: "UAE Dirham", symbol: "AED ", flag: "🇦🇪", code: "AED" },
};

/**
 * Currency rules:
 * - India (IN) -> INR (₹)
 * - UAE (AE) -> AED
 * - Every other country / unknown / failed -> USD ($)
 */
export function getCurrencyForCountry(countryCode?: string | null): SupportedCurrency {
  if (!countryCode) return "USD";
  const code = countryCode.toUpperCase().trim();
  if (code === "IN") return "INR";
  if (code === "AE") return "AED";
  return "USD";
}

export const PRICING_PACKAGES: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    tagline: "Perfect for small businesses",
    pricing: {
      USD: { symbol: "$", amount: "149", suffix: "/project", display: "$149" },
      INR: { symbol: "₹", amount: "9,999", suffix: "/project", display: "₹9,999" },
      AED: { symbol: "AED ", amount: "549", suffix: "/project", display: "AED 549" },
    },
    features: [
      "5-Page Professional Website",
      "Responsive Mobile & Desktop Design",
      "Basic SEO Setup",
      "Contact Form & WhatsApp Integration",
      "Social Media Integration",
      "15-Day Support",
    ],
    cta: {
      text: "GET STARTED",
      href: "/contact?plan=starter",
    },
  },
  {
    id: "professional",
    name: "Professional",
    tagline: "For growing businesses",
    isPopular: true,
    pricing: {
      USD: { symbol: "$", amount: "399", suffix: "/project", display: "$399" },
      INR: { symbol: "₹", amount: "29,999", suffix: "/project", display: "₹29,999" },
      AED: { symbol: "AED ", amount: "1,499", suffix: "/project", display: "AED 1,499" },
    },
    features: [
      "Up to 10-Page Website",
      "Custom UI/UX Design",
      "Advanced SEO Setup",
      "CMS Integration",
      "Lead Generation Integration",
      "Google Analytics & Search Console",
      "3 Revision Rounds",
      "60-Day Support",
    ],
    cta: {
      text: "GET STARTED",
      href: "/contact?plan=professional",
    },
  },
  {
    id: "custom",
    name: "Custom",
    tagline: "Tailored solutions for complex business needs",
    pricing: {
      USD: { symbol: "", amount: "Custom", suffix: "", display: "Custom" },
      INR: { symbol: "", amount: "Custom", suffix: "", display: "Custom" },
      AED: { symbol: "", amount: "Custom", suffix: "", display: "Custom" },
    },
    features: [
      "Custom Website & Web Application Development",
      "Tailored UI/UX & Brand Experience",
      "E-commerce & Third-Party Integrations",
      "AI Solutions & Business Automation",
      "Custom API & System Integrations",
      "Scalable & Performance-Optimized Architecture",
      "Advanced Security & Technical Optimization",
      "Dedicated Project Support",
    ],
    cta: {
      text: "DISCUSS YOUR PROJECT",
      href: "/contact?plan=custom",
    },
  },
];
