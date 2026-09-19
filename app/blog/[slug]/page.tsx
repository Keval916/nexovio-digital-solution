import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  User,
  Calendar,
  BookOpen,
  Share2,
} from "lucide-react";
import { getBlogArticleBySlug, BLOG_ARTICLES } from "@/data/blog";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { formatDate } from "@/lib/utils";
import { generatePageMetadata } from "@/lib/seo";
import { getArticleSchema } from "@/lib/schema";

interface BlogArticlePageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return BLOG_ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

export function generateMetadata({ params }: BlogArticlePageProps) {
  const article = getBlogArticleBySlug(params.slug);
  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  return generatePageMetadata({
    title: article.seoTitle,
    description: article.seoDescription,
    keywords: [article.category, "Web Development", "Digital Strategy", "Technical Engineering", "Nexovio Blog"],
    path: `/blog/${article.slug}`,
    type: "article",
    publishedTime: article.publishedAt,
    modifiedTime: article.updatedAt || article.publishedAt,
    authors: [article.author.name],
  });
}

export default function SingleBlogArticlePage({ params }: BlogArticlePageProps) {
  const article = getBlogArticleBySlug(params.slug);
  if (!article) {
    notFound();
  }

  const articleSchema = getArticleSchema({
    title: article.title,
    description: article.excerpt,
    url: `/blog/${article.slug}`,
    image: article.featuredImage,
    publishedAt: article.publishedAt,
    updatedAt: article.updatedAt,
    authorName: article.author.name,
  });

  const relatedArticles = BLOG_ARTICLES.filter((a) =>
    article.relatedSlugs.includes(a.slug)
  );

  return (
    <article className="pt-28 pb-20 bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <Breadcrumbs
          items={[
            { name: "Blog", url: "/blog" },
            { name: article.title, url: `/blog/${article.slug}` },
          ]}
        />

        {/* Article Header */}
        <header className="space-y-4 mb-12">
          <div className="flex flex-wrap items-center gap-3 text-xs">
            <span className="font-mono uppercase tracking-wider px-2.5 py-1 rounded bg-brand-bright/10 text-brand-cyan border border-brand-bright/20">
              {article.category}
            </span>
            <div className="flex items-center gap-1.5 text-muted">
              <Clock className="w-3.5 h-3.5" />
              <span>{article.readingTime}</span>
            </div>
            <div className="flex items-center gap-1.5 text-muted">
              <Calendar className="w-3.5 h-3.5" />
              <span>Published {formatDate(article.publishedAt)}</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.15]">
            <span className="bg-gradient-brand bg-clip-text text-transparent">{article.title}</span>
          </h1>

          <p className="text-base sm:text-lg text-muted leading-relaxed">
            {article.excerpt}
          </p>

          <div className="pt-2 flex items-center gap-3 border-t border-white/5">
            <div className="w-9 h-9 rounded-full bg-brand-cyan/20 border border-brand-cyan/30 flex items-center justify-center text-xs font-bold text-brand-cyan">
              NX
            </div>
            <div>
              <span className="text-xs font-semibold text-white block">
                {article.author.name}
              </span>
              <span className="text-[11px] text-muted">
                {article.author.role}
              </span>
            </div>
          </div>
        </header>

        {/* Table of Contents Box */}
        {article.tableOfContents && article.tableOfContents.length > 0 && (
          <div className="mb-12 rounded-xl border border-border-subtle bg-surface-elevated/70 p-6">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-cyan mb-3">
              <BookOpen className="w-4 h-4" />
              <span>Table of Contents</span>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-muted">
              {article.tableOfContents.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="hover:text-brand-cyan hover:underline transition-colors block py-0.5"
                  >
                    • {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Editorial Body Content */}
        <div className="space-y-6 text-sm sm:text-base text-muted-light leading-relaxed mb-16">
          {article.content.map((paragraph, idx) => (
            <p key={idx} className="leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Author Box */}
        <div className="rounded-xl border border-border-subtle bg-surface-elevated/50 p-6 mb-16 flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-brand-bright/10 border border-brand-bright/20 flex items-center justify-center text-brand-cyan shrink-0">
            <User className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-white mb-1">
              Written by {article.author.name}
            </h3>
            <p className="text-xs text-muted leading-relaxed">
              Nexovio Digital Solutions engineers digital experiences, custom web applications, and search intelligence frameworks for growing businesses worldwide.
            </p>
          </div>
        </div>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <div className="mb-16 space-y-4">
            <h2 className="text-lg font-bold">
              Related Articles &amp;{" "}
              <span className="bg-gradient-brand bg-clip-text text-transparent">Architecture Guides</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedArticles.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/blog/${rel.slug}`}
                  className="p-5 rounded-xl border border-border-subtle bg-surface/60 hover:bg-surface-elevated hover:border-brand-cyan/40 transition-all block group"
                >
                  <span className="text-[10px] font-mono text-brand-cyan uppercase tracking-widest block mb-1">
                    {rel.category}
                  </span>
                  <h3 className="text-sm font-bold text-white group-hover:text-brand-cyan transition-colors line-clamp-2">
                    {rel.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Bottom CTA / Back Navigation */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link
            href="/blog"
            className="text-xs font-medium text-muted hover:text-white inline-flex items-center gap-2"
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
          >
            Discuss Your Web Project
          </Button>
        </div>
      </div>
    </article>
  );
}
