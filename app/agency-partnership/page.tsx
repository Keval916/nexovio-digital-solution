import type { Metadata } from 'next';
import AgencyPartnershipClient from './AgencyPartnershipClient';
import { SITE_URL } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'White-Label Digital Services for Agencies | Nexovio',
  description:
    'Nexovio Digital Solutions provides white-label web development, software, mobile app, UI/UX, AI and technical SEO support for agencies that need a reliable technical delivery partner behind the scenes.',
  alternates: {
    canonical: `${SITE_URL}/agency-partnership`,
  },
  openGraph: {
    type: 'website',
    url: `${SITE_URL}/agency-partnership`,
    title: 'White-Label Digital Services for Agencies | Nexovio',
    description:
      'White-label web development, software, mobile, UI/UX, AI and technical SEO support for agencies.',
    siteName: 'Nexovio Digital Solutions',
    images: [
      {
        url: `${SITE_URL}/images/agency-partnership/agency-hero-team.jpg`,
        width: 1200,
        height: 630,
        alt: 'White-label digital services for agencies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'White-Label Digital Services for Agencies | Nexovio',
    description:
      'White-label web development, software, mobile, UI/UX, AI and technical SEO support for agencies.',
    images: [`${SITE_URL}/images/agency-partnership/agency-hero-team.jpg`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${SITE_URL}/agency-partnership#service`,
      name: 'White-Label Digital Services for Agencies',
      serviceType:
        'White-label web development, software development, mobile app development, UI/UX design, AI development and technical SEO',
      url: `${SITE_URL}/agency-partnership`,
      description:
        'Nexovio Digital Solutions provides white-label digital and technology services for agencies that need additional technical delivery support behind their brand.',
      provider: {
        '@type': 'Organization',
        name: 'Nexovio Digital Solutions',
        url: SITE_URL,
        logo: `${SITE_URL}/logo.svg`,
      },
      areaServed: [
        { '@type': 'Country', name: 'United States' },
        { '@type': 'Country', name: 'Canada' },
        { '@type': 'Country', name: 'United Kingdom' },
        { '@type': 'Country', name: 'Australia' },
        { '@type': 'Country', name: 'United Arab Emirates' },
        { '@type': 'Country', name: 'India' },
        { '@type': 'Place', name: 'Europe' },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${SITE_URL}/agency-partnership#breadcrumb`,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: `${SITE_URL}/`,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Agency Partnership',
          item: `${SITE_URL}/agency-partnership`,
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is a white-label digital services partner?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A white-label partner provides digital services behind your agency brand. Your agency manages the client relationship while the delivery partner handles the agreed technical work behind the scenes.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can Nexovio work behind our agency brand?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. We can work behind your agency as agreed, following your preferred communication process, project workflow and delivery structure.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can we outsource web development to Nexovio?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Agencies can work with Nexovio for custom websites, e-commerce, web applications, redesigns, integrations and ongoing development support.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you provide services beyond web development?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. The agency partnership model can cover web development, software development, mobile apps, UI/UX, AI solutions and technical SEO and performance work.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can we send our existing Figma designs?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. We can work from Figma files, wireframes, design systems and existing frontend specifications and turn them into responsive production interfaces.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you offer white-label mobile app development?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Mobile projects can include React Native or Flutter development, API integrations, authentication, payments, notifications and deployment support.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can Nexovio help with AI projects?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. We can support practical AI use cases such as chatbots, knowledge assistants, document search, workflow automation and AI-powered applications.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can we work on a project basis instead of hourly?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Projects with a defined scope can be handled through a project-based engagement with agreed deliverables and milestones.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can we use hourly support for overflow work?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Hourly support can be useful for development tasks, maintenance, integrations, bug fixes, feature work and additional project capacity.',
          },
        },
        {
          '@type': 'Question',
          name: 'Who manages communication with the client?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Normally, your agency remains the primary client-facing team. Technical participation can be arranged when it makes sense for the project and is agreed in advance.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can we sign an NDA before sharing sensitive project details?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. You can discuss NDA requirements before sharing confidential project or client information.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you work with international agencies?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. The partnership model is designed to support agencies working across different regions and time zones with practical communication and delivery arrangements.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can we start with one small project?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. A single project is a practical way for both teams to understand the workflow, communication style and technical requirements before discussing broader support.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do we get started?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Send your agency and project details through the partnership form. We can then review the requirements and discuss the most suitable way to work together.',
          },
        },
      ],
    },
  ],
};

export default function AgencyPartnershipPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <AgencyPartnershipClient />
    </>
  );
}
