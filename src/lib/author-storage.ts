import { getStoredBlogArticlesAsync } from "./blog-storage";
import { getAuthorCollection, getBlogCollection, isMongoConfigured } from "./mongodb";

export interface BlogAuthor {
  id: string;
  name: string;
  role: string;
  slug?: string;
  avatar?: string;
  bio?: string;
  email?: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
    website?: string;
  };
  articleCount?: number;
  createdAt?: string;
  updatedAt?: string;
}

let memoryAuthorsCache: BlogAuthor[] | null = null;
let lastFetchTime = 0;
const CACHE_TTL_MS = 10000;

export const DEFAULT_AUTHORS: BlogAuthor[] = [
  {
    id: "author-keval-kadecha",
    name: "Keval Kadecha",
    role: "Founder & Solutions Architect",
    slug: "keval-kadecha",
    avatar: "/images/brand/nexovio-logo-square.png",
    bio: "Enterprise solutions architect and technical founder specializing in modern Next.js systems, autonomous AI agents, and high-performance full-stack web platforms.",
    socialLinks: {
      linkedin: "https://www.linkedin.com/company/nexovio-digital-solutions",
    },
    createdAt: "2026-01-15T00:00:00.000Z",
  },
  {
    id: "author-nexovio-engineering",
    name: "Nexovio Technical Engineering",
    role: "Solutions Architecture",
    slug: "nexovio-technical-engineering",
    avatar: "/images/brand/nexovio-logo-square.png",
    bio: "Published by the engineering team at Nexovio Digital Solutions. We architect high-performance web systems, custom UI/UX design systems, and scalable APIs.",
    socialLinks: {
      linkedin: "https://www.linkedin.com/company/nexovio-digital-solutions",
    },
    createdAt: "2026-01-15T00:00:00.000Z",
  },
  {
    id: "author-janvi-raval",
    name: "Janvi Raval",
    role: "Digital Transformation Strategist",
    slug: "janvi-raval",
    avatar: "/images/brand/nexovio-logo-square.png",
    bio: "Digital transformation and enterprise strategy lead at Nexovio Digital Solutions. Specializing in high-impact cloud architectures, customer acquisition frameworks, and modern digital ecosystems.",
    socialLinks: {
      linkedin: "https://www.linkedin.com/company/nexovio-digital-solutions",
    },
    createdAt: "2026-02-01T00:00:00.000Z",
  },
  {
    id: "author-nexovio-technical-team",
    name: "Nexovio Technical Team",
    role: "Engineering & Strategy",
    slug: "nexovio-technical-team",
    avatar: "/images/brand/nexovio-logo-square.png",
    bio: "Published by the technical architecture team at Nexovio Digital Solutions. We engineer custom web platforms, high-performance UI/UX design systems, and search intelligence frameworks for scaling businesses worldwide.",
    socialLinks: {
      linkedin: "https://www.linkedin.com/company/nexovio-digital-solutions",
    },
    createdAt: "2026-01-15T00:00:00.000Z",
  },
  {
    id: "author-nexovio-editorial",
    name: "Nexovio Editorial Team",
    role: "Content Strategy & Research",
    slug: "nexovio-editorial-team",
    avatar: "/images/brand/nexovio-logo-square.png",
    bio: "In-depth insights, industry benchmarks, and digital transformation playbooks from the Nexovio research and strategy desk.",
    socialLinks: {
      linkedin: "https://www.linkedin.com/company/nexovio-digital-solutions",
    },
    createdAt: "2026-01-15T00:00:00.000Z",
  },
];

export function generateAuthorSlug(name: string): string {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export async function getStoredAuthorsAsync(forceRefresh = false): Promise<BlogAuthor[]> {
  const now = Date.now();
  if (!forceRefresh && memoryAuthorsCache && now - lastFetchTime < CACHE_TTL_MS) {
    return memoryAuthorsCache;
  }

  let authors: BlogAuthor[] = DEFAULT_AUTHORS;

  if (isMongoConfigured()) {
    try {
      const collection = await getAuthorCollection();
      const docs = await collection.find({}, { projection: { _id: 0 } }).toArray();

      if (Array.isArray(docs) && docs.length > 0) {
        authors = docs as BlogAuthor[];
      } else {
        // Auto-seed default authors into MongoDB if collection is empty
        for (const author of DEFAULT_AUTHORS) {
          await collection.updateOne({ id: author.id }, { $set: author }, { upsert: true });
        }
        authors = DEFAULT_AUTHORS;
      }
    } catch (err) {
      console.error("[author-storage] MongoDB fetch error:", err);
    }
  }

  // Calculate dynamic article count using actual articles from MongoDB
  let articles: any[] = [];
  try {
    articles = await getStoredBlogArticlesAsync();
  } catch (err) {
    console.error("[author-storage] Error retrieving articles for count:", err);
  }

  const calculated = authors.map((auth) => {
    const count = articles.filter(
      (a) => a.author?.name?.toLowerCase().trim() === auth.name?.toLowerCase().trim()
    ).length;
    return {
      ...auth,
      articleCount: count,
    };
  });

  memoryAuthorsCache = calculated;
  lastFetchTime = now;
  return calculated;
}

export function getStoredAuthors(): BlogAuthor[] {
  if (memoryAuthorsCache && memoryAuthorsCache.length > 0) {
    return memoryAuthorsCache;
  }
  return DEFAULT_AUTHORS;
}

export async function addAuthorAsync(authorData: {
  name: string;
  role: string;
  avatar?: string;
  bio?: string;
  email?: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
    website?: string;
  };
}): Promise<{ success: boolean; author?: BlogAuthor; message?: string }> {
  try {
    const authors = await getStoredAuthorsAsync();
    const cleanName = authorData.name.trim();
    const cleanRole = authorData.role.trim();

    if (!cleanName) {
      return { success: false, message: "Author name is required" };
    }
    if (!cleanRole) {
      return { success: false, message: "Author role/position is required" };
    }

    const existingName = authors.find(
      (a) => a.name.toLowerCase() === cleanName.toLowerCase()
    );
    if (existingName) {
      return {
        success: false,
        message: `An author named "${cleanName}" already exists.`,
      };
    }

    const slug = generateAuthorSlug(cleanName);
    const newId = `author-${slug || Date.now()}`;

    const newAuthor: BlogAuthor = {
      id: newId,
      name: cleanName,
      role: cleanRole,
      slug,
      avatar: (authorData.avatar && authorData.avatar.trim()) || "/images/brand/nexovio-logo-square.png",
      bio: authorData.bio ? authorData.bio.trim() : undefined,
      email: authorData.email ? authorData.email.trim() : undefined,
      socialLinks: authorData.socialLinks || {},
      articleCount: 0,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    if (isMongoConfigured()) {
      const collection = await getAuthorCollection();
      await collection.insertOne(newAuthor as any);
    }

    memoryAuthorsCache = null;
    return { success: true, author: newAuthor };
  } catch (err: any) {
    console.error("[author-storage] Error in addAuthorAsync:", err);
    return { success: false, message: err?.message || "Failed to add author to database" };
  }
}

export async function updateAuthorAsync(
  targetKey: string,
  updates: Partial<BlogAuthor> & { updateArticles?: boolean }
): Promise<{ success: boolean; author?: BlogAuthor; message?: string }> {
  try {
    const authors = await getStoredAuthorsAsync(true);
    const existing = authors.find(
      (a) => a.id === targetKey || a.slug === targetKey || a.name.toLowerCase() === targetKey.toLowerCase()
    );

    if (!existing) {
      return { success: false, message: "Author not found" };
    }

    const oldName = existing.name;
    const oldRole = existing.role;

    const newName = updates.name ? updates.name.trim() : existing.name;
    const newRole = updates.role ? updates.role.trim() : existing.role;

    if (!newName) {
      return { success: false, message: "Author name cannot be empty" };
    }
    if (!newRole) {
      return { success: false, message: "Author role/position cannot be empty" };
    }

    // Check collision if name changed
    if (newName.toLowerCase() !== existing.name.toLowerCase()) {
      const collision = authors.find(
        (a) => a.id !== existing.id && a.name.toLowerCase() === newName.toLowerCase()
      );
      if (collision) {
        return { success: false, message: `Another author named "${newName}" already exists.` };
      }
    }

    const updatedAuthor: BlogAuthor = {
      ...existing,
      name: newName,
      role: newRole,
      slug: updates.slug ? updates.slug.trim() : generateAuthorSlug(newName),
      avatar: updates.avatar !== undefined ? updates.avatar.trim() : existing.avatar,
      bio: updates.bio !== undefined ? updates.bio.trim() : existing.bio,
      email: updates.email !== undefined ? updates.email.trim() : existing.email,
      socialLinks: updates.socialLinks !== undefined ? updates.socialLinks : existing.socialLinks,
      updatedAt: new Date().toISOString(),
    };

    if (isMongoConfigured()) {
      const collection = await getAuthorCollection();
      await collection.updateOne(
        { id: existing.id },
        { $set: updatedAuthor },
        { upsert: true }
      );

      // Optionally cascade author update to articles currently authored by this person
      if (updates.updateArticles) {
        try {
          const blogCollection = await getBlogCollection();
          await blogCollection.updateMany(
            { $or: [{ "author.name": oldName }, { "author.name": newName }] },
            {
              $set: {
                "author.name": newName,
                "author.role": newRole,
                ...(updatedAuthor.avatar ? { "author.avatar": updatedAuthor.avatar } : {}),
                ...(updatedAuthor.bio ? { "author.bio": updatedAuthor.bio } : {}),
              },
            }
          );
        } catch (blogErr) {
          console.warn("[author-storage] Cascade update to articles notice:", blogErr);
        }
      }
    }

    memoryAuthorsCache = null;
    return { success: true, author: updatedAuthor };
  } catch (err: any) {
    console.error("[author-storage] Error in updateAuthorAsync:", err);
    return { success: false, message: err?.message || "Failed to update author" };
  }
}

export async function deleteAuthorAsync(
  targetKey: string,
  reassignToAuthorId?: string
): Promise<{ success: boolean; message?: string }> {
  try {
    const authors = await getStoredAuthorsAsync(true);
    const existing = authors.find(
      (a) => a.id === targetKey || a.slug === targetKey || a.name.toLowerCase() === targetKey.toLowerCase()
    );

    if (!existing) {
      return { success: false, message: "Author not found" };
    }

    if (authors.length <= 1) {
      return {
        success: false,
        message: "Cannot delete the only remaining author. Please create another author first.",
      };
    }

    if (isMongoConfigured()) {
      const collection = await getAuthorCollection();
      await collection.deleteOne({ id: existing.id });

      // Handle article reassignment if target author is specified
      if (reassignToAuthorId) {
        const replacementAuthor = authors.find((a) => a.id === reassignToAuthorId);
        if (replacementAuthor) {
          try {
            const blogCollection = await getBlogCollection();
            await blogCollection.updateMany(
              { "author.name": existing.name },
              {
                $set: {
                  "author.name": replacementAuthor.name,
                  "author.role": replacementAuthor.role,
                  ...(replacementAuthor.avatar ? { "author.avatar": replacementAuthor.avatar } : {}),
                  ...(replacementAuthor.bio ? { "author.bio": replacementAuthor.bio } : {}),
                },
              }
            );
          } catch (reassignErr) {
            console.warn("[author-storage] Article reassignment notice:", reassignErr);
          }
        }
      }
    }

    memoryAuthorsCache = null;
    return { success: true };
  } catch (err: any) {
    console.error("[author-storage] Error in deleteAuthorAsync:", err);
    return { success: false, message: err?.message || "Failed to delete author" };
  }
}
