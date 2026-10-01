import fs from "fs";
import path from "path";
import { getStoredBlogArticles } from "./blog-storage";

export interface PostAnalytics {
  views: number;
  uniqueVisitors: number;
  lastVisited: string;
}

export interface DailyTrafficPoint {
  date: string; // YYYY-MM-DD
  views: number;
  uniqueVisitors: number;
}

export interface BlogAnalyticsData {
  totalViews: number;
  uniqueVisitors: number;
  postViews: Record<string, PostAnalytics>;
  dailyTraffic: DailyTrafficPoint[];
  deviceBreakdown: {
    desktop: number;
    mobile: number;
    tablet: number;
  };
  referrerBreakdown: {
    google: number;
    linkedin: number;
    twitter: number;
    direct: number;
    other: number;
  };
}

const ANALYTICS_FILE_PATH = path.join(process.cwd(), "src", "data", "blog-analytics.json");

function generateDefaultAnalytics(): BlogAnalyticsData {
  const articles = getStoredBlogArticles();
  const postViews: Record<string, PostAnalytics> = {};

  articles.forEach((art) => {
    postViews[art.slug] = {
      views: 0,
      uniqueVisitors: 0,
      lastVisited: new Date().toISOString(),
    };
  });

  return {
    totalViews: 0,
    uniqueVisitors: 0,
    postViews,
    dailyTraffic: [],
    deviceBreakdown: {
      desktop: 0,
      mobile: 0,
      tablet: 0,
    },
    referrerBreakdown: {
      google: 0,
      direct: 0,
      linkedin: 0,
      twitter: 0,
      other: 0,
    },
  };
}

export function getBlogAnalytics(): BlogAnalyticsData {
  try {
    if (!fs.existsSync(ANALYTICS_FILE_PATH)) {
      const initial = generateDefaultAnalytics();
      fs.writeFileSync(ANALYTICS_FILE_PATH, JSON.stringify(initial, null, 2), "utf-8");
      return initial;
    }
    const raw = fs.readFileSync(ANALYTICS_FILE_PATH, "utf-8");
    return JSON.parse(raw) as BlogAnalyticsData;
  } catch (error) {
    console.error("Error reading blog-analytics.json:", error);
    return generateDefaultAnalytics();
  }
}

export function recordArticleView(
  slug: string,
  isUnique: boolean = true,
  metadata?: {
    device?: "desktop" | "mobile" | "tablet";
    referrer?: "google" | "linkedin" | "twitter" | "direct" | "other";
  }
): { totalViews: number; postViews: number } {
  try {
    const data = getBlogAnalytics();
    const today = new Date().toISOString().split("T")[0];

    // Update specific post views
    if (!data.postViews[slug]) {
      data.postViews[slug] = {
        views: 0,
        uniqueVisitors: 0,
        lastVisited: new Date().toISOString(),
      };
    }
    data.postViews[slug].views += 1;
    if (isUnique) {
      data.postViews[slug].uniqueVisitors += 1;
    }
    data.postViews[slug].lastVisited = new Date().toISOString();

    // Update global totals
    data.totalViews += 1;
    if (isUnique) {
      data.uniqueVisitors += 1;
    }

    // Update device tracking
    if (metadata?.device) {
      if (!data.deviceBreakdown) {
        data.deviceBreakdown = { desktop: 0, mobile: 0, tablet: 0 };
      }
      data.deviceBreakdown[metadata.device] = (data.deviceBreakdown[metadata.device] || 0) + 1;
    }

    // Update referrer tracking
    if (metadata?.referrer) {
      if (!data.referrerBreakdown) {
        data.referrerBreakdown = { google: 0, linkedin: 0, twitter: 0, direct: 0, other: 0 };
      }
      data.referrerBreakdown[metadata.referrer] = (data.referrerBreakdown[metadata.referrer] || 0) + 1;
    }

    // Update daily traffic point
    const todayPoint = data.dailyTraffic.find((p) => p.date === today);
    if (todayPoint) {
      todayPoint.views += 1;
      if (isUnique) todayPoint.uniqueVisitors += 1;
    } else {
      data.dailyTraffic.push({
        date: today,
        views: 1,
        uniqueVisitors: isUnique ? 1 : 0,
      });
      if (data.dailyTraffic.length > 60) {
        data.dailyTraffic.shift();
      }
    }

    fs.writeFileSync(ANALYTICS_FILE_PATH, JSON.stringify(data, null, 2), "utf-8");
    return {
      totalViews: data.totalViews,
      postViews: data.postViews[slug].views,
    };
  } catch (err) {
    console.error("Error recording article view:", err);
    return { totalViews: 0, postViews: 0 };
  }
}
