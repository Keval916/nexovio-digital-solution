"use client";

import React, { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Clock,
  Calendar,
  Search,
  Sparkles,
  BookOpen,
  Tag,
  CheckCircle2,
  Mail,
  LayoutGrid,
  List,
  Layers,
  ChevronLeft,
  ChevronRight,
  X,
  AlertCircle,
  Loader2,
  ArrowUpRight,
} from "lucide-react";
import { BLOG_ARTICLES, BlogArticle } from "@/src/data/blog";
import { Breadcrumbs } from "@/src/components/layout/Breadcrumbs";
import { formatDate } from "@/src/lib/utils";
import { getCollectionPageSchema } from "@/src/lib/schema";

const DEFAULT_CATEGORIES = [
  "All",
  "Web Development",
  "Technology",
  "UI/UX",
  "SEO",
  "Web Design",
  "Digital Marketing",
];

const ITEMS_PER_PAGE = 12;

export default function BlogHubPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [categoriesList, setCategoriesList] = useState<string[]>(DEFAULT_CATEGORIES);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [articles, setArticles] = useState<BlogArticle[]>(BLOG_ARTICLES);

  // Dynamically sync categories and latest articles from admin/storage
  useEffect(() => {
    fetch("/api/admin/blog")
      .then((r) => r.json())
      .then((data) => {
        if (data.success && Array.isArray(data.articles) && data.articles.length > 0) {
          setArticles(data.articles);
        }
      })
      .catch(() => {});

    fetch("/api/admin/categories")
      .then((r) => r.json())
      .then((data) => {
        if (data.success && Array.isArray(data.categories)) {
          const names = data.categories.map((c: any) => c.name);
          const articleCats = Array.from(new Set(BLOG_ARTICLES.map((a) => a.category)));
          const merged = ["All", ...Array.from(new Set([...names, ...articleCats]))];
          setCategoriesList(merged);
        }
      })
      .catch(() => {});
  }, []);

  // Newsletter Subscription state
  const [emailInput, setEmailInput] = useState<string>("");
  const [isSubmittingEmail, setIsSubmittingEmail] = useState<boolean>(false);
  const [subscribeStatus, setSubscribeStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const schema = getCollectionPageSchema(
    "Nexovio Engineering Blog & Digital Strategy Journal",
    "Original, practical guides and architectural insights on modern web development, Core Web Vitals, UI/UX design systems, AI automation, and technical SEO.",
    "/blog"
  );

  // Reset to page 1 whenever category or search query changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchQuery]);

  // Filtered Articles based on category and search query (sorted newest first)
  const filteredArticles = useMemo(() => {
    return [...articles]
      .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
      .filter((article) => {
        const matchesCategory =
          selectedCategory === "All" ||
          article.category.toLowerCase().trim() === selectedCategory.toLowerCase().trim();
        const q = searchQuery.toLowerCase().trim();
        const matchesSearch =
          q === "" ||
          article.title.toLowerCase().includes(q) ||
          article.excerpt.toLowerCase().includes(q) ||
          article.category.toLowerCase().includes(q) ||
          (article.keywords && article.keywords.some((k) => k.toLowerCase().includes(q)));
        return matchesCategory && matchesSearch;
      });
  }, [articles, selectedCategory, searchQuery]);

  // Pagination calculations
  const totalArticles = filteredArticles.length;
  const totalPages = Math.max(1, Math.ceil(totalArticles / ITEMS_PER_PAGE));
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, totalArticles);
  const currentArticles = filteredArticles.slice(startIndex, endIndex);

  // Handle Newsletter Form Submit
  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput.trim() || !emailInput.includes("@")) {
      setSubscribeStatus({
        type: "error",
        message: "Please enter a valid email address.",
      });
      return;
    }

    setIsSubmittingEmail(true);
    setSubscribeStatus({ type: null, message: "" });

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: emailInput.trim(),
          source: "Blog Page Newsletter Form",
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSubscribeStatus({
          type: "success",
          message: data.message || "Thank you for subscribing to our engineering briefings!",
        });
        setEmailInput("");
      } else {
        setSubscribeStatus({
          type: "error",
          message: data.message || "Unable to subscribe at this moment. Please try again.",
        });
      }
    } catch (err) {
      console.error("Newsletter subscription error:", err);
      setSubscribeStatus({
        type: "error",
        message: "Connection error. Please try again later.",
      });
    } finally {
      setIsSubmittingEmail(false);
    }
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    const element = document.getElementById("blog-grid-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="pt-20 pb-20 bg-background text-foreground min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* FULL WIDTH HERO SECTION */}
      <header className="relative w-full border-b border-border-subtle overflow-hidden min-h-[380px] sm:min-h-[440px] lg:min-h-[480px] flex items-center group">
        {/* Full Width Background Image */}
        <div className="absolute inset-0 z-0 w-full h-full">
          <Image
            src="/images/blog/blog-hero-banner.webp"
            alt="Nexovio Engineering & Digital Strategy Studio"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center group-hover:scale-[1.01] transition-transform duration-1000 ease-out"
          />
          {/* Clean Dark Overlay */}
          <div className="absolute inset-0 bg-black/70 pointer-events-none" />
        </div>

        {/* Inner Content Constrained to max-w-7xl */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-10 sm:py-14">
          <Breadcrumbs items={[{ name: "Blog", url: "/blog" }]} />

          <div className="max-w-3xl space-y-4 pt-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider border border-brand-cyan/40 bg-slate-950/70 text-brand-cyan backdrop-blur-md shadow-lg shadow-brand-cyan/10">
              <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
              <Sparkles className="w-3.5 h-3.5 text-brand-cyan" />
              <span>Engineering &amp; Strategy Journal</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.14] drop-shadow-md"> Ideas, Insights {" "} <span className="bg-gradient-brand bg-clip-text text-transparent"> & Digital Innovation </span> </h1>

            <p className="text-sm sm:text-base text-slate-200/90 leading-relaxed max-w-2xl"> Stay informed with practical insights on web development, AI, SEO, digital marketing, design, technology, and business growth. Explore expert perspectives, useful guides, industry trends, and actionable strategies to help you build better digital experiences and grow your business. </p>

            {/* Quick Highlights / Quality Indicators */}
            <div className="pt-2 flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/80 border border-white/15 text-brand-cyan backdrop-blur-md font-mono text-[11px]">
                <BookOpen className="w-3.5 h-3.5 text-brand-cyan" />
                <span>Web Development & Technology</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/80 border border-white/15 text-brand-cyan backdrop-blur-md font-mono text-[11px]">
                <Clock className="w-3.5 h-3.5 text-brand-cyan" />
                <span>AI & Digital Innovation</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/80 border border-white/15 text-brand-cyan backdrop-blur-md font-mono text-[11px]">
                <Sparkles className="w-3.5 h-3.5 text-brand-cyan" />
                <span>SEO, Marketing & Growth</span>
              </span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* CONTROLS TOOLBAR: Categories, Search, Grid/List Switcher */}
        <div className="mt-8 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          {/* Left: Dynamic Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            {categoriesList.map((category) => {
              const isSelected = selectedCategory.toLowerCase().trim() === category.toLowerCase().trim();
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    isSelected
                      ? "bg-brand-electric text-white shadow-sm font-bold shadow-blue-500/20"
                      : "bg-surface-elevated text-muted hover:text-slate-900 dark:hover:text-white border border-border-subtle hover:border-slate-300 dark:hover:border-slate-700"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Right: Search Input + Grid/List Toggle */}
          <div className="flex items-center justify-end gap-3 shrink-0">
            {/* Search Bar */}
            <div className="relative flex-1 sm:w-72">
              <Search className="w-4 h-4 text-muted absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles..."
                className="w-full rounded-xl border border-border-subtle bg-surface-elevated pl-10 pr-9 py-2 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-muted focus:border-brand-cyan focus:outline-none focus:ring-1 focus:ring-brand-cyan transition-colors"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-slate-900 dark:hover:text-white"
                  title="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* View Switcher: Grid vs List */}
            <div className="flex items-center p-1 rounded-xl border border-border-subtle bg-surface-elevated gap-1 shrink-0">
              <button
                type="button"
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-lg transition-colors cursor-pointer ${viewMode === "grid"
                  ? "bg-brand-electric text-white shadow-sm"
                  : "text-muted hover:text-slate-900 dark:hover:text-white"
                  }`}
                title="Grid View (3-4 Cards)"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-lg transition-colors cursor-pointer ${viewMode === "list"
                  ? "bg-brand-electric text-white shadow-sm"
                  : "text-muted hover:text-slate-900 dark:hover:text-white"
                  }`}
                title="List View"
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* ARTICLES SECTION */}
        <section className="my-10" id="blog-grid-section">
          {/* Header Count & Reset */}
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-slate-900 dark:text-white">
                Showing {totalArticles === 0 ? 0 : startIndex + 1}–{endIndex} of {totalArticles} Articles
              </span>
              {selectedCategory !== "All" && (
                <span className="text-xs px-2.5 py-0.5 rounded-md bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/30 font-semibold">
                  {selectedCategory}
                </span>
              )}
            </div>

            {(selectedCategory !== "All" || searchQuery.trim()) && (
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="text-xs font-semibold text-brand-cyan hover:underline"
              >
                Reset filters
              </button>
            )}
          </div>

          {/* EMPTY STATE */}
          {currentArticles.length === 0 ? (
            <div className="py-16 text-center rounded-2xl border border-dashed border-border-subtle bg-surface-elevated/40 p-8 max-w-lg mx-auto">
              <Search className="w-10 h-10 text-muted mx-auto mb-3 opacity-60" />
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">
                No matching articles found
              </h3>
              <p className="text-xs text-muted mb-4 leading-relaxed">
                We couldn&apos;t find any articles matching your search criteria. Try different keywords or clear your filters.
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
          ) : viewMode === "grid" ? (
            /* 3 TO 4 CARDS RESPONSIVE GRID SYSTEM */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {currentArticles.map((article) => (
                <article
                  key={article.id}
                  className="group relative flex flex-col justify-between rounded-2xl border border-border-subtle bg-surface-elevated/90 hover:border-brand-cyan/60 hover:-translate-y-1.5 hover:shadow-[0_12px_30px_-10px_rgba(0,198,255,0.25)] transition-all duration-300 overflow-hidden shadow-md"
                >
                  {/* Top Hover Accent Bar */}
                  <div className="absolute top-0 left-0 h-[2.5px] w-0 bg-gradient-brand group-hover:w-full transition-all duration-500 ease-out z-20 pointer-events-none" />

                  <div>
                    {/* Top Image Container */}
                    <Link
                      href={`/blog/${article.slug}`}
                      className="block relative w-full aspect-[16/10] overflow-hidden bg-slate-900"
                    >
                      <Image
                        src={article.featuredImage}
                        alt={article.featuredImageAlt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />

                      {/* Category Floating Pill */}
                      <div className="absolute top-3 left-3 z-10">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-black/80 text-brand-cyan border border-brand-cyan/30 backdrop-blur-md">
                          {article.category}
                        </span>
                      </div>

                      {/* Reading Time Pill */}
                      <div className="absolute bottom-2.5 right-2.5 z-10 flex items-center gap-1 text-[10px] font-mono text-brand-cyan px-2 py-0.5 rounded bg-black/70 backdrop-blur-sm border border-white/10">
                        <Clock className="w-3 h-3 text-brand-cyan" />
                        <span>{article.readingTime}</span>
                      </div>
                    </Link>

                    {/* Bottom Details Container: Title & Description */}
                    <div className="p-5 space-y-2.5">
                      <div className="flex items-center gap-1.5 text-[11px] text-muted font-mono">
                        <Calendar className="w-3 h-3 text-brand-cyan" />
                        <span>{formatDate(article.publishedAt)}</span>
                      </div>

                      <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-brand-cyan transition-colors leading-snug line-clamp-2">
                        <Link href={`/blog/${article.slug}`} className="focus:outline-none">
                          {article.title}
                        </Link>
                      </h3>

                      <p className="text-xs text-muted leading-relaxed line-clamp-3">
                        {article.excerpt}
                      </p>
                    </div>
                  </div>

                  {/* Card Bottom Link */}
                  <div className="p-5 pt-0 mt-2 border-t border-border-subtle/50 flex items-center justify-between">
                    <span className="text-[11px] text-muted truncate max-w-[120px]">
                      {article.author.name}
                    </span>

                    <Link
                      href={`/blog/${article.slug}`}
                      className="text-xs font-bold text-brand-bright hover:text-brand-cyan inline-flex items-center gap-1 transition-colors"
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            /* LIST VIEW (HORIZONTAL ROWS) */
            <div className="space-y-4">
              {currentArticles.map((article) => (
                <article
                  key={article.id}
                  className="group relative flex flex-col md:flex-row items-stretch rounded-2xl border border-border-subtle bg-surface-elevated/90 hover:border-brand-cyan/60 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute top-0 left-0 h-[2px] w-0 bg-gradient-brand group-hover:w-full transition-all duration-500 ease-out z-20 pointer-events-none" />

                  {/* Thumbnail Left */}
                  <Link
                    href={`/blog/${article.slug}`}
                    className="block relative w-full md:w-64 aspect-[16/10] md:aspect-auto shrink-0 overflow-hidden bg-slate-900"
                  >
                    <Image
                      src={article.featuredImage}
                      alt={article.featuredImageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 260px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 md:hidden z-10">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-black/80 text-brand-cyan border border-brand-cyan/30">
                        {article.category}
                      </span>
                    </div>
                  </Link>

                  {/* Content Right */}
                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-3">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 text-xs">
                        <span className="hidden md:inline-block text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-brand-cyan/15 text-brand-cyan border border-brand-cyan/30">
                          {article.category}
                        </span>
                        <div className="flex items-center gap-1 text-muted font-mono text-[11px]">
                          <Calendar className="w-3 h-3 text-brand-cyan" />
                          <span>{formatDate(article.publishedAt)}</span>
                        </div>
                        <div className="flex items-center gap-1 text-muted font-mono text-[11px]">
                          <Clock className="w-3 h-3 text-brand-cyan" />
                          <span>{article.readingTime}</span>
                        </div>
                      </div>

                      <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-brand-cyan transition-colors leading-snug">
                        <Link href={`/blog/${article.slug}`}>
                          {article.title}
                        </Link>
                      </h3>

                      <p className="text-xs sm:text-sm text-muted leading-relaxed line-clamp-2">
                        {article.excerpt}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-border-subtle/50 flex items-center justify-between">
                      <span className="text-xs text-muted">
                        By {article.author.name}
                      </span>

                      <Link
                        href={`/blog/${article.slug}`}
                        className="text-xs font-bold text-brand-bright hover:text-brand-cyan inline-flex items-center gap-1.5 transition-colors"
                      >
                        <span>Read Article</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* PAGINATION CONTROLS (12-15 per page) */}
          {totalPages > 1 && (
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-border-subtle">
              <div className="text-xs text-muted">
                Page <span className="font-semibold text-foreground">{currentPage}</span> of{" "}
                <span className="font-semibold text-foreground">{totalPages}</span> ({totalArticles} total articles)
              </div>

              <div className="flex items-center gap-1.5">
                {/* Previous Button */}
                <button
                  type="button"
                  disabled={currentPage === 1}
                  onClick={() => handlePageChange(currentPage - 1)}
                  className="px-3 py-2 rounded-xl text-xs font-semibold border border-border-subtle bg-surface-elevated text-foreground disabled:opacity-40 disabled:cursor-not-allowed hover:border-brand-cyan/40 inline-flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Prev</span>
                </button>

                {/* Page Number Buttons */}
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                  <button
                    key={pageNum}
                    type="button"
                    onClick={() => handlePageChange(pageNum)}
                    className={`w-9 h-9 rounded-xl text-xs font-bold transition-all cursor-pointer ${currentPage === pageNum
                      ? "bg-brand-electric text-white shadow-glow border border-brand-bright"
                      : "border border-border-subtle bg-surface-elevated text-muted hover:text-slate-900 dark:hover:text-white hover:border-brand-cyan/40"
                      }`}
                  >
                    {pageNum}
                  </button>
                ))}

                {/* Next Button */}
                <button
                  type="button"
                  disabled={currentPage === totalPages}
                  onClick={() => handlePageChange(currentPage + 1)}
                  className="px-3 py-2 rounded-xl text-xs font-semibold border border-border-subtle bg-surface-elevated text-foreground disabled:opacity-40 disabled:cursor-not-allowed hover:border-brand-cyan/40 inline-flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <span>Next</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </section>

        {/* FUNCTIONAL NEWSLETTER / SUBSCRIBER BOX */}
        <section className="mt-16 relative rounded-3xl border border-brand-cyan/30 bg-gradient-to-r from-surface-elevated via-brand-cyan/5 to-surface-elevated p-8 sm:p-12 overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-bright/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-brand-cyan/30 bg-brand-cyan/10 text-brand-cyan">
              <Mail className="w-3.5 h-3.5 text-brand-cyan" />
              Engineering Briefing
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Subscribe to Engineering Insights
            </h2>

            <p className="text-xs sm:text-sm text-muted leading-relaxed max-w-lg mx-auto">
              Get our latest technical teardowns, Next.js architecture guides, Core Web Vitals blueprints, and SEO updates delivered straight to your inbox.
            </p>

            {subscribeStatus.type === "success" ? (
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold flex items-center justify-center gap-2 max-w-md mx-auto animate-in fade-in">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{subscribeStatus.message}</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="pt-2 flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  required
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="Enter your work email address..."
                  disabled={isSubmittingEmail}
                  className="w-full rounded-xl border border-border-subtle bg-surface px-4 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-muted focus:border-brand-cyan focus:outline-none focus:ring-1 focus:ring-brand-cyan transition-colors"
                />
                <button
                  type="submit"
                  disabled={isSubmittingEmail}
                  className="w-full sm:w-auto shrink-0 px-6 py-2.5 rounded-xl text-xs font-bold bg-gradient-brand text-white shadow-glow hover:brightness-110 transition-all flex items-center justify-center gap-1.5 disabled:opacity-60 cursor-pointer"
                >
                  {isSubmittingEmail ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>Subscribing...</span>
                    </>
                  ) : (
                    <span>Subscribe</span>
                  )}
                </button>
              </form>
            )}

            {subscribeStatus.type === "error" && (
              <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-medium flex items-center justify-center gap-2 max-w-md mx-auto">
                <AlertCircle className="w-3.5 h-3.5 text-red-400 shrink-0" />
                <span>{subscribeStatus.message}</span>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
