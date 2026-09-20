export interface GlobalFaq {
  question: string;
  answer: string;
  category?: string;
}

export const GLOBAL_FAQS: GlobalFaq[] = [
  {
    question: "What services does Nexovio Digital Solutions provide?",
    answer:
      "Nexovio web development, web design, UI/UX design, mobile app development, SEO and digital marketing services. We can take on individual projects or combine several services into a full digital solution.",
    category: "Services",
  },
  {
    question: "How do you approach a new website project?",
    answer:
      "First, we learn about your business, your target audience, your goals and your needs. Then we plan the website structure, design the user experience, build the website, test it and get it ready for launch.",
    category: "Process",
  },
  {
    question: "Do you make custom websites or just use templates?",
    answer:
      "Yes. Instead of just relying on pre-built templates, we can build custom website experiences that truly reflect your brand, business needs, functionality and customer journey.",
    category: "Development",
  },
  {
    question: "Do you offer SEO with website development?",
    answer:
      "SEO can be incorporated into the website planning and development phase, including website structure, responsive design, technical foundations, performance and search-friendly content architecture. Separately, ongoing SEO can be managed as a service.",
    category: "SEO",
  },
  {
    question: "Can you redesign an existing website?",
    answer:
      "Yes. We can assess an existing website and its underlying structure, UI/UX, content presentation and technical experience and redesign it to better align with your business goals.",
    category: "Redesign",
  },
  {
    question: "Do you work with startups and small businesses?",
    answer:
      "Yes. Whether you’re introducing a fresh concept or enhancing an existing digital presence, projects can be tailored to the stage, objectives, and resources of your business.",
    category: "Clients",
  },
  {
    question: "Can you integrate third-party tools and APIs?",
    answer:
      "Yes. Based on the specific requirements of your project, your website or app can be connected with CRMs, payment processors, analytics services, marketing tools, business solutions or other third-party APIs.",
    category: "Integrations",
  },
  {
    question: "How long does website development take?",
    answer:
      "The timeline for the project is based on pages, features, integrations, content, and revisions. Once we know what you are looking for, we will give you a timeline for your specific project.",
    category: "Timelines",
  },
];

