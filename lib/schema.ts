import { SITE_NAME, SITE_URL } from "./seo";

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/images/brand/nexovio-digital-solutions-logo.svg`,
    description:
      "Nexovio Digital Solutions provides strategy-led web development, modern web design, UI/UX architecture, brand graphic design, and digital marketing services.",
    sameAs: [],
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
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
    description:
      "Learn why Nexovio Digital Solutions exists, our software engineering philosophy, core values, and collaboration methodology.",
    mainEntity: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/images/brand/nexovio-digital-solutions-logo.svg`,
    },
  };
}

export function getContactPageSchema() {
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact@nexovio.com";
  const contactPhone = process.env.NEXT_PUBLIC_PHONE;

  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: `Contact Us & Project Consultation | ${SITE_NAME}`,
    url: `${SITE_URL}/contact`,
    description:
      "Initiate a project consultation with Nexovio Digital Solutions for custom web development, UI/UX design, or technical SEO.",
    mainEntity: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: contactEmail,
        ...(contactPhone ? { telephone: contactPhone } : {}),
      },
    },
  };
}

export function getCollectionPageSchema(name: string, description: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${name} | ${SITE_NAME}`,
    url: url.startsWith("http") ? url : `${SITE_URL}${url}`,
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
}

export function getServiceSchema({ name, description, url, serviceType }: ServiceSchemaProps) {
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
    },
    url: url.startsWith("http") ? url : `${SITE_URL}${url}`,
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
  const fullImageUrl = image.startsWith("http") ? image : `${SITE_URL}${image}`;

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
        url: `${SITE_URL}/images/brand/nexovio-digital-solutions-logo.svg`,
      },
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
