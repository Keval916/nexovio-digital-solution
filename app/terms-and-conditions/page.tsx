import React from "react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata({
  title: "Terms & Conditions | Nexovio Digital Solutions",
  description:
    "Review the Terms & Conditions governing use of the Nexovio Digital Solutions website and services. Includes service scope, intellectual property and legal disclaimers.",
  keywords: [
    "terms and conditions",
    "usage policy",
    "legal disclaimers",
    "Nexovio policy",
    "Terms of Service",
  ],
  path: "/terms-and-conditions",
});

export default function TermsPage() {
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@nexoviodigitalsolutions.com";

  return (
    <div className="pt-28 pb-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "Terms & Conditions", url: "/terms-and-conditions" }]} />

        <div className="space-y-6 mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-cyan">
            Legal & Operational
          </span>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-[1.15]">
            <span className="text-white">Terms &amp;</span>{" "}
            <span className="bg-gradient-brand bg-clip-text text-transparent">Conditions</span>
          </h1>
          <p className="text-sm text-muted">
            Last Updated: September 2026 • Standard Terms
          </p>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-sm sm:text-base text-muted leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">1. Agreement to Terms</h2>
            <p>
              By accessing or using the Nexovio Digital Solutions website (“Site”), you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please discontinue use of this Site immediately.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">2. Scope of Services & Inquiries</h2>
            <p>
              The content provided on this Site is for general informational purposes concerning our IT software development, web design, UI/UX, and digital marketing services. Submitting an inquiry through our consultation forms does not create a binding service contract. Binding client engagements are governed exclusively by formal Statements of Work (SOW) executed separately between Nexovio and the client.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">3. Intellectual Property Rights</h2>
            <p>
              All trademarks, logos, visual emblems, code architectures, typography, and content displayed on this website are the intellectual property of Nexovio Digital Solutions or licensed third parties. You may not reproduce, redistribute, or reverse-engineer our assets without prior written consent.
            </p>
            <p>
              For paid client engagements, intellectual property ownership terms are clearly specified in our formal client contracts, with full code ownership transferring upon project milestone completion and final settlement.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">4. Disclaimers & No Guarantees</h2>
            <p>
              While we strive to maintain accurate, up-to-date information, this Site is provided on an “as is” and “as available” basis without warranties of any kind. As outlined in our ethical standards, Nexovio does not promise or guarantee specific Google search rankings, organic lead volumes, or revenue increases from organic marketing activities.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">5. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Nexovio Digital Solutions and its team members shall not be liable for any indirect, incidental, or consequential damages resulting from your use of or inability to use this website.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">6. Inquiries & Contact</h2>
            <p>
              For legal notices or questions regarding these terms, please reach out to:
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
