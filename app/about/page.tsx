import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Compass,
  Target,
  Eye,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Code2,
  Users,
  Sparkles,
  Cpu,
  Layers,
  Globe,
  Building2,
  Zap,
  Check,
  Search,
  Award,
  Terminal,
  Shield,
  HeartHandshake,
  TrendingUp,
  Workflow,
  Sliders,
  HelpCircle,
  Lightbulb,
  MessageSquare,
  BarChart3,
  Bot,
  Smartphone,
  Palette,
  Megaphone,
  XCircle,
  CheckSquare,
  ChevronRight,
} from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { FaqSection } from "@/components/sections/FaqSection";
import { generatePageMetadata } from "@/lib/seo";
import {
  getAboutPageSchema,
  getOrganizationSchema,
  getBreadcrumbSchema,
  getFaqSchema,
} from "@/lib/schema";

export const metadata = generatePageMetadata({
  title: "About Nexovio Digital Solutions | Web Development & Digital Solutions",
  description:
    "Learn about Nexovio Digital Solutions and our approach to web development, web design, UI/UX, mobile apps, SEO, digital marketing and practical digital solutions.",
  keywords: [
    "About Nexovio Digital Solutions",
    "web development company",
    "digital solutions company",
    "web design company",
    "website development company",
    "UI/UX design services",
    "mobile app development",
    "SEO services",
    "digital marketing services",
    "custom website development",
    "e-commerce development",
    "AI solutions",
  ],
  path: "/about",
});

// ==========================================
// DATA STRUCTURES FOR ABOUT PAGE
// ==========================================

const BIGGER_PICTURE = [
  {
    title: "Brand",
    subtitle: "Recognition & Perception",
    desc: "What people see, recognize, and remember about your organization.",
    icon: Sparkles,
  },
  {
    title: "Experience",
    subtitle: "User Journey & Flow",
    desc: "How people move through the digital journey and interact with your products.",
    icon: Eye,
  },
  {
    title: "Technology",
    subtitle: "Infrastructure & Engine",
    desc: "What makes the experience work seamlessly, reliably, and fast behind the scenes.",
    icon: Cpu,
  },
  {
    title: "Visibility",
    subtitle: "Discovery & Reach",
    desc: "How people discover the business organically through search and digital channels.",
    icon: Search,
  },
  {
    title: "Growth",
    subtitle: "Long-term Value",
    desc: "What happens after the first interaction to build continuous business momentum.",
    icon: TrendingUp,
  },
];

const MINDSET_PRINCIPLES = [
  {
    title: "Stay curious.",
    desc: "Keep looking beyond the obvious answer.",
  },
  {
    title: "Question assumptions.",
    desc: "Test whether the first idea is really the right one.",
  },
  {
    title: "Keep things useful.",
    desc: "Prefer value over unnecessary complexity.",
  },
  {
    title: "Build with intention.",
    desc: "Know why a feature, section, or decision exists.",
  },
  {
    title: "Improve continuously.",
    desc: "Treat progress as an ongoing process.",
  },
];

const PERSPECTIVES = [
  {
    title: "A simple website can be the right answer.",
    desc: "Not every business needs a complex platform.",
    icon: Globe,
  },
  {
    title: "A custom platform can be the right answer.",
    desc: "Some requirements genuinely call for deeper functionality.",
    icon: Code2,
  },
  {
    title: "Sometimes the answer is better UX.",
    desc: "Removing friction can create more value than adding features.",
    icon: Eye,
  },
  {
    title: "Sometimes it is better content.",
    desc: "Clarity can solve problems technology cannot.",
    icon: MessageSquare,
  },
  {
    title: "Sometimes it is SEO.",
    desc: "Being discoverable can matter more than adding another feature.",
    icon: Search,
  },
  {
    title: "Sometimes it is a combination.",
    desc: "The right solution can involve several disciplines.",
    icon: Layers,
  },
];

const CORE_VALUES = [
  {
    number: "01",
    title: "Clarity",
    desc: "People should not have to work hard to understand a business, product, service, or digital interface.",
  },
  {
    number: "02",
    title: "Curiosity",
    desc: "We stay interested in new ideas, tools, technologies, and better ways of solving problems.",
  },
  {
    number: "03",
    title: "Practicality",
    desc: "Good ideas matter, but they also need to work in the real world.",
  },
  {
    number: "04",
    title: "Care",
    desc: "Small details can change how a digital experience feels, so we pay attention to them.",
  },
  {
    number: "05",
    title: "Honesty",
    desc: "We prefer clear conversations and realistic recommendations over promises that only sound impressive.",
  },
  {
    number: "06",
    title: "Progress",
    desc: "A finished launch is not necessarily the end. Digital work can be refined, improved, and expanded.",
  },
];

const BUSINESS_MATTERS_TABLE = [
  {
    lookAt: "What you sell",
    whyItMatters: "Helps us understand the core value being communicated.",
  },
  {
    lookAt: "Who you serve",
    whyItMatters: "Shapes language, experience, and priorities.",
  },
  {
    lookAt: "How customers decide",
    whyItMatters: "Influences the digital journey.",
  },
  {
    lookAt: "What makes you different",
    whyItMatters: "Gives the brand a stronger point of view.",
  },
  {
    lookAt: "Where friction exists",
    whyItMatters: "Shows what may need to change.",
  },
  {
    lookAt: "Where you want to go",
    whyItMatters: "Helps prevent today’s solution from limiting tomorrow’s growth.",
  },
];

const JOURNEY_STAGES = [
  {
    title: "The Idea Stage",
    desc: "You know what you want to create but need help shaping the digital direction.",
    badge: "Strategy & Vision",
  },
  {
    title: "The Improvement Stage",
    desc: "You already have a website or product, but something is not working as well as it should.",
    badge: "Optimization & Fixes",
  },
  {
    title: "The Growth Stage",
    desc: "Your business is growing and your digital presence needs to catch up.",
    badge: "Scale & Expansion",
  },
  {
    title: "The Transformation Stage",
    desc: "You want to rethink how customers, content, systems, or technology work together.",
    badge: "Architecture Overhaul",
  },
  {
    title: "The Exploration Stage",
    desc: "You are evaluating newer possibilities such as AI, automation, or new digital experiences.",
    badge: "Emerging Tech & AI",
  },
];

const BETTER_QUESTIONS = [
  {
    q: "What are you trying to improve?",
    a: "Start with the outcome, not the tool.",
  },
  {
    q: "What is currently getting in the way?",
    a: "Identify the actual friction.",
  },
  {
    q: "Who is affected by the problem?",
    a: "Keep the people involved visible.",
  },
  {
    q: "What would a successful outcome look like?",
    a: "Define what good should mean.",
  },
  {
    q: "What needs to happen first?",
    a: "Turn a large idea into practical next steps.",
  },
  {
    q: "What might this need to become later?",
    a: "Keep future requirements in view.",
  },
];

const TECH_METRICS = [
  { title: "Faster", desc: "A better-performing digital experience." },
  { title: "Simpler", desc: "Less friction for customers or teams." },
  { title: "Smarter", desc: "More useful information or automation." },
  { title: "Connected", desc: "Better communication between digital systems." },
  { title: "Flexible", desc: "A platform that can adapt as requirements change." },
];

const DESIGN_ELEMENTS = [
  { title: "Typography", desc: "Supports readability and hierarchy." },
  { title: "Content", desc: "Gives the interface something meaningful to communicate." },
  { title: "Hierarchy", desc: "Helps people understand what matters first." },
  { title: "Space", desc: "Creates breathing room and makes information easier to scan." },
  { title: "Interaction", desc: "Shows users what they can do and what happens next." },
  { title: "Brand", desc: "Makes the experience feel connected to the business." },
];

const AI_APPROACH_STEPS = [
  {
    num: "01",
    title: "Find the problem",
    desc: "What is repetitive, difficult, slow, expensive, or hard to scale?",
  },
  {
    num: "02",
    title: "Explore the opportunity",
    desc: "Could AI realistically improve that part of the experience?",
  },
  {
    num: "03",
    title: "Evaluate the trade-offs",
    desc: "Consider costs, limitations, risks, data requirements, and user needs.",
  },
  {
    num: "04",
    title: "Build with purpose",
    desc: "Use AI where it provides clear value.",
  },
];

const RELATIONSHIP_VALUES = [
  {
    title: "We Listen",
    desc: "The people closest to the business often know things that cannot be found in a project document.",
  },
  {
    title: "We Explain",
    desc: "Recommendations are more useful when you understand why they are being made.",
  },
  {
    title: "We Challenge When Needed",
    desc: "Sometimes the best contribution is pointing out that the original idea can be improved.",
  },
  {
    title: "We Stay Flexible",
    desc: "Requirements can evolve as new information becomes available.",
  },
  {
    title: "We Keep the Goal Visible",
    desc: "Changes should still connect back to the outcome the project is trying to achieve.",
  },
];

const WORKING_STAGES = [
  {
    phase: "Beginning",
    title: "Understand the Need",
    desc: "A clear conversation about the business, the problem, and the desired outcome.",
  },
  {
    phase: "Middle",
    title: "Build With Context",
    desc: "Decisions are made with the wider experience in mind rather than treating each task in isolation.",
  },
  {
    phase: "End",
    title: "Create Something Useful",
    desc: "The final result should have a clear purpose for the people who use it and the business that owns it.",
  },
];

const LEAVE_BEHIND = [
  {
    rule: "We do not add complexity just to look advanced",
    desc: "Technology should serve a purpose.",
  },
  {
    rule: "We do not design for the portfolio alone",
    desc: "A website has to work for customers, not just look good in a showcase.",
  },
  {
    rule: "We do not treat SEO as a keyword exercise",
    desc: "Useful content and sound website structure matter more than stuffing repeated phrases into a page.",
  },
  {
    rule: "We do not assume one solution fits everyone",
    desc: "Different businesses need different approaches.",
  },
  {
    rule: "We do not stop thinking at launch",
    desc: "Digital experiences can be improved over time.",
  },
  {
    rule: "We do not believe more always means better",
    desc: "Sometimes simplifying something creates more value than adding another feature.",
  },
];

const CAPABILITIES = [
  {
    category: "CREATE",
    items: "Web Design • UI/UX • Graphic Design • Brand Assets",
    color: "from-cyan-500/20 to-blue-500/10 border-cyan-500/30 text-cyan-400",
  },
  {
    category: "BUILD",
    items: "Web Development • E-commerce • Web Applications • Mobile Apps",
    color: "from-blue-500/20 to-indigo-500/10 border-blue-500/30 text-blue-400",
  },
  {
    category: "GROW",
    items: "SEO • Digital Marketing • Content • Optimization",
    color: "from-teal-500/20 to-emerald-500/10 border-teal-500/30 text-teal-400",
  },
  {
    category: "CONNECT / EXPLORE",
    items: "APIs • AI • Automation • Emerging Digital Solutions",
    color: "from-sky-500/20 to-cyan-500/10 border-sky-500/30 text-sky-400",
  },
];

const PROBLEMS_WE_ENJOY = [
  "A website that no longer reflects the business.",
  "A digital journey that feels unnecessarily complicated.",
  "A product that needs clearer communication.",
  "A process that is still too manual.",
  "A business that has grown faster than its digital presence.",
  "A new idea that needs somewhere to start.",
];

const WHY_BUSINESSES_COME = [
  {
    quote: "“Our website no longer represents us.”",
    answer: "We help rethink the experience around the current business.",
  },
  {
    quote: "“We need to launch something new.”",
    answer: "We help turn an idea into a practical digital experience.",
  },
  {
    quote: "“Our customers are struggling to find what they need.”",
    answer: "We help simplify information and user journeys.",
  },
  {
    quote: "“We are getting traffic but not enough action.”",
    answer: "We look at the experience between discovery and conversion.",
  },
  {
    quote: "“Our digital systems do not fit together.”",
    answer: "We explore practical ways to connect tools and workflows.",
  },
  {
    quote: "“We want to understand where AI can help.”",
    answer: "We look at the opportunity without assuming AI is the answer to everything.",
  },
];

const SUCCESS_METRICS = {
  business: [
    "Clearer positioning",
    "Stronger digital presence",
    "More efficient workflows",
    "Better discoverability",
    "Easier management",
    "Room to grow",
  ],
  customers: [
    "Easier navigation",
    "Better understanding",
    "Less friction",
    "Faster access to information",
    "More confidence",
    "Better overall experience",
  ],
};

const NEXOVIO_AT_A_GLANCE = [
  { capability: "Web Development", focus: "Websites, e-commerce and digital platforms" },
  { capability: "Web Design", focus: "Visual experiences and website interfaces" },
  { capability: "UI/UX", focus: "Usability, journeys and interaction" },
  { capability: "Mobile Apps", focus: "Mobile digital experiences" },
  { capability: "SEO", focus: "Search visibility and organic growth" },
  { capability: "Digital Marketing", focus: "Digital acquisition and engagement" },
  { capability: "Graphic Design", focus: "Visual communication and brand assets" },
  { capability: "AI Solutions", focus: "Practical AI-powered experiences" },
];

const ABOUT_FAQS = [
  {
    question: "What is Nexovio Digital Solutions?",
    answer:
      "Nexovio Digital Solutions is a digital solutions company focused on web development, web design, UI/UX, mobile applications, SEO, digital marketing, graphic design, and practical emerging technology solutions.",
  },
  {
    question: "What type of businesses does Nexovio work with?",
    answer:
      "We can work with startups, growing businesses, e-commerce brands, SaaS and technology companies, professional services, and other organizations with digital requirements.",
  },
  {
    question: "Does Nexovio only build new websites?",
    answer:
      "No. Projects can involve new websites, redesigns, digital improvements, applications, SEO, marketing, integrations, or other digital requirements.",
  },
  {
    question: "Does Nexovio provide both design and development?",
    answer:
      "Yes. Web design and web development can be handled together, which allows the user experience and technical implementation to be considered together.",
  },
  {
    question: "Does Nexovio provide SEO services?",
    answer:
      "Yes. SEO and digital marketing are part of Nexovio’s digital capabilities, alongside website design and development.",
  },
  {
    question: "Is Nexovio exploring AI solutions?",
    answer:
      "Yes. We are interested in practical AI applications that can improve digital experiences, automation, customer interactions, or business workflows where the use case makes sense.",
  },
  {
    question: "How do you decide what technology to use?",
    answer:
      "We start with the business requirement and choose technology according to functionality, performance, maintainability, scalability, and the specific needs of the project.",
  },
  {
    question: "Can Nexovio work with an existing website or digital product?",
    answer:
      "Yes. Existing websites and digital products can be improved, redesigned, extended, integrated, or rebuilt depending on the situation.",
  },
  {
    question: "What is the first step when starting a project?",
    answer:
      "The first step is usually a conversation about the business, the challenge, the desired outcome, and what currently exists. From there, the appropriate next steps can be defined.",
  },
  {
    question: "Do you provide support after launch?",
    answer:
      "Post-launch support can include maintenance, improvements, content updates, new functionality, integrations, performance work, and other agreed requirements.",
  },
];

export default function AboutPage() {
  const aboutSchema = getAboutPageSchema();
  const orgSchema = getOrganizationSchema();
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
  ]);
  const faqSchema = getFaqSchema(ABOUT_FAQS);

  return (
    <div className="pt-20 bg-background text-foreground min-h-screen">
      {/* JSON-LD STRUCTURED DATA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* 1. HERO BANNER (Left Content, Right Image - webp) */}
      <section className="section-white pt-12 sm:pt-16 pb-12 sm:pb-16 border-b border-border-subtle/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: "About", url: "/about" }]} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* LEFT CONTENT */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-brand-cyan/30 bg-brand-cyan/10 text-brand-cyan shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-brand-cyan animate-pulse" />
                Humanized, SEO-Focused Digital Solutions
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
                About Nexovio{" "}
                <span className="bg-gradient-brand bg-clip-text text-transparent">
                  Digital Solutions
                </span>
              </h1>

              <div className="text-lg sm:text-xl font-semibold text-brand-cyan">
                Building Digital Experiences With a Reason
              </div>

              <div className="space-y-4 text-sm sm:text-base text-muted leading-relaxed">
                <p>
                  Nexovio Digital Solutions exists to help businesses make better use of technology, design, and digital channels.
                </p>
                <p>
                  We work across web development, web design, UI/UX, mobile applications, SEO, digital marketing, graphic design, and emerging AI solutions—but our work is not really about delivering a list of services. It is about understanding what a business is trying to achieve and creating the digital work around that need.
                </p>
                <p>
                  Some projects begin with a new idea. Some start with an outdated website. Some begin with a growth problem. Others begin with a process that could work better. Whatever the starting point, we believe the result should feel clear, useful, considered, and genuinely connected to the business behind it.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Button
                  href="https://calendly.com/nexoviodigitalsolutions-info"
                  variant="primary"
                  size="lg"
                  trackingName="about_hero_contact"
                  trackingLocation="about_hero"
                  icon={<ArrowRight className="w-4 h-4" />}
                  className="shadow-glow"
                >
                  Schedule a Call
                </Button>
                <Button
                  href="/services"
                  variant="secondary"
                  size="lg"
                  trackingName="about_hero_services"
                  trackingLocation="about_hero"
                  className="w-full sm:w-auto hover:border-brand-cyan/40 text-brand-cyan hover:text-brand-bright transition-all duration-300"
                >
                  Explore Capabilities
                </Button>
              </div>
            </div>

            {/* RIGHT SIDE IMAGE BANNER (50% Width Both Sides - 1:1) */}
            <div className="lg:col-span-6 relative flex items-center justify-center h-full">
              <div className="absolute inset-0 bg-gradient-brand opacity-20 blur-3xl rounded-3xl -z-10" />
              <div className="relative w-full rounded-2xl border border-brand-cyan/30 dark:border-brand-cyan/40 bg-surface-elevated/80 backdrop-blur-xl p-2.5 sm:p-3 shadow-[0_25px_60px_rgba(0,0,0,0.3)] overflow-hidden group">
                <div className="relative overflow-hidden rounded-xl h-[400px] sm:h-[460px] lg:h-[520px] w-full">
                  <Image
                    src="/images/about/about-nexovio-digital-solutions-team.webp"
                    alt="Nexovio Digital Solutions Team - Digital Engineering & Growth Studio"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MORE THAN A DIGITAL SERVICES COMPANY (section-blue) */}
      <section className="section-blue pt-12 sm:pt-16 pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="OUR HOLISTIC VIEW"
            title="More Than a Digital Services Company —"
            highlightText="We Look at the Bigger Picture"
            description="A business does not experience its website, marketing, design, content, and technology as separate departments. Customers do not either. They simply experience the brand."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-10">
            {BIGGER_PICTURE.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="group rounded-2xl border border-border-subtle bg-surface-elevated/70 p-6 hover:border-brand-cyan/45 hover:-translate-y-1.5 transition-all duration-300 ease-out flex flex-col justify-between shadow-xl hover:shadow-brand-cyan/10 relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-brand opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan mb-4 group-hover:scale-110 group-hover:bg-brand-cyan/20 transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono text-brand-cyan uppercase tracking-wider block mb-1 font-semibold">
                      {item.subtitle}
                    </span>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-cyan transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-muted leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center bg-surface-elevated/80 border border-brand-cyan/25 rounded-2xl p-5 max-w-3xl mx-auto text-sm text-slate-200 font-medium shadow-xl backdrop-blur-sm">
            When these pieces support each other, a digital presence feels much more coherent.
          </div>
        </div>
      </section>

      {/* 3. WHAT NEXOVIO MEANS TO US (section-white) */}
      <section className="section-white pt-12 sm:pt-16 pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-cyan block mb-2">
              OUR CULTURE &amp; MINDSET
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold leading-snug text-white mb-4">
              What Nexovio{" "}
              <span className="bg-gradient-brand bg-clip-text text-transparent">Means to Us</span>
            </h2>
            <p className="text-sm sm:text-base text-muted leading-relaxed">
              The digital world changes quickly. New technologies appear. User expectations shift. Search behavior evolves. AI is changing how people discover information and interact with products. We do not want Nexovio to stand still while the digital landscape moves around it. We want to keep learning, testing, adapting, and finding better ways to create useful digital experiences. That mindset is part of how we approach our work.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {MINDSET_PRINCIPLES.map((principle, i) => (
              <div
                key={i}
                className="group rounded-2xl border border-border-subtle bg-surface-elevated/60 p-6 flex flex-col justify-between hover:border-brand-cyan/45 hover:-translate-y-1.5 transition-all duration-300 ease-out shadow-xl"
              >
                <div>
                  <div className="w-8 h-8 rounded-full bg-brand-cyan/10 border border-brand-cyan/25 text-brand-cyan font-mono text-xs font-bold flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-brand-cyan group-hover:text-black transition-all duration-300">
                    0{i + 1}
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-brand-cyan transition-colors">{principle.title}</h3>
                  <p className="text-xs text-muted leading-relaxed">{principle.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. OUR PERSPECTIVE (section-blue) */}
      <section className="section-blue pt-12 sm:pt-16 pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="OUR PERSPECTIVE"
            title="Good Digital Work Does Not"
            highlightText="Have to Be Complicated"
            description="There is often a temptation to add more. More features. More animations. More technology. More tools. More pages. More automation. We take a different view. A digital solution should be as sophisticated as the problem requires—but no more complicated than necessary."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {PERSPECTIVES.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="group rounded-2xl border border-border-subtle bg-surface-elevated/70 p-6 hover:border-brand-cyan/45 hover:-translate-y-1.5 transition-all duration-300 ease-out shadow-xl"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan mb-4 group-hover:scale-110 group-hover:bg-brand-cyan/20 transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-brand-cyan transition-colors">{item.title}</h3>
                  <p className="text-xs text-muted leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider border border-brand-cyan/40 bg-brand-cyan/10 text-brand-cyan shadow-sm hover:border-brand-cyan transition-colors">
              <CheckCircle2 className="w-4 h-4 text-brand-cyan" />
              The requirement should decide the solution.
            </span>
          </div>
        </div>
      </section>

      {/* 5. WHAT WE VALUE (section-white) */}
      <section className="section-white pt-12 sm:pt-16 pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="WHAT WE VALUE"
            title="The Principles Behind"
            highlightText="The Work"
            description="These core principles dictate every decision we make, from architectural design to daily communication."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CORE_VALUES.map((val) => (
              <div
                key={val.number}
                className="group rounded-2xl border border-border-subtle bg-surface-elevated/70 p-7 space-y-3 hover:border-brand-cyan/45 hover:-translate-y-1.5 transition-all duration-300 ease-out shadow-xl relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-brand-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="text-3xl font-extrabold font-mono text-brand-cyan/40 group-hover:text-brand-cyan transition-colors block">
                  {val.number}
                </span>
                <h3 className="text-xl font-bold text-white group-hover:text-brand-cyan transition-colors">{val.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. HOW WE SEE A BUSINESS (section-blue) */}
      <section className="section-blue pt-12 sm:pt-16 pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="BUSINESS-FIRST APPROACH"
            title="Before We See a Website,"
            highlightText="We See a Business"
            description="We examine your business model, customer decisions, and friction points before writing any code."
            align="center"
          />

          <div className="overflow-x-auto rounded-2xl border border-brand-cyan/20 bg-surface-elevated/80 shadow-xl backdrop-blur-sm">
            <table className="w-full text-left border-collapse min-w-[500px]">
              <thead>
                <tr className="border-b border-white/10 bg-black/40 text-xs font-mono uppercase tracking-wider text-muted">
                  <th className="p-4 sm:p-5 w-1/3">What We Look At</th>
                  <th className="p-4 sm:p-5 text-brand-cyan font-bold bg-brand-cyan/5">Why It Matters</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-xs sm:text-sm">
                {BUSINESS_MATTERS_TABLE.map((row, idx) => (
                  <tr key={idx} className="hover:bg-brand-cyan/5 transition-colors group">
                    <td className="p-4 sm:p-5 font-semibold text-white group-hover:text-brand-cyan transition-colors">{row.lookAt}</td>
                    <td className="p-4 sm:p-5 font-medium text-slate-300 bg-brand-cyan/5 border-l border-brand-cyan/10">
                      {row.whyItMatters}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 7. OUR ROLE (section-white) */}
      <section className="section-white pt-12 sm:pt-16 pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="OUR ROLE"
            title="We Can Join at Different Points"
            highlightText="in the Journey"
            description="Whether you have a blank canvas or an established platform needing overhaul, we adapt to your phase."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {JOURNEY_STAGES.map((stage, idx) => (
              <div
                key={idx}
                className="group rounded-2xl border border-border-subtle bg-surface-elevated/70 p-6 hover:border-brand-cyan/45 hover:-translate-y-1.5 transition-all duration-300 ease-out shadow-xl flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-mono text-brand-cyan uppercase tracking-wider block mb-3 bg-brand-cyan/10 border border-brand-cyan/20 px-2.5 py-1 rounded-md w-fit font-semibold">
                    {stage.badge}
                  </span>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-brand-cyan transition-colors">{stage.title}</h3>
                  <p className="text-xs text-muted leading-relaxed">{stage.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. WE ASK BETTER QUESTIONS (section-blue) */}
      <section className="section-blue pt-12 sm:pt-16 pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="STRATEGIC DISCOVERY"
            title="We Ask Better Questions —"
            highlightText="Before We Recommend Anything, We Try to Understand the Why"
            description="Instead of immediately asking, 'Which technology do you want?' we focus on understanding the real outcome you want to achieve."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BETTER_QUESTIONS.map((item, idx) => (
              <div
                key={idx}
                className="group rounded-2xl border border-brand-cyan/20 bg-surface-elevated/70 p-6 space-y-2 hover:border-brand-cyan/45 hover:-translate-y-1.5 transition-all duration-300 ease-out shadow-xl"
              >
                <div className="text-sm font-bold text-brand-cyan flex items-center gap-2 group-hover:text-brand-bright transition-colors">
                  <HelpCircle className="w-4 h-4 flex-shrink-0 text-brand-cyan" />
                  {item.q}
                </div>
                <p className="text-xs text-muted leading-relaxed pl-6">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. OUR VIEW OF TECH & DESIGN (section-white) */}
      <section className="section-white pt-12 sm:pt-16 pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* TECH VIEW */}
          <div>
            <SectionHeading
              badge="TECHNOLOGY PHILOSOPHY"
              title="Use Technology"
              highlightText="Because It Helps"
              description="We work with modern technologies, but technology itself is never the main story. For us, technology should answer a practical question: What does this help the business or the customer do better?"
              align="center"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {TECH_METRICS.map((tech, i) => (
                <div
                  key={i}
                  className="group rounded-2xl border border-border-subtle bg-surface-elevated/60 p-6 text-center hover:border-brand-cyan/45 hover:-translate-y-1.5 transition-all duration-300 ease-out shadow-xl"
                >
                  <div className="text-lg font-bold text-white mb-1 group-hover:text-brand-cyan transition-colors">{tech.title}</div>
                  <div className="text-xs text-muted leading-relaxed">{tech.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* DESIGN VIEW */}
          <div className="pt-8 border-t border-white/10">
            <SectionHeading
              badge="DESIGN PHILOSOPHY"
              title="Design Is More Than Appearance —"
              highlightText="Good Design Helps People Understand"
              description="We do not see design as decoration. Good design can clarify a message, reduce confusion, improve navigation, create confidence, and make important actions easier to find."
              align="center"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {DESIGN_ELEMENTS.map((el, i) => (
                <div
                  key={i}
                  className="group rounded-2xl border border-border-subtle bg-surface-elevated/60 p-6 hover:border-brand-cyan/45 hover:-translate-y-1.5 transition-all duration-300 ease-out shadow-xl"
                >
                  <div className="text-base font-bold text-brand-cyan mb-1 group-hover:text-brand-bright transition-colors">{el.title}</div>
                  <div className="text-xs text-muted leading-relaxed">{el.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 10. OUR APPROACH TO AI (section-blue) */}
      <section className="section-blue pt-12 sm:pt-16 pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="PRACTICAL AI INTEGRATION"
            title="Curious About AI."
            highlightText="Practical About Its Use."
            description="AI is becoming part of how businesses work, create, search, automate, and communicate. We see real potential in that shift. But not every problem needs AI."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {AI_APPROACH_STEPS.map((step) => (
              <div
                key={step.num}
                className="group rounded-2xl border border-border-subtle bg-surface-elevated/70 p-6 hover:border-brand-cyan/45 hover:-translate-y-1.5 transition-all duration-300 ease-out shadow-xl flex flex-col justify-between"
              >
                <div>
                  <span className="text-2xl font-mono font-extrabold text-brand-cyan/40 group-hover:text-brand-cyan transition-colors block mb-2">
                    {step.num}
                  </span>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-brand-cyan transition-colors">{step.title}</h3>
                  <p className="text-xs text-muted leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider border border-brand-cyan/30 bg-brand-cyan/10 text-brand-cyan shadow-sm">
              <Bot className="w-4 h-4 text-brand-cyan" />
              Adding AI simply because it is trending is not the goal.
            </span>
          </div>
        </div>
      </section>

      {/* 11. HOW WE THINK ABOUT RELATIONSHIPS (section-white) */}
      <section className="section-white pt-12 sm:pt-16 pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="CLIENT RELATIONSHIPS"
            title="Clients Are Not Just"
            highlightText="Project Briefs"
            description="A project is easier to build when communication is open. We value relationships where people can ask questions, challenge ideas, explain concerns, and make decisions together."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {RELATIONSHIP_VALUES.map((rel, i) => (
              <div
                key={i}
                className="group rounded-2xl border border-border-subtle bg-surface-elevated/60 p-6 hover:border-brand-cyan/45 hover:-translate-y-1.5 transition-all duration-300 ease-out shadow-xl"
              >
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-brand-cyan transition-colors">{rel.title}</h3>
                <p className="text-xs text-muted leading-relaxed">{rel.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. WHAT WORKING WITH NEXOVIO SHOULD FEEL LIKE (section-blue) */}
      <section className="section-blue pt-12 sm:pt-16 pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="THE EXPERIENCE"
            title="What Working With Nexovio"
            highlightText="Should Feel Like"
            description="Clear at the Beginning. Thoughtful in the Middle. Useful at the End."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {WORKING_STAGES.map((stage, i) => (
              <div
                key={i}
                className="group rounded-2xl border border-brand-cyan/30 bg-surface-elevated/70 p-8 space-y-4 hover:border-brand-cyan/60 hover:-translate-y-1.5 transition-all duration-300 ease-out shadow-xl relative"
              >
                <span className="text-xs font-mono uppercase tracking-widest text-brand-cyan block font-bold">
                  Phase {i + 1} — {stage.phase}
                </span>
                <h3 className="text-xl font-bold text-white group-hover:text-brand-cyan transition-colors">{stage.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{stage.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. WHAT WE TRY NOT TO DO (section-white) */}
      <section className="section-white pt-12 sm:pt-16 pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="DISCIPLINE & BOUNDARIES"
            title="What We Try"
            highlightText="Not to Do"
            description="A few things we believe are better left behind in modern web engineering."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {LEAVE_BEHIND.map((item, idx) => (
              <div
                key={idx}
                className="group rounded-2xl border border-red-500/20 bg-surface-elevated/60 p-6 space-y-2 hover:border-red-500/40 hover:-translate-y-1.5 transition-all duration-300 ease-out shadow-xl"
              >
                <div className="text-sm font-bold text-white flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                  <span className="group-hover:text-red-300 transition-colors">{item.rule}</span>
                </div>
                <p className="text-xs text-muted leading-relaxed pl-6">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 14. WHERE OUR WORK COMES TOGETHER (section-blue) */}
      <section className="section-blue pt-12 sm:pt-16 pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="INTEGRATED CAPABILITIES"
            title="Where Our Work Comes Together —"
            highlightText="One Company. Different Digital Capabilities."
            description="The point is not to make every project use every capability. It is to have the right capabilities available when a project needs them."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {CAPABILITIES.map((cap, i) => (
              <div
                key={i}
                className={`group rounded-2xl border p-6 bg-gradient-to-b ${cap.color} space-y-3 shadow-xl hover:-translate-y-1.5 transition-all duration-300 ease-out`}
              >
                <span className="text-xs font-mono font-bold tracking-widest block uppercase">
                  {cap.category}
                </span>
                <p className="text-sm font-semibold text-white leading-relaxed">{cap.items}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 15. OUR KIND OF WORK & WHY BUSINESSES COME TO NEXOVIO (section-white) */}
      <section className="section-white pt-12 sm:pt-16 pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* PROBLEMS WE ENJOY */}
          <div>
            <SectionHeading
              badge="PROBLEMS WE SOLVE"
              title="Our Kind of Work —"
              highlightText="Problems That Need More Than a One-Size-Fits-All Answer"
              description="We are naturally drawn to projects where there is something genuine to figure out."
              align="center"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {PROBLEMS_WE_ENJOY.map((problem, idx) => (
                <div
                  key={idx}
                  className="group rounded-2xl border border-border-subtle bg-surface-elevated/70 p-5 flex items-start gap-3 hover:border-brand-cyan/45 hover:-translate-y-1.5 transition-all duration-300 ease-out shadow-xl"
                >
                  <CheckCircle2 className="w-5 h-5 text-brand-cyan flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium text-white leading-snug group-hover:text-brand-cyan transition-colors">{problem}</span>
                </div>
              ))}
            </div>
          </div>

          {/* WHY BUSINESSES COME */}
          <div className="pt-8 border-t border-white/10">
            <SectionHeading
              badge="REASONS TO COLLABORATE"
              title="Why Businesses Come to Nexovio —"
              highlightText="They Usually Have Something They Want to Improve"
              description="Real scenarios where our team helps transform challenges into compounding digital assets."
              align="center"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {WHY_BUSINESSES_COME.map((item, idx) => (
                <div
                  key={idx}
                  className="group rounded-2xl border border-border-subtle bg-surface-elevated/70 p-6 hover:border-brand-cyan/45 hover:-translate-y-1.5 transition-all duration-300 ease-out shadow-xl space-y-3"
                >
                  <div className="text-sm font-bold text-brand-cyan italic group-hover:text-brand-bright transition-colors">{item.quote}</div>
                  <p className="text-xs text-muted leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 16. A DIFFERENT DEFINITION OF SUCCESS & OUR VISION (section-blue) */}
      <section className="section-blue pt-12 sm:pt-16 pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* DEFINITION OF SUCCESS */}
          <div>
            <SectionHeading
              badge="MEASURING IMPACT"
              title="A Different Definition of Success —"
              highlightText="Success Is Not Only About Launching"
              description="A website going live is a milestone. It is not the whole outcome. For us, a useful digital project should ideally make something better for both your business and your customers."
              align="center"
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* BUSINESS */}
              <div className="rounded-2xl border border-brand-cyan/30 bg-surface-elevated/70 p-8 space-y-4 shadow-xl hover:border-brand-cyan/50 transition-colors">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-brand-cyan" /> Better For Your Business
                </h3>
                <div className="grid grid-cols-2 gap-3 pt-2">
                  {SUCCESS_METRICS.business.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                      <Check className="w-4 h-4 text-brand-cyan flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* CUSTOMERS */}
              <div className="rounded-2xl border border-brand-cyan/30 bg-surface-elevated/70 p-8 space-y-4 shadow-xl hover:border-brand-cyan/50 transition-colors">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Users className="w-5 h-5 text-brand-cyan" /> Better For Your Customers
                </h3>
                <div className="grid grid-cols-2 gap-3 pt-2">
                  {SUCCESS_METRICS.customers.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                      <Check className="w-4 h-4 text-brand-cyan flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* LOOKING AHEAD & VISION */}
          <div className="pt-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-2xl border border-border-subtle bg-surface-elevated/70 p-8 space-y-3 shadow-xl hover:border-brand-cyan/40 transition-colors">
              <span className="text-xs font-mono uppercase text-brand-cyan tracking-wider font-semibold">
                LOOKING AHEAD
              </span>
              <h3 className="text-xl font-bold text-white">We're Building Nexovio for the Long Term</h3>
              <p className="text-xs text-muted leading-relaxed">
                We want Nexovio Digital Solutions to grow by continuing to do thoughtful digital work—not by simply increasing the number of services on a menu. That means staying close to changing customer expectations, learning new technologies, exploring practical AI opportunities, improving our craft, and building stronger relationships with the businesses we work with.
              </p>
            </div>

            <div className="rounded-2xl border border-border-subtle bg-surface-elevated/70 p-8 space-y-3 shadow-xl hover:border-brand-cyan/40 transition-colors">
              <span className="text-xs font-mono uppercase text-brand-cyan tracking-wider font-semibold">
                OUR VISION
              </span>
              <h3 className="text-xl font-bold text-white">Make Digital Work More Useful</h3>
              <p className="text-xs text-muted leading-relaxed">
                We want Nexovio Digital Solutions to be known for thoughtful digital work that helps businesses move forward. Not because every project is the biggest. Not because every solution uses the newest technology. But because the work makes sense—because customers can use it, businesses can build on it, and the result creates something genuinely useful.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 17. NEXOVIO AT A GLANCE TABLE (section-white) */}
      <section className="section-white pt-12 sm:pt-16 pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="NEXOVIO AT A GLANCE"
            title="What We Bring Together —"
            highlightText="Core Capabilities & Focus"
            description="Overview of our primary technical disciplines and their strategic business focus."
            align="center"
          />

          <div className="overflow-x-auto rounded-2xl border border-brand-cyan/20 bg-surface-elevated/80 shadow-xl max-w-4xl mx-auto backdrop-blur-sm">
            <table className="w-full text-left border-collapse min-w-[450px]">
              <thead>
                <tr className="border-b border-white/10 bg-black/40 text-xs font-mono uppercase tracking-wider text-muted">
                  <th className="p-4 sm:p-5 w-1/3">Capability</th>
                  <th className="p-4 sm:p-5 text-brand-cyan font-bold bg-brand-cyan/5">Focus</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-xs sm:text-sm">
                {NEXOVIO_AT_A_GLANCE.map((row, idx) => (
                  <tr key={idx} className="hover:bg-brand-cyan/5 transition-colors group">
                    <td className="p-4 sm:p-5 font-semibold text-white group-hover:text-brand-cyan transition-colors">{row.capability}</td>
                    <td className="p-4 sm:p-5 font-medium text-slate-300 bg-brand-cyan/5 border-l border-brand-cyan/10">
                      {row.focus}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 18. FAQ SECTION (FaqSection) */}
      <FaqSection
        faqs={ABOUT_FAQS}
        badge="ABOUT NEXOVIO FAQ"
        title="Frequently Asked Questions About"
        highlightText="Nexovio Digital Solutions"
      />

    </div>
  );
}

