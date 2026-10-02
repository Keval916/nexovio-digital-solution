import { getStoredBlogArticlesAsync } from "./blog-storage";
import { getCategoryCollection, isMongoConfigured } from "./mongodb";

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description?: string;
  color?: "blue" | "cyan" | "purple" | "emerald" | "amber" | "rose" | "slate" | string;
  articleCount?: number;
  createdAt?: string;
}

let memoryCategoriesCache: BlogCategory[] | null = null;
let lastFetchTime = 0;
const CACHE_TTL_MS = 10000;

export const DEFAULT_CATEGORIES: BlogCategory[] = [
  {
    id: "cat-web-dev",
    name: "Web Development",
    slug: "web-development",
    description: "Architecture, Next.js, modern frameworks, APIs, and scalable web engineering.",
    color: "blue",
    createdAt: "2026-01-15T00:00:00.000Z",
  },
  {
    id: "cat-technology",
    name: "Technology",
    slug: "technology",
    description: "Emerging tech, autonomous AI agents, cloud architectures, and software paradigms.",
    color: "cyan",
    createdAt: "2026-01-15T00:00:00.000Z",
  },
  {
    id: "cat-ui-ux",
    name: "UI/UX",
    slug: "ui-ux",
    description: "Design systems, usability heuristics, component libraries, and interactive user experiences.",
    color: "purple",
    createdAt: "2026-01-15T00:00:00.000Z",
  },
  {
    id: "cat-seo",
    name: "SEO",
    slug: "seo",
    description: "Core Web Vitals, programmatic SEO, search ranking signals, and technical audits.",
    color: "emerald",
    createdAt: "2026-01-15T00:00:00.000Z",
  },
  {
    id: "cat-web-design",
    name: "Web Design",
    slug: "web-design",
    description: "Visual aesthetics, typography, responsive layouts, and creative brand identity.",
    color: "amber",
    createdAt: "2026-01-15T00:00:00.000Z",
  },
  {
    id: "cat-digital-marketing",
    name: "Digital Marketing",
    slug: "digital-marketing",
    description: "Conversion rate optimization (CRO), B2B lead generation, and omnichannel growth strategy.",
    color: "rose",
    createdAt: "2026-01-15T00:00:00.000Z",
  },
];

export async function getStoredCategoriesAsync(forceRefresh = false): Promise<BlogCategory[]> {
  const now = Date.now();
  if (!forceRefresh && memoryCategoriesCache && now - lastFetchTime < CACHE_TTL_MS) {
    return memoryCategoriesCache;
  }

  let categories: BlogCategory[] = DEFAULT_CATEGORIES;

  if (isMongoConfigured()) {
    try {
      const collection = await getCategoryCollection();
      const docs = await collection.find({}, { projection: { _id: 0 } }).toArray();

      if (Array.isArray(docs) && docs.length > 0) {
        categories = docs as BlogCategory[];
      } else {
        // Auto-seed default categories into MongoDB if collection is empty
        for (const cat of DEFAULT_CATEGORIES) {
          await collection.updateOne({ slug: cat.slug }, { $set: cat }, { upsert: true });
        }
        categories = DEFAULT_CATEGORIES;
      }
    } catch (err) {
      console.error("[category-storage] MongoDB fetch error:", err);
    }
  }

  // Calculate dynamic article count using actual articles from MongoDB
  let articles: any[] = [];
  try {
    articles = await getStoredBlogArticlesAsync();
  } catch (err) {
    console.error("[category-storage] Error retrieving articles for count:", err);
  }

  const calculated = categories.map((cat) => {
    const count = articles.filter(
      (a) => a.category?.toLowerCase().trim() === cat.name?.toLowerCase().trim()
    ).length;
    return {
      ...cat,
      articleCount: count,
    };
  });

  memoryCategoriesCache = calculated;
  lastFetchTime = now;
  return calculated;
}

export function getStoredCategories(): BlogCategory[] {
  if (memoryCategoriesCache && memoryCategoriesCache.length > 0) {
    return memoryCategoriesCache;
  }
  return DEFAULT_CATEGORIES;
}

export function generateCategorySlug(name: string): string {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export async function addCategoryAsync(categoryData: {
  name: string;
  slug?: string;
  description?: string;
  color?: string;
}): Promise<{ success: boolean; category?: BlogCategory; message?: string }> {
  try {
    const categories = await getStoredCategoriesAsync();
    const cleanName = categoryData.name.trim();

    if (!cleanName) {
      return { success: false, message: "Category name is required" };
    }

    const existingName = categories.find(
      (c) => c.name.toLowerCase() === cleanName.toLowerCase()
    );
    if (existingName) {
      return { success: false, message: `Category "${cleanName}" already exists` };
    }

    const slug = categoryData.slug?.trim() || generateCategorySlug(cleanName);
    const newCategory: BlogCategory = {
      id: `cat-${Date.now()}`,
      name: cleanName,
      slug,
      description: categoryData.description?.trim() || "",
      color: (categoryData.color as any) || "blue",
      createdAt: new Date().toISOString(),
      articleCount: 0,
    };

    if (isMongoConfigured()) {
      const collection = await getCategoryCollection();
      await collection.updateOne({ slug }, { $set: newCategory }, { upsert: true });
    }

    memoryCategoriesCache = null;
    lastFetchTime = 0;

    return {
      success: true,
      category: newCategory,
      message: `Category "${cleanName}" created successfully`,
    };
  } catch (error: any) {
    console.error("[category-storage] Error adding category:", error);
    return { success: false, message: error?.message || "Failed to add category" };
  }
}

export function addCategory(categoryData: {
  name: string;
  slug?: string;
  description?: string;
  color?: string;
}): { success: boolean; category?: BlogCategory; message?: string } {
  addCategoryAsync(categoryData).catch(() => {});
  const cleanName = categoryData.name.trim();
  const slug = categoryData.slug?.trim() || generateCategorySlug(cleanName);
  return {
    success: true,
    category: {
      id: `cat-${Date.now()}`,
      name: cleanName,
      slug,
      description: categoryData.description || "",
      color: categoryData.color || "blue",
      createdAt: new Date().toISOString(),
      articleCount: 0,
    },
  };
}

export async function updateCategoryAsync(
  identifier: string,
  updates: Partial<BlogCategory>
): Promise<{ success: boolean; category?: BlogCategory; message?: string }> {
  try {
    if (isMongoConfigured()) {
      const collection = await getCategoryCollection();
      const filter = { $or: [{ id: identifier }, { slug: identifier }] };
      const existing = await collection.findOne(filter);
      if (!existing) {
        return { success: false, message: "Category not found" };
      }
      const merged = { ...existing, ...updates };
      await collection.updateOne(filter, { $set: merged });
      memoryCategoriesCache = null;
      lastFetchTime = 0;
      return { success: true, category: merged as BlogCategory };
    }
    return { success: true };
  } catch (err: any) {
    return { success: false, message: err?.message || "Failed to update category" };
  }
}

export function updateCategory(
  identifier: string,
  updates: Partial<BlogCategory>
): { success: boolean; category?: BlogCategory; message?: string } {
  updateCategoryAsync(identifier, updates).catch(() => {});
  return { success: true };
}

export async function deleteCategoryAsync(
  identifier: string
): Promise<{ success: boolean; message?: string; fallbackCategory?: string }> {
  try {
    if (isMongoConfigured()) {
      const collection = await getCategoryCollection();
      await collection.deleteOne({ $or: [{ id: identifier }, { slug: identifier }] });
      memoryCategoriesCache = null;
      lastFetchTime = 0;
    }
    return { success: true, message: "Category deleted from database successfully" };
  } catch (err: any) {
    return { success: false, message: err?.message || "Failed to delete category" };
  }
}

export function deleteCategory(
  identifier: string
): { success: boolean; message?: string; fallbackCategory?: string } {
  deleteCategoryAsync(identifier).catch(() => {});
  return { success: true, message: "Category deleted successfully" };
}
