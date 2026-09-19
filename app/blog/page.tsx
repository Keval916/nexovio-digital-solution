import React from "react";
import Link from "next/link";
import { ArrowRight, Clock, User, Calendar, BookOpen } from "lucide-react";
import { BLOG_ARTICLES } from "@/data/blog";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { formatDate } from "@/lib/utils";
import { generatePageMetadata } from "@/lib/seo";
import { getCollectionPageSchema } from "@/lib/schema";

export const metadata = generatePageMetadata({
  title: "Engineering Blog & Digital Insights | Nexovio Digital Solutions",
  description:
    "Original, practical guides and architectural insights on modern web development, Core Web Vitals, UI/UX design systems, and technical SEO.",
  path: "/blog",
});

export default function BlogHubPage() {
  const schema = getCollectionPageSchema(
    "Engineering Blog & Digital Insights",
    "Original, practical guides and architectural insights on modern web development, Core Web Vitals, UI/UX design systems, and technical SEO.",
    "/blog"
  );

  return (
    <div className="pt-24 pb-14 bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs Navigation */}
        <Breadcrumbs items={[{ name: "Blog", url: "/blog" }]} />

        {/* Hero Section */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-brand-cyan/30 bg-brand-cyan/10 text-brand-cyan mb-4">
            Engineering & Strategy Journal
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
            Digital Architecture &{" "}
            <span className="bg-gradient-brand bg-clip-text text-transparent">
              Growth Engineering Insights.
            </span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-muted leading-relaxed">
            Practical, human-written technical analysis covering custom web applications, UX latency psychology, technical SEO audits, and modern digital standards.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {BLOG_ARTICLES.map((article) => (
            <Card
              key={article.id}
              className="flex flex-col justify-between h-full bg-surface-elevated/70 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded bg-brand-bright/10 text-brand-cyan border border-brand-bright/20">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-muted">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{article.readingTime}</span>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-white group-hover:text-brand-cyan transition-colors leading-snug">
                  <Link href={`/blog/${article.slug}`}>
                    {article.title}
                  </Link>
                </h2>

                <p className="text-xs sm:text-sm text-muted leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
              </div>

              <div className="pt-6 border-t border-white/5 mt-6 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-muted-dark">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{formatDate(article.publishedAt)}</span>
                </div>

                <Link
                  href={`/blog/${article.slug}`}
                  className="text-xs font-bold text-brand-bright hover:text-brand-cyan inline-flex items-center gap-1 transition-colors"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
