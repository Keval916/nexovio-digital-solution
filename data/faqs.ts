export interface GlobalFaq {
  question: string;
  answer: string;
  category?: string;
}

export const GLOBAL_FAQS: GlobalFaq[] = [
  {
    question: "How much does a custom digital solutions or web development project cost?",
    answer:
      "Project investments vary based on technical scope, architecture complexity, custom integrations, and design fidelity. Bespoke corporate web platforms typically range from structured entry builds to enterprise multi-system architectures. We provide detailed, transparent scope breakdowns and fixed-milestone estimates before any project kickoff.",
    category: "General",
  },
  {
    question: "How long does it take to design and launch a custom website?",
    answer:
      "A custom corporate website typically takes between 4 to 8 weeks from initial discovery to production launch, depending on the complexity of functionality and feedback review cycles. Larger web applications and complex SaaS platforms follow structured agile sprints tailored to your release roadmap.",
    category: "Process",
  },
  {
    question: "Can Nexovio redesign or modernize an existing website without losing SEO rankings?",
    answer:
      "Yes. SEO preservation is a top priority during any redesign. We map all existing URLs, execute strict 301 redirect architecture, preserve high-ranking on-page content structures, and ensure technical performance improvements that typically bolster long-term search crawlability.",
    category: "SEO",
  },
  {
    question: "Do you work with clients and companies remotely?",
    answer:
      "Yes. Nexovio works seamlessly with clients worldwide. We use asynchronous communication tools, interactive Figma design reviews, recorded video walkthroughs, and scheduled video consultations to keep you fully informed at every project milestone.",
    category: "Collaboration",
  },
  {
    question: "What information does Nexovio need to get started on a project?",
    answer:
      "To initiate our scoping process, we review your business goals, target audience, preferred timelines, reference websites or competitors you admire, and any existing brand assets or functional specifications. If you are starting from scratch, our discovery session will guide you step by step.",
    category: "Kickoff",
  },
  {
    question: "Who owns the code and intellectual property after project completion?",
    answer:
      "You do. Upon project completion and settlement of final milestones, full ownership of all source code, design assets, and intellectual property is transferred directly to your organization with zero proprietary platform lock-in.",
    category: "Legal",
  },
];
