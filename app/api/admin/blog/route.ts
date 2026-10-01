import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import {
  getStoredBlogArticles,
  getStoredBlogArticlesAsync,
  saveStoredBlogArticles,
  saveStoredBlogArticlesAsync,
  calculateReadingTime,
  generateSlug,
} from "@/src/lib/blog-storage";
import { BlogArticle } from "@/src/data/blog";
import { getTodayDateString } from "@/src/lib/utils";

export const dynamic = "force-dynamic";

// GET: Fetch all blog articles (or export raw JSON)
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const articles = await getStoredBlogArticlesAsync();

    if (searchParams.get("export") === "true") {
      const jsonString = JSON.stringify(articles, null, 2);
      return new NextResponse(jsonString, {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Content-Disposition": `attachment; filename="blog-posts.json"`,
        },
      });
    }

    const storageMode =
      process.env.GITHUB_TOKEN || process.env.GH_TOKEN
        ? "github"
        : process.env.VERCEL
        ? "serverless"
        : "local";

    return NextResponse.json({ success: true, articles, storageMode });
  } catch (error) {
    console.error("API GET /api/admin/blog error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch articles" },
      { status: 500 }
    );
  }
}

// POST: Create a new blog article
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      title,
      category,
      authorName,
      authorRole,
      featuredImage,
      featuredImageAlt,
      excerpt,
      content,
      seoTitle,
      seoDescription,
      tableOfContents,
      slug: customSlug,
      publishedAt: customDate,
      focusKeyword,
      keywords,
      canonicalUrl,
      ogImage,
      noIndex,
      noFollow,
      schemaType,
      socialTitle,
      socialDescription,
      sitemapPriority,
      changeFreq,
    } = body;

    if (!title || !title.trim()) {
      return NextResponse.json(
        { success: false, message: "Title is required" },
        { status: 400 }
      );
    }

    const articles = await getStoredBlogArticlesAsync();
    const slug = (customSlug && customSlug.trim()) || generateSlug(title);

    // Check slug collision
    if (articles.some((a) => a.slug === slug)) {
      return NextResponse.json(
        { success: false, message: `An article with slug "${slug}" already exists. Please use a unique title or slug.` },
        { status: 400 }
      );
    }

    // Process content (array of paragraphs)
    const contentArray: string[] = Array.isArray(content)
      ? content
      : typeof content === "string"
      ? content
          .split("\n\n")
          .map((p: string) => p.trim())
          .filter(Boolean)
      : [];

    const readingTime = calculateReadingTime(contentArray);
    const currentDate = getTodayDateString();

    // Process keywords
    const keywordsArray = Array.isArray(keywords)
      ? keywords
      : typeof keywords === "string"
      ? keywords
          .split(",")
          .map((k: string) => k.trim())
          .filter(Boolean)
      : undefined;

    const newArticle: BlogArticle = {
      id: slug,
      title: title.trim(),
      slug,
      excerpt: (excerpt && excerpt.trim()) || title.trim(),
      content: contentArray.length > 0 ? contentArray : [title.trim()],
      tableOfContents: Array.isArray(tableOfContents) ? tableOfContents : [],
      category: category || "Web Development",
      author: {
        name: (authorName && authorName.trim()) || "Nexovio Technical Team",
        role: (authorRole && authorRole.trim()) || "Engineering & Strategy",
      },
      publishedAt: (customDate && customDate.trim()) ? customDate.trim() : currentDate,
      updatedAt: currentDate,
      readingTime,
      featuredImage: featuredImage || "/images/blog/custom-web-development-vs-website-builders.webp",
      featuredImageAlt: featuredImageAlt || title.trim(),
      seoTitle: seoTitle || title.trim(),
      seoDescription: seoDescription || excerpt || title.trim(),
      relatedSlugs: [],
      focusKeyword: focusKeyword ? focusKeyword.trim() : undefined,
      keywords: keywordsArray,
      canonicalUrl: canonicalUrl ? canonicalUrl.trim() : undefined,
      ogImage: ogImage ? ogImage.trim() : undefined,
      noIndex: Boolean(noIndex),
      noFollow: Boolean(noFollow),
      schemaType: schemaType || "BlogPosting",
      socialTitle: socialTitle ? socialTitle.trim() : undefined,
      socialDescription: socialDescription ? socialDescription.trim() : undefined,
      sitemapPriority: sitemapPriority ? Number(sitemapPriority) : 0.8,
      changeFreq: changeFreq || "weekly",
    };

    articles.unshift(newArticle);
    const saved = await saveStoredBlogArticlesAsync(articles);

    if (!saved) {
      return NextResponse.json(
        { success: false, message: "Failed to persist article to disk" },
        { status: 500 }
      );
    }

    try {
      revalidatePath("/sitemap.xml");
      revalidatePath("/blog");
      revalidatePath(`/blog/${slug}`);
    } catch (e) {
      console.warn("Revalidation warning:", e);
    }

    return NextResponse.json({
      success: true,
      message: "Article created successfully",
      article: newArticle,
    });
  } catch (error) {
    console.error("API POST /api/admin/blog error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to create article" },
      { status: 500 }
    );
  }
}

// PUT: Update an existing blog article
export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    const { id, slug } = body;

    if (!id && !slug) {
      return NextResponse.json(
        { success: false, message: "Article ID or slug is required for updating" },
        { status: 400 }
      );
    }

    const articles = await getStoredBlogArticlesAsync();
    const index = articles.findIndex((a) => a.id === id || a.slug === slug);

    if (index === -1) {
      return NextResponse.json(
        { success: false, message: "Article not found" },
        { status: 404 }
      );
    }

    const current = articles[index];

    // Process content if provided
    let contentArray = current.content;
    if (body.content !== undefined) {
      contentArray = Array.isArray(body.content)
        ? body.content
        : typeof body.content === "string"
        ? body.content
            .split("\n\n")
            .map((p: string) => p.trim())
            .filter(Boolean)
        : [];
    }

    const readingTime = calculateReadingTime(contentArray);
    const currentDate = getTodayDateString();

    // Process keywords
    let keywordsArray = current.keywords;
    if (body.keywords !== undefined) {
      keywordsArray = Array.isArray(body.keywords)
        ? body.keywords
        : typeof body.keywords === "string"
        ? body.keywords
            .split(",")
            .map((k: string) => k.trim())
            .filter(Boolean)
        : undefined;
    }

    const updatedArticle: BlogArticle = {
      ...current,
      title: body.title !== undefined ? body.title.trim() : current.title,
      slug: body.slug !== undefined ? body.slug.trim() : current.slug,
      category: body.category !== undefined ? body.category : current.category,
      excerpt: body.excerpt !== undefined ? body.excerpt.trim() : current.excerpt,
      content: contentArray,
      tableOfContents: body.tableOfContents !== undefined ? body.tableOfContents : current.tableOfContents,
      author: {
        name: body.authorName !== undefined ? body.authorName.trim() : current.author.name,
        role: body.authorRole !== undefined ? body.authorRole.trim() : current.author.role,
      },
      featuredImage: body.featuredImage !== undefined ? body.featuredImage : current.featuredImage,
      featuredImageAlt: body.featuredImageAlt !== undefined ? body.featuredImageAlt : current.featuredImageAlt,
      seoTitle: body.seoTitle !== undefined ? body.seoTitle : current.seoTitle,
      seoDescription: body.seoDescription !== undefined ? body.seoDescription : current.seoDescription,
      readingTime: body.readingTime || readingTime,
      publishedAt: (body.publishedAt && typeof body.publishedAt === "string" && body.publishedAt.trim()) ? body.publishedAt.trim() : current.publishedAt,
      updatedAt: currentDate,
      focusKeyword: body.focusKeyword !== undefined ? (body.focusKeyword?.trim() || undefined) : current.focusKeyword,
      keywords: keywordsArray,
      canonicalUrl: body.canonicalUrl !== undefined ? (body.canonicalUrl?.trim() || undefined) : current.canonicalUrl,
      ogImage: body.ogImage !== undefined ? (body.ogImage?.trim() || undefined) : current.ogImage,
      noIndex: body.noIndex !== undefined ? Boolean(body.noIndex) : current.noIndex,
      noFollow: body.noFollow !== undefined ? Boolean(body.noFollow) : current.noFollow,
      schemaType: body.schemaType !== undefined ? body.schemaType : current.schemaType,
      socialTitle: body.socialTitle !== undefined ? (body.socialTitle?.trim() || undefined) : current.socialTitle,
      socialDescription: body.socialDescription !== undefined ? (body.socialDescription?.trim() || undefined) : current.socialDescription,
      sitemapPriority: body.sitemapPriority !== undefined ? Number(body.sitemapPriority) : current.sitemapPriority,
      changeFreq: body.changeFreq !== undefined ? body.changeFreq : current.changeFreq,
    };

    articles[index] = updatedArticle;
    const saved = await saveStoredBlogArticlesAsync(articles);

    if (!saved) {
      return NextResponse.json(
        { success: false, message: "Failed to save updated article to disk" },
        { status: 500 }
      );
    }

    try {
      revalidatePath("/sitemap.xml");
      revalidatePath("/blog");
      revalidatePath(`/blog/${updatedArticle.slug}`);
    } catch (e) {
      console.warn("Revalidation warning:", e);
    }

    return NextResponse.json({
      success: true,
      message: "Article updated successfully",
      article: updatedArticle,
    });
  } catch (error) {
    console.error("API PUT /api/admin/blog error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to update article" },
      { status: 500 }
    );
  }
}

// DELETE: Remove an article
export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    const slug = searchParams.get("slug");

    if (!id && !slug) {
      return NextResponse.json(
        { success: false, message: "Article ID or slug is required" },
        { status: 400 }
      );
    }

    const articles = await getStoredBlogArticlesAsync();
    const filtered = articles.filter((a) => a.id !== id && a.slug !== slug);

    if (filtered.length === articles.length) {
      return NextResponse.json(
        { success: false, message: "Article not found" },
        { status: 404 }
      );
    }

    const saved = await saveStoredBlogArticlesAsync(filtered);
    if (!saved) {
      return NextResponse.json(
        { success: false, message: "Failed to delete article from disk" },
        { status: 500 }
      );
    }

    try {
      revalidatePath("/sitemap.xml");
      revalidatePath("/blog");
      if (slug) revalidatePath(`/blog/${slug}`);
    } catch (e) {
      console.warn("Revalidation warning:", e);
    }

    return NextResponse.json({
      success: true,
      message: "Article deleted successfully",
      remainingCount: filtered.length,
    });
  } catch (error) {
    console.error("API DELETE /api/admin/blog error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to delete article" },
      { status: 500 }
    );
  }
}
