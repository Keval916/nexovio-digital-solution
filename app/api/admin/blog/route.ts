import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import {
  getStoredBlogArticlesAsync,
  getBlogArticleBySlugAsync,
  createBlogArticleInDb,
  updateBlogArticleInDb,
  deleteBlogArticleFromDb,
  calculateReadingTime,
  generateSlug,
} from "@/src/lib/blog-storage";
import { isMongoConfigured } from "@/src/lib/mongodb";
import { BlogArticle } from "@/src/data/blog";
import { getTodayDateString } from "@/src/lib/utils";

export const dynamic = "force-dynamic";

// GET: Fetch all blog articles (or export backup JSON)
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const articles = await getStoredBlogArticlesAsync(true);

    if (searchParams.get("export") === "true") {
      const jsonString = JSON.stringify(articles, null, 2);
      return new NextResponse(jsonString, {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Content-Disposition": `attachment; filename="blog-articles-export.json"`,
        },
      });
    }

    const storageMode = isMongoConfigured() ? "mongodb" : "fallback-memory";

    return NextResponse.json({
      success: true,
      articles,
      storageMode,
      isConfigured: isMongoConfigured(),
    });
  } catch (error) {
    console.error("API GET /api/admin/blog error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch articles from database" },
      { status: 500 }
    );
  }
}

// POST: Create a new blog article in MongoDB
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

    const slug = (customSlug && customSlug.trim()) || generateSlug(title);

    // Check slug collision in MongoDB
    const existing = await getBlogArticleBySlugAsync(slug);
    if (existing) {
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

    const saved = await createBlogArticleInDb(newArticle);

    if (!saved && isMongoConfigured()) {
      return NextResponse.json(
        { success: false, message: "Failed to persist article to MongoDB" },
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
      message: "Article saved to database successfully",
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

// PUT: Update an existing blog article in MongoDB
export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    const { id, slug } = body;

    const targetKey = slug || id;
    if (!targetKey) {
      return NextResponse.json(
        { success: false, message: "Article ID or slug is required for updating" },
        { status: 400 }
      );
    }

    // Process content if provided
    let contentArray: string[] | undefined = undefined;
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

    const readingTime = contentArray ? calculateReadingTime(contentArray) : undefined;
    const currentDate = getTodayDateString();

    // Process keywords
    let keywordsArray: string[] | undefined = undefined;
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

    const updates: Partial<BlogArticle> = {
      ...(body.title !== undefined && { title: body.title.trim() }),
      ...(body.slug !== undefined && { slug: body.slug.trim() }),
      ...(body.category !== undefined && { category: body.category }),
      ...(body.excerpt !== undefined && { excerpt: body.excerpt.trim() }),
      ...(contentArray !== undefined && { content: contentArray }),
      ...(body.tableOfContents !== undefined && { tableOfContents: body.tableOfContents }),
      ...(body.authorName !== undefined && {
        author: {
          name: body.authorName.trim(),
          role: body.authorRole !== undefined ? body.authorRole.trim() : "Engineering & Strategy",
        },
      }),
      ...(body.featuredImage !== undefined && { featuredImage: body.featuredImage }),
      ...(body.featuredImageAlt !== undefined && { featuredImageAlt: body.featuredImageAlt }),
      ...(body.seoTitle !== undefined && { seoTitle: body.seoTitle }),
      ...(body.seoDescription !== undefined && { seoDescription: body.seoDescription }),
      ...(readingTime !== undefined && { readingTime }),
      ...(body.publishedAt !== undefined && { publishedAt: body.publishedAt }),
      updatedAt: currentDate,
      ...(body.focusKeyword !== undefined && { focusKeyword: body.focusKeyword?.trim() || undefined }),
      ...(keywordsArray !== undefined && { keywords: keywordsArray }),
      ...(body.canonicalUrl !== undefined && { canonicalUrl: body.canonicalUrl?.trim() || undefined }),
      ...(body.ogImage !== undefined && { ogImage: body.ogImage?.trim() || undefined }),
      ...(body.noIndex !== undefined && { noIndex: Boolean(body.noIndex) }),
      ...(body.noFollow !== undefined && { noFollow: Boolean(body.noFollow) }),
      ...(body.schemaType !== undefined && { schemaType: body.schemaType }),
      ...(body.socialTitle !== undefined && { socialTitle: body.socialTitle?.trim() || undefined }),
      ...(body.socialDescription !== undefined && { socialDescription: body.socialDescription?.trim() || undefined }),
      ...(body.sitemapPriority !== undefined && { sitemapPriority: Number(body.sitemapPriority) }),
      ...(body.changeFreq !== undefined && { changeFreq: body.changeFreq }),
    };

    const updatedArticle = await updateBlogArticleInDb(targetKey, updates);

    if (!updatedArticle) {
      return NextResponse.json(
        { success: false, message: "Article not found or failed to update" },
        { status: 404 }
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
      message: "Article updated successfully in MongoDB",
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

// DELETE: Remove an article from MongoDB
export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    const slug = searchParams.get("slug");

    const target = slug || id;
    if (!target) {
      return NextResponse.json(
        { success: false, message: "Article ID or slug is required" },
        { status: 400 }
      );
    }

    const deleted = await deleteBlogArticleFromDb(target);

    if (!deleted && isMongoConfigured()) {
      return NextResponse.json(
        { success: false, message: "Article not found in database" },
        { status: 404 }
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
      message: "Article deleted from database successfully",
    });
  } catch (error) {
    console.error("API DELETE /api/admin/blog error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to delete article" },
      { status: 500 }
    );
  }
}
