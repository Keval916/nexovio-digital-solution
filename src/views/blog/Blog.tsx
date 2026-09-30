"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Clock,
  User,
  Calendar,
  Search,
  Sparkles,
  BookOpen,
  Tag,
  CheckCircle2,
  Mail,
  SlidersHorizontal,
} from "lucide-react";
import { BLOG_ARTICLES, BlogArticle } from "@/src/data/blog";
import { Breadcrumbs } from "@/src/components/layout/Breadcrumbs";
import { Card } from "@/src/components/ui/Card";
import { Button } from "@/src/components/ui/Button";
import { FaqSection } from "@/src/components/sections/FaqSection";
import { formatDate } from "@/src/lib/utils";
import { getCollectionPageSchema } from "@/src/lib/schema";

const CATEGORIES = [
  "All",
  "Web Development",
  "Technology",
  "UI/UX",
  "SEO",
] as const;

const BLOG_FAQS = [
  {
    question: "Who writes the technical articles on the Nexovio blog?",
    answer:
      "Our articles are authored directly by senior software architects, lead UI/UX engineers, and technical SEO strategists based on hands-on enterprise client implementations and real benchmark data.",
  },
  {
    question: "Can I reference or cite Nexovio engineering guides?",
    answer:
      "Yes. You are welcome to cite and reference our architectural guides and benchmark statistics for educational, industry, and editorial purposes with appropriate attribution.",
  },
  {
    question: "How frequently does Nexovio publish new technical articles?",
    answer:
      "We publish bi-weekly in-depth technical teardowns, framework evaluations (Next.js, TypeScript, Headless systems), Core Web Vitals optimizations, and AI integration blueprints.",
  },
  {
    question: "Can I request a technical topic or consult on an architectural challenge?",
    answer:
      "Absolutely. You can reach out directly through our contact page or schedule an exploratory engineering consultation to discuss your specific web architecture requirements.",
  },
];

export default function BlogHubPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [subscribed, setSubscribed] = useState<boolean>(false);
  const [emailInput, setEmailInput] = useState<string>("");

  const schema = getCollectionPageSchema(
    "Nexovio Engineering Blog & Digital Strategy Journal",
    "Original, practical guides and architectural insights on modern web development, Core Web Vitals, UI/UX design systems, AI automation, and technical SEO.",
    "/blog"
  );

  // Filtered Articles based on category and search query
  const filteredArticles = useMemo(() => {
    return BLOG_ARTICLES.filter((article) => {
      const matchesCategory =
        selectedCategory === "All" || article.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Featured article: first article or the AI/custom dev article
  const featuredArticle: BlogArticle = BLOG_ARTICLES[0];
  const gridArticles = useMemo(() => {
    // If filtering or searching, show all matched articles in grid
    if (selectedCategory !== "All" || searchQuery.trim() !== "") {
      return filteredArticles;
    }
    // Default view: exclude featured from the lower grid to avoid duplication
    return filteredArticles.slice(1);
  }, [filteredArticles, selectedCategory, searchQuery]);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim() && emailInput.includes("@")) {
      setSubscribed(true);
      setEmailInput("");
    }
  };

  return (
    <div className="pt-24 pb-20 bg-background text-foreground min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs Navigation */}
        <Breadcrumbs items={[{ name: "Blog", url: "/blog" }]} />

        {/* Hero Section */}
        <div className="relative pt-6 sm:pt-10 pb-12 border-b border-border-subtle">
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none -z-10" />
          <div className="absolute bottom-0 left-10 w-96 h-96 bg-brand-bright/10 rounded-full blur-3xl pointer-events-none -z-10" />

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-brand-cyan/30 bg-brand-cyan/10 text-brand-cyan shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-brand-cyan animate-pulse" />
              Engineering &amp; Strategy Journal
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.14]">
              Engineering Insights &amp;{" "}
              <span className="bg-gradient-brand bg-clip-text text-transparent">
                Digital Strategy.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-muted leading-relaxed">
              Original, practitioner-written technical teardowns covering custom Next.js architectures, sub-second latency psychology, autonomous AI integrations, and high-impact SEO auditing.
            </p>
          </div>

          {/* Search Bar & Category Filter Bar */}
          <div className="mt-10 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
              {CATEGORIES.map((cat) => {
                const count =
                  cat === "All"
                    ? BLOG_ARTICLES.length
                    : BLOG_ARTICLES.filter((a) => a.category === cat).length;
                const isActive = selectedCategory === cat;

                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 ${isActive
                      ? "bg-brand-electric text-white shadow-glow"
                      : "bg-surface-elevated border border-border-subtle text-muted hover:text-slate-900 dark:hover:text-white hover:border-brand-cyan/40"
                      }`}
                  >
                    <span>{cat}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded-full ${isActive
                        ? "bg-white/20 text-white"
                        : "bg-slate-200 dark:bg-white/10 text-muted"
                        }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Search Input Box */}
            <div className="relative min-w-[260px] sm:min-w-[320px]">
              <Search className="w-4 h-4 text-muted absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles, topics, or stack..."
                className="w-full rounded-xl border border-border-subtle bg-surface-elevated pl-10 pr-4 py-2 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-muted focus:border-brand-cyan focus:outline-none focus:ring-1 focus:ring-brand-cyan transition-colors"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted hover:text-slate-900 dark:hover:text-white"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>

        {/* SHOWCASE SPOTLIGHT: FEATURED HERO ARTICLE (Only visible when not filtering) */}
        {selectedCategory === "All" && !searchQuery.trim() && featuredArticle && (
          <div className="my-12">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-widest text-brand-cyan font-bold">
                Featured Engineering Deep Dive
              </span>
            </div>

            <Link
              href={`/blog/${featuredArticle.slug}`}
              className="group block relative rounded-3xl border border-border-subtle bg-surface-elevated/80 hover:border-brand-cyan/50 backdrop-blur-xl overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-1"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                {/* Left: Realistic Featured Image */}
                <div className="lg:col-span-7 relative min-h-[300px] sm:min-h-[380px] lg:min-h-[440px] overflow-hidden bg-slate-900">
                  <Image
                    src={featuredArticle.featuredImage}
                    alt={featuredArticle.featuredImageAlt}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent lg:hidden" />
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-cyan text-slate-950 font-mono uppercase tracking-wider shadow-lg">
                      <Tag className="w-3 h-3" />
                      {featuredArticle.category}
                    </span>
                  </div>
                </div>

                {/* Right: Article Editorial Details */}
                <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 text-xs text-muted">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-brand-cyan" />
                        <span>{formatDate(featuredArticle.publishedAt)}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-brand-cyan" />
                        <span>{featuredArticle.readingTime}</span>
                      </div>
                    </div>

                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 dark:text-white group-hover:text-brand-cyan transition-colors leading-[1.25]">
                      {featuredArticle.title}
                    </h2>

                    <p className="text-xs sm:text-sm text-muted leading-relaxed line-clamp-4">
                      {featuredArticle.excerpt}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-border-subtle flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-brand-cyan/20 border border-brand-cyan/30 flex items-center justify-center text-xs font-bold text-brand-cyan">
                        NX
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-slate-900 dark:text-white block">
                          {featuredArticle.author.name}
                        </span>
                        <span className="text-[11px] text-muted">
                          {featuredArticle.author.role}
                        </span>
                      </div>
                    </div>

                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-electric group-hover:text-brand-cyan transition-colors">
                      <span>Read Deep Dive</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* ARTICLES GRID */}
        <div className="my-12">
          {selectedCategory !== "All" || searchQuery.trim() ? (
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                {filteredArticles.length} {filteredArticles.length === 1 ? "Article" : "Articles"} Found
                {selectedCategory !== "All" && ` in "${selectedCategory}"`}
                {searchQuery && ` matching "${searchQuery}"`}
              </h2>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="text-xs font-bold text-brand-cyan hover:underline"
              >
                Reset filters
              </button>
            </div>
          ) : (
            <div className="mb-6">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-brand-cyan" />
                Latest Engineering &amp; Design Publications
              </h2>
            </div>
          )}

          {gridArticles.length === 0 ? (
            <div className="py-16 text-center rounded-2xl border border-dashed border-border-subtle bg-surface-elevated/40 p-8">
              <Search className="w-10 h-10 text-muted mx-auto mb-3 opacity-60" />
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">
                No matching articles found
              </h3>
              <p className="text-xs text-muted max-w-sm mx-auto mb-4">
                We couldn't find any articles matching your search query or filter criteria. Try searching with different terms.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-brand-cyan text-slate-950 font-mono uppercase"
              >
                Clear All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {gridArticles.map((article) => (
                <article
                  key={article.id}
                  className="group relative flex flex-col justify-between rounded-2xl border border-border-subtle bg-surface-elevated/80 hover:border-brand-cyan/45 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden shadow-xl"
                >
                  {/* Top Animated Hover Line */}
                  <div className="absolute top-0 left-0 h-[2.5px] w-0 bg-gradient-brand group-hover:w-full transition-all duration-500 ease-out z-20 pointer-events-none" />

                  <div>
                    {/* Realistic Feature Image Container */}
                    <div className="relative w-full aspect-[16/9.5] overflow-hidden bg-slate-900">
                      <Image
                        src={article.featuredImage}
                        alt={article.featuredImageAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                      {/* Category Floating Pill */}
                      <div className="absolute top-3 left-3 z-10">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-black/75 text-brand-cyan border border-brand-cyan/30 backdrop-blur-md">
                          {article.category}
                        </span>
                      </div>

                      {/* Reading Time Pill */}
                      <div className="absolute bottom-3 right-3 z-10 flex items-center gap-1 text-[11px] font-mono text-brand-cyan px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm border border-white/10">
                        <Clock className="w-3 h-3 text-brand-cyan" />
                        <span>{article.readingTime}</span>
                      </div>
                    </div>

                    {/* Article Content */}
                    <div className="p-6 space-y-3">
                      <div className="flex items-center gap-2 text-xs text-muted">
                        <Calendar className="w-3.5 h-3.5 text-brand-cyan" />
                        <span>{formatDate(article.publishedAt)}</span>
                      </div>

                      <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-brand-cyan transition-colors leading-snug">
                        <Link href={`/blog/${article.slug}`} className="focus:outline-none">
                          {article.title}
                        </Link>
                      </h3>

                      <p className="text-xs sm:text-sm text-muted leading-relaxed line-clamp-3">
                        {article.excerpt}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="p-6 pt-0 mt-4 border-t border-border-subtle/60 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-full bg-brand-cyan/15 border border-brand-cyan/25 flex items-center justify-center text-[10px] font-bold text-brand-cyan">
                        NX
                      </div>
                      <span className="text-xs font-medium text-muted truncate max-w-[120px]">
                        {article.author.name}
                      </span>
                    </div>

                    <Link
                      href={`/blog/${article.slug}`}
                      className="text-xs font-bold text-brand-bright hover:text-brand-cyan inline-flex items-center gap-1 transition-colors"
                    >
                      <span>Read Article</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>

        {/* NEWSLETTER / TECHNICAL BRIEFING CTA BANNER */}
        <section className="my-16 relative rounded-3xl border border-brand-cyan/30 bg-gradient-to-r from-surface-elevated via-brand-cyan/5 to-surface-elevated p-8 sm:p-12 overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-bright/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-brand-cyan/30 bg-brand-cyan/10 text-brand-cyan">
              <Mail className="w-3.5 h-3.5 text-brand-cyan" />
              Bi-Weekly Engineering Briefing
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Get Ahead of Modern Web &amp; AI Standards
            </h2>

            <p className="text-sm text-muted leading-relaxed">
              No promotional spam. Just high-signal technical teardowns, framework comparisons, Core Web Vitals optimization tactics, and technical SEO updates directly to your inbox.
            </p>

            {subscribed ? (
              <div className="inline-flex items-center gap-2 p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-400 text-xs font-semibold">
                <CheckCircle2 className="w-4 h-4" />
                <span>You're subscribed! We will send our latest technical guides to your inbox.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="pt-2 flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  required
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="Enter your work email address..."
                  className="w-full rounded-xl border border-border-subtle bg-surface px-4 py-3 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-muted focus:border-brand-cyan focus:outline-none focus:ring-1 focus:ring-brand-cyan transition-colors"
                />
                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  className="w-full sm:w-auto shrink-0 shadow-glow"
                >
                  Subscribe
                </Button>
              </form>
            )}
          </div>
        </section>

        {/* FAQs */}
        <FaqSection
          faqs={BLOG_FAQS}
          badge="ENGINEERING BLOG FAQ"
          title="Questions About"
          highlightText="Our Technical Articles"
        />
      </div>
    </div>
  );
}
