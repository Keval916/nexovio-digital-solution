import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Code2,
  CheckCircle2,
  Cpu,
  Layers,
  ShieldCheck,
  Zap,
  ArrowRight,
  Server,
  Database,
  Search,
  Map,
  Palette,
  Rocket,
  TrendingUp,
  Globe,
  Sparkles,
  Layout,
  Smartphone,
  Check,
  Building2,
  Users,
  Settings,
  Shield,
  HelpCircle,
  Briefcase,
  Layers3,
  Flame,
  LineChart,
  Lock,
  GitBranch,
  Terminal,
  ExternalLink,
  MessageSquare,
} from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { generatePageMetadata } from "@/lib/seo";
import { getServiceSchema } from "@/lib/schema";

export const metadata = generatePageMetadata({
  title: "Custom Website Development Services | Nexovio Digital Solutions",
  description:
    "Nexovio Digital Solutions provides custom website development services with responsive design, scalable architecture, SEO-friendly development, custom functionality and integrations.",
  keywords: [
    "custom website development",
    "custom website development services",
    "custom web development",
    "custom website development company",
    "website development services",
    "business website development",
    "responsive website development",
    "professional website development",
    "custom web design and development",
    "scalable website development",
    "SEO-friendly website development",
  ],
  path: "/services/web-development/custom-website-development",
});

// ==========================================
// DATA STRUCTURES
// ==========================================

const CONTROL_POINTS = [
  { title: "Website structure & navigation", icon: Layers },
  { title: "Brand presentation", icon: Palette },
  { title: "User experience", icon: Sparkles },
  { title: "Page layouts", icon: Layout },
  { title: "Content hierarchy", icon: Code2 },
  { title: "Conversion journeys", icon: TrendingUp },
  { title: "Custom functionality", icon: Cpu },
  { title: "Third-party integrations", icon: GitBranch },
  { title: "Mobile experiences", icon: Smartphone },
  { title: "SEO structure", icon: Search },
  { title: "Future improvements", icon: Rocket },
];

const MEANING_DIMENSIONS = [
  {
    title: "Business goals",
    question: "What should the website help your business achieve?",
    icon: TargetIcon,
  },
  {
    title: "Target audience",
    question: "Who will use the website and what information are they looking for?",
    icon: Users,
  },
  {
    title: "Customer journey",
    question: "What should visitors do after landing on your website?",
    icon: Map,
  },
  {
    title: "Brand identity",
    question: "How should your company look, feel, and communicate online?",
    icon: Palette,
  },
  {
    title: "Functionality",
    question: "What features, integrations, forms, tools, or workflows are required?",
    icon: Settings,
  },
  {
    title: "Future requirements",
    question: "How should the website accommodate new services, content, integrations, or features?",
    icon: Rocket,
  },
];

function TargetIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

const BUSINESS_NEEDS = [
  {
    type: "Business Websites",
    description:
      "Create a professional digital presence that clearly communicates your company, services, expertise, and value proposition.",
    icon: Building2,
  },
  {
    type: "Startup Websites",
    description:
      "Launch your startup with a flexible website that can evolve as your product, audience, and business model develop.",
    icon: Flame,
  },
  {
    type: "Corporate Websites",
    description:
      "Present your organization, capabilities, industries, leadership, locations, resources, and business information through a structured digital experience.",
    icon: Globe,
  },
  {
    type: "Service Business Websites",
    description:
      "Help potential customers understand your services, evaluate your expertise, and take the next step toward contacting your business.",
    icon: Briefcase,
  },
  {
    type: "Agency Websites",
    description:
      "Showcase your capabilities, portfolio, case studies, industries, services, and expertise through a distinctive website experience.",
    icon: Sparkles,
  },
  {
    type: "Professional Services Websites",
    description:
      "Create a credible online presence for consultants, advisors, financial services, legal services, healthcare businesses, education providers, and other professional organizations.",
    icon: ShieldCheck,
  },
  {
    type: "Technology Company Websites",
    description:
      "Present complex products and technical solutions in a clear and accessible way through structured content, interactive experiences, and modern interfaces.",
    icon: Cpu,
  },
];

const DIGITAL_EXPERIENCE_STEPS = [
  {
    name: "Discover",
    description: "Understand your business, audience, services, competitors, existing website, and project requirements.",
  },
  {
    name: "Structure",
    description: "Create a logical sitemap, navigation system, page hierarchy, and content structure.",
  },
  {
    name: "Experience",
    description: "Plan how visitors move through the website and how important information and calls to action are presented.",
  },
  {
    name: "Design",
    description: "Translate the strategy into a visual interface that reflects your brand and works across different screen sizes.",
  },
  {
    name: "Develop",
    description: "Build the website using an appropriate technology and maintainable development architecture.",
  },
  {
    name: "Optimize",
    description: "Test functionality, responsiveness, performance, accessibility considerations, and important user journeys.",
  },
  {
    name: "Launch",
    description: "Deploy the website and verify the production environment before making it available to your audience.",
  },
];

const CUSTOMER_THINKING = [
  {
    action: "Understand",
    detail: "Understand what your business does quickly without confusion.",
  },
  {
    action: "Explore",
    detail: "Explore the services or products that matter to them effortlessly.",
  },
  {
    action: "Trust",
    detail: "Trust your company through relevant information, proof, and professional presentation.",
  },
  {
    action: "Act",
    detail: "Act through clear and strategically placed calls to action.",
  },
];

const CUSTOM_FUNCTIONALITY = [
  "Advanced enquiry forms",
  "Multi-step forms",
  "Appointment and booking experiences",
  "Interactive calculators",
  "Custom search",
  "Advanced filtering",
  "Customer portals",
  "Membership functionality",
  "Location-based experiences",
  "Interactive content",
  "Resource libraries",
  "Custom dashboards",
  "Lead-generation workflows",
  "Third-party integrations",
  "Custom API connections",
];

const RESPONSIVE_POINTS = [
  "Mobile navigation",
  "Flexible layouts",
  "Touch-friendly interactions",
  "Responsive typography",
  "Image scaling",
  "Form usability",
  "Content hierarchy",
  "Mobile page performance",
];

const SEO_CONSIDERATIONS = [
  "Clean URL structures",
  "Logical heading hierarchy",
  "Semantic HTML",
  "Crawlable content",
  "Metadata support",
  "Internal linking",
  "Mobile responsiveness",
  "Image optimization",
  "Page performance",
  "Canonical URL support",
  "XML sitemap compatibility",
  "Structured content",
  "Search-friendly information architecture",
];

const PERFORMANCE_PILLARS = [
  {
    title: "Efficient Frontend",
    description:
      "We aim to keep page structures and assets efficient so unnecessary code and resources do not create avoidable performance issues.",
  },
  {
    title: "Optimized Media",
    description:
      "Images and other media are prepared and delivered appropriately for the page and device.",
  },
  {
    title: "Responsive Performance",
    description:
      "Mobile users should not have to load unnecessarily heavy desktop-oriented experiences.",
  },
  {
    title: "Technical Optimization",
    description:
      "We consider loading behavior, asset delivery, caching opportunities, code structure, and other relevant performance factors during development.",
  },
];

const TOOLS_INTEGRATIONS = [
  "Payment gateways",
  "CRM platforms",
  "Email marketing tools",
  "Analytics platforms",
  "Booking systems",
  "Communication tools",
  "Lead management platforms",
  "Social platforms",
  "Authentication services",
  "Third-party APIs",
  "Business applications",
];

const FUTURE_GROWTH = [
  "Additional service pages",
  "New content sections",
  "New business locations",
  "Customer accounts",
  "Additional integrations",
  "New forms and workflows",
  "E-commerce functionality",
  "Custom applications",
  "Marketing campaigns",
  "Additional languages",
  "New website features",
];

const SECURITY_PRACTICES = [
  "Secure authentication",
  "Access control",
  "Input validation",
  "Form security",
  "Secure API communication",
  "Dependency management",
  "Appropriate user permissions",
  "Secure deployment practices",
  "Backup considerations",
];

const PROCESS_9_STEPS = [
  {
    step: "01",
    title: "Discovery & Requirements",
    desc: "We start by understanding your business, target audience, website goals, required pages, functionality, integrations, content, and technical requirements.",
  },
  {
    step: "02",
    title: "Sitemap & Website Architecture",
    desc: "We organize your pages and content into a logical structure that makes navigation easier for users and provides a strong foundation for search visibility.",
  },
  {
    step: "03",
    title: "UX Planning",
    desc: "We map important customer journeys and determine how visitors should navigate, interact, and take action.",
  },
  {
    step: "04",
    title: "UI Design",
    desc: "We create the visual direction, layouts, components, responsive behavior, and interactions around your brand.",
  },
  {
    step: "05",
    title: "Custom Development",
    desc: "Our developers turn the approved experience into a functional website using technologies appropriate for the project.",
  },
  {
    step: "06",
    title: "Content & Technical Implementation",
    desc: "We implement website content, metadata, forms, integrations, media, tracking requirements, and other necessary functionality.",
  },
  {
    step: "07",
    title: "Quality Assurance",
    desc: "We test important pages and user journeys across screen sizes and supported browsers, checking functionality, responsiveness, links, forms, and integrations.",
  },
  {
    step: "08",
    title: "Launch & Deployment",
    desc: "After final approval, we deploy the website and perform production checks.",
  },
  {
    step: "09",
    title: "Post-Launch Improvements",
    desc: "After launch, your website can continue to evolve through new content, features, SEO improvements, performance work, and technical updates.",
  },
];

const TECH_STACK_GROUPS = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "JavaScript", "TypeScript", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    category: "CMS",
    items: ["WordPress", "Headless CMS", "Custom Content Management Solutions"],
  },
  {
    category: "Backend",
    items: ["Node.js", "PHP", "Database Systems (MySQL / PostgreSQL / MongoDB)"],
  },
  {
    category: "Integrations",
    items: [
      "REST APIs",
      "Third-Party APIs",
      "Payment Systems",
      "Analytics Platforms",
      "Marketing Platforms",
      "Authentication Services",
      "Business Tools",
    ],
  },
];

const DELIVERABLES_LIST = [
  "Custom website architecture",
  "Responsive UI implementation",
  "Business-focused page structure",
  "Custom functionality",
  "CMS integration where required",
  "API and third-party integrations",
  "SEO-friendly technical structure",
  "Performance considerations",
  "Form and lead-generation functionality",
  "Cross-device testing",
  "Production deployment",
  "Technical documentation where required",
  "Post-launch support options",
];

const REASONS_CHOOSE = [
  {
    title: "More Control",
    desc: "Your website structure, experience, functionality, and content can be designed around your business.",
  },
  {
    title: "Stronger Brand Experience",
    desc: "Create a digital experience that reflects your actual brand rather than looking like a standard template.",
  },
  {
    title: "Flexible Functionality",
    desc: "Add the functionality your business needs without being restricted to a predefined template structure.",
  },
  {
    title: "Better Customer Journeys",
    desc: "Structure content and interactions around the way your customers research, evaluate, and contact your business.",
  },
  {
    title: "Future Flexibility",
    desc: "Create a technical foundation that can support future improvements and integrations.",
  },
  {
    title: "Marketing Ready",
    desc: "Build a website that can support SEO, paid campaigns, content marketing, social media traffic, and other acquisition channels.",
  },
];

const INTERACTIVE_JOURNEY = [
  "Business Idea",
  "Strategy",
  "Sitemap",
  "UX",
  "UI Design",
  "Development",
  "Testing",
  "Launch",
  "Growth",
];

const WHEN_CHOOSE_CUSTOM = [
  "Your business has unique website requirements.",
  "A template cannot provide the experience you need.",
  "You require custom functionality.",
  "Your website needs multiple integrations.",
  "Your customer journey requires a specific structure.",
  "You want greater control over the design.",
  "You expect the website to grow over time.",
  "You need a more tailored digital experience.",
];

const PAGE_FAQS = [
  {
    question: "How much does custom website development cost?",
    answer:
      "The cost depends on the number of pages, design requirements, functionality, integrations, technology, content requirements, and overall project scope. We can define the requirements first and then provide a project-specific estimate.",
  },
  {
    question: "How long does it take to build a custom website?",
    answer:
      "Project timelines vary depending on complexity. A relatively straightforward business website will generally require less development time than a website with custom functionality, integrations, portals, or complex workflows.",
  },
  {
    question: "Is custom website development better than using a template?",
    answer:
      "They serve different purposes. Templates can be useful for businesses with straightforward requirements, while custom development provides greater control when the business requires a unique design, functionality, integrations, or customer journey.",
  },
  {
    question: "Can you redesign our existing website?",
    answer:
      "Yes. We can review an existing website, identify structural and UX opportunities, redesign the experience, and rebuild or improve the website according to the project requirements.",
  },
  {
    question: "Can you migrate our existing website?",
    answer:
      "Yes. Migration can include content, pages, media, URLs, redirects, functionality, and other relevant website elements depending on the existing platform and new technology.",
  },
  {
    question: "Will my custom website be mobile-friendly?",
    answer:
      "Yes. Responsive behavior should be considered throughout the design and development process so that the website works across different screen sizes.",
  },
  {
    question: "Can you integrate third-party services?",
    answer:
      "Yes. Depending on the platform and API availability, we can integrate services such as payment gateways, CRM systems, analytics, booking platforms, marketing tools, authentication systems, and other external applications.",
  },
  {
    question: "Will the website be SEO-friendly?",
    answer:
      "We build important technical SEO foundations into the development process, including page structure, headings, URLs, metadata support, responsive behavior, internal linking considerations, and performance considerations. Ongoing SEO requires continued content and optimization work.",
  },
  {
    question: "Can we add new features later?",
    answer:
      "Yes. A properly planned custom website can be extended with additional pages, functionality, integrations, and other features as your business requirements evolve.",
  },
  {
    question: "Do you provide website maintenance after launch?",
    answer:
      "Post-launch support and maintenance can be provided depending on the project and support requirements.",
  },
];

const INTERNAL_LINKS = [
  { name: "Web Development Overview", url: "/services/web-development" },
  { name: "WordPress Development", url: "/services/web-development#wordpress" },
  { name: "React / Next.js Development", url: "/services/web-development#react-nextjs" },
  { name: "E-commerce Development", url: "/services/web-development#ecommerce" },
  { name: "Web Application Development", url: "/services/web-development#web-apps" },
  { name: "API Development & Integration", url: "/services/web-development#api-integrations" },
  { name: "SEO & Digital Marketing", url: "/services/seo-digital-marketing" },
  { name: "UI/UX Design Services", url: "/services/ui-ux-design" },
];

export default function CustomWebsiteDevelopmentPage() {
  const pageSchema = getServiceSchema({
    name: "Custom Website Development Services",
    description:
      "Nexovio Digital Solutions provides custom website development services with responsive design, scalable architecture, SEO-friendly development, custom functionality and integrations.",
    url: "/services/web-development/custom-website-development",
    serviceType: "CustomWebsiteDevelopment",
  });

  return (
    <div className="pt-24 pb-14 bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Trail */}
        <Breadcrumbs
          items={[
            { name: "Services", url: "/services" },
            { name: "Web Development", url: "/services/web-development" },
            {
              name: "Custom Website Development",
              url: "/services/web-development/custom-website-development",
            },
          ]}
        />

        {/* HERO BANNER SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-20 sm:mb-24">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-brand-cyan/30 bg-brand-cyan/10 text-brand-cyan mb-2">
              Custom Website Development
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
              Custom Website Development{" "}
              <span className="bg-gradient-brand bg-clip-text text-transparent">
                Built Around Your Business
              </span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-muted leading-relaxed">
              Your website should do more than present information. It should communicate your brand, guide visitors, generate enquiries, support your marketing, and give your business a strong digital foundation.
            </p>
            <p className="text-sm sm:text-base text-muted-light leading-relaxed">
              Nexovio Digital Solutions provides custom website development services for businesses that need a website designed and developed around their specific goals, audience, content, functionality, and future plans.
            </p>
            <p className="text-xs sm:text-sm text-muted-dark leading-relaxed">
              From a professional business website to a complex, feature-rich digital experience, we combine thoughtful UX, modern development, responsive design, technical SEO foundations, and scalable architecture to create websites built for real business needs.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                trackingName="custom_web_dev_start_project"
                trackingLocation="hero"
                icon={<ArrowRight className="w-4 h-4" />}
                className="shadow-glow"
              >
                Start Your Website Project
              </Button>
              <Button
                href="/contact#schedule-call"
                variant="secondary"
                size="lg"
                trackingName="custom_web_dev_talk_team"
                trackingLocation="hero"
                icon={<MessageSquare className="w-4 h-4" />}
                className="hover:border-brand-cyan/40"
              >
                Talk to Our Team
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative w-full aspect-[16/11] rounded-2xl overflow-hidden border border-brand-cyan/30 bg-[#060D1A] shadow-2xl group">
              <Image
                src="/images/services/web-development-mockup.svg"
                alt="Custom Website Development Architecture by Nexovio"
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                priority
              />
              <div className="absolute top-3 left-3 text-[10px] font-mono uppercase px-2.5 py-1 rounded bg-black/80 text-brand-cyan border border-brand-cyan/30 backdrop-blur-sm">
                Bespoke Architecture
              </div>
              <div className="absolute bottom-3 right-3 text-[10px] font-mono px-2.5 py-1 rounded bg-emerald-950/80 text-emerald-400 border border-emerald-500/30 backdrop-blur-sm">
                SEO &amp; High-Performance Ready
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 1: YOUR BUSINESS ISN'T A TEMPLATE */}
        <div className="mb-24 rounded-3xl border border-brand-cyan/20 bg-surface-elevated/70 p-8 sm:p-12 shadow-2xl">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono text-brand-cyan uppercase tracking-widest block mb-2">
              Beyond Boilerplate Templates
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Your Business Isn't a Template.{" "}
              <span className="bg-gradient-brand bg-clip-text text-transparent">
                Your Website Shouldn't Be Either.
              </span>
            </h2>
            <p className="text-sm sm:text-base text-muted leading-relaxed">
              Pre-built templates can help businesses launch quickly, but they can also introduce limitations when your website needs to represent a unique brand or support a specific customer journey. A custom website gives you greater control over:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {CONTROL_POINTS.map((item) => {
              const IconComp = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-4 rounded-xl border border-border-subtle bg-surface/60 flex items-center gap-3 hover:border-brand-cyan/40 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan shrink-0">
                    <IconComp className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-white">
                    {item.title}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="p-5 rounded-2xl border border-brand-bright/30 bg-brand-bright/10 text-center">
            <p className="text-sm sm:text-base font-bold text-white">
              Instead of adapting your business to a template, we build the website around your business.
            </p>
          </div>
        </div>

        {/* SECTION 2: WHAT DOES CUSTOM WEBSITE DEVELOPMENT MEAN? */}
        <div className="mb-24">
          <SectionHeading
            badge="DEFINITION & STRATEGY"
            title="What Does Custom Website"
            highlightText="Development Mean?"
            description="Custom website development means creating a website specifically around your business requirements rather than relying entirely on a pre-designed website structure."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {MEANING_DIMENSIONS.map((dim) => {
              const IconComponent = dim.icon;
              return (
                <Card key={dim.title} className="p-6 bg-surface-elevated/70">
                  <div className="w-10 h-10 rounded-xl bg-brand-bright/10 border border-brand-bright/20 flex items-center justify-center text-brand-cyan mb-4">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{dim.title}</h3>
                  <p className="text-xs sm:text-sm text-muted leading-relaxed">
                    {dim.question}
                  </p>
                </Card>
              );
            })}
          </div>

          <div className="rounded-xl border border-border-subtle bg-surface/80 p-6 text-center max-w-3xl mx-auto">
            <p className="text-xs sm:text-sm text-muted-light font-medium leading-relaxed">
              This approach allows the website to become a useful part of your business rather than simply an online brochure.
            </p>
          </div>
        </div>

        {/* SECTION 3: CUSTOM WEBSITES FOR DIFFERENT BUSINESS NEEDS */}
        <div className="mb-24">
          <SectionHeading
            badge="TAILORED SOLUTIONS"
            title="Custom Websites for"
            highlightText="Different Business Needs"
            description="Every business has a different reason for investing in a website. We develop custom websites around the specific requirements of each business model."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BUSINESS_NEEDS.map((item) => {
              const IconComp = item.icon;
              return (
                <Card key={item.type} className="p-6 bg-surface-elevated/70 hover:border-brand-cyan/40 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan mb-4">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.type}</h3>
                  <p className="text-xs sm:text-sm text-muted leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>

        {/* SECTION 4: FROM BUSINESS GOALS TO DIGITAL EXPERIENCE */}
        <div className="mb-24 rounded-3xl border border-border-subtle bg-surface-elevated/70 p-8 sm:p-12">
          <SectionHeading
            badge="METHODOLOGY"
            title="From Business Goals to a"
            highlightText="Clear Digital Experience"
            description="A successful website starts before development begins. We first look at what the website needs to accomplish and then structure the experience around those objectives."
            align="center"
            className="mb-10"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {DIGITAL_EXPERIENCE_STEPS.map((step, idx) => (
              <div
                key={step.name}
                className="p-5 rounded-xl border border-border-subtle bg-surface/60 space-y-2 hover:border-brand-cyan/35 transition-colors"
              >
                <span className="text-xs font-mono font-bold text-brand-cyan">
                  STAGE 0{idx + 1}
                </span>
                <h3 className="text-base font-bold text-white">{step.name}</h3>
                <p className="text-xs text-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 5: DESIGN AROUND HOW CUSTOMERS THINK */}
        <div className="mb-24 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-mono text-brand-cyan uppercase tracking-widest block">
              UX Psychology
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              Design Around the Way Your{" "}
              <span className="bg-gradient-brand bg-clip-text text-transparent">
                Customers Think
              </span>
            </h2>
            <p className="text-sm text-muted leading-relaxed">
              A beautiful website is not enough if visitors cannot quickly understand what you offer. We focus on creating interfaces where users can easily:
            </p>
            <div className="space-y-3 pt-2">
              {CUSTOMER_THINKING.map((pillar) => (
                <div key={pillar.action} className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-brand-cyan/15 text-brand-cyan flex items-center justify-center shrink-0 text-xs font-bold font-mono mt-0.5">
                    {pillar.action[0]}
                  </div>
                  <div>
                    <span className="text-sm font-bold text-white block">
                      {pillar.action}
                    </span>
                    <span className="text-xs text-muted leading-relaxed">
                      {pillar.detail}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs font-medium text-brand-bright pt-2">
              This creates a website experience that connects design with business objectives.
            </p>
          </div>

          <div className="lg:col-span-6 bg-surface-elevated/80 rounded-3xl border border-border-subtle p-8 space-y-4">
            <h3 className="text-lg font-bold text-white uppercase tracking-wider border-b border-white/10 pb-3">
              Core Customer Journey Checkpoints
            </h3>
            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-surface/70 border border-white/5 space-y-1">
                <span className="text-xs font-bold text-brand-cyan block">1. Immediate Value Clarity</span>
                <p className="text-xs text-muted">Clear headline positioning and visual context within 3 seconds of landing.</p>
              </div>
              <div className="p-4 rounded-xl bg-surface/70 border border-white/5 space-y-1">
                <span className="text-xs font-bold text-brand-cyan block">2. Frictionless Navigation</span>
                <p className="text-xs text-muted">Intuitive sitemap hierarchy enabling visitors to reach desired services in 2 clicks.</p>
              </div>
              <div className="p-4 rounded-xl bg-surface/70 border border-white/5 space-y-1">
                <span className="text-xs font-bold text-brand-cyan block">3. Social Proof & Trust Signals</span>
                <p className="text-xs text-muted">Contextual case studies, client testimonials, and security certifications.</p>
              </div>
              <div className="p-4 rounded-xl bg-surface/70 border border-white/5 space-y-1">
                <span className="text-xs font-bold text-brand-cyan block">4. Strategic Lead Conversion</span>
                <p className="text-xs text-muted">High-converting call-to-action buttons and accessible contact forms.</p>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 6: CUSTOM FUNCTIONALITY WHEN YOUR BUSINESS NEEDS MORE */}
        <div className="mb-24">
          <SectionHeading
            badge="EXTENSIBLE FEATURES"
            title="Custom Functionality When Your"
            highlightText="Business Needs More"
            description="Your website may require functionality that doesn't fit into a standard template. We can develop custom features around your exact requirements."
            align="center"
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 mb-6">
            {CUSTOM_FUNCTIONALITY.map((func) => (
              <div
                key={func}
                className="p-3.5 rounded-xl border border-border-subtle bg-surface-elevated/70 text-center hover:border-brand-cyan/40 transition-colors"
              >
                <span className="text-xs font-semibold text-white block">{func}</span>
              </div>
            ))}
          </div>

          <p className="text-xs sm:text-sm text-center text-muted max-w-2xl mx-auto">
            The functionality is planned according to the actual purpose of your website rather than adding unnecessary features.
          </p>
        </div>

        {/* SECTION 7 & 8: RESPONSIVE & BUILT WITH SEO IN MIND */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          {/* Responsive */}
          <Card className="p-8 bg-surface-elevated/70 space-y-6">
            <div>
              <span className="text-xs font-mono text-brand-cyan uppercase tracking-widest block mb-1">
                Multi-Device Perfection
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Responsive Website Development
              </h3>
              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                Your customers may discover your business from a desktop, tablet, smartphone, or another device. Your website should provide a consistent experience regardless of screen size.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              {RESPONSIVE_POINTS.map((pt) => (
                <div key={pt} className="flex items-center gap-2 p-2.5 rounded-lg bg-surface/60 border border-white/5">
                  <Smartphone className="w-3.5 h-3.5 text-brand-cyan shrink-0" />
                  <span className="text-xs font-medium text-white">{pt}</span>
                </div>
              ))}
            </div>

            <p className="text-xs text-brand-bright font-medium pt-2 border-t border-white/5">
              The goal is to make the experience feel intentionally designed for every device rather than simply shrinking a desktop layout.
            </p>
          </Card>

          {/* Built With SEO in Mind */}
          <Card className="p-8 bg-surface-elevated/70 space-y-6">
            <div>
              <span className="text-xs font-mono text-brand-cyan uppercase tracking-widest block mb-1">
                Search Engine Ready
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Built With SEO in Mind
              </h3>
              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                A custom website should provide a strong technical foundation for your SEO strategy. We structure websites with important search-engine considerations in mind.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs text-muted-light max-h-56 overflow-y-auto pr-1">
              {SEO_CONSIDERATIONS.map((seo) => (
                <div key={seo} className="flex items-start gap-2 p-2 rounded bg-surface/40">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-cyan shrink-0 mt-0.5" />
                  <span>{seo}</span>
                </div>
              ))}
            </div>

            <p className="text-xs text-muted italic border-t border-white/5 pt-2">
              SEO does not end with development. Content strategy, keyword targeting, authority building, and ongoing optimization are separate parts of a broader SEO strategy.
            </p>
          </Card>
        </div>



        {/* SECTION 13: 9-STEP DEVELOPMENT PROCESS */}
        <div className="mb-24 rounded-3xl border border-border-subtle bg-surface-elevated/80 p-8 sm:p-12">
          <SectionHeading
            badge="STRUCTURED WORKFLOW"
            title="A Development Process Built Around"
            highlightText="Your Requirements"
            description="Our step-by-step roadmap ensures total clarity, risk reduction, and quality control from discovery to launch."
            align="center"
            className="mb-10"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PROCESS_9_STEPS.map((s) => (
              <div
                key={s.step}
                className="p-6 rounded-2xl border border-border-subtle bg-surface/60 space-y-3 hover:border-brand-cyan/40 transition-colors"
              >
                <span className="text-2xl font-mono font-bold text-brand-cyan/40">
                  {s.step}
                </span>
                <h3 className="text-base font-bold text-white">{s.title}</h3>
                <p className="text-xs text-muted leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 14: TECHNOLOGY BASED ON THE PROJECT */}
        <div className="mb-24 rounded-3xl border border-brand-cyan/20 bg-surface-elevated/70 p-8 sm:p-12">
          <SectionHeading
            badge="AGNOSTIC STACK"
            title="Technology Based on the Project,"
            highlightText="Not a One-Size-Fits-All Stack"
            description="Different websites require different technologies. We select the technology stack based on functionality, performance, maintainability, scalability, budget, and long-term requirements."
            align="center"
            className="mb-10"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TECH_STACK_GROUPS.map((grp) => (
              <div key={grp.category} className="p-6 rounded-2xl border border-border-subtle bg-surface/60 space-y-3">
                <span className="text-xs font-mono uppercase tracking-widest text-brand-cyan block">
                  {grp.category}
                </span>
                <ul className="space-y-2">
                  {grp.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-white">
                      <Check className="w-3.5 h-3.5 text-brand-bright shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 15 & 16: DELIVERABLES & WHY BUSINESSES CHOOSE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-24">
          {/* Deliverables */}
          <div className="lg:col-span-5 bg-surface-elevated/80 rounded-3xl border border-border-subtle p-8 space-y-4">
            <h3 className="text-lg font-bold text-white uppercase tracking-wider border-b border-white/10 pb-3">
              What You Receive From a Custom Project
            </h3>
            <div className="space-y-2.5">
              {DELIVERABLES_LIST.map((del) => (
                <div key={del} className="flex items-start gap-2.5 text-xs text-muted-light">
                  <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                  <span>{del}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Why Businesses Choose */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-2xl font-bold text-white mb-4">
              Why Businesses Choose{" "}
              <span className="bg-gradient-brand bg-clip-text text-transparent">
                Custom Website Development
              </span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {REASONS_CHOOSE.map((reason) => (
                <Card key={reason.title} className="p-5 bg-surface-elevated/70">
                  <h4 className="text-sm font-bold text-white mb-1">{reason.title}</h4>
                  <p className="text-xs text-muted leading-relaxed">{reason.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>


        {/* SECTION 18: WHEN SHOULD YOU CHOOSE CUSTOM WEBSITE DEVELOPMENT? */}
        <div className="mb-24 rounded-3xl border border-border-subtle bg-surface-elevated/70 p-8 sm:p-12">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono text-brand-cyan uppercase tracking-widest block mb-2">
              Decision Guide
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              When Should You Choose{" "}
              <span className="bg-gradient-brand bg-clip-text text-transparent">
                Custom Website Development?
              </span>
            </h2>
            <p className="text-sm text-muted leading-relaxed">
              Custom development can be suitable when:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {WHEN_CHOOSE_CUSTOM.map((crit) => (
              <div key={crit} className="p-4 rounded-xl border border-white/5 bg-surface/60 flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                <span className="text-xs font-medium text-white">{crit}</span>
              </div>
            ))}
          </div>

          <div className="p-5 rounded-xl border border-white/10 bg-surface/40 text-xs text-muted-light">
            If your requirements are relatively simple, a CMS-based solution such as WordPress may also be appropriate. The right approach depends on the project rather than the technology being used for its own sake.
          </div>
        </div>


        {/* FREQUENTLY ASKED QUESTIONS SECTION */}
        <FaqSection
          faqs={PAGE_FAQS}
          badge="CUSTOM WEBSITE FAQ"
          title="Frequently Asked"
          highlightText="Questions"
        />

      </div>
    </div>
  );
}
