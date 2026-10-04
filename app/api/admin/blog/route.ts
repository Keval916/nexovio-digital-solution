import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import {
  getStoredBlogArticlesAsync,
  getBlogArticleBySlugAsync,
  createBlogArticleInDb,
  updateBlogArticleInDb,
  deleteBlogArticleFromDb,
  deleteManyBlogArticlesFromDb,
  calculateReadingTime,
  generateSlug,
} from "@/src/lib/blog-storage";
import { isMongoConfigured } from "@/src/lib/mongodb";
import { BlogArticle } from "@/src/data/blog";
import { getTodayDateString } from "@/src/lib/utils";
import { SITE_URL } from "@/src/lib/seo";

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
      authorAvatar,
      authorBio,
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
      faqs,
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

    // Process content (array of paragraphs or raw HTML string)
    // Helper: sanitize and split an HTML string into an array of block-level chunks
    const sanitizeAndSplitHtml = (html: string): string[] => {
      let cleaned = html
        .replace(/<p[^>]*>\s*(<br\s*\/?>|\s|&nbsp;)*\s*<\/p>/gi, "")
        .replace(/<div[^>]*>\s*(<br\s*\/?>|\s|&nbsp;)*\s*<\/div>/gi, "")
        .replace(/(<br\s*\/?\s*>[\s]*){3,}/gi, "<br><br>")
        .trim();
      if (!cleaned) return [];
      // Split on block-level boundaries for granular storage
      const blocks = cleaned
        .split(/(?=<(?:h[2-6]|div\s|table|figure|blockquote|ul|ol)[>\s])/gi)
        .map((b: string) => b.trim())
        .filter((b: string) => {
          const stripped = b.replace(/<[^>]*>/g, "").replace(/&nbsp;/gi, " ").trim();
          return stripped.length > 0 || /<(?:img|figure|table|iframe)\s/i.test(b);
        });
      return blocks.length > 0 ? blocks : [cleaned];
    };

    const isEmptyParagraph = (p: string): boolean => {
      const stripped = p.replace(/<p[^>]*>\s*(<br\s*\/?>|&nbsp;|\s)*<\/p>/gi, "").trim();
      return stripped.length === 0;
    };

    const contentArray: string[] = Array.isArray(content)
      ? content
          .map((p: string) => (typeof p === "string" ? p.trim() : ""))
          .filter((p: string) => !isEmptyParagraph(p))
      : typeof content === "string"
      ? sanitizeAndSplitHtml(content)
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
        ...(authorAvatar ? { avatar: authorAvatar.trim() } : {}),
        ...(authorBio ? { bio: authorBio.trim() } : {}),
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
      ogImage: (ogImage && ogImage.trim()) || (featuredImage && featuredImage.trim()) || undefined,
      noIndex: Boolean(noIndex),
      noFollow: Boolean(noFollow),
      schemaType: schemaType || "BlogPosting",
      socialTitle: socialTitle ? socialTitle.trim() : undefined,
      socialDescription: socialDescription ? socialDescription.trim() : undefined,
      sitemapPriority: sitemapPriority ? Number(sitemapPriority) : 0.8,
      changeFreq: changeFreq || "weekly",
      faqs: Array.isArray(faqs)
        ? faqs
            .map((f: any) => ({
              question: String(f?.question || "").trim(),
              answer: String(f?.answer || "").trim(),
            }))
            .filter((f: any) => f.question && f.answer)
        : undefined,
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

    // Ping search engines via IndexNow in background
    try {
      const cleanSiteUrl = SITE_URL.endsWith("/") ? SITE_URL.slice(0, -1) : SITE_URL;
      fetch(`${cleanSiteUrl}/api/indexnow`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ urls: [`${cleanSiteUrl}/blog/${slug}`] }),
      }).catch(() => {});
    } catch {}

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
    const { id, slug, originalSlug } = body;

    const targetKey = originalSlug || id || slug;
    if (!targetKey) {
      return NextResponse.json(
        { success: false, message: "Article ID or slug is required for updating" },
        { status: 400 }
      );
    }

    // Process content if provided
    let contentArray: string[] | undefined = undefined;
    if (body.content !== undefined) {
      const sanitizeAndSplitHtmlPut = (html: string): string[] => {
        let cleaned = html
          .replace(/<p[^>]*>\s*(<br\s*\/?>|\s|&nbsp;)*\s*<\/p>/gi, "")
          .replace(/<div[^>]*>\s*(<br\s*\/?>|\s|&nbsp;)*\s*<\/div>/gi, "")
          .replace(/(<br\s*\/?\s*>[\s]*){3,}/gi, "<br><br>")
          .trim();
        if (!cleaned) return [];
        const blocks = cleaned
          .split(/(?=<(?:h[2-6]|div\s|table|figure|blockquote|ul|ol)[>\s])/gi)
          .map((b: string) => b.trim())
          .filter((b: string) => {
            const stripped = b.replace(/<[^>]*>/g, "").replace(/&nbsp;/gi, " ").trim();
            return stripped.length > 0 || /<(?:img|figure|table|iframe)\s/i.test(b);
          });
        return blocks.length > 0 ? blocks : [cleaned];
      };

      const isEmptyParagraphPut = (p: string): boolean => {
        const stripped = p.replace(/<p[^>]*>\s*(<br\s*\/?>|&nbsp;|\s)*<\/p>/gi, "").trim();
        return stripped.length === 0;
      };

      contentArray = Array.isArray(body.content)
        ? body.content
            .map((p: string) => (typeof p === "string" ? p.trim() : ""))
            .filter((p: string) => !isEmptyParagraphPut(p))
        : typeof body.content === "string"
        ? sanitizeAndSplitHtmlPut(body.content)
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
          ...(body.authorAvatar !== undefined ? { avatar: body.authorAvatar.trim() } : {}),
          ...(body.authorBio !== undefined ? { bio: body.authorBio.trim() } : {}),
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
      ...(body.ogImage !== undefined
        ? { ogImage: body.ogImage?.trim() || body.featuredImage?.trim() || undefined }
        : body.featuredImage !== undefined
        ? { ogImage: body.featuredImage?.trim() || undefined }
        : {}),
      ...(body.noIndex !== undefined && { noIndex: Boolean(body.noIndex) }),
      ...(body.noFollow !== undefined && { noFollow: Boolean(body.noFollow) }),
      ...(body.schemaType !== undefined && { schemaType: body.schemaType }),
      ...(body.socialTitle !== undefined && { socialTitle: body.socialTitle?.trim() || undefined }),
      ...(body.socialDescription !== undefined && { socialDescription: body.socialDescription?.trim() || undefined }),
      ...(body.sitemapPriority !== undefined && { sitemapPriority: Number(body.sitemapPriority) }),
      ...(body.changeFreq !== undefined && { changeFreq: body.changeFreq }),
      ...(body.faqs !== undefined && {
        faqs: Array.isArray(body.faqs)
          ? body.faqs
              .map((f: any) => ({
                question: String(f?.question || "").trim(),
                answer: String(f?.answer || "").trim(),
              }))
              .filter((f: any) => f.question && f.answer)
          : [],
      }),
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
      if (originalSlug && originalSlug !== updatedArticle.slug) {
        revalidatePath(`/blog/${originalSlug}`);
      }
      revalidatePath(`/blog/${updatedArticle.slug}`);
    } catch (e) {
      console.warn("Revalidation warning:", e);
    }

    // Ping search engines via IndexNow in background
    try {
      const cleanSiteUrl = SITE_URL.endsWith("/") ? SITE_URL.slice(0, -1) : SITE_URL;
      fetch(`${cleanSiteUrl}/api/indexnow`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ urls: [`${cleanSiteUrl}/blog/${updatedArticle.slug}`] }),
      }).catch(() => {});
    } catch {}

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

// DELETE: Remove an article or multiple articles from MongoDB
export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    const slug = searchParams.get("slug");
    const slugsParam = searchParams.get("slugs");

    let slugsToDelete: string[] = [];

    if (slugsParam) {
      slugsToDelete = slugsParam.split(",").map((s) => s.trim()).filter(Boolean);
    } else if (slug || id) {
      slugsToDelete = [slug || id!];
    } else {
      // Check if JSON body contains slugs
      try {
        const body = await req.json();
        if (Array.isArray(body?.slugs)) {
          slugsToDelete = body.slugs.map((s: any) => String(s).trim()).filter(Boolean);
        }
      } catch {
        // No body
      }
    }

    if (slugsToDelete.length === 0) {
      return NextResponse.json(
        { success: false, message: "Article ID, slug, or slugs array is required" },
        { status: 400 }
      );
    }

    if (slugsToDelete.length === 1) {
      const deleted = await deleteBlogArticleFromDb(slugsToDelete[0]);
      if (!deleted && isMongoConfigured()) {
        return NextResponse.json(
          { success: false, message: "Article not found in database" },
          { status: 404 }
        );
      }
    } else {
      const result = await deleteManyBlogArticlesFromDb(slugsToDelete);
      if (!result.success && isMongoConfigured()) {
        return NextResponse.json(
          { success: false, message: "Failed to delete articles from database" },
          { status: 500 }
        );
      }
    }

    try {
      revalidatePath("/sitemap.xml");
      revalidatePath("/blog");
      for (const s of slugsToDelete) {
        revalidatePath(`/blog/${s}`);
      }
    } catch (e) {
      console.warn("Revalidation warning:", e);
    }

    return NextResponse.json({
      success: true,
      message: `${slugsToDelete.length} article(s) deleted successfully from MongoDB`,
      deletedCount: slugsToDelete.length,
    });
  } catch (error) {
    console.error("API DELETE /api/admin/blog error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to delete article(s)" },
      { status: 500 }
    );
  }
}
