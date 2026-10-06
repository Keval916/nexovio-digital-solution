import { notFound, redirect } from "next/navigation";
import { getStoredBlogArticlesAsync, getBlogArticleBySlugAsync } from "@/src/lib/blog-storage";
import { BlogArticle } from "@/src/data/blog";
import { generatePageMetadata, SITE_URL } from "@/src/lib/seo";
import BlogDetail from "@/src/views/blog/BlogDetail";

export const dynamic = "force-dynamic";
export const revalidate = 0;
export const dynamicParams = true;

interface BlogArticlePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const articles = await getStoredBlogArticlesAsync();
  return articles.map((article: BlogArticle) => ({
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

  const cleanSiteUrl = SITE_URL.endsWith("/") ? SITE_URL.slice(0, -1) : SITE_URL;
  const canonicalUrl = article.canonicalUrl && article.canonicalUrl.startsWith("http")
    ? article.canonicalUrl
    : `${cleanSiteUrl}/blog/${article.slug}`;

  return generatePageMetadata({
    title: article.seoTitle || article.title,
    description: article.seoDescription || article.excerpt,
    keywords: keywordsList,
    path: `/blog/${article.slug}`,
    canonicalOverride: canonicalUrl,
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

  // If accessed via a legacy/previous slug, permanently redirect to current primary slug
  const normalizedParam = decodeURIComponent(params.slug).toLowerCase().trim();
  if (article.slug.toLowerCase().trim() !== normalizedParam) {
    redirect(`/blog/${article.slug}`);
  }

  return <BlogDetail params={params} article={article} />;
}

