"use client";

import React, { useState, useEffect } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  User,
  Calendar,
  BookOpen,
  Share2,
  Tag,
  Check,
  Sparkles,
  CheckCircle2,
  Mail,
  Loader2,
  AlertCircle,
  ExternalLink,
  ChevronRight,
  MessageSquare,
  Eye,
  ChevronDown,
  HelpCircle,
} from "lucide-react";
import { getBlogArticleBySlug, BLOG_ARTICLES, BlogArticle } from "@/src/data/blog";
import { Breadcrumbs } from "@/src/components/layout/Breadcrumbs";
import { Button } from "@/src/components/ui/Button";
import { formatDate, cn, getAuthorInitials } from "@/src/lib/utils";
import { getArticleSchema, getFaqSchema } from "@/src/lib/schema";

interface BlogArticlePageProps {
  params: {
    slug: string;
  };
  article?: BlogArticle;
}

// Helper to render high-contrast Black + Radiant Gradient Title
function renderTitleWithGradient(title: string) {
  if (title.includes(":")) {
    const colonIndex = title.indexOf(":");
    const mainPart = title.slice(0, colonIndex).trim();
    const subPart = title.slice(colonIndex + 1).trim();
    return (
      <span className="block">
        <span className="text-slate-950 dark:text-white font-extrabold">{mainPart}</span>
        <span className="text-slate-400 dark:text-slate-600 font-light mx-2">:</span>
        <span className="bg-gradient-brand bg-clip-text text-transparent font-black block sm:inline mt-1 sm:mt-0">
          {subPart}
        </span>
      </span>
    );
  }

  // If no colon, split roughly 55% black, 45% gradient
  const words = title.split(" ");
  if (words.length <= 3) {
    return (
      <span className="bg-gradient-to-r from-slate-950 via-[#1769FF] to-[#00C6FF] dark:from-white dark:via-[#38bdf8] dark:to-[#00C6FF] bg-clip-text text-transparent font-black">
        {title}
      </span>
    );
  }
  const splitIndex = Math.ceil(words.length * 0.55);
  const part1 = words.slice(0, splitIndex).join(" ");
  const part2 = words.slice(splitIndex).join(" ");

  return (
    <span className="block">
      <span className="text-slate-950 dark:text-white font-extrabold">{part1}{" "}</span>
      <span className="bg-gradient-brand bg-clip-text text-transparent font-black">
        {part2}
      </span>
    </span>
  );
}

export default function SingleBlogArticlePage({
  params,
  article: propArticle,
}: BlogArticlePageProps) {
  const initialArticle = propArticle || getBlogArticleBySlug(params?.slug);
  const [article, setArticle] = useState<BlogArticle | undefined>(initialArticle);
  const [isLoading, setIsLoading] = useState<boolean>(!initialArticle);

  // Client-side fallback recovery: if SSR did not find the article due to serverless isolation,
  // query /api/admin/blog to fetch directly from live data
  useEffect(() => {
    if (!article && params?.slug) {
      fetch("/api/admin/blog")
        .then((res) => res.json())
        .then((data) => {
          if (data.success && Array.isArray(data.articles)) {
            const normalized = decodeURIComponent(params.slug).toLowerCase().trim();
            const found = data.articles.find(
              (a: BlogArticle) =>
                a.slug.toLowerCase().trim() === normalized ||
                (a.id && a.id.toLowerCase().trim() === normalized)
            );
            if (found) {
              setArticle(found);
              setIsLoading(false);
              return;
            }
          }
          setIsLoading(false);
        })
        .catch(() => {
          setIsLoading(false);
        });
    }
  }, [article, params?.slug]);

  // Interactive scroll progress bar
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [copiedLink, setCopiedLink] = useState<boolean>(false);
  const [activeHeadingId, setActiveHeadingId] = useState<string>("");

  // Live Visitor / Readers view counting
  const [viewsCount, setViewsCount] = useState<number | null>(null);

  // Dedicated Article FAQ Accordion state (first FAQ open by default for discoverability)
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  useEffect(() => {
    if (!article) return;

    // Detect isUnique using localStorage
    let isUnique = true;
    try {
      const storageKey = `nexovio_read_${article.slug}_${new Date().toISOString().split("T")[0]}`;
      if (localStorage.getItem(storageKey)) {
        isUnique = false;
      } else {
        localStorage.setItem(storageKey, "1");
      }
    } catch {
      // ignore
    }

    // Detect Device
    let device: "desktop" | "mobile" | "tablet" = "desktop";
    if (typeof window !== "undefined") {
      const w = window.innerWidth;
      if (w < 640) device = "mobile";
      else if (w < 1024) device = "tablet";
      else device = "desktop";
    }

    // Detect Referrer
    let referrer: "google" | "linkedin" | "twitter" | "direct" | "other" = "direct";
    if (typeof document !== "undefined" && document.referrer) {
      const ref = document.referrer.toLowerCase();
      if (ref.includes("google")) referrer = "google";
      else if (ref.includes("linkedin")) referrer = "linkedin";
      else if (ref.includes("twitter") || ref.includes("t.co") || ref.includes("x.com")) referrer = "twitter";
      else if (!ref.includes(window.location.hostname)) referrer = "other";
    }

    // Record article view and fetch updated count
    fetch("/api/blog/views", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slug: article.slug, isUnique, device, referrer }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.views) {
          setViewsCount(data.views);
        }
      })
      .catch((err) => console.error("Error recording view:", err));
  }, [article?.slug]);

  // Newsletter state
  const [newsletterEmail, setNewsletterEmail] = useState<string>("");
  const [isSubscribing, setIsSubscribing] = useState<boolean>(false);
  const [subscribeStatus, setSubscribeStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  // Dynamically fetch database articles for Related Articles Carousel
  const [dbArticles, setDbArticles] = useState<BlogArticle[]>([]);

  useEffect(() => {
    fetch("/api/admin/blog")
      .then((r) => r.json())
      .then((data) => {
        if (data.success && Array.isArray(data.articles)) {
          setDbArticles(data.articles);
        }
      })
      .catch(() => {});
  }, []);

  // 4-Card Carousel state for Related Articles
  const otherArticles = (dbArticles.length > 0 ? dbArticles : BLOG_ARTICLES).filter(
    (a) => !article || a.slug !== article.slug
  );
  // Ensure we have at least 4 items to display in carousel if articles exist
  const carouselItems =
    otherArticles.length === 0
      ? []
      : otherArticles.length >= 4
      ? [...otherArticles, ...otherArticles]
      : [...otherArticles, ...otherArticles, ...otherArticles];

  const [carouselIndex, setCarouselIndex] = useState<number>(0);
  const [isCarouselPaused, setIsCarouselPaused] = useState<boolean>(false);
  const [isAutoPlay, setIsAutoPlay] = useState<boolean>(true);

  const maxSlides = Math.max(1, otherArticles.length);

  // Auto-play timer for 4-card carousel
  useEffect(() => {
    if (!isAutoPlay || isCarouselPaused || carouselItems.length <= 4) return;
    const interval = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % maxSlides);
    }, 4200);
    return () => clearInterval(interval);
  }, [isAutoPlay, isCarouselPaused, maxSlides, carouselItems.length]);

  const handlePrevSlide = () => {
    setCarouselIndex((prev) => (prev === 0 ? maxSlides - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCarouselIndex((prev) => (prev + 1) % maxSlides);
  };

  const articleSchema = article
    ? getArticleSchema({
        title: article.title,
        description: article.excerpt,
        url: article.canonicalUrl || `/blog/${article.slug}`,
        image: article.ogImage || article.featuredImage,
        publishedAt: article.publishedAt,
        updatedAt: article.updatedAt,
        authorName: article.author.name,
        schemaType: article.schemaType || "BlogPosting",
        keywords: article.keywords,
      })
    : null;

  const faqSchema =
    article?.faqs && Array.isArray(article.faqs) && article.faqs.length > 0
      ? getFaqSchema(article.faqs)
      : null;

  // Scroll listener for reading progress bar and active TOC heading
  useEffect(() => {
    if (!article) return;

    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
      }

      // Check which TOC heading is currently in viewport
      if (article.tableOfContents && article.tableOfContents.length > 0) {
        for (let i = article.tableOfContents.length - 1; i >= 0; i--) {
          const item = article.tableOfContents[i];
          const el = document.getElementById(item.id);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 160) {
              setActiveHeadingId(item.id);
              break;
            }
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [article?.tableOfContents]);

  // Handle Share / Copy Link
  const handleCopyLink = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2200);
    }
  };

  const currentUrl = typeof window !== "undefined" ? window.location.href : (article ? `https://www.nexoviodigitalsolutions.com/blog/${article.slug}` : "");

  // Handle Newsletter Subscribe
  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim() || !newsletterEmail.includes("@")) {
      setSubscribeStatus({
        type: "error",
        message: "Please enter a valid work email address.",
      });
      return;
    }

    setIsSubscribing(true);
    setSubscribeStatus({ type: null, message: "" });

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: newsletterEmail.trim(),
          source: `Blog Post: ${article?.slug || params?.slug}`,
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSubscribeStatus({
          type: "success",
          message: data.message || "Thank you for subscribing to our engineering briefings!",
        });
        setNewsletterEmail("");
      } else {
        setSubscribeStatus({
          type: "error",
          message: data.message || "Subscription could not be processed. Please try again.",
        });
      }
    } catch (err) {
      console.error("Newsletter error:", err);
      setSubscribeStatus({
        type: "error",
        message: "Network error. Please try again later.",
      });
    } finally {
      setIsSubscribing(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center bg-background text-foreground pt-24">
        <div className="flex flex-col items-center gap-4 text-center px-4">
          <Loader2 className="w-10 h-10 animate-spin text-brand-cyan" />
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">Loading Article...</h2>
          <p className="text-xs text-muted font-mono">Fetching latest engineering publication</p>
        </div>
      </div>
    );
  }

  if (!article) {
    notFound();
  }

  return (
    <article className="pt-24 pb-20 bg-background text-foreground min-h-screen selection:bg-brand-cyan/20 selection:text-brand-cyan relative">
      {/* FLOATING LEFT SHARE RAIL (Desktop XL screens only - Clean & Uncluttered) */}
      <aside className="hidden xl:flex fixed left-6 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-3 p-2 rounded-2xl bg-surface-elevated/90 border border-border-subtle shadow-xl backdrop-blur-md">
        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-muted py-1 px-1">
          Share
        </span>
        <button
          type="button"
          onClick={handleCopyLink}
          className="p-2.5 rounded-xl border border-border-subtle bg-surface-subtle text-muted hover:text-brand-cyan hover:border-brand-cyan/40 transition-colors relative group cursor-pointer"
          title="Copy Link"
        >
          {copiedLink ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
          <span className="absolute left-full ml-2 top-1/2 -translate-y-1/2 px-2 py-1 bg-slate-900 text-white text-[10px] font-mono rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap shadow-md">
            {copiedLink ? "Copied!" : "Copy Link"}
          </span>
        </button>

        <a
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(currentUrl)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-xl border border-border-subtle bg-surface-subtle text-muted hover:text-brand-cyan hover:border-brand-cyan/40 transition-colors relative group font-bold text-xs"
          title="Share on Twitter / X"
        >
          𝕏
          <span className="absolute left-full ml-2 top-1/2 -translate-y-1/2 px-2 py-1 bg-slate-900 text-white text-[10px] font-mono rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap shadow-md">
            Share on 𝕏
          </span>
        </a>

        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-xl border border-border-subtle bg-surface-subtle text-muted hover:text-brand-cyan hover:border-brand-cyan/40 transition-colors relative group font-bold text-xs"
          title="Share on LinkedIn"
        >
          in
          <span className="absolute left-full ml-2 top-1/2 -translate-y-1/2 px-2 py-1 bg-slate-900 text-white text-[10px] font-mono rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap shadow-md">
            Share on LinkedIn
          </span>
        </a>

        <div className="w-5 h-[1px] bg-border-subtle my-1" />

        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="p-2 rounded-xl text-muted hover:text-brand-cyan hover:bg-surface-subtle transition-colors text-[10px] font-mono font-bold"
          title="Scroll to Top"
        >
          TOP
        </button>
      </aside>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <Breadcrumbs
          items={[
            { name: "Blog", url: "/blog" },
            { name: article.category, url: `/blog` },
            { name: article.title, url: `/blog/${article.slug}` },
          ]}
        />

        {/* 2. ARTICLE HERO HEADER (REFINED & WELL-SPACED) */}
        <header className="pt-6 sm:pt-20 pb-10 border-b border-border-subtle space-y-6">
          {/* Metadata Badges Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3 text-xs">
              <span className="font-mono uppercase tracking-wider px-3.5 py-1 rounded-full bg-brand-cyan text-slate-950 font-bold shadow-xs inline-flex items-center gap-1.5">
                <Tag className="w-3 h-3" />
                {article.category}
              </span>
              <div className="flex items-center gap-1.5 text-muted font-mono bg-surface-subtle px-3 py-1 rounded-full border border-border-subtle">
                <Clock className="w-3.5 h-3.5 text-brand-bright" />
                <span>{article.readingTime}</span>
              </div>
              <div className="flex items-center gap-1.5 text-muted font-mono bg-surface-subtle px-3 py-1 rounded-full border border-border-subtle">
                <Calendar className="w-3.5 h-3.5 text-brand-bright" />
                <span>Published {formatDate(article.publishedAt)}</span>
              </div>
              {viewsCount !== null && (
                <div className="flex items-center gap-1.5 text-brand-cyan font-mono bg-brand-cyan/10 px-3 py-1 rounded-full border border-brand-cyan/30">
                  <Eye className="w-3.5 h-3.5 text-brand-cyan" />
                  <span className="font-bold">{viewsCount.toLocaleString()} readers</span>
                </div>
              )}
              {article.updatedAt && (
                <span className="text-[11px] text-muted-dark font-mono bg-surface-subtle px-2.5 py-1 rounded-full border border-border-subtle">
                  Updated {formatDate(article.updatedAt)}
                </span>
              )}
            </div>

            {/* Back to All Articles */}
            <Link
              href="/blog"
              className="text-xs font-bold text-brand-bright hover:text-brand-cyan inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-border-subtle bg-surface-elevated hover:border-brand-bright/40 transition-all shadow-xs"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>All Articles</span>
            </Link>
          </div>

          {/* Title with High-Contrast Black + Radiant Gradient */}
          <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-[1.18] max-w-5xl">
            {renderTitleWithGradient(article.title)}
          </h1>

          {/* Excerpt */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-4xl font-normal">
            {article.excerpt}
          </p>
        </header>

        {/* 3. FEATURED IMAGE SHOWCASE */}
        {article.featuredImage && (
          <div className="my-12 rounded-3xl overflow-hidden border border-slate-200/80 dark:border-white/10 shadow-2xl bg-slate-900 relative">
            <div className="relative w-full aspect-[16/9] sm:aspect-[16/8.2] max-h-[520px]">
              <Image
                src={article.featuredImage}
                alt={article.featuredImageAlt || article.title}
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 1200px"
                className="object-cover"
              />
            </div>
            {article.featuredImageAlt && (
              <div className="p-3.5 bg-surface-elevated/95 border-t border-border-subtle text-center text-xs text-muted font-mono">
                {article.featuredImageAlt}
              </div>
            )}
          </div>
        )}

        {/* 4. MAIN EDITORIAL CONTENT & STICKY SIDEBAR GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start my-12">
          {/* LEFT: EDITORIAL ARTICLE BODY (8 Columns) */}
          <div className="lg:col-span-8 min-w-0">
            {/* Mobile Table of Contents (shown on smaller screens) */}
            {article.tableOfContents && article.tableOfContents.length > 0 && (
              <div className="lg:hidden mb-10 rounded-2xl border border-border-subtle bg-surface-elevated/90 p-5 shadow-sm">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-bright mb-3">
                  <BookOpen className="w-4 h-4 text-brand-bright" />
                  <span>Table of Contents</span>
                </div>
                <ul className="space-y-1.5 text-xs text-muted">
                  {article.tableOfContents.map((item: { id: string; title: string }) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="hover:text-brand-bright hover:underline transition-colors block py-1"
                      >
                        • {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Standard Article Content with Common Classes Support */}
            <div className="blog-content">
              {article.content.map((paragraph: string, idx: number) => {
                const trimmed = typeof paragraph === "string" ? paragraph.trim() : "";
                if (
                  !trimmed ||
                  trimmed === "<p><br></p>" ||
                  trimmed === "<p></p>" ||
                  trimmed === "<p>&nbsp;</p>" ||
                  trimmed === "<br>"
                ) {
                  return null;
                }
                // Check if entire block is only empty paragraphs/whitespace
                const textOnly = trimmed.replace(/<[^>]*>/g, "").replace(/&nbsp;/gi, " ").trim();
                if (!textOnly && !/<(?:img|figure|table|iframe)\s/i.test(trimmed)) {
                  return null;
                }
                const isHtml = /<[a-z][\s\S]*>/i.test(trimmed);
                if (isHtml) {
                  // Sanitize: strip embedded empty paragraphs/divs and collapse excessive <br>
                  const cleanHtml = trimmed
                    .replace(/<p[^>]*>\s*(<br\s*\/?>|\s|&nbsp;)*\s*<\/p>/gi, "")
                    .replace(/<div[^>]*>\s*(<br\s*\/?>|\s|&nbsp;)*\s*<\/div>/gi, "")
                    .replace(/(<br\s*\/?\s*>[\s]*){3,}/gi, "<br><br>")
                    .trim();
                  if (!cleanHtml) return null;
                  return (
                    <div
                      key={idx}
                      dangerouslySetInnerHTML={{ __html: cleanHtml }}
                    />
                  );
                }
                return (
                  <p key={idx}>
                    {trimmed}
                  </p>
                );
              })}
            </div>

            {/* Dedicated Article FAQ Accordion Section */}
            {article.faqs && article.faqs.length > 0 && (
              <div className="mt-12 mb-6 pt-10 border-t border-border-subtle" id="article-faqs">
                <div className="flex items-center gap-3 mb-6">
                  <span className="p-2.5 rounded-2xl bg-brand-bright/10 text-brand-bright border border-brand-bright/20 shadow-xs">
                    <HelpCircle className="w-5 h-5 text-brand-bright" />
                  </span>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                      Frequently Asked Questions
                    </h3>
                    <p className="text-xs sm:text-sm text-muted mt-0.5">
                      Common technical inquiries and architectural clarifications for this article.
                    </p>
                  </div>
                </div>

                <div className="space-y-3.5">
                  {article.faqs.map((faq, index) => {
                    const isOpen = openFaqIndex === index;
                    return (
                      <div
                        key={index}
                        className={cn(
                          "relative rounded-2xl transition-all duration-300 overflow-hidden backdrop-blur-md",
                          isOpen
                            ? "bg-white dark:bg-[#07162c] border border-transparent shadow-[0_8px_30px_rgba(0,198,255,0.14)]"
                            : "bg-white/95 dark:bg-[#081226]/90 border border-slate-200/90 dark:border-blue-900/40 hover:border-brand-cyan dark:hover:border-brand-cyan hover:bg-white dark:hover:bg-[#0d1b38] shadow-sm hover:shadow-md"
                        )}
                      >
                        {/* Glowing Top 2px Animated Shimmer Line When Open */}
                        {isOpen && (
                          <div className="absolute top-0 left-0 right-0 h-[2px] pointer-events-none animate-shimmer-x" />
                        )}

                        <button
                          type="button"
                          onClick={() => toggleFaq(index)}
                          className="w-full flex items-center justify-between px-4 sm:px-6 py-4 sm:py-4.5 text-left outline-none focus:outline-none group cursor-pointer"
                          aria-expanded={isOpen}
                          aria-controls={`article-faq-answer-${index}`}
                          id={`article-faq-question-${index}`}
                        >
                          <div className="flex items-center gap-3 sm:gap-4 pr-3">
                            <span
                              className={cn(
                                "text-sm sm:text-base font-bold transition-colors duration-200 leading-snug",
                                isOpen
                                  ? "text-brand-cyan"
                                  : "text-slate-800 dark:text-slate-200 group-hover:text-brand-cyan"
                              )}
                            >
                              {faq.question}
                            </span>
                          </div>

                          {/* Smooth Rotating Chevron Toggle Button */}
                          <div
                            className={cn(
                              "w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300",
                              isOpen
                                ? "bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/40 rotate-180 shadow-xs"
                                : "bg-slate-100 text-slate-500 border border-slate-200 dark:bg-blue-900/40 dark:text-slate-300 dark:border-blue-800/40 group-hover:bg-brand-cyan/15 group-hover:text-brand-cyan"
                            )}
                          >
                            <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300" />
                          </div>
                        </button>

                        {/* Smooth Animated Answer Panel */}
                        <div
                          id={`article-faq-answer-${index}`}
                          role="region"
                          aria-labelledby={`article-faq-question-${index}`}
                          className={cn("faq-accordion-grid", isOpen ? "open" : "")}
                        >
                          <div className="faq-accordion-inner">
                            <div className="px-4 sm:px-6 pb-5 pt-1 border-t border-slate-100 dark:border-blue-900/40">
                              <div className="pl-3.5 sm:pl-4 border-l-2 border-brand-cyan py-0.5 mt-2">
                                <p className="text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed whitespace-pre-line">
                                  {faq.answer}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* In-Article Conversion Callout Box */}
            <div className="my-14 rounded-3xl border-2 border-brand-bright/30 bg-gradient-to-br from-surface-elevated via-brand-bright/5 to-surface-elevated p-7 sm:p-9 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10 space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-brand-bright text-white shadow-xs">
                  <Sparkles className="w-3.5 h-3.5" />
                  Technical Consultation
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white leading-tight">
                  Need Architectural Guidance or Performance Remediation?
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Our software engineers evaluate your existing website speed, Core Web Vitals bottlenecks, and headless Next.js architecture to unlock scalable digital performance.
                </p>
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3.5">
                  <Button
                    href="/schedule-a-call"
                    variant="primary"
                    size="sm"
                    icon={<ArrowRight className="w-4 h-4" />}
                    className="w-full sm:w-auto shadow-glow"
                  >
                    Schedule 30-Min Strategy Call
                  </Button>
                  <Button
                    href="/contact"
                    variant="secondary"
                    size="sm"
                    className="w-full sm:w-auto"
                  >
                    Send Inquiries
                  </Button>
                </div>
              </div>
            </div>

            {/* Focus Keywords / Tags Bar */}
            {article.keywords && article.keywords.length > 0 && (
              <div className="pt-6 border-t border-border-subtle flex flex-wrap items-center gap-2">
                <span className="text-xs text-muted font-mono mr-1">Tags:</span>
                {article.keywords.map((kw, i) => (
                  <span
                    key={i}
                    className="text-xs font-mono px-3 py-1 rounded-lg bg-surface-subtle border border-border-subtle text-muted hover:text-brand-bright transition-colors"
                  >
                    #{kw.replace(/\s+/g, "")}
                  </span>
                ))}
              </div>
            )}

            {/* In-Article Social Share Bar (Positioned cleanly at bottom of article) */}
            <div className="mt-10 p-6 rounded-2xl border border-border-subtle bg-surface-elevated/70 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                  Found this teardown insightful?
                </h4>
                <p className="text-xs text-muted">
                  Share it with fellow engineers, founders, and digital strategists.
                </p>
              </div>

              <div className="flex items-center gap-2.5 shrink-0">
                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="px-3.5 py-2 rounded-xl border border-border-subtle bg-surface hover:border-brand-bright/50 text-xs font-semibold text-muted hover:text-brand-bright transition-all inline-flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  {copiedLink ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-500 font-bold">Link Copied!</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="w-3.5 h-3.5" />
                      <span>Copy Link</span>
                    </>
                  )}
                </button>

                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(currentUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-xl border border-border-subtle bg-surface hover:border-brand-bright/50 text-xs font-bold text-muted hover:text-brand-bright transition-all inline-flex items-center gap-1.5 shadow-xs"
                  title="Share on Twitter / X"
                >
                  <span>𝕏 Post</span>
                </a>

                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-xl border border-border-subtle bg-surface hover:border-brand-bright/50 text-xs font-bold text-muted hover:text-brand-bright transition-all inline-flex items-center gap-1.5 shadow-xs"
                  title="Share on LinkedIn"
                >
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Author Biography Box */}
            <div className="mt-8 rounded-2xl border border-border-subtle bg-surface-elevated/70 p-6 sm:p-7 flex flex-col sm:flex-row items-start gap-4 shadow-md">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-cyan/20 to-brand-bright/20 border border-brand-cyan/35 flex items-center justify-center text-brand-bright text-base font-extrabold tracking-wider shrink-0 overflow-hidden relative shadow-sm">
                {article.author.avatar && !article.author.avatar.includes("nexovio-logo") ? (
                  <Image
                    src={article.author.avatar}
                    alt={article.author.name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <span>{getAuthorInitials(article.author.name)}</span>
                )}
              </div>
              <div className="space-y-1.5 flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {article.author.name}
                  </h3>
                  <span className="text-xs text-brand-bright font-mono font-semibold">
                    {article.author.role}
                  </span>
                </div>
                <p className="text-xs text-muted leading-relaxed">
                  {article.author.bio ||
                    "Published by the technical architecture team at Nexovio Digital Solutions. We engineer custom web platforms, high-performance UI/UX design systems, and search intelligence frameworks for scaling businesses worldwide."}
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: STICKY SIDEBAR (4 Columns) */}
          <aside className="hidden lg:block lg:col-span-4 sticky top-28 space-y-6">
            {/* 1. Sticky Table of Contents */}
            {article.tableOfContents && article.tableOfContents.length > 0 && (
              <div className="rounded-2xl border border-border-subtle bg-surface-elevated/90 p-6 shadow-md backdrop-blur-md">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-bright mb-4">
                  <BookOpen className="w-4 h-4 text-brand-bright" />
                  <span>On This Page</span>
                </div>
                <nav className="space-y-1 max-h-[380px] overflow-y-auto pr-1">
                  {article.tableOfContents.map((item: { id: string; title: string }) => {
                    const isActive = activeHeadingId === item.id;
                    return (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className={`block text-xs py-1.5 px-3 rounded-xl transition-all ${isActive
                          ? "bg-brand-bright/10 text-brand-bright font-bold border-l-3 border-brand-bright shadow-xs"
                          : "text-muted hover:text-slate-900 dark:hover:text-white hover:bg-surface-subtle"
                          }`}
                      >
                        {item.title}
                      </a>
                    );
                  })}
                </nav>
              </div>
            )}

            {/* 2. Reading Info & Social Share Card */}
            <div className="rounded-2xl border border-border-subtle bg-surface-elevated/90 p-5 shadow-sm space-y-3.5">
              <span className="text-[11px] font-mono uppercase tracking-wider text-muted font-bold block">
                Article Quick Facts
              </span>
              <div className="space-y-2 text-xs text-muted">
                <div className="flex items-center justify-between">
                  <span>Reading Time:</span>
                  <span className="font-semibold text-slate-900 dark:text-white font-mono">{article.readingTime}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Category:</span>
                  <span className="font-semibold text-brand-bright">{article.category}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Published:</span>
                  <span className="font-semibold text-slate-900 dark:text-white font-mono">{formatDate(article.publishedAt)}</span>
                </div>
              </div>

              {/* Share in Sidebar */}
              <div className="pt-3 border-t border-border-subtle space-y-2">
                <span className="text-[11px] text-muted font-semibold block">Share Teardown:</span>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={handleCopyLink}
                    className="p-2 rounded-xl border border-border-subtle bg-surface hover:border-brand-bright/40 text-[11px] font-medium text-muted hover:text-brand-bright transition-colors flex items-center justify-center gap-1 cursor-pointer"
                  >
                    {copiedLink ? <Check className="w-3 h-3 text-emerald-500" /> : <Share2 className="w-3 h-3" />}
                    <span>{copiedLink ? "Copied" : "Copy"}</span>
                  </button>

                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(currentUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl border border-border-subtle bg-surface hover:border-brand-bright/40 text-[11px] font-bold text-muted hover:text-brand-bright transition-colors flex items-center justify-center"
                    title="Share on Twitter / X"
                  >
                    𝕏 Post
                  </a>

                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl border border-border-subtle bg-surface hover:border-brand-bright/40 text-[11px] font-bold text-muted hover:text-brand-bright transition-colors flex items-center justify-center"
                    title="Share on LinkedIn"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* 3. Sidebar Consultation Widget */}
            <div className="rounded-2xl border border-brand-bright/30 bg-gradient-to-br from-surface-elevated to-brand-bright/10 p-5 shadow-lg space-y-3">
              <div className="flex items-center gap-1.5 text-xs font-bold text-brand-bright uppercase font-mono">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Web Engineering</span>
              </div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-snug">
                Building a Scalable Web Application?
              </h4>
              <p className="text-xs text-muted leading-relaxed">
                Connect with our senior architects for high-performance development, custom integrations, and technical audits.
              </p>
              <Button
                href="/schedule-a-call"
                variant="primary"
                size="sm"
                className="w-full text-xs justify-center shadow-glow"
              >
                Book Discovery Call
              </Button>
            </div>
          </aside>
        </div>

        {/* 5. RELATED ARTICLES 4-CARD ANIMATED CAROUSEL SECTION */}
        {carouselItems.length > 0 && (
          <section className="my-20 pt-12 border-t border-border-subtle space-y-8">
            {/* Carousel Header with Navigation Controls */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-brand-bright/30 bg-brand-bright/10 text-brand-bright mb-2">
                  <BookOpen className="w-3.5 h-3.5" />
                  Further Engineering Reading
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  Related Engineering &amp; Strategy Guides
                </h2>
                <p className="text-xs sm:text-sm text-muted mt-1">
                  Explore relevant technical architecture teardowns and performance blueprints.
                </p>
              </div>

              {/* Controls: Prev, Play/Pause, Next */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={handlePrevSlide}
                    className="p-2.5 rounded-xl border border-border-subtle bg-surface-elevated hover:border-brand-bright hover:text-brand-bright text-muted transition-all cursor-pointer shadow-xs"
                    title="Previous Slide"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={handleNextSlide}
                    className="p-2.5 rounded-xl border border-border-subtle bg-surface-elevated hover:border-brand-bright hover:text-brand-bright text-muted transition-all cursor-pointer shadow-xs"
                    title="Next Slide"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* 4-Card Carousel Window */}
            <div
              className="overflow-hidden rounded-3xl"
              onMouseEnter={() => setIsCarouselPaused(true)}
              onMouseLeave={() => setIsCarouselPaused(false)}
            >
              <div
                className="flex transition-transform duration-700 ease-in-out gap-6"
                style={{
                  transform: `translateX(-${carouselIndex * (100 / 4)}%)`,
                }}
              >
                {carouselItems.map((rel, index) => (
                  <article
                    key={`${rel.slug}-${index}`}
                    className="shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] group relative rounded-2xl border border-border-subtle bg-surface-elevated hover:border-brand-bright/50 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden shadow-md flex flex-col justify-between"
                  >
                    {/* Top gradient highlight strip */}
                    <div className="absolute top-0 left-0 h-[3px] w-0 bg-gradient-brand group-hover:w-full transition-all duration-500 ease-out z-20 pointer-events-none" />

                    <div>
                      {rel.featuredImage && (
                        <Link href={`/blog/${rel.slug}`} className="block relative w-full aspect-[16/9] overflow-hidden bg-slate-900">
                          <Image
                            src={rel.featuredImage}
                            alt={rel.featuredImageAlt || rel.title}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                            className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                          />
                          <div className="absolute top-2.5 left-2.5 z-10">
                            <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-black/85 text-brand-cyan border border-brand-cyan/30">
                              {rel.category}
                            </span>
                          </div>
                        </Link>
                      )}

                      <div className="p-5 space-y-2.5">
                        <div className="flex items-center gap-2 text-[11px] text-muted font-mono">
                          <Calendar className="w-3 h-3 text-brand-bright" />
                          <span>{formatDate(rel.publishedAt)}</span>
                          <span>•</span>
                          <Clock className="w-3 h-3 text-brand-bright" />
                          <span>{rel.readingTime}</span>
                        </div>

                        <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white group-hover:text-brand-bright transition-colors leading-snug line-clamp-2">
                          <Link href={`/blog/${rel.slug}`}>
                            {rel.title}
                          </Link>
                        </h3>

                        <p className="text-xs text-muted leading-relaxed line-clamp-2">
                          {rel.excerpt}
                        </p>
                      </div>
                    </div>

                    <div className="p-5 pt-0 mt-2 border-t border-border-subtle/50 flex items-center justify-between">
                      <span className="text-[11px] text-muted truncate max-w-[120px]">{rel.author.name}</span>
                      <Link
                        href={`/blog/${rel.slug}`}
                        className="text-xs font-bold text-brand-bright hover:text-brand-cyan inline-flex items-center gap-1 transition-colors shrink-0"
                      >
                        <span>Read Guide</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Pagination Indicators / Dots */}
            <div className="flex items-center justify-center gap-2 pt-2">
              {Array.from({ length: maxSlides }).map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  type="button"
                  onClick={() => setCarouselIndex(dotIdx)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${carouselIndex === dotIdx
                    ? "w-8 bg-gradient-brand shadow-glow"
                    : "w-2 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400"
                    }`}
                  title={`Go to slide ${dotIdx + 1}`}
                />
              ))}
            </div>
          </section>
        )}

        {/* 6. NEWSLETTER SUBSCRIPTION COMPONENT */}
        <section className="my-16 relative rounded-3xl border border-brand-bright/30 bg-gradient-to-r from-surface-elevated via-brand-bright/5 to-surface-elevated p-8 sm:p-12 overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-bright/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-brand-bright/30 bg-brand-bright/10 text-brand-bright">
              <Mail className="w-3.5 h-3.5 text-brand-bright" />
              Engineering Briefing
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Enjoyed this technical teardown?
            </h2>

            <p className="text-xs sm:text-sm text-muted leading-relaxed max-w-lg mx-auto">
              Subscribe to receive our latest engineering guides, Core Web Vitals optimization blueprints, and digital strategy insights directly to your inbox.
            </p>

            {subscribeStatus.type === "success" ? (
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold flex items-center justify-center gap-2 max-w-md mx-auto animate-in fade-in">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{subscribeStatus.message}</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="pt-2 flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your work email address..."
                  disabled={isSubscribing}
                  className="w-full rounded-xl border border-border-subtle bg-surface px-4 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-muted focus:border-brand-bright focus:outline-none focus:ring-1 focus:ring-brand-bright transition-colors"
                />
                <button
                  type="submit"
                  disabled={isSubscribing}
                  className="w-full sm:w-auto shrink-0 px-6 py-2.5 rounded-xl text-xs font-bold bg-gradient-brand text-white shadow-glow hover:brightness-110 transition-all flex items-center justify-center gap-1.5 disabled:opacity-60 cursor-pointer"
                >
                  {isSubscribing ? (
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

        {/* 7. BOTTOM NAVIGATION BAR */}
        <div className="pt-8 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link
            href="/blog"
            className="text-xs font-semibold text-muted hover:text-slate-900 dark:hover:text-white inline-flex items-center gap-2 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Articles</span>
          </Link>

          <Button
            href="/contact"
            variant="primary"
            size="md"
            trackingName={`blog_cta_${article.slug}`}
            trackingLocation="blog_footer"
            icon={<ArrowRight className="w-4 h-4" />}
            className="w-full sm:w-auto shadow-glow"
          >
            Discuss Your Web Project
          </Button>
        </div>
      </div>
    </article>
  );
}
