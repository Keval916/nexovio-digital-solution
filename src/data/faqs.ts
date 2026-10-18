export interface GlobalFaq {
  question: string;
  answer: string;
  category?: string;
}

export const GLOBAL_FAQS: GlobalFaq[] = [
  {
    question: "What services does Nexovio Digital Solutions offer?",
    answer:
      "Nexovio delivers end-to-end digital engineering and growth solutions, including custom web development, UI/UX product design, mobile app development, SEO and digital marketing, and intelligent AI automation.",
    category: "Services",
  },
  {
    question: "Can you build a custom website tailored to our brand instead of using templates?",
    answer:
      "Yes. We design and engineer bespoke web experiences tailored to your business model, customer journeys, brand identity, and technical integrations—never generic off-the-shelf templates.",
    category: "Custom Websites",
  },
  {
    question: "Can you build web applications and SaaS products?",
    answer:
      "Yes. We engineer scalable web applications, client portals, internal dashboards, business workflow software, and multi-tenant SaaS platforms built with Next.js, Node.js, and modern cloud databases.",
    category: "SaaS & Web Apps",
  },
  {
    question: "Do you provide mobile app development?",
    answer:
      "Yes. We build high-performance mobile applications for iOS and Android using React Native and Flutter, complete with intuitive UI/UX, robust REST and GraphQL APIs, push notifications, and App Store deployment support.",
    category: "Mobile Apps",
  },
  {
    question: "Do you provide SEO and digital marketing services?",
    answer:
      "Yes. We provide comprehensive technical SEO audits, search-intent content strategy, on-page optimization, Core Web Vitals remediation, structured data implementation, and data-driven organic growth roadmaps.",
    category: "SEO & Growth",
  },
  {
    question: "What AI solutions do you provide?",
    answer:
      "We engineer production-ready AI solutions including autonomous AI agents, intelligent customer support chatbots, retrieval-augmented generation (RAG) search across enterprise documents, workflow automation, and custom model integrations.",
    category: "AI Solutions",
  },
  {
    question: "Can you build custom AI solutions tailored to our specific business workflows?",
    answer:
      "Yes. We design custom AI architectures tailored to your company's data, security requirements, and internal tooling. Our dedicated service offerings cover AI Agents, Chatbots, Generative AI, and Workflow Automation.",
    category: "AI Solutions",
  },
  {
    question: "Can you redesign or modernize an existing website or product?",
    answer:
      "Yes. We specialize in legacy system modernizations, UI/UX redesigns, performance optimization, and SEO-safe migrations that preserve your search engine indexation and customer historical data.",
    category: "Modernization",
  },
  {
    question: "How does Nexovio approach a new project?",
    answer:
      "We follow a disciplined 5-phase delivery framework: Discover & Audit (understand your business and goals), Scope & Architect (define technical specs and wireframes), Design & Prototype (Figma UX reviews), Build & Integrate (clean, scalable code), and Launch & Scale (zero-downtime deployment with observability).",
    category: "Process",
  },
  {
    question: "How do you handle AI safety, data privacy, and compliance?",
    answer:
      "We build AI solutions with strict data isolation, zero-retention foundation model APIs, role-based access control, and comprehensive audit logs so that your proprietary business data is never used to train public models.",
    category: "Responsible AI",
  },
];
