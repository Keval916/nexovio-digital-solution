'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  Briefcase,
  Check,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Code2,
  Cpu,
  FileCheck2,
  Globe2,
  Layers3,
  LockKeyhole,
  Mail,
  Palette,
  Send,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Loader2,
  AlertCircle,
  MessageCircle,
} from 'lucide-react';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { FaqSection } from '@/components/sections/FaqSection';
import { trackFormSubmit } from '@/lib/analytics';

const servicesData = [
  {
    id: 'web-development',
    title: 'White-Label Web Development',
    shortTitle: 'Web Development',
    tag: 'Next.js • React • WordPress • E-commerce',
    description:
      'Bring us into client website projects that need dependable technical delivery, from business websites and e-commerce stores to custom web applications and portals.',
    href: '/services/web-development',
    icon: Globe2,
    capabilities: [
      'Custom Next.js and React websites and web applications',
      'WordPress and WooCommerce development',
      'E-commerce storefronts and custom integrations',
      'Business portals and client dashboards',
      'API integrations and headless CMS implementations',
      'Responsive, performance-conscious frontend development',
    ],
    deliverable:
      'Responsive implementation, staging build, agreed testing, deployment support and technical handover.',
  },
  {
    id: 'software-development',
    title: 'White-Label Software Development',
    shortTitle: 'Software Development',
    tag: 'SaaS • Portals • APIs • Databases',
    description:
      'Support clients who need more than a marketing website with custom software, dashboards, SaaS products, portals and backend integrations.',
    href: '/services/web-development',
    icon: Layers3,
    capabilities: [
      'SaaS products and MVP development',
      'Custom client dashboards and internal portals',
      'REST and GraphQL API development',
      'Database design and application architecture',
      'Authentication and role-based access',
      'Third-party and cloud service integrations',
    ],
    deliverable:
      'Application codebase, API documentation, database setup and deployment support based on the agreed scope.',
  },
  {
    id: 'mobile-app-development',
    title: 'White-Label Mobile App Development',
    shortTitle: 'Mobile Apps',
    tag: 'Flutter • React Native • iOS • Android',
    description:
      'Offer mobile development to your clients without maintaining a dedicated mobile team for every project that comes through your agency.',
    href: '/services/mobile-app-development',
    icon: Smartphone,
    capabilities: [
      'React Native and Flutter application development',
      'iOS and Android app experiences',
      'API and backend integrations',
      'Authentication, notifications and user flows',
      'Payment and commerce integrations where required',
      'App store deployment and release support',
    ],
    deliverable:
      'Production-ready application build, source code and release support aligned with the project requirements.',
  },
  {
    id: 'ai-development',
    title: 'White-Label AI Development',
    shortTitle: 'AI Solutions',
    tag: 'AI Assistants • RAG • Automation',
    description:
      'Help your agency take on practical AI projects, including knowledge assistants, document workflows, conversational experiences and task automation.',
    href: '/#ai-solutions',
    icon: Cpu,
    capabilities: [
      'AI chatbots and conversational interfaces',
      'Knowledge assistants and document search',
      'RAG-based application workflows',
      'AI-powered task and business automation',
      'Document extraction and summarization',
      'AI API integrations and custom application interfaces',
    ],
    deliverable:
      'Configured AI workflow, connected services, application interface and technical implementation for the agreed use case.',
  },
  {
    id: 'ui-ux',
    title: 'White-Label UI/UX & Frontend Development',
    shortTitle: 'UI/UX Design',
    tag: 'Figma • UX • Design Systems • Frontend',
    description:
      'Have a client design ready in Figma? We can help turn approved concepts into responsive interfaces that are ready for real users and real devices.',
    href: '/services/ui-ux-design',
    icon: Palette,
    capabilities: [
      'Website and application UI/UX design',
      'Wireframes and high-fidelity prototypes',
      'Design systems and reusable components',
      'Responsive and mobile-first interfaces',
      'Figma-to-frontend implementation',
      'Interaction details and subtle motion where appropriate',
    ],
    deliverable:
      'Design deliverables, responsive interface implementation and staging preview according to the agreed engagement.',
  },
  {
    id: 'technical-seo',
    title: 'White-Label Technical SEO & Performance',
    shortTitle: 'SEO & Performance',
    tag: 'Technical SEO • Schema • Performance',
    description:
      'Support your SEO and digital marketing projects with technical implementation across website structure, crawlability, metadata, performance and analytics.',
    href: '/services/seo-digital-marketing',
    icon: Code2,
    capabilities: [
      'Technical SEO implementation and audits',
      'Search-friendly site architecture and internal linking',
      'Canonical, sitemap and robots.txt setup',
      'Structured data and JSON-LD implementation',
      'Website performance and Core Web Vitals improvements',
      'GA4 and Google Tag Manager implementation support',
    ],
    deliverable:
      'Technical recommendations, implemented fixes, performance review and agreed validation support.',
  },
];

const workflowSteps = [
  {
    number: '01',
    title: 'Share the Project Brief',
    tag: 'Start With Context',
    description:
      'Send the client requirements, Figma files, existing website, technical notes or any other information that helps us understand what needs to be delivered.',
    result: 'A clear starting point and a list of questions, if anything needs clarification.',
  },
  {
    number: '02',
    title: 'Review the Scope',
    tag: 'Understand the Work',
    description:
      'We look at the functionality, integrations, technology requirements, dependencies and expected deliverables before work begins.',
    result: 'A practical scope and commercial approach that both teams can understand.',
  },
  {
    number: '03',
    title: 'Plan the Delivery',
    tag: 'Agree the Workflow',
    description:
      'Once the scope is agreed, we define milestones, technical priorities, communication points and the working process.',
    result: 'A shared delivery plan for your agency and the technical team.',
  },
  {
    number: '04',
    title: 'Build & Share Progress',
    tag: 'Behind the Scenes',
    description:
      'Development takes place behind your agency while progress is shared through the staging environment, agreed updates and review points.',
    result: 'Your team can review work before it reaches the client.',
  },
  {
    number: '05',
    title: 'Review, Test & Refine',
    tag: 'Feedback Loop',
    description:
      'Your agency collects client feedback and shares the required changes. We handle the technical updates and testing within the agreed scope.',
    result: 'A refined build ready for client approval and final delivery.',
  },
  {
    number: '06',
    title: 'Launch & Handover',
    tag: 'Ready for Delivery',
    description:
      'When the project is ready, we support deployment and handover. Depending on the engagement, this can include source code, documentation and post-launch technical support.',
    result: 'A production-ready handover aligned with your agency workflow.',
  },
];

const faqs = [
  {
    question: 'What is a white-label digital services partner?',
    answer: 'A white-label partner provides digital services behind your agency brand. Your agency manages the client relationship while the delivery partner handles the agreed technical work behind the scenes.',
  },
  {
    question: 'Can Nexovio work behind our agency brand?',
    answer: 'Yes. We can work behind your agency as agreed, following your preferred communication process, project workflow and delivery structure.',
  },
  {
    question: 'Can we outsource web development to Nexovio?',
    answer: 'Yes. Agencies can work with Nexovio for custom websites, e-commerce, web applications, redesigns, integrations and ongoing development support.',
  },
  {
    question: 'Do you provide services beyond web development?',
    answer: 'Yes. The agency partnership model can cover web development, software development, mobile apps, UI/UX, AI solutions and technical SEO and performance work.',
  },
  {
    question: 'Can we send our existing Figma designs?',
    answer: 'Yes. We can work from Figma files, wireframes, design systems and existing frontend specifications and turn them into responsive production interfaces.',
  },
  {
    question: 'Do you offer white-label mobile app development?',
    answer: 'Yes. Mobile projects can include React Native or Flutter development, API integrations, authentication, payments, notifications and deployment support.',
  },
  {
    question: 'Can Nexovio help with AI projects?',
    answer: 'Yes. We can support practical AI use cases such as chatbots, knowledge assistants, document search, workflow automation and AI-powered applications.',
  },
  {
    question: 'Can we work on a project basis instead of hourly?',
    answer: 'Yes. Projects with a defined scope can be handled through a project-based engagement with agreed deliverables and milestones.',
  },
  {
    question: 'Can we use hourly support for overflow work?',
    answer: 'Yes. Hourly support can be useful for development tasks, maintenance, integrations, bug fixes, feature work and additional project capacity.',
  },
  {
    question: 'Who manages communication with the client?',
    answer: 'Normally, your agency remains the primary client-facing team. Technical participation can be arranged when it makes sense for the project and is agreed in advance.',
  },
  {
    question: 'Can we sign an NDA before sharing sensitive project details?',
    answer: 'Yes. You can discuss NDA requirements before sharing confidential project or client information.',
  },
  {
    question: 'Do you work with international agencies?',
    answer: 'Yes. The partnership model is designed to support agencies working across different regions and time zones with practical communication and delivery arrangements.',
  },
  {
    question: 'Can we start with one small project?',
    answer: 'Yes. A single project is a practical way for both teams to understand the workflow, communication style and technical requirements before discussing broader support.',
  },
  {
    question: 'How do we get started?',
    answer: 'Send your agency and project details through the partnership form. We can then review the requirements and discuss the most suitable way to work together.',
  },
];

const engagementModels = [
  {
    title: 'Project-Based Development',
    subtitle: 'A defined project with agreed deliverables',
    icon: FileCheck2,
    points: [
      'Useful for websites, redesigns, e-commerce and custom applications',
      'Clear scope, milestones and deliverables',
      'Works well when requirements are reasonably well defined',
      'Suitable for one-off client projects or larger builds',
    ],
  },
  {
    title: 'Hourly & Ongoing Support',
    subtitle: 'Flexible technical help when your team needs it',
    icon: Clock3,
    points: [
      'Useful for maintenance, feature work and integrations',
      'Practical for development overflow and changing requirements',
      'Can support ongoing client retainers',
      'Lets you add technical capacity without changing your internal structure',
    ],
  },
];

const globalRegions = [
  {
    title: 'USA & Canada',
    description: 'For agencies that need a technical partner across North American client work and delivery schedules.',
  },
  {
    title: 'UK & Europe',
    description: 'For creative studios, marketing agencies and consultancies working across European markets.',
  },
  {
    title: 'UAE & Gulf',
    description: 'For agencies serving businesses in the Gulf that need dependable technical execution behind the scenes.',
  },
  {
    title: 'Australia & APAC',
    description: 'For digital teams that need flexible collaboration around APAC working hours and delivery cycles.',
  },
];

export default function AgencyPartnershipClient() {
  const [activeService, setActiveService] = useState(0);
  const [activeEngagement, setActiveEngagement] = useState(0);

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    agency: '',
    engagement: 'Project-Based Development',
    agencyType: 'Digital Marketing Agency',
    primaryNeed: 'White-Label Web Development',
    projectDetails: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  const currentService = servicesData[activeService];
  const CurrentServiceIcon = currentService.icon;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setFormError('');

    // Client-side validation matching contact form
    if (!formData.name.trim() || !formData.email.trim() || !formData.projectDetails.trim()) {
      setIsSubmitting(false);
      setFormError('Please complete all required fields (Name, Work Email, and Project Details).');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setIsSubmitting(false);
      setFormError('Please provide a valid work email address.');
      return;
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          company: formData.agency.trim() || `${formData.name.trim()} (Agency Partner)`,
          agencyName: formData.agency.trim(),
          agencyType: formData.agencyType,
          primaryNeed: formData.primaryNeed,
          engagement: formData.engagement,
          service: 'agency-partnership',
          budget: formData.engagement,
          message: formData.projectDetails.trim(),
          sourcePage: 'agency-partnership',
        }),
      });

      const data = await res.json();
      if (res.ok && data.success !== false) {
        // Analytics conversion tracking
        trackFormSubmit('agency_partnership_form', formData.primaryNeed);

        // Send lead event to GTM
        if (typeof window !== 'undefined') {
          (window as unknown as { dataLayer: unknown[] }).dataLayer =
            (window as unknown as { dataLayer: unknown[] }).dataLayer || [];
          (window as unknown as { dataLayer: unknown[] }).dataLayer.push({
            event: 'generate_lead',
            lead_type: 'agency_partnership',
            agency_type: formData.agencyType,
            engagement_model: formData.engagement,
          });
        }
        setFormSubmitted(true);
      } else {
        setFormError(data.message || 'Unable to submit your details. Please email us directly.');
      }
    } catch {
      setFormError('A network error occurred. Please reach out to partners@nexoviodigitalsolutions.com.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* 1. HERO SECTION */}
      <section
        id="overview"
        className="relative pt-24 sm:28 md:pt-32 lg:pt-40 pb-16 lg:pb-24 overflow-hidden border-b border-border-subtle"
      >
        {/* Ambient background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[550px] bg-radial-glow pointer-events-none opacity-60" />
        <div className="absolute -top-32 right-10 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-40 -left-20 w-80 h-80 bg-brand-electric/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'Agency Partnership', url: '/agency-partnership' }]} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-brand-cyan/25 bg-brand-cyan/10 text-brand-cyan shadow-sm">
                <Briefcase className="w-3.5 h-3.5 text-brand-cyan" aria-hidden="true" />
                <span>White-Label Digital Partner for Modern Agencies</span>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-[#fff] leading-[1.12]">
                White-Label Digital Services for{' '}
                <span className="bg-gradient-brand bg-clip-text text-transparent">Agencies</span>
              </h1>

              <p className="text-lg sm:text-xl font-bold tracking-tight text-brand-cyan">
                Your Clients. Your Brand. Our Technology Team.
              </p>

              <div className="space-y-4 text-base text-muted leading-relaxed max-w-2xl">
                <p>
                  Nexovio Digital Solutions works with digital agencies, creative studios, marketing teams,
                  consultants, and technology companies that need dependable technical support behind the
                  scenes.
                </p>
                <p>
                  From websites and e-commerce to custom software, mobile apps, UI/UX, AI solutions, and
                  technical SEO, we help agencies deliver the work their clients need without having to build
                  every capability in-house.
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl border border-brand-cyan/30 bg-surface-elevated/70 backdrop-blur-md text-sm text-foreground shadow-sm">
                <p className="leading-relaxed">
                  <strong className="text-slate-900 dark:text-[#fff] font-semibold">
                    Keep the client relationship, strategy and brand in your hands.
                  </strong>{' '}
                  <span className="text-muted">
                    We take care of the technical delivery that happens behind the scenes, following the
                    process and scope agreed with your agency.
                  </span>
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3 sm:items-center">
                <Button
                  href="#partner-form"
                  variant="primary"
                  size="lg"
                  trackingName="agency_hero_discuss"
                  trackingLocation="agency_partnership_hero"
                  icon={<ArrowRight className="w-4 h-4" />}
                  className="shadow-glow font-bold"
                >
                  Discuss a Partnership
                </Button>
                <Button
                  href="#services"
                  variant="secondary"
                  size="lg"
                  trackingName="agency_hero_explore"
                  trackingLocation="agency_partnership_hero"
                  className="font-medium"
                >
                  Explore Capabilities
                </Button>
              </div>

              {/* Trust Badges */}
              <div className="pt-4 border-t border-border-subtle grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-muted">
                <span className="inline-flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-emerald-500 shrink-0" /> White-label delivery
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock3 className="h-4 w-4 text-brand-cyan shrink-0" /> Project or hourly
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <LockKeyhole className="h-4 w-4 text-brand-bright shrink-0" /> NDA-friendly
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Globe2 className="h-4 w-4 text-indigo-400 shrink-0" /> Global partners
                </span>
              </div>
            </div>

            {/* Right Image Banner */}
            <div className="lg:col-span-6 relative flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-brand opacity-25 blur-3xl rounded-3xl -z-10" />
              <div className="relative w-full rounded-2xl border border-border-subtle bg-surface-elevated/80 backdrop-blur-xl p-2.5 sm:p-3 shadow-card overflow-hidden group">
                <div className="relative h-[360px] sm:h-[420px] lg:h-[480px] w-full overflow-hidden rounded-xl">
                  <Image
                    src="/images/agency-partnership/agency-hero-team.jpg"
                    alt="Realistic modern digital agency team and software engineers collaborating on client delivery"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. KEY STATS / PILLARS BAR */}
      <section className="section-blue py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              ['Project-Based', 'Defined scope and milestones'],
              ['Hourly Support', 'Flexible technical capacity'],
              ['White-Label', 'Work behind your agency'],
              ['Confidential', 'NDA-friendly collaboration'],
            ].map(([title, text]) => (
              <div key={title} className="p-3">
                <div className="text-base sm:text-xl font-extrabold text-slate-900 dark:text-[#fff]">
                  {title}
                </div>
                <div className="mt-1 text-xs text-muted leading-relaxed">{text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. STICKY IN-PAGE SUB-NAVIGATION */}
      <div className="sticky none sm:block top-[56px] sm:top-[63px] md:top-[104px] z-30 border-b border-border-subtle bg-[#fff] py-2.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center gap-2 overflow-x-auto text-sm  scrollbar-none">
          {[
            ['overview', 'Overview'],
            ['why-agencies', 'Why Agencies Partner'],
            ['responsibilities', 'Roles'],
            ['services', 'Capabilities'],
            ['workflow', 'How It Works'],
            ['engagement', 'Engagement'],
            ['case-studies', 'Case Studies'],
            ['global', 'Global'],
            ['partner-form', 'Start a Project'],
            ['faq', 'FAQ'],
          ].map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              className="whitespace-nowrap rounded-full px-3.5 py-1.5 font-medium text-muted hover:text-slate-900 dark:hover:text-[#fff] hover:bg-surface-subtle transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
      </div>

      {/* 4. QUICK CAPABILITIES NAVIGATION STRIP */}
      <section className="section-white py-12 border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-brand-cyan/20 bg-brand-cyan/5 text-brand-cyan mb-2">
              Agency Technology Support
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-[#fff]">
              One Technical Partner for the Work{' '}
              <span className="bg-gradient-brand bg-clip-text text-transparent">
                Behind Your Client Projects
              </span>
            </h2>
            <p className="mt-2 text-sm text-muted">
              Add technical capability where your agency needs it, while keeping your existing client
              experience and delivery process in place.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">
            <Link
              href="/agency-partnership"
              className="rounded-2xl border border-brand-bright bg-gradient-brand p-4 text-center text-[#fff] shadow-glow transition hover:brightness-110"
            >
              <Briefcase className="mx-auto h-5 w-5 mb-2" aria-hidden="true" />
              <div className="text-xs font-bold">Agency Partner</div>
            </Link>
            {servicesData.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.id}
                  href={service.href}
                  className="rounded-2xl border border-border-subtle bg-surface-elevated/70 p-4 text-center transition hover:border-brand-cyan/40 hover:bg-surface-elevated"
                >
                  <Icon className="mx-auto h-5 w-5 text-brand-cyan mb-2" aria-hidden="true" />
                  <div className="text-xs font-bold text-slate-900 dark:text-[#fff] truncate">
                    {service.shortTitle}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. WHY AGENCIES PARTNER */}
      <section
        id="why-agencies"
        className="scroll-mt-28 section-blue py-16 sm:py-20 lg:py-24 border-b border-border-subtle"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Sticky Column */}
            <div className="lg:sticky lg:top-36 lg:col-span-5 space-y-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-brand-cyan/20 bg-brand-cyan/5 text-brand-cyan">
                Why Agencies Partner
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-[#fff] leading-tight">
                Take on More Client Work{' '}
                <span className="bg-gradient-brand bg-clip-text text-transparent">
                  Without Rebuilding Your Team
                </span>
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-muted leading-relaxed">
                <p>
                  Your agency may already be strong in strategy, branding, content, advertising, or design.
                  The challenge often appears when a client needs a capability that sits outside your current
                  delivery team.
                </p>
                <p>
                  A custom web application, mobile app, API integration, AI workflow, or technical SEO
                  implementation can require very different skills. Nexovio provides the technical support
                  that sits cleanly behind your existing agency offer.
                </p>
              </div>

              {/* Simple Flow Graphic */}
              <div className="rounded-2xl border border-border-subtle bg-surface-elevated p-6 shadow-sm">
                <div className="text-xs font-mono font-bold uppercase tracking-widest text-brand-cyan mb-3">
                  A Practical Way to Collaborate
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center text-xs font-bold text-slate-900 dark:text-[#fff]">
                  <div className="p-2.5 rounded-xl border border-border-subtle bg-surface-subtle w-full sm:w-auto">
                    Client Need
                  </div>
                  <ArrowRight className="h-4 w-4 text-brand-cyan rotate-90 sm:rotate-0 shrink-0" />
                  <div className="p-2.5 rounded-xl border border-border-subtle bg-surface-subtle w-full sm:w-auto">
                    Your Agency
                  </div>
                  <ArrowRight className="h-4 w-4 text-brand-cyan rotate-90 sm:rotate-0 shrink-0" />
                  <div className="p-2.5 rounded-xl border border-brand-cyan/40 bg-brand-cyan/10 text-brand-cyan w-full sm:w-auto">
                    Nexovio Team
                  </div>
                </div>
              </div>
            </div>

            {/* Right Cards Column */}
            <div className="lg:col-span-7 space-y-4">
              {[
                {
                  icon: Globe2,
                  title: 'A client needs a custom website or web app',
                  body: 'Your team can continue to lead strategy, content and the client relationship while Nexovio supports the technical build, integrations, implementation and delivery.',
                },
                {
                  icon: Smartphone,
                  title: 'A client needs a mobile app',
                  body: 'Offer iOS and Android development without maintaining a dedicated mobile department for every project. We can support the application, APIs, integrations and release process.',
                },
                {
                  icon: Cpu,
                  title: 'A client wants an AI solution',
                  body: 'Bring us into practical AI projects such as knowledge assistants, document workflows, conversational experiences and business automation.',
                },
                {
                  icon: Layers3,
                  title: 'Your internal team is already busy',
                  body: 'When your team is committed to existing clients, additional technical capacity can help you keep projects moving without changing your whole agency structure.',
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <article
                    key={item.title}
                    className="p-6 sm:p-7 rounded-2xl border border-border-subtle bg-surface-elevated/90 backdrop-blur-md shadow-sm transition hover:border-brand-cyan/40 hover:-translate-y-0.5"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-brand-cyan/20 bg-brand-cyan/10 text-brand-cyan">
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-[#fff]">{item.title}</h3>
                        <p className="mt-2 text-sm text-muted leading-relaxed">{item.body}</p>
                      </div>
                    </div>
                  </article>
                );
              })}

              <div className="rounded-2xl border border-brand-cyan/30 bg-brand-cyan/5 p-6 text-sm font-semibold text-brand-cyan leading-relaxed">
                The goal is simple: help your agency deliver the project smoothly without making the process
                more complicated than it needs to be.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CLEAR ROLES & RESPONSIBILITIES */}
      <section
        id="responsibilities"
        className="scroll-mt-28 section-white py-16 sm:py-20 lg:py-24 border-b border-border-subtle"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-brand-cyan/20 bg-brand-cyan/5 text-brand-cyan mb-2">
              Clear Roles
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-[#fff] leading-tight">
              Your Client Relationship. Your Brand.{' '}
              <span className="bg-gradient-brand bg-clip-text text-transparent">
                Shared Delivery Responsibility.
              </span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-muted leading-relaxed">
              White-label work is easier when everyone knows who owns what. Your agency remains in control
              of the client-facing side while Nexovio focuses on the technical work agreed for the project.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* Agency Card */}
            <div className="rounded-3xl border border-border-subtle bg-surface-elevated/70 p-7 sm:p-9 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-surface-subtle border border-border-subtle text-brand-bright">
                  <Briefcase className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-[#fff]">Your Agency Handles</h3>
                  <p className="text-xs text-muted">Client-facing relationships</p>
                </div>
              </div>
              <div className="mt-6 space-y-3.5 text-sm text-foreground">
                {[
                  'Client acquisition, discovery and pitching',
                  'Account management and client meetings',
                  'Creative direction and brand strategy',
                  'Client communication, reviews and approvals',
                  'Pricing, proposals, invoicing and client billing',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-cyan" aria-hidden="true" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 border-t border-border-subtle pt-4 text-xs font-bold text-brand-cyan uppercase tracking-wider">
                Your agency stays in front of the client.
              </div>
            </div>

            {/* Nexovio Card */}
            <div className="rounded-3xl border-2 border-brand-bright bg-surface-elevated p-7 sm:p-9 shadow-glow relative overflow-hidden">
              <div className="absolute top-0 right-0 px-3 py-1 bg-gradient-brand text-[#fff] text-[10px] font-bold uppercase tracking-widest rounded-bl-xl">
                Engineering Engine
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-brand text-[#fff]">
                  <Code2 className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-[#fff]">Nexovio Handles</h3>
                  <p className="text-xs text-brand-cyan">Technical delivery and execution</p>
                </div>
              </div>
              <div className="mt-6 space-y-3.5 text-sm text-foreground">
                {[
                  'Technical planning and scope feasibility',
                  'Web and custom software development',
                  'Mobile app development',
                  'AI applications and workflow automation',
                  'Testing, staging, deployment and handover support',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" aria-hidden="true" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 border-t border-border-subtle pt-4 text-xs font-bold text-emerald-400 uppercase tracking-wider">
                We stay focused on the work behind the project.
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              ['Confidentiality', 'NDA-friendly collaboration before sensitive project information is shared.'],
              ['Client Boundaries', 'We follow the communication model agreed with your agency.'],
              ['Your Workflow', 'We can fit into the tools, repositories and process your team already uses.'],
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded-2xl border border-border-subtle bg-surface-elevated/70 p-5 shadow-sm"
              >
                <div className="text-sm font-bold text-slate-900 dark:text-[#fff]">{title}</div>
                <div className="mt-1 text-xs text-muted leading-relaxed">{text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. AGENCY CAPABILITIES */}
      <section
        id="services"
        className="scroll-mt-28 section-blue py-16 sm:py-20 lg:py-24 border-b border-border-subtle"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-brand-cyan/20 bg-brand-cyan/5 text-brand-cyan mb-2">
              Agency Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-[#fff] leading-tight">
              White-Label Digital Services{' '}
              <span className="bg-gradient-brand bg-clip-text text-transparent">
                Your Agency Can Offer
              </span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-muted leading-relaxed">
              Bring Nexovio into the projects where your agency needs additional technical expertise. The service areas below cover the most common types of delivery support.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Interactive Service Selector */}
          <div className="grid gap-6 lg:grid-cols-12 items-start">
            <div className="space-y-2 lg:sticky lg:top-36 lg:col-span-4">
              {servicesData.map((service, index) => {
                const Icon = service.icon;
                const selected = activeService === index;
                return (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => setActiveService(index)}
                    className={`flex w-full items-center gap-3.5 rounded-2xl border p-4 text-left transition-all ${selected
                      ? 'border-brand-cyan bg-surface-elevated shadow-glow'
                      : 'border-border-subtle bg-surface-elevated/60 hover:border-brand-cyan/40 hover:bg-surface-elevated'
                      }`}
                    aria-pressed={selected}
                  >
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors ${selected ? 'bg-gradient-brand text-[#fff]' : 'bg-surface-subtle text-brand-cyan'
                        }`}
                    >
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-bold text-slate-900 dark:text-[#fff]">
                        {service.shortTitle}
                      </span>
                      <span className="mt-0.5 block truncate text-[11px] text-muted">{service.tag}</span>
                    </span>
                    <ChevronRight
                      className={`h-4 w-4 shrink-0 transition-transform ${selected ? 'text-brand-cyan translate-x-0.5' : 'text-muted'
                        }`}
                      aria-hidden="true"
                    />
                  </button>
                );
              })}
            </div>

            {/* Active Service Showcase */}
            <div className="lg:col-span-8">
              <article className="rounded-3xl border border-border-subtle bg-surface-elevated p-6 sm:p-9 shadow-sm">
                <div className="flex flex-wrap items-start justify-between gap-4 border-b border-border-subtle pb-6">
                  <div className="flex items-center gap-3.5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20">
                      <CurrentServiceIcon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-widest text-brand-cyan">
                        Agency Capability
                      </span>
                      <h3 className="mt-0.5 text-2xl font-extrabold text-slate-900 dark:text-[#fff]">
                        {currentService.title}
                      </h3>
                    </div>
                  </div>
                  <Link
                    href={currentService.href}
                    className="inline-flex items-center gap-1.5 rounded-xl border border-border-subtle bg-surface-subtle px-3.5 py-2 text-xs font-bold text-brand-bright hover:text-brand-cyan hover:border-brand-cyan/40 transition-colors"
                  >
                    View service details
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </div>

                <p className="mt-6 text-sm sm:text-base leading-relaxed text-muted">
                  {currentService.description}
                </p>

                <div className="mt-7">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-[#fff]">
                    Capabilities included in the delivery
                  </h4>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {currentService.capabilities.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-2.5 rounded-xl border border-border-subtle bg-surface-subtle/50 p-3 text-xs sm:text-sm text-foreground"
                      >
                        <CheckCircle2
                          className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500"
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 rounded-2xl border border-brand-cyan/25 bg-brand-cyan/5 p-5">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-brand-cyan">
                      Typical deliverable
                    </div>
                    <div className="mt-1 text-xs sm:text-sm text-muted leading-relaxed">
                      {currentService.deliverable}
                    </div>
                  </div>
                  <Button
                    href="#partner-form"
                    variant="primary"
                    size="sm"
                    trackingName={`agency_discuss_${currentService.id}`}
                    trackingLocation="agency_services_tabs"
                    icon={<ArrowRight className="w-3.5 h-3.5" />}
                    className="shrink-0 font-bold"
                  >
                    Discuss this service
                  </Button>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section>
        {/* Feature Banner with Generated Image - Full Width (100% Edge-to-Edge) */}
        <div className="w-full bg-[#050A18] relative overflow-hidden group">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <Image
              src="/images/agency-partnership/agency-capabilities-workstation.jpg"
              alt="Realistic wide-angle software development agency workstation with code and UI wireframes"
              fill
              sizes="100vw"
              className="object-cover object-center opacity-35 md:opacity-45 group-hover:scale-105 group-hover:opacity-50 transition-all duration-700 ease-out"
            />
            {/* Directional gradients for maximum text readability across full width */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-slate-950/40" />
            <div className="absolute top-0 right-10 w-96 h-96 bg-brand-cyan/15 rounded-full blur-3xl pointer-events-none" />
            {/* Modern tech dot grid pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#00c6ff_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.06]" />
          </div>

          {/* Glowing Top Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-cyan to-transparent opacity-80" />

          {/* Centered Content Container */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-18 lg:py-22 relative z-10">
            <div className="max-w-4xl space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-cyan/30 bg-brand-cyan/15 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-cyan backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" />
                Technical Delivery Support
              </span>
              <h3 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#fff] leading-tight tracking-tight">
                Add New Digital Capabilities{' '}
                <span className="bg-gradient-brand bg-clip-text text-transparent">
                  Without Building Everything In-House
                </span>
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-[#fff] leading-relaxed max-w-3xl">
                Have a client asking for something outside your current team? Bring us into the project
                and keep the relationship, strategy, and creative direction with your agency.
              </p>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-wrap items-center gap-3.5">
                <Button
                  href="#partner-form"
                  variant="primary"
                  size="md"
                  trackingName="capabilities_banner_discuss_project"
                  trackingLocation="agency_capabilities_banner"
                  icon={<ArrowRight className="h-4 w-4" />}
                  className="shadow-glow font-bold"
                >
                  Discuss a Client Project
                </Button>
                <Button
                  href="#workflow"
                  variant="secondary"
                  size="md"
                  trackingName="capabilities_banner_see_workflow"
                  trackingLocation="agency_capabilities_banner"
                  className="font-medium bg-white/10 text-white border-white/20 hover:bg-white/20"
                >
                  See How It Works
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. WORKFLOW & PROCESS */}
      <section
        id="workflow"
        className="scroll-mt-28 section-white py-16 sm:py-20 lg:py-24 border-b border-border-subtle"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-brand-cyan/20 bg-brand-cyan/5 text-brand-cyan mb-2">
              Clear Workflow
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-[#fff] leading-tight">
              How Our White-Label Agency{' '}
              <span className="bg-gradient-brand bg-clip-text text-transparent">
                Partnership Works
              </span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-muted leading-relaxed">
              A simple delivery process helps both teams know what happens next, from the first project
              brief through launch and handover.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-12 items-start">
            {/* Visual Process Column */}
            <div className="lg:sticky lg:top-36 lg:col-span-5 space-y-4">
              <div className="overflow-hidden rounded-3xl border border-border-subtle bg-surface-elevated p-2.5 shadow-card">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image
                    src="/images/agency-partnership/agency-process-sprint.jpg"
                    alt="Realistic software development agile sprint planning and project delivery review"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 rounded-lg bg-brand-cyan/90 px-3 py-1.5 text-xs font-bold text-slate-950">
                    A practical delivery process
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-border-subtle bg-surface-elevated p-5">
                <div className="text-xs font-mono font-bold uppercase tracking-widest text-brand-cyan mb-3">
                  What Keeps Delivery Simple
                </div>
                <div className="grid grid-cols-3 gap-2 text-center text-[11px]">
                  <div className="rounded-xl border border-border-subtle bg-surface-subtle p-3">
                    <div className="font-bold text-slate-900 dark:text-[#fff]">Brief</div>
                    <div className="mt-1 text-muted">Understand</div>
                  </div>
                  <div className="rounded-xl border border-border-subtle bg-surface-subtle p-3">
                    <div className="font-bold text-slate-900 dark:text-[#fff]">Build</div>
                    <div className="mt-1 text-muted">Deliver</div>
                  </div>
                  <div className="rounded-xl border border-border-subtle bg-surface-subtle p-3">
                    <div className="font-bold text-slate-900 dark:text-[#fff]">Launch</div>
                    <div className="mt-1 text-muted">Handover</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Steps List */}
            <div className="space-y-4 lg:col-span-7">
              {workflowSteps.map((step) => (
                <article
                  key={step.number}
                  className="rounded-2xl border border-border-subtle bg-surface-elevated/70 p-5 sm:p-6 transition hover:border-brand-cyan/40 shadow-sm"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 px-2.5 py-1 text-xs font-extrabold text-brand-cyan">
                      Step {step.number}
                    </span>
                    <span className="rounded border border-border-subtle bg-surface-subtle px-2.5 py-1 text-[11px] font-semibold text-muted">
                      {step.tag}
                    </span>
                  </div>
                  <h3 className="mt-3 text-lg font-bold text-slate-900 dark:text-[#fff]">{step.title}</h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">{step.description}</p>
                  <div className="mt-4 flex items-start gap-2 border-t border-border-subtle pt-3.5 text-xs font-semibold leading-relaxed text-emerald-400">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" aria-hidden="true" />
                    <span>{step.result}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. ENGAGEMENT MODELS */}
      <section
        id="engagement"
        className="scroll-mt-28 section-blue py-16 sm:py-20 lg:py-24 border-b border-border-subtle"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-brand-cyan/20 bg-brand-cyan/5 text-brand-cyan mb-2">
              Agency-Friendly Collaboration
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-[#fff] leading-tight">
              Choose the Engagement Model That{' '}
              <span className="bg-gradient-brand bg-clip-text text-transparent">
                Fits the Project
              </span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-muted leading-relaxed">
              Some client projects have a clear scope from the start. Others need ongoing technical support
              as requirements change. We can work around either approach.
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <div
              className="inline-flex rounded-2xl border border-border-subtle bg-surface-elevated p-1 shadow-sm"
              role="tablist"
              aria-label="Engagement models"
            >
              {engagementModels.map((model, index) => (
                <button
                  key={model.title}
                  type="button"
                  onClick={() => setActiveEngagement(index)}
                  className={`rounded-xl px-5 py-2.5 text-xs font-bold transition-all ${activeEngagement === index
                    ? 'bg-gradient-brand text-[#fff] shadow-sm'
                    : 'text-muted hover:text-slate-900 dark:hover:text-[#fff]'
                    }`}
                  role="tab"
                  aria-selected={activeEngagement === index}
                >
                  {index === 0 ? 'Project-Based' : 'Hourly Support'}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {engagementModels.map((model, index) => {
              const Icon = model.icon;
              const selected = activeEngagement === index;
              return (
                <article
                  key={model.title}
                  className={`rounded-3xl bg-surface-elevated p-7 sm:p-9 transition-all ${selected
                    ? 'border-2 border-brand-bright shadow-glow'
                    : 'border border-border-subtle opacity-90'
                    }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-colors ${selected ? 'bg-gradient-brand text-[#fff]' : 'bg-surface-subtle text-brand-cyan'
                        }`}
                    >
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-[#fff]">{model.title}</h3>
                      <p className="text-xs text-muted">{model.subtitle}</p>
                    </div>
                  </div>

                  <div className="mt-6 space-y-3.5 text-sm text-foreground">
                    {model.points.map((point) => (
                      <div key={point} className="flex items-start gap-2.5">
                        <CheckCircle2
                          className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500"
                          aria-hidden="true"
                        />
                        <span className="leading-relaxed">{point}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 border-t border-border-subtle pt-5">
                    <a
                      href="#partner-form"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-bright hover:text-brand-cyan transition-colors"
                    >
                      Discuss this model
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10. PROJECT EXAMPLES / CASE STUDIES */}
      <section
        id="case-studies"
        className="scroll-mt-28 section-white py-16 sm:py-20 lg:py-24 border-b border-border-subtle"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 items-start">
            <div className="lg:sticky lg:top-36 lg:col-span-4 space-y-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-brand-cyan/20 bg-brand-cyan/5 text-brand-cyan">
                Project Examples
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-[#fff] leading-tight">
                Examples of the Work We Support{' '}
                <span className="bg-gradient-brand bg-clip-text text-transparent">
                  Behind Your Agency
                </span>
              </h2>
              <p className="text-sm sm:text-base text-muted leading-relaxed">
                Every agency project is different. The common thread is having the right technical support
                when your internal team does not need to do everything itself.
              </p>
              <div className="rounded-2xl border border-border-subtle bg-surface-elevated p-5">
                <div className="text-xs font-mono font-bold uppercase tracking-widest text-brand-cyan mb-2">
                  Delivery Assurance
                </div>
                <p className="text-xs text-muted leading-relaxed">
                  We maintain strict confidentiality and follow verified scopes. Your agency retains
                  full client credit and IP ownership.
                </p>
              </div>
            </div>

            <div className="space-y-6 lg:col-span-8">
              {[
                {
                  label: 'Digital Marketing Agency • USA',
                  title: 'Web & AI delivery for a client project',
                  challenge:
                    'The agency already handled strategy, creative and marketing but needed additional technical support for a custom web application and AI-powered knowledge experience.',
                  solution:
                    'Nexovio supported the technical architecture, application development, database work and AI implementation behind the agency.',
                  outcome:
                    'The agency could offer the broader project without building the full technical capability internally.',
                },
                {
                  label: 'Creative Studio • UK',
                  title: 'Figma designs turned into mobile applications',
                  challenge:
                    'A design-led agency had won a mobile project and needed development support to turn approved interface designs into production-ready applications.',
                  solution:
                    'Nexovio handled the mobile implementation, technical integrations and release support while the studio stayed focused on the client experience.',
                  outcome:
                    'The studio retained ownership of the creative relationship while the technical implementation moved forward behind the scenes.',
                },
                {
                  label: 'Digital Consultancy • UAE',
                  title: 'Development support during project overflow',
                  challenge:
                    'Several active client projects were running at the same time and the internal team needed additional technical capacity.',
                  solution:
                    'Nexovio joined the delivery workflow and supported development, maintenance and technical tasks according to the agreed requirements.',
                  outcome:
                    'The consultancy had additional technical capacity without changing the overall client-facing model.',
                },
              ].map((caseStudy) => (
                <article
                  key={caseStudy.title}
                  className="rounded-3xl border border-border-subtle bg-surface-elevated/70 p-6 sm:p-8 shadow-sm transition hover:border-brand-cyan/40"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border-subtle pb-4">
                    <span className="rounded-md bg-brand-cyan/10 border border-brand-cyan/20 px-2.5 py-1 text-[11px] font-bold text-brand-cyan">
                      {caseStudy.label}
                    </span>
                    <span className="text-xs font-mono text-muted">Example workflow</span>
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-slate-900 dark:text-[#fff]">
                    {caseStudy.title}
                  </h3>
                  <div className="mt-5 grid gap-5 md:grid-cols-3">
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-widest text-muted">
                        The situation
                      </div>
                      <p className="mt-2 text-xs sm:text-sm text-foreground leading-relaxed">
                        {caseStudy.challenge}
                      </p>
                    </div>
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-widest text-brand-cyan">
                        How Nexovio helped
                      </div>
                      <p className="mt-2 text-xs sm:text-sm text-foreground leading-relaxed">
                        {caseStudy.solution}
                      </p>
                    </div>
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-widest text-emerald-400">
                        The outcome
                      </div>
                      <p className="mt-2 text-xs sm:text-sm text-foreground leading-relaxed">
                        {caseStudy.outcome}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 11. GLOBAL AGENCY PARTNERSHIPS */}
      <section
        id="global"
        className="scroll-mt-28 section-blue py-16 sm:py-20 lg:py-24 border-b border-border-subtle"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-brand-cyan/20 bg-brand-cyan/5 text-brand-cyan">
                Global Agency Partnerships
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-[#fff] leading-tight">
                Work With a Technical Partner{' '}
                <span className="bg-gradient-brand bg-clip-text text-transparent">
                  Across Time Zones
                </span>
              </h2>
              <p className="text-sm sm:text-base text-muted leading-relaxed">
                Nexovio works with agencies and digital teams across different markets. The goal is not
                simply to work remotely, but to create a practical working rhythm around communication,
                reviews, and delivery.
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {globalRegions.map((region) => (
                  <article
                    key={region.title}
                    className="rounded-2xl border border-border-subtle bg-surface-elevated p-4 sm:p-5 shadow-sm"
                  >
                    <div className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-[#fff]">
                      <Globe2 className="h-4 w-4 text-brand-cyan shrink-0" aria-hidden="true" />
                      {region.title}
                    </div>
                    <p className="mt-2 text-xs text-muted leading-relaxed">{region.description}</p>
                  </article>
                ))}
              </div>

              <div className="space-y-3 pt-2">
                {[
                  'Direct communication through the channels your agency already uses (Slack, Teams, Email)',
                  'Your repositories (GitHub, GitLab) and development workflow where appropriate',
                  'A clear communication model for client-facing and technical conversations',
                  'NDA-friendly discussions before sensitive project information is shared',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-xs sm:text-sm text-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" aria-hidden="true" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-3xl border border-border-subtle bg-surface-elevated p-2.5 shadow-card">
                <div className="relative aspect-[16/11] overflow-hidden rounded-2xl">
                  <Image
                    src="/images/agency-partnership/agency-global-delivery-workflow.jpg"
                    alt="Realistic global agency client handoff with remote video call and code review"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12. PARTNER INQUIRY FORM */}
      <section
        id="partner-form"
        className="scroll-mt-28 section-white py-16 sm:py-20 lg:py-24 border-b border-border-subtle"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-border-subtle bg-surface-elevated/70 p-6 sm:p-10 shadow-card">
            <div className="grid gap-10 lg:grid-cols-12 items-start">
              {/* Left Column */}
              <div className="lg:sticky lg:top-36 lg:col-span-5 space-y-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-brand-cyan/20 bg-brand-cyan/5 text-brand-cyan">
                  Agency Collaboration
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-[#fff] leading-tight">
                  Have a Client Project You{' '}
                  <span className="bg-gradient-brand bg-clip-text text-transparent">
                    Need Help Delivering?
                  </span>
                </h2>
                <p className="text-base font-bold text-brand-cyan">
                  Tell us what your agency needs. We will look at the scope, timeline, and best way to
                  work together.
                </p>
                <p className="text-sm text-muted leading-relaxed">
                  Whether you need a full project delivered, additional development capacity, or ongoing
                  technical support, send us the details and we can start from the requirements.
                </p>

                <div className="overflow-hidden rounded-2xl border border-border-subtle bg-surface-elevated">
                  <div className="relative aspect-[16/10]">
                    <Image
                      src="/images/agency-partnership/agency-partner-consultation.jpg"
                      alt="Realistic collaborative technical consultation between agency directors and technology lead"
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="space-y-3 text-xs sm:text-sm text-muted">
                  <div className="flex items-start gap-2.5">
                    <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                    <span>Discuss NDA requirements before sharing sensitive client information.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-brand-cyan" />
                    <span>Use the communication and project-management tools that fit your workflow.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Globe2 className="mt-0.5 h-4 w-4 shrink-0 text-indigo-400" />
                    <span>Work with a technical partner across different regions and time zones.</span>
                  </div>
                </div>

                <div className="rounded-2xl border border-border-subtle bg-surface-elevated p-4 text-sm">
                  <div className="font-bold text-slate-900 dark:text-[#fff]">Agency Partner Desk</div>
                  <a
                    href="mailto:info@nexoviodigitalsolutions.com"
                    className="mt-1 block font-semibold text-brand-bright hover:underline text-xs sm:text-sm"
                  >
                    info@nexoviodigitalsolutions.com
                  </a>
                </div>
              </div>

              {/* Right Column: Live Form */}
              <div className="lg:col-span-7">
                <div className="rounded-2xl border border-border-subtle bg-surface-elevated p-6 sm:p-8 shadow-sm">
                  {formSubmitted ? (
                    <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-8 text-center animate-in fade-in zoom-in-95">
                      <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-400" aria-hidden="true" />
                      <h3 className="mt-4 text-2xl font-extrabold text-slate-900 dark:text-[#fff]">
                        Thanks for Reaching Out
                      </h3>
                      <p className="mx-auto mt-2 max-w-md text-sm text-muted leading-relaxed">
                        Your project details have been safely received by our Agency Desk. We will review
                        the scope and follow up promptly with next steps.
                      </p>
                      <button
                        type="button"
                        onClick={() => setFormSubmitted(false)}
                        className="mt-6 px-5 py-2.5 rounded-xl border border-border-subtle text-xs font-bold text-slate-900 dark:text-[#fff] hover:bg-surface-subtle transition-colors"
                      >
                        Submit another enquiry
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleFormSubmit} className="space-y-5" noValidate>
                      <div>
                        <h3 className="text-xl font-extrabold text-slate-900 dark:text-[#fff]">
                          Tell Us About Your Project
                        </h3>
                        <p className="mt-1 text-sm text-muted">A few details are enough to start the conversation.</p>
                      </div>

                      {formError && (
                        <div className="flex items-start gap-2.5 p-3.5 rounded-xl border border-red-500/30 bg-red-500/10 text-xs text-red-200">
                          <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                          <span>{formError}</span>
                        </div>
                      )}

                      <div className="grid gap-4 sm:grid-cols-2">
                        <label className="block">
                          <span className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-muted">
                            Your Name *
                          </span>
                          <input
                            required
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Your full name"
                            className="w-full rounded-xl border border-border-subtle bg-surface px-3.5 py-3 text-sm text-foreground outline-none transition focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan"
                          />
                        </label>
                        <label className="block">
                          <span className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-muted">
                            Work Email *
                          </span>
                          <input
                            required
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="you@agency.com"
                            className="w-full rounded-xl border border-border-subtle bg-surface px-3.5 py-3 text-sm text-foreground outline-none transition focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan"
                          />
                        </label>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <label className="block">
                          <span className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-muted">
                            Agency Name & Website
                          </span>
                          <input
                            type="text"
                            name="agency"
                            value={formData.agency}
                            onChange={handleInputChange}
                            placeholder="Your Agency (agency.com)"
                            className="w-full rounded-xl border border-border-subtle bg-surface px-3.5 py-3 text-sm text-foreground outline-none transition focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan"
                          />
                        </label>
                        <label className="block">
                          <span className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-muted">
                            Engagement Model
                          </span>
                          <select
                            name="engagement"
                            value={formData.engagement}
                            onChange={handleInputChange}
                            className="w-full rounded-xl border border-border-subtle bg-surface px-3.5 py-3 text-sm text-foreground outline-none transition focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan"
                          >
                            <option>Project-Based Development</option>
                            <option>Hourly Technical Support</option>
                            <option>Ongoing Development Support</option>
                            <option>Overflow Development</option>
                          </select>
                        </label>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <label className="block">
                          <span className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-muted">
                            Agency Type
                          </span>
                          <select
                            name="agencyType"
                            value={formData.agencyType}
                            onChange={handleInputChange}
                            className="w-full rounded-xl border border-border-subtle bg-surface px-3.5 py-3 text-sm text-foreground outline-none transition focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan"
                          >
                            <option>Digital Marketing Agency</option>
                            <option>Web Design Agency</option>
                            <option>Branding & Creative Agency</option>
                            <option>SEO Agency</option>
                            <option>Creative Studio</option>
                            <option>Software / IT Consultancy</option>
                            <option>Consultant / Independent Professional</option>
                          </select>
                        </label>
                        <label className="block">
                          <span className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-muted">
                            Primary Need
                          </span>
                          <select
                            name="primaryNeed"
                            value={formData.primaryNeed}
                            onChange={handleInputChange}
                            className="w-full rounded-xl border border-border-subtle bg-surface px-3.5 py-3 text-sm text-foreground outline-none transition focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan"
                          >
                            {servicesData.map((service) => (
                              <option key={service.id}>{service.title}</option>
                            ))}
                            <option>Hourly Overflow Support</option>
                          </select>
                        </label>
                      </div>

                      <label className="block">
                        <span className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-muted">
                          Project Details *
                        </span>
                        <textarea
                          required
                          name="projectDetails"
                          rows={5}
                          value={formData.projectDetails}
                          onChange={handleInputChange}
                          placeholder="Tell us about the client project, scope, technology, key features, timeline, or current challenge."
                          className="w-full resize-y rounded-xl border border-border-subtle bg-surface px-3.5 py-3 text-sm text-foreground outline-none transition focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan"
                        />
                      </label>

                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-t border-border-subtle pt-4">
                        <div className="flex items-start gap-2 text-xs text-muted">
                          <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" aria-hidden="true" />
                          <span>We discuss confidentiality & NDA requirements before sensitive details are shared.</span>
                        </div>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-gradient-brand px-7 py-3 text-sm font-extrabold text-[#fff] shadow-glow transition hover:brightness-110 disabled:opacity-50"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="h-4 w-4 animate-spin" />
                              <span className='text-[#fff]'>Sending...</span>
                            </>
                          ) : (
                            <>
                              <span className='text-[#fff]'>Send Project Details</span>
                              <Send className="h-4 w-4" aria-hidden="true" />
                            </>
                          )}
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 13. FREQUENTLY ASKED QUESTIONS */}
      <FaqSection
        faqs={faqs}
        badge="CLEAR ANSWERS"
        title="Frequently Asked"
        highlightText="Questions"
        description="Common questions agencies ask before working with a technical delivery partner."
      />
    </div>
  );
}