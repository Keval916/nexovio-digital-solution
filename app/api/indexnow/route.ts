import { NextResponse } from "next/server";
import { ROUTES } from "@/src/lib/routes";
import { SITE_URL } from "@/src/lib/seo";

const INDEXNOW_KEY = "c8d35f791a4b4e5088e2bf57613769c0";

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));
    const cleanSiteUrl = SITE_URL.endsWith("/") ? SITE_URL.slice(0, -1) : SITE_URL;
    const host = new URL(cleanSiteUrl).host;

    // Use passed URLs or submit all registered routes + dynamic blog posts
    let urlList: string[] = [];
    if (body.urls && Array.isArray(body.urls) && body.urls.length > 0) {
      urlList = body.urls;
    } else {
      const staticUrls = (ROUTES as readonly string[])
        .filter((r) => !r.startsWith("/blog/") || r === "/blog")
        .map((r) => `${cleanSiteUrl}${r === "/" ? "" : r}`);
      try {
        const { getStoredBlogArticlesAsync } = await import("@/src/lib/blog-storage");
        const blogArticles = await getStoredBlogArticlesAsync();
        const blogUrls = blogArticles
          .filter((a) => !a.noIndex)
          .map((a) => `${cleanSiteUrl}/blog/${a.slug}`);
        urlList = [...staticUrls, ...blogUrls];
      } catch {
        urlList = staticUrls;
      }
    }

    const payload = {
      host,
      key: INDEXNOW_KEY,
      keyLocation: `${cleanSiteUrl}/${INDEXNOW_KEY}.txt`,
      urlList,
    };

    const res = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(payload),
    });

    if (res.status === 200 || res.status === 202) {
      return NextResponse.json({
        success: true,
        submitted: urlList.length,
        message: "Submitted URLs to IndexNow search engines (Bing, Yandex, Seznam, Naver)",
      });
    }

    return NextResponse.json(
      {
        success: false,
        status: res.status,
        message: "IndexNow returned a non-200 response",
      },
      { status: res.status }
    );
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || "Failed to submit to IndexNow" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    status: "active",
    protocol: "IndexNow",
    engines: ["Bing", "Yandex", "Naver", "Seznam"],
    key: INDEXNOW_KEY,
  });
}
