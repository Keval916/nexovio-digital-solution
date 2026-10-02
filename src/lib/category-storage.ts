import fs from "fs";
import path from "path";
import { getStoredBlogArticles, saveStoredBlogArticles } from "./blog-storage";

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description?: string;
  color?: "blue" | "cyan" | "purple" | "emerald" | "amber" | "rose" | "slate" | string;
  articleCount?: number;
  createdAt?: string;
}

import os from "os";

const CATEGORIES_FILE_PATH = path.join(process.cwd(), "src", "data", "blog-categories.json");
const TMP_CATEGORIES_FILE_PATH = path.join(os.tmpdir(), "nexovio-blog-categories.json");

let memoryCategoriesCache: BlogCategory[] | null = null;

const DEFAULT_CATEGORIES: BlogCategory[] = [
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

export function getStoredCategories(): BlogCategory[] {
  let categories: BlogCategory[] = DEFAULT_CATEGORIES;

  if (memoryCategoriesCache && memoryCategoriesCache.length > 0) {
    categories = memoryCategoriesCache;
  } else {
    try {
      if (fs.existsSync(TMP_CATEGORIES_FILE_PATH)) {
        const data = fs.readFileSync(TMP_CATEGORIES_FILE_PATH, "utf-8");
        categories = JSON.parse(data) as BlogCategory[];
        memoryCategoriesCache = categories;
      } else if (fs.existsSync(CATEGORIES_FILE_PATH)) {
        const data = fs.readFileSync(CATEGORIES_FILE_PATH, "utf-8");
        categories = JSON.parse(data) as BlogCategory[];
        memoryCategoriesCache = categories;
      }
    } catch (error) {
      console.warn("[category-storage] Error reading categories file, using defaults:", error);
      categories = DEFAULT_CATEGORIES;
    }
  }

  // Calculate dynamic article count for each category
  const articles = getStoredBlogArticles();
  return categories.map((cat) => {
    const count = articles.filter(
      (a) => a.category.toLowerCase().trim() === cat.name.toLowerCase().trim()
    ).length;
    return {
      ...cat,
      articleCount: count,
    };
  });
}

export function saveStoredCategories(categories: BlogCategory[]): boolean {
  // Strip temporary articleCount before persisting
  const cleaned = categories.map(({ articleCount, ...rest }) => rest);
  memoryCategoriesCache = cleaned;
  const jsonContent = JSON.stringify(cleaned, null, 2);
  let saved = false;

  try {
    const dir = path.dirname(CATEGORIES_FILE_PATH);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(CATEGORIES_FILE_PATH, jsonContent, "utf-8");
    saved = true;
  } catch (error: any) {
    console.warn("[category-storage] Read-only disk detected (EROFS). Falling back to /tmp and Git sync:", error?.message);
  }

  try {
    fs.writeFileSync(TMP_CATEGORIES_FILE_PATH, jsonContent, "utf-8");
    saved = true;
  } catch (tmpErr) {
    console.warn("[category-storage] Warning writing to TMP_CATEGORIES_FILE_PATH:", tmpErr);
  }


  return saved || Boolean(memoryCategoriesCache);
}

export function generateCategorySlug(name: string): string {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function addCategory(categoryData: {
  name: string;
  slug?: string;
  description?: string;
  color?: string;
}): { success: boolean; category?: BlogCategory; message?: string } {
  try {
    const categories = getStoredCategories();
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

    const slug = (categoryData.slug?.trim() || generateCategorySlug(cleanName));
    const newCategory: BlogCategory = {
      id: `cat-${Date.now()}`,
      name: cleanName,
      slug,
      description: categoryData.description?.trim() || "",
      color: categoryData.color || "blue",
      createdAt: new Date().toISOString(),
      articleCount: 0,
    };

    categories.push(newCategory);
    saveStoredCategories(categories);

    return { success: true, category: newCategory };
  } catch (error) {
    console.error("Error adding category:", error);
    return { success: false, message: "Failed to add category" };
  }
}

export function updateCategory(
  id: string,
  updates: {
    name?: string;
    slug?: string;
    description?: string;
    color?: string;
    updateArticles?: boolean;
  }
): { success: boolean; category?: BlogCategory; message?: string } {
  try {
    const categories = getStoredCategories();
    const index = categories.findIndex((c) => c.id === id);

    if (index === -1) {
      return { success: false, message: "Category not found" };
    }

    const oldName = categories[index].name;
    const newName = updates.name ? updates.name.trim() : oldName;

    // Check for duplicate name if renamed
    if (newName.toLowerCase() !== oldName.toLowerCase()) {
      const duplicate = categories.find(
        (c) => c.id !== id && c.name.toLowerCase() === newName.toLowerCase()
      );
      if (duplicate) {
        return { success: false, message: `Category "${newName}" already exists` };
      }
    }

    const updatedCategory: BlogCategory = {
      ...categories[index],
      name: newName,
      slug: updates.slug?.trim() || generateCategorySlug(newName),
      description: updates.description !== undefined ? updates.description.trim() : categories[index].description,
      color: updates.color || categories[index].color || "blue",
    };

    categories[index] = updatedCategory;
    saveStoredCategories(categories);

    // Optionally cascade name update to all articles tagged with old category
    if (updates.updateArticles && oldName.toLowerCase() !== newName.toLowerCase()) {
      const articles = getStoredBlogArticles();
      let articlesModified = false;
      const updatedArticles = articles.map((article) => {
        if (article.category.toLowerCase().trim() === oldName.toLowerCase().trim()) {
          articlesModified = true;
          return {
            ...article,
            category: newName,
          };
        }
        return article;
      });

      if (articlesModified) {
        saveStoredBlogArticles(updatedArticles);
      }
    }

    return { success: true, category: updatedCategory };
  } catch (error) {
    console.error("Error updating category:", error);
    return { success: false, message: "Failed to update category" };
  }
}

export function deleteCategory(
  id: string,
  reassignToCategoryName?: string
): { success: boolean; message?: string } {
  try {
    const categories = getStoredCategories();
    const categoryToDelete = categories.find((c) => c.id === id);

    if (!categoryToDelete) {
      return { success: false, message: "Category not found" };
    }

    if (categories.length <= 1) {
      return { success: false, message: "Cannot delete the only remaining category." };
    }

    const articles = getStoredBlogArticles();
    const matchingArticles = articles.filter(
      (a) => a.category.toLowerCase().trim() === categoryToDelete.name.toLowerCase().trim()
    );

    if (matchingArticles.length > 0) {
      if (!reassignToCategoryName) {
        return {
          success: false,
          message: `Cannot delete "${categoryToDelete.name}" because ${matchingArticles.length} article(s) are assigned to it. Please select a category to reassign them to.`,
        };
      }

      // Reassign articles to the target category
      const targetCategory = categories.find(
        (c) => c.name.toLowerCase().trim() === reassignToCategoryName.toLowerCase().trim() && c.id !== id
      );

      if (!targetCategory) {
        return { success: false, message: "Reassign target category does not exist." };
      }

      const updatedArticles = articles.map((a) => {
        if (a.category.toLowerCase().trim() === categoryToDelete.name.toLowerCase().trim()) {
          return {
            ...a,
            category: targetCategory.name,
          };
        }
        return a;
      });

      saveStoredBlogArticles(updatedArticles);
    }

    const filtered = categories.filter((c) => c.id !== id);
    saveStoredCategories(filtered);

    return { success: true };
  } catch (error) {
    console.error("Error deleting category:", error);
    return { success: false, message: "Failed to delete category" };
  }
}
