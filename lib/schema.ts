import { SITE_NAME, SITE_URL, DEFAULT_OG_IMAGE } from "./seo";

export function getOrganizationSchema() {
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@nexoviodigitalsolutions.com";
  const contactPhone = process.env.NEXT_PUBLIC_PHONE || "+91-6351312234";

  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/images/brand/nexovio-digital-solutions-og-image.jpg`,
    image: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
    description:
      "Nexovio Digital Solutions provides strategy-led web development, modern web design, UI/UX architecture, brand graphic design, and digital marketing services.",
    email: contactEmail,
    telephone: contactPhone,
    priceRange: "$$$",
    areaServed: ["Worldwide", "North America", "Europe", "Asia"],
    knowsAbout: [
      "Custom Web Development",
      "React & Next.js Engineering",
      "UI/UX Design Systems",
      "E-Commerce Migration",
      "Technical SEO Audits",
      "Digital Marketing Campaigns",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: contactEmail,
      telephone: contactPhone,
      availableLanguage: ["English"],
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Digital & Engineering Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Custom Web Development",
            url: `${SITE_URL}/services/web-development`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Professional Web Design",
            url: `${SITE_URL}/services/web-design`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "UI/UX Design Systems",
            url: `${SITE_URL}/services/ui-ux-design`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Brand Graphic Design",
            url: `${SITE_URL}/services/graphic-design`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Digital Marketing & SEO",
            url: `${SITE_URL}/services/digital-marketing`,
          },
        },
      ],
    },
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    image: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
    description:
      "Modern digital experiences built to move your business forward through custom web development, UI/UX design, and digital marketing.",
  };
}

export function getAboutPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: `About Us | ${SITE_NAME}`,
    url: `${SITE_URL}/about`,
    image: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
    description:
      "Learn why Nexovio Digital Solutions exists, our software engineering philosophy, core values, and collaboration methodology.",
    mainEntity: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/images/brand/nexovio-digital-solutions-og-image.jpg`,
      image: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
    },
  };
}

export function getContactPageSchema() {
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@nexoviodigitalsolutions.com";
  const contactPhone = process.env.NEXT_PUBLIC_PHONE || "+91-6351312234";

  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: `Contact Us & Project Consultation | ${SITE_NAME}`,
    url: `${SITE_URL}/contact`,
    image: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
    description:
      "Initiate a project consultation with Nexovio Digital Solutions for custom web development, UI/UX design, or technical SEO.",
    mainEntity: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/images/brand/nexovio-digital-solutions-og-image.jpg`,
      image: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: contactEmail,
        ...(contactPhone ? { telephone: contactPhone } : {}),
      },
    },
  };
}

export function getCollectionPageSchema(name: string, description: string, url: string, image?: string) {
  const fullUrl = url.startsWith("http") ? url : `${SITE_URL}${url}`;
  const fullImageUrl = image
    ? (image.startsWith("http") ? image : `${SITE_URL}${image}`)
    : `${SITE_URL}${DEFAULT_OG_IMAGE}`;

  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${name} | ${SITE_NAME}`,
    url: fullUrl,
    image: fullImageUrl,
    description,
  };
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function getBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${SITE_URL}${item.url}`,
    })),
  };
}

export interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
  serviceType: string;
  image?: string;
}

export function getServiceSchema({ name, description, url, serviceType, image }: ServiceSchemaProps) {
  const fullUrl = url.startsWith("http") ? url : `${SITE_URL}${url}`;
  const fullImageUrl = image
    ? (image.startsWith("http") ? image : `${SITE_URL}${image}`)
    : `${SITE_URL}${DEFAULT_OG_IMAGE}`;

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType,
    name,
    description,
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/images/brand/nexovio-digital-solutions-og-image.jpg`,
      image: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
    },
    url: fullUrl,
    image: fullImageUrl,
  };
}

export interface ArticleSchemaProps {
  title: string;
  description: string;
  url: string;
  image: string;
  publishedAt: string;
  updatedAt?: string;
  authorName?: string;
}

export function getArticleSchema({
  title,
  description,
  url,
  image,
  publishedAt,
  updatedAt,
  authorName = "Nexovio Editorial Team",
}: ArticleSchemaProps) {
  const fullUrl = url.startsWith("http") ? url : `${SITE_URL}${url}`;
  const fullImageUrl = image
    ? (image.startsWith("http") ? image : `${SITE_URL}${image}`)
    : `${SITE_URL}${DEFAULT_OG_IMAGE}`;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    url: fullUrl,
    image: fullImageUrl,
    datePublished: publishedAt,
    dateModified: updatedAt || publishedAt,
    author: {
      "@type": "Organization",
      name: authorName,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/brand/nexovio-digital-solutions-og-image.jpg`,
      },
      image: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": fullUrl,
    },
  };
}

export interface FaqItem {
  question: string;
  answer: string;
}

export function getFaqSchema(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
