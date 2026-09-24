export interface GlobalFaq {
  question: string;
  answer: string;
  category?: string;
}

export const GLOBAL_FAQS: GlobalFaq[] = [
  {
    question: "What services does Nexovio Digital Solutions offer?",
    answer:
      "Nexovio delivers web development, web design, UI/UX design, mobile app development, SEO and digital marketing. The home page can also feature AI Solutions as a supported features set within these services.",
    category: "Services",
  },
  {
    question: "Is it possible to build a complete website with Nexovio rather than just using templates?",
    answer:
      "Yes. Nexovio is able to create bespoke website experiences that reflect a brand or business process, content hierarchy, integrations, and customer journey - and that doesn’t only mean pre-built templates.",
    category: "Custom Websites",
  },
  {
    question: "Can you build web applications and SaaS products?",
    answer:
      "Yes. These include modern web applications, client portals, dashboards, business tooling and SaaS-centric experiences.",
    category: "SaaS & Web Apps",
  },
  {
    question: "Do you provide mobile app development?",
    answer:
      "Yes. Nexovio delivers mobile application development for iOS and Android including cross platform development, mobile UX, APIs user authentication, notifications and support for deployment.",
    category: "Mobile Apps",
  },
  {
    question: "Do you provide SEO or digital marketing?",
    answer:
      "Yes. Technical seo plug-ins Nexovio provides technical SEO, search-intent content strategy, on-page optimization, analytics/tracking and digital marketing services.",
    category: "SEO & Growth",
  },
  {
    question: "What AI solutions do you offer?",
    answer:
      "The home can feature AI development, generative AI development, AI agents, AI chatbots, AI automation, AI web and app development, AI search & RAG, AI API and model integration, AI recommendation solutions, and tailor-made AI solutions.",
    category: "AI Solutions",
  },
  {
    question: "Will there be separate AI service pages?",
    answer:
      "No this way. Recommended homepage approach: a robust AI Solutions First. Specific AI pages could be added at some point when the individual capabilities are mature enough with original content, use cases, proof, and other supporting resources.",
    category: "Strategy",
  },
  {
    question: "Can you redesign an existing website or product?",
    answer:
      "Yes. Nexovio offers support for website redesign, UI/UX enhancement, performance optimization, technical modernization, SEO-friendly migrations and even wider digital product advancement.",
    category: "Modernization",
  },
  {
    question: "How does Nexovio approach a new project?",
    answer:
      "The homepage sells a straightforward path: learn the business and its users, scope the work, design the experience, build the solution, test it, ship it, and use real-world feedback and data to improve it.",
    category: "Process",
  },
  {
    question: "How do you handle AI responsibly?",
    answer:
      "AI initiatives need to be associated with a well-defined business use, vetted data sources, appropriate model selections, access controls, and suitable validation. The right approach varies by use case and risk profile.",
    category: "Responsible AI",
  },
];
