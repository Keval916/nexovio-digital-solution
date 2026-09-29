"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { trackFormSubmit } from "@/lib/analytics";
import { Button } from "@/components/ui/Button";

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

    // Basic Client-side validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setIsSubmitting(false);
      setSubmitStatus("error");
      setErrorMessage("Please complete all required fields (Name, Email, and Project Details).");
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
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (res.ok && (result.success !== false)) {
        // Fire analytics conversion event
        trackFormSubmit("contact_page_form", formData.service);

        // Send successful lead event to Google Tag Manager
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: "generate_lead",
        });

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
    <div className="relative rounded-2xl border border-border-subtle bg-surface-elevated/80 backdrop-blur-md p-6 sm:p-10 shadow-2xl">
      <div className="mb-8">
        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
          Tell Us About Your Project
        </h3>
        <p className="mt-2 text-sm text-muted">
          Fill in the details below. Our technical team reviews every inquiry thoroughly before responding.
        </p>
      </div>

      {submitStatus === "success" ? (
        <div className="rounded-xl border border-green-500/30 bg-green-950/20 p-6 sm:p-8 text-center animate-in fade-in zoom-in-95 duration-200">
          <div className="inline-flex p-3 rounded-full bg-green-500/10 text-green-400 mb-4">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h4 className="text-lg font-bold text-white mb-2">
            Inquiry Received Successfully
          </h4>
          <p className="text-sm text-muted max-w-md mx-auto mb-6">
            Thank you for reaching out. We have logged your project requirements and will review the technical scope before contacting you.
          </p>
          <button
            type="button"
            onClick={() => setSubmitStatus("idle")}
            className="px-5 py-2.5 rounded-lg text-xs font-semibold text-white bg-surface border border-border-subtle hover:border-brand-cyan/50 transition-colors"
          >
            Submit Another Request
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          {submitStatus === "error" && (
            <div className="flex items-start gap-3 p-4 rounded-lg bg-red-950/30 border border-red-500/30 text-red-200 text-sm">
              <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-xs font-semibold uppercase tracking-wider text-muted-light mb-2"
              >
                Your Name <span className="text-brand-cyan">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Johnathan Davis"
                className="w-full rounded-lg border border-border-subtle bg-surface px-4 py-3 text-sm text-white placeholder-muted-dark focus:border-brand-cyan focus:outline-none focus:ring-1 focus:ring-brand-cyan transition-colors"
              />
            </div>

            {/* Company */}
            <div>
              <label
                htmlFor="company"
                className="block text-xs font-semibold uppercase tracking-wider text-muted-light mb-2"
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
                className="w-full rounded-lg border border-border-subtle bg-surface px-4 py-3 text-sm text-white placeholder-muted-dark focus:border-brand-cyan focus:outline-none focus:ring-1 focus:ring-brand-cyan transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-semibold uppercase tracking-wider text-muted-light mb-2"
              >
                Email Address <span className="text-brand-cyan">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="john@company.com"
                className="w-full rounded-lg border border-border-subtle bg-surface px-4 py-3 text-sm text-white placeholder-muted-dark focus:border-brand-cyan focus:outline-none focus:ring-1 focus:ring-brand-cyan transition-colors"
              />
            </div>

            {/* Phone / WhatsApp */}
            <div>
              <label
                htmlFor="phone"
                className="block text-xs font-semibold uppercase tracking-wider text-muted-light mb-2"
              >
                Phone / WhatsApp Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="0123456789"
                className="w-full rounded-lg border border-border-subtle bg-surface px-4 py-3 text-sm text-white placeholder-muted-dark focus:border-brand-cyan focus:outline-none focus:ring-1 focus:ring-brand-cyan transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Service Required */}
            <div>
              <label
                htmlFor="service"
                className="block text-xs font-semibold uppercase tracking-wider text-muted-light mb-2"
              >
                Service Required
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full rounded-lg border border-border-subtle bg-surface px-4 py-3 text-sm text-white focus:border-brand-cyan focus:outline-none focus:ring-1 focus:ring-brand-cyan transition-colors"
              >
                <option value="web-development">Web Development</option>
                <option value="web-design">Web Design</option>
                <option value="ui-ux-design">UI/UX Design</option>
                <option value="mobile-app-development">Mobile App Development</option>
                <option value="graphic-design">Graphic Design</option>
                <option value="digital-marketing">Digital Marketing / SEO</option>
                <option value="full-solution">Complete End-to-End Digital Solution</option>
              </select>
            </div>

            {/* Budget Range */}
            <div>
              <label
                htmlFor="budget"
                className="block text-xs font-semibold uppercase tracking-wider text-muted-light mb-2"
              >
                Estimated Budget Range (Optional)
              </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full rounded-lg border border-border-subtle bg-surface px-4 py-3 text-sm text-white focus:border-brand-cyan focus:outline-none focus:ring-1 focus:ring-brand-cyan transition-colors"
              >
                <option value="unspecified">Select approximate budget</option>
                <option value="tier-1">$3,000 – $7,500</option>
                <option value="tier-2">$7,500 – $15,000</option>
                <option value="tier-3">$15,000 – $30,000</option>
                <option value="tier-4">$30,000+</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-xs font-semibold uppercase tracking-wider text-muted-light mb-2"
            >
              Project Details & Goals <span className="text-brand-cyan">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Briefly describe what you are looking to build or solve, key features needed, and your target timeline..."
              className="w-full rounded-lg border border-border-subtle bg-surface px-4 py-3 text-sm text-white placeholder-muted-dark focus:border-brand-cyan focus:outline-none focus:ring-1 focus:ring-brand-cyan transition-colors resize-y"
            />
          </div>

          {/* Submit button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            variant="primary"
            size="lg"
            className="w-full sm:w-auto"
            icon={
              isSubmitting ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Send className="w-4 h-4" />
              )
            }
          >
            {isSubmitting ? "Submitting Project Details..." : "Send Project Inquiry"}
          </Button>
        </form>
      )}
    </div>
  );
}
