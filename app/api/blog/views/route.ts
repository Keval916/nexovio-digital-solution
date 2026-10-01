import { NextRequest, NextResponse } from "next/server";
import { getBlogAnalytics, recordArticleView } from "@/src/lib/blog-analytics";

export const dynamic = "force-dynamic";

// GET /api/blog/views - Returns 100% free real in-app analytics
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const slug = searchParams.get("slug");
    const analytics = getBlogAnalytics();

    if (slug) {
      const post = analytics.postViews[slug] || { views: 0, uniqueVisitors: 0 };
      return NextResponse.json({
        success: true,
        slug,
        views: post.views,
        uniqueVisitors: post.uniqueVisitors,
      });
    }

    return NextResponse.json({
      success: true,
      analytics,
    });
  } catch (error) {
    console.error("GET /api/blog/views error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch analytics" },
      { status: 500 }
    );
  }
}

// POST /api/blog/views - Records a real human pageview with device & referrer
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { slug, isUnique, device, referrer } = body;

    if (!slug) {
      return NextResponse.json(
        { success: false, message: "Slug is required" },
        { status: 400 }
      );
    }

    const result = recordArticleView(slug, isUnique ?? true, { device, referrer });
    return NextResponse.json({
      success: true,
      slug,
      views: result.postViews,
      totalViews: result.totalViews,
    });
  } catch (error) {
    console.error("POST /api/blog/views error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to record view" },
      { status: 500 }
    );
  }
}
