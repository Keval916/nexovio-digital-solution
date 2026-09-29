import { notFound } from "next/navigation";
import { getBlogArticleBySlug, BLOG_ARTICLES } from "@/src/data/blog";
import { generatePageMetadata } from "@/src/lib/seo";
import BlogDetail from "@/src/views/blog/BlogDetail";

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

export default function Page({ params }: BlogArticlePageProps) {
  const article = getBlogArticleBySlug(params.slug);
  if (!article) {
    notFound();
  }

  return <BlogDetail params={params} />;
}
