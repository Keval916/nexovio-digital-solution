export interface GlobalFaq {
  question: string;
  answer: string;
  category?: string;
}

export const GLOBAL_FAQS: GlobalFaq[] = [
  {
    question: "What services does Nexovio Digital Solutions provide?",
    answer:
      "Nexovio provides web development, web design, UI/UX design, mobile app development, SEO and digital marketing services. We can work on individual projects or combine multiple services into a complete digital solution.",
    category: "Services",
  },
  {
    question: "How do you approach a new website project?",
    answer:
      "We begin by understanding your business, target audience, goals and requirements. From there, we plan the website structure, design the user experience, develop the website, test it and prepare it for launch.",
    category: "Process",
  },
  {
    question: "Can you build a custom website instead of using a template?",
    answer:
      "Yes. We can create custom website experiences based on your brand, business requirements, functionality and customer journey rather than relying solely on pre-built templates.",
    category: "Development",
  },
  {
    question: "Do you provide SEO with website development?",
    answer:
      "SEO can be considered during the website planning and development process, including areas such as website structure, responsive design, technical foundations, performance and search-friendly content architecture. Ongoing SEO can also be handled as a separate service.",
    category: "SEO",
  },
  {
    question: "Can you redesign an existing website?",
    answer:
      "Yes. We can evaluate an existing website and redesign its structure, UI/UX, content presentation and technical experience based on your business objectives.",
    category: "Redesign",
  },
  {
    question: "Do you work with startups and small businesses?",
    answer:
      "Yes. Projects can be planned around the stage, goals and resources of the business, whether you're launching a new idea or improving an established digital presence.",
    category: "Clients",
  },
  {
    question: "Can you integrate third-party tools and APIs?",
    answer:
      "Yes. Depending on the project requirements, websites and applications can integrate with CRMs, payment gateways, analytics platforms, marketing tools, business systems and other third-party APIs.",
    category: "Integrations",
  },
  {
    question: "How long does website development take?",
    answer:
      "Project timelines depend on the number of pages, functionality, integrations, content requirements and feedback cycles. After understanding your requirements, we can provide a project-specific timeline.",
    category: "Timelines",
  },
];

