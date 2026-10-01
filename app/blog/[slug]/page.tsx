import { notFound } from "next/navigation";
import { getStoredBlogArticles, getBlogArticleBySlugAsync } from "@/src/lib/blog-storage";
import { generatePageMetadata } from "@/src/lib/seo";
import BlogDetail from "@/src/views/blog/BlogDetail";

export const dynamic = "force-dynamic";
export const revalidate = 0;
export const dynamicParams = true;

interface BlogArticlePageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  const articles = getStoredBlogArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: BlogArticlePageProps) {
  const article = await getBlogArticleBySlugAsync(params.slug);
  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  const keywordsList =
    article.keywords && article.keywords.length > 0
      ? article.keywords
      : [
          article.category,
          article.focusKeyword || "",
          "Web Development",
          "Digital Strategy",
          "Technical Engineering",
          "Nexovio Blog",
        ].filter(Boolean);

  return generatePageMetadata({
    title: article.seoTitle || article.title,
    description: article.seoDescription || article.excerpt,
    keywords: keywordsList,
    path: `/blog/${article.slug}`,
    canonicalOverride: article.canonicalUrl,
    ogImage: article.ogImage || article.featuredImage,
    type: "article",
    publishedTime: article.publishedAt,
    modifiedTime: article.updatedAt || article.publishedAt,
    authors: [article.author.name],
    noIndex: article.noIndex ?? false,
    noFollow: article.noFollow ?? false,
  });
}

export default async function Page({ params }: BlogArticlePageProps) {
  const article = await getBlogArticleBySlugAsync(params.slug);
  if (!article) {
    notFound();
  }

  return <BlogDetail params={params} article={article} />;
}

