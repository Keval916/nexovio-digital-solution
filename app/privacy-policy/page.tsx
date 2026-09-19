import React from "react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata({
  title: "Privacy Policy | Nexovio Digital Solutions",
  description:
    "Review the Nexovio Digital Solutions privacy policy explaining how we collect, handle, and protect your information across our website and consultation forms.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@nexoviodigitalsolutions.com";

  return (
    <div className="pt-28 pb-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "Privacy Policy", url: "/privacy-policy" }]} />

        <div className="space-y-6 mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-cyan">
            Legal & Compliance
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-sm text-muted">
            Last Updated: September 2026 • Effective Immediately
          </p>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-sm sm:text-base text-muted leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">1. Introduction & Overview</h2>
            <p>
              Nexovio Digital Solutions (“Nexovio,” “we,” “us,” or “our”) respects your privacy and is committed to protecting the personal information you share with us through our website. This Privacy Policy details the types of information we may collect, how we utilize and safeguard that data, and your rights concerning your personal information.
            </p>
            <p className="text-xs italic text-muted-dark">
              Note: This policy provides general information regarding our standard data practices and is not intended as formal legal counsel.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">2. Information We Collect</h2>
            <p>
              We collect information only when you knowingly provide it to us or when you interact with our website:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-muted-light">
              <li>
                <strong>Contact & Consultation Inquiries:</strong> When you submit a project inquiry, we collect your name, business name, email address, phone or WhatsApp number, service preferences, estimated budget, and project notes.
              </li>
              <li>
                <strong>Technical & Usage Information:</strong> When you navigate our platform, we automatically collect non-personally identifiable technical telemetry, including browser type, operating system, pages visited, referring URLs, and approximate geographic region.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">3. How We Use Your Information</h2>
            <p>
              The information we collect is used strictly for legitimate business purposes:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-muted-light">
              <li>To evaluate project feasibility and respond to your scope inquiries</li>
              <li>To prepare tailored proposals, architectural estimates, and schedule discovery calls</li>
              <li>To monitor website performance, Core Web Vitals, and user interaction patterns</li>
              <li>To prevent malicious activity and ensure the technical security of our platform</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">4. Analytics, Cookies & Tracking Technologies</h2>
            <p>
              We may utilize Google Analytics 4 (GA4) and Google Tag Manager (GTM) to observe aggregate visitor traffic patterns. Where required by applicable privacy laws, non-essential analytical cookies are conditioned on user consent via our accessible cookie banner. We do not transmit sensitive personal credentials, project specifications, or passwords to third-party analytics services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">5. Information Sharing & Third Parties</h2>
            <p>
              We never sell, rent, or trade your personal information to third-party marketing brokers. We may share information only with trusted cloud infrastructure providers (such as hosting providers and secure email gateways) who assist in delivering our services under strict confidentiality agreements.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">6. Your Rights & Contact Details</h2>
            <p>
              You have the right to request access to, correction of, or deletion of any personal information we hold regarding your inquiry. To exercise these rights or ask any questions regarding our data protection standards, please contact us at:
            </p>
            <p className="font-mono text-sm text-brand-cyan">
              {contactEmail}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
