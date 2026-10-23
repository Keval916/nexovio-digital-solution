"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2, Lock, User, Building2, Mail, Phone, Layers, DollarSign, MessageSquare } from "lucide-react";
import { trackFormSubmit } from "@/lib/analytics";

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  message: string;
}

const INITIAL_FORM: FormData = {
  name: "",
  company: "",
  email: "",
  phone: "",
  service: "web-development",
  budget: "unspecified",
  message: "",
};

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM);
  const [honeypot, setHoneypot] = useState("");
  const [formStartedAt] = useState(() => Date.now());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    // Client-side validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setIsSubmitting(false);
      setSubmitStatus("error");
      setErrorMessage("Please complete all required fields (Name, Email, and Message).");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setIsSubmitting(false);
      setSubmitStatus("error");
      setErrorMessage("Please provide a valid email address.");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          website_url: honeypot,
          form_started_at: formStartedAt,
        }),
      });

      const result = await res.json();

      if (res.ok && result.success !== false) {
        trackFormSubmit("contact_page_form", formData.service);

        if (typeof window !== "undefined") {
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            event: "generate_lead",
          });
        }

        setSubmitStatus("success");
        setFormData(INITIAL_FORM);
      } else {
        setSubmitStatus("error");
        setErrorMessage(
          result.message || "Failed to submit form. Please contact us via email at info@nexoviodigitalsolutions.com."
        );
      }
    } catch {
      setSubmitStatus("error");
      setErrorMessage("Network error occurred. Please send an email directly to info@nexoviodigitalsolutions.com.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact-form" className="relative rounded-2xl border border-border-subtle bg-white dark:bg-[#0c182b] p-6 sm:p-10 shadow-xl shadow-slate-200/50 dark:shadow-none transition-all">
      <div className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Send Us a <span className="bg-gradient-brand bg-clip-text text-transparent">Message</span>
        </h2>
        <p className="mt-2 text-sm text-muted">
          Fill out the form and our team will get back to you shortly.
        </p>
      </div>

      {submitStatus === "success" ? (
        <div className="rounded-xl border border-green-500/30 bg-green-500/10 p-6 sm:p-8 text-center animate-in fade-in zoom-in-95 duration-200">
          <div className="inline-flex p-3 rounded-full bg-green-500/20 text-green-600 dark:text-green-400 mb-4">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
            Inquiry Received Successfully!
          </h4>
          <p className="text-sm text-muted max-w-md mx-auto mb-6">
            Thank you for reaching out. We have logged your project requirements and our engineering lead will review them within 24 hours.
          </p>
          <button
            type="button"
            onClick={() => setSubmitStatus("idle")}
            className="px-5 py-2.5 rounded-lg text-xs font-semibold text-slate-900 dark:text-white bg-slate-100 dark:bg-surface border border-border-subtle hover:border-brand-cyan/50 transition-colors"
          >
            Submit Another Request
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          {submitStatus === "error" && (
            <div className="flex items-start gap-3 p-4 rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-500/30 text-red-700 dark:text-red-200 text-sm">
              <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Invisible honeypot trap for automated spam bots */}
          <div style={{ display: "none", position: "absolute", left: "-9999px", opacity: 0 }} aria-hidden="true">
            <label htmlFor="website_url">Leave this field blank</label>
            <input
              type="text"
              id="website_url"
              name="website_url"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2"
              >
                Your Name <span className="text-brand-cyan">*</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Johnathan Davis"
                  className="w-full rounded-xl border border-slate-200 dark:border-border-subtle bg-slate-50/50 dark:bg-[#071120] px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-brand-cyan focus:bg-white dark:focus:bg-[#071120] focus:outline-none focus:ring-2 focus:ring-brand-cyan/20 transition-all"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2"
              >
                Your Email <span className="text-brand-cyan">*</span>
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@company.com"
                  className="w-full rounded-xl border border-slate-200 dark:border-border-subtle bg-slate-50/50 dark:bg-[#071120] px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-brand-cyan focus:bg-white dark:focus:bg-[#071120] focus:outline-none focus:ring-2 focus:ring-brand-cyan/20 transition-all"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2"
              >
                Phone Number
              </label>
              <div className="relative">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 000-0000"
                  className="w-full rounded-xl border border-slate-200 dark:border-border-subtle bg-slate-50/50 dark:bg-[#071120] px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-brand-cyan focus:bg-white dark:focus:bg-[#071120] focus:outline-none focus:ring-2 focus:ring-brand-cyan/20 transition-all"
                />
              </div>
            </div>

            {/* Service Required */}
            <div>
              <label
                htmlFor="service"
                className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2"
              >
                Select Service <span className="text-brand-cyan">*</span>
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 dark:border-border-subtle bg-slate-50/50 dark:bg-[#071120] px-4 py-3 text-sm text-slate-900 dark:text-white focus:border-brand-cyan focus:bg-white dark:focus:bg-[#071120] focus:outline-none focus:ring-2 focus:ring-brand-cyan/20 transition-all cursor-pointer"
              >
                <option value="web-development">Web Development</option>
                <option value="web-design">Web Design</option>
                <option value="ui-ux-design">UI/UX Design</option>
                <option value="mobile-app-development">Mobile App Development</option>
                <option value="graphic-design">Graphic Design</option>
                <option value="digital-marketing">Digital Marketing &amp; SEO</option>
                <option value="ai-development">AI Agent &amp; Automation</option>
                <option value="full-solution">Complete Digital Solution</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Company */}
            <div>
              <label
                htmlFor="company"
                className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2"
              >
                Company / Organization
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="e.g. Acme Corporation"
                className="w-full rounded-xl border border-slate-200 dark:border-border-subtle bg-slate-50/50 dark:bg-[#071120] px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-brand-cyan focus:bg-white dark:focus:bg-[#071120] focus:outline-none focus:ring-2 focus:ring-brand-cyan/20 transition-all"
              />
            </div>

            {/* Budget */}
            <div>
              <label
                htmlFor="budget"
                className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2"
              >
                Estimated Budget Range (Optional)
              </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 dark:border-border-subtle bg-slate-50/50 dark:bg-[#071120] px-4 py-3 text-sm text-slate-900 dark:text-white focus:border-brand-cyan focus:bg-white dark:focus:bg-[#071120] focus:outline-none focus:ring-2 focus:ring-brand-cyan/20 transition-all cursor-pointer"
              >
                <option value="unspecified">Select budget range</option>
                <option value="tier-1">Under $1,000</option>
                <option value="tier-2">$1,000 – $2,500</option>
                <option value="tier-3">$2,500 – $5,000</option>
                <option value="tier-4">$5,000 – $10,000</option>
                <option value="tier-5">$10,000 – $25,000</option>
                <option value="tier-6">$25,000+</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2"
            >
              Your Message <span className="text-brand-cyan">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your project goals, scope, and target launch timeline..."
              className="w-full rounded-xl border border-slate-200 dark:border-border-subtle bg-slate-50/50 dark:bg-[#071120] px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-brand-cyan focus:bg-white dark:focus:bg-[#071120] focus:outline-none focus:ring-2 focus:ring-brand-cyan/20 transition-all resize-y"
            />
          </div>

          {/* Submit Action & Trust Note */}
          <div className="pt-2 space-y-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl font-bold text-sm text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-500/25 active:scale-[0.99] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Submitting Inquiry...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </>
              )}
            </button>

            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
              <Lock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>Your information is secure and will only be used to respond to your inquiry.</span>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}

