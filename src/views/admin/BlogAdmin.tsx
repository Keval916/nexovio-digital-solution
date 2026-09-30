"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Plus,
  Search,
  Edit3,
  Trash2,
  ExternalLink,
  Upload,
  Image as ImageIcon,
  CheckCircle2,
  AlertCircle,
  Clock,
  Calendar,
  Lock,
  LogOut,
  Sparkles,
  Layers,
  FileText,
  Eye,
  EyeOff,
  RefreshCw,
  X,
  ChevronRight,
  ArrowRight,
  LayoutDashboard,
  FolderOpen,
  Settings,
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Heading2,
  Heading3,
  List,
  ListOrdered,
  Quote,
  Code,
  Link as LinkIcon,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  RotateCcw,
  RotateCw,
  Globe,
  Tag,
  User,
  Shield,
  HelpCircle,
  Minus,
  RemoveFormatting,
  Copy,
  Check,
  Share2,
  Sliders,
  Key,
  Smartphone,
  Monitor,
} from "lucide-react";
import { BlogArticle } from "@/src/data/blog";
import { formatDate } from "@/src/lib/utils";

const DEFAULT_USERNAME = "admin";
const DEFAULT_PASSWORD = "admin";

const CATEGORY_OPTIONS = [
  "Web Development",
  "Technology",
  "UI/UX",
  "SEO",
  "Web Design",
  "Digital Marketing",
];

interface FormState {
  id?: string;
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  content: string; // HTML formatted string
  authorName: string;
  authorRole: string;
  publishedAt: string;
  featuredImage: string;
  featuredImageAlt: string;
  tableOfContentsText: string;
  // All SEO Settings
  focusKeyword: string;
  keywordsText: string;
  seoTitle: string;
  seoDescription: string;
  canonicalUrl: string;
  ogImage: string;
  noIndex: boolean;
  noFollow: boolean;
  schemaType: "BlogPosting" | "TechArticle" | "Article" | "NewsArticle";
  socialTitle: string;
  socialDescription: string;
  sitemapPriority: string;
  changeFreq: "daily" | "weekly" | "monthly";
}

const EMPTY_FORM: FormState = {
  title: "",
  slug: "",
  category: "Web Development",
  excerpt: "",
  content: "",
  authorName: "Nexovio Technical Engineering",
  authorRole: "Solutions Architecture",
  publishedAt: new Date().toISOString().split("T")[0],
  featuredImage: "/images/blog/custom-web-development-vs-website-builders.webp",
  featuredImageAlt: "",
  tableOfContentsText: "",
  focusKeyword: "",
  keywordsText: "Web Development, Nexovio, Digital Solutions",
  seoTitle: "",
  seoDescription: "",
  canonicalUrl: "",
  ogImage: "",
  noIndex: false,
  noFollow: false,
  schemaType: "BlogPosting",
  socialTitle: "",
  socialDescription: "",
  sitemapPriority: "0.8",
  changeFreq: "weekly",
};

export default function BlogAdmin() {
  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [usernameInput, setUsernameInput] = useState<string>("");
  const [passwordInput, setPasswordInput] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [rememberMe, setRememberMe] = useState<boolean>(true);
  const [loginError, setLoginError] = useState<string>("");
  const [isLoggingIn, setIsLoggingIn] = useState<boolean>(false);

  // Active Admin View (sidebar navigation)
  const [activeTab, setActiveTab] = useState<"dashboard" | "posts" | "editor" | "media">("posts");

  // Articles & Data
  const [articles, setArticles] = useState<BlogArticle[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [categoryFilter, setCategoryFilter] = useState<string>("All");

  // Post Editor State
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [isHtmlSourceMode, setIsHtmlSourceMode] = useState<boolean>(false);

  // SEO Suite internal tabs & preview view
  const [seoTab, setSeoTab] = useState<"google" | "social" | "advanced">("google");
  const [serpDevice, setSerpDevice] = useState<"desktop" | "mobile">("desktop");

  // Media Gallery & Uploads
  const [availableImages, setAvailableImages] = useState<{ name: string; url: string }[]>([]);
  const [isMediaModalOpen, setIsMediaModalOpen] = useState<boolean>(false);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [mediaTarget, setMediaTarget] = useState<"featured" | "editor" | "og">("featured");

  // Rich Text Editor Ref
  const editorRef = useRef<HTMLDivElement>(null);

  // Toast Notifications
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);

  // Delete Confirmation
  const [deleteConfirmSlug, setDeleteConfirmSlug] = useState<string | null>(null);

  // Copied Image URL state
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null);

  // Check login session on mount
  useEffect(() => {
    const authStatus = localStorage.getItem("nexovio_admin_session");
    if (authStatus === "active") {
      setIsAuthenticated(true);
    }
  }, []);

  // Fetch articles from API
  const fetchArticles = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/blog", { cache: "no-store" });
      const data = await res.json();
      if (data.articles) {
        setArticles(data.articles);
      }
    } catch (err) {
      console.error("Failed to fetch articles:", err);
      showToast("Failed to fetch articles from disk", "error");
    } finally {
      setLoading(false);
    }
  };

  // Fetch media library images
  const fetchImages = async () => {
    try {
      const res = await fetch("/api/admin/upload", { cache: "no-store" });
      const data = await res.json();
      if (data.images) {
        setAvailableImages(data.images);
      }
    } catch (err) {
      console.error("Failed to fetch images:", err);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchArticles();
      fetchImages();
    }
  }, [isAuthenticated]);

  // Toast helper
  const showToast = (message: string, type: "success" | "error" = "success") => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 3500);
  };

  // Handle Login Submission
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggingIn(true);
    setLoginError("");

    setTimeout(() => {
      const user = usernameInput.trim();
      const pass = passwordInput.trim();

      if (
        (user === "admin" || user === "admin@nexovio.com") &&
        (pass === "admin" || pass === "admin123" || pass === "nexovio2026")
      ) {
        setIsAuthenticated(true);
        if (rememberMe) {
          localStorage.setItem("nexovio_admin_session", "active");
        }
        setUsernameInput("");
        setPasswordInput("");
        showToast("Welcome back, Administrator");
      } else {
        setLoginError("Invalid username or password. Use default admin credentials.");
      }
      setIsLoggingIn(false);
    }, 300);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("nexovio_admin_session");
  };

  // Open Editor for New Post
  const handleAddNewPost = () => {
    setIsEditing(false);
    setForm({
      ...EMPTY_FORM,
      publishedAt: new Date().toISOString().split("T")[0],
    });
    if (editorRef.current) {
      editorRef.current.innerHTML = "<p>Start writing your article content here...</p>";
    }
    setActiveTab("editor");
  };

  // Open Editor for Existing Post
  const handleEditPost = (article: BlogArticle) => {
    setIsEditing(true);

    const formattedContent = Array.isArray(article.content)
      ? article.content
          .map((p) => (p.startsWith("<") ? p : `<p>${p}</p>`))
          .join("\n")
      : article.content || "";

    setForm({
      id: article.id,
      title: article.title,
      slug: article.slug,
      category: article.category,
      excerpt: article.excerpt,
      content: formattedContent,
      authorName: article.author.name,
      authorRole: article.author.role,
      publishedAt: article.publishedAt,
      featuredImage: article.featuredImage,
      featuredImageAlt: article.featuredImageAlt || article.title,
      tableOfContentsText: Array.isArray(article.tableOfContents)
        ? article.tableOfContents.map((t) => t.title).join("\n")
        : "",
      // SEO Settings
      focusKeyword: article.focusKeyword || "",
      keywordsText: Array.isArray(article.keywords)
        ? article.keywords.join(", ")
        : article.category || "",
      seoTitle: article.seoTitle || article.title,
      seoDescription: article.seoDescription || article.excerpt,
      canonicalUrl: article.canonicalUrl || "",
      ogImage: article.ogImage || article.featuredImage,
      noIndex: Boolean(article.noIndex),
      noFollow: Boolean(article.noFollow),
      schemaType: (article.schemaType as any) || "BlogPosting",
      socialTitle: article.socialTitle || "",
      socialDescription: article.socialDescription || "",
      sitemapPriority: String(article.sitemapPriority || 0.8),
      changeFreq: (article.changeFreq as any) || "weekly",
    });

    if (editorRef.current) {
      editorRef.current.innerHTML = formattedContent;
    }

    setActiveTab("editor");
  };

  // Title change with auto-slugification
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    if (!isEditing) {
      const slug = title
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/[\s_-]+/g, "-")
        .replace(/^-+|-+$/g, "");
      setForm((prev) => ({
        ...prev,
        title,
        slug,
        seoTitle: prev.seoTitle || title,
        featuredImageAlt: prev.featuredImageAlt || title,
        socialTitle: prev.socialTitle || title,
      }));
    } else {
      setForm((prev) => ({ ...prev, title }));
    }
  };

  // Sync content from contentEditable
  const syncEditorContent = () => {
    if (editorRef.current && !isHtmlSourceMode) {
      setForm((prev) => ({ ...prev, content: editorRef.current?.innerHTML || "" }));
    }
  };

  // Rich Text Editor Commands (A to Z)
  const executeCommand = (command: string, value: string | undefined = undefined) => {
    if (isHtmlSourceMode) return;
    document.execCommand(command, false, value);
    if (editorRef.current) {
      editorRef.current.focus();
    }
    syncEditorContent();
  };

  const insertLink = () => {
    const url = prompt("Enter hyperlink URL (e.g. https://example.com):");
    if (url) {
      executeCommand("createLink", url);
    }
  };

  // Insert image directly into editor content
  const insertImageIntoEditor = (imageUrl: string, altText: string = "") => {
    if (isHtmlSourceMode) {
      setForm((prev) => ({
        ...prev,
        content:
          prev.content +
          `\n<img src="${imageUrl}" alt="${altText}" class="rounded-xl my-6 border border-slate-200 max-w-full shadow-sm" />\n`,
      }));
    } else {
      executeCommand("insertImage", imageUrl);
      if (editorRef.current) {
        setForm((prev) => ({ ...prev, content: editorRef.current?.innerHTML || "" }));
      }
    }
    showToast("Image inserted into editor!");
  };

  // Upload file handler
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/admin/upload", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success && data.url) {
        showToast("Image uploaded successfully!");
        await fetchImages();
        if (mediaTarget === "featured") {
          setForm((prev) => ({ ...prev, featuredImage: data.url }));
        } else if (mediaTarget === "og") {
          setForm((prev) => ({ ...prev, ogImage: data.url }));
        } else {
          insertImageIntoEditor(data.url, file.name);
        }
        setIsMediaModalOpen(false);
      } else {
        showToast(data.error || "Failed to upload image", "error");
      }
    } catch (err) {
      console.error("Upload error:", err);
      showToast("Error uploading file", "error");
    } finally {
      setIsUploading(false);
    }
  };

  // Save Post (POST / PUT)
  const handleSaveArticle = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.title.trim()) {
      showToast("Please enter an article title", "error");
      return;
    }
    if (!form.slug.trim()) {
      showToast("Please provide a URL slug", "error");
      return;
    }

    setIsSaving(true);

    let finalHtml = form.content;
    if (editorRef.current && !isHtmlSourceMode) {
      finalHtml = editorRef.current.innerHTML;
    }

    if (!finalHtml || finalHtml.trim() === "<p></p>" || finalHtml.trim() === "") {
      showToast("Please write article content in the text editor", "error");
      setIsSaving(false);
      return;
    }

    // Build Table of Contents objects from lines
    const tocList = form.tableOfContentsText
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line.length > 0)
      .map((line, idx) => {
        const cleaned = line.replace(/^\d+[\.\)]\s*/, "");
        const id = cleaned
          .toLowerCase()
          .replace(/[^\w\s-]/g, "")
          .replace(/[\s_-]+/g, "-");
        return {
          id: id || `section-${idx + 1}`,
          title: cleaned,
          level: 2 as const,
        };
      });

    // Keywords array from comma-separated string
    const keywordsArray = form.keywordsText
      .split(",")
      .map((k) => k.trim())
      .filter(Boolean);

    const payload = {
      id: form.id,
      title: form.title.trim(),
      slug: form.slug.trim(),
      category: form.category,
      excerpt: form.excerpt.trim() || form.title.trim(),
      content: finalHtml,
      publishedAt: form.publishedAt,
      author: {
        name: form.authorName.trim() || "Nexovio Technical Engineering",
        role: form.authorRole.trim() || "Solutions Architecture",
      },
      featuredImage: form.featuredImage.trim(),
      featuredImageAlt: form.featuredImageAlt.trim() || form.title.trim(),
      tableOfContents: tocList.length > 0 ? tocList : undefined,
      // Full SEO Suite fields
      focusKeyword: form.focusKeyword.trim() || undefined,
      keywords: keywordsArray.length > 0 ? keywordsArray : undefined,
      seoTitle: form.seoTitle.trim() || form.title.trim(),
      seoDescription: form.seoDescription.trim() || form.excerpt.trim() || form.title.trim(),
      canonicalUrl: form.canonicalUrl.trim() || undefined,
      ogImage: form.ogImage.trim() || form.featuredImage.trim() || undefined,
      noIndex: form.noIndex,
      noFollow: form.noFollow,
      schemaType: form.schemaType,
      socialTitle: form.socialTitle.trim() || undefined,
      socialDescription: form.socialDescription.trim() || undefined,
      sitemapPriority: Number(form.sitemapPriority) || 0.8,
      changeFreq: form.changeFreq,
    };

    try {
      const method = isEditing ? "PUT" : "POST";
      const res = await fetch("/api/admin/blog", {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        showToast(isEditing ? "Article & SEO updated successfully!" : "New article published with SEO settings!");
        await fetchArticles();
        setActiveTab("posts");
      } else {
        showToast(data.message || data.error || "Failed to save article", "error");
      }
    } catch (err) {
      console.error("Save error:", err);
      showToast("Error saving article to disk", "error");
    } finally {
      setIsSaving(false);
    }
  };

  // Delete Article
  const handleDeleteArticle = async (slug: string) => {
    try {
      const res = await fetch(`/api/admin/blog?slug=${encodeURIComponent(slug)}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (res.ok && data.success) {
        showToast("Article deleted successfully");
        setDeleteConfirmSlug(null);
        await fetchArticles();
      } else {
        showToast(data.error || "Failed to delete article", "error");
      }
    } catch (err) {
      console.error("Delete error:", err);
      showToast("Error deleting article", "error");
    }
  };

  // Filtered List for Table
  const filteredList = useMemo(() => {
    return articles.filter((a) => {
      const matchesCategory =
        categoryFilter === "All" || a.category === categoryFilter;
      const matchesSearch =
        searchQuery.trim() === "" ||
        a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        a.slug.toLowerCase().includes(searchQuery.toLowerCase()) ||
        a.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [articles, categoryFilter, searchQuery]);

  // Copy image URL helper
  const copyToClipboard = (url: string) => {
    navigator.clipboard.writeText(url);
    setCopiedUrl(url);
    setTimeout(() => setCopiedUrl(null), 2000);
    showToast("Image URL copied to clipboard!");
  };

  // Word count & reading time estimation
  const wordCount = useMemo(() => {
    const rawText = form.content.replace(/<[^>]*>/g, " ");
    return rawText.trim().split(/\s+/).filter(Boolean).length;
  }, [form.content]);

  const readingTimeEstimate = useMemo(() => {
    return Math.max(1, Math.ceil(wordCount / 200));
  }, [wordCount]);

  // Real-Time Live SEO Analysis & Audit Engine
  const seoAudit = useMemo(() => {
    const focus = form.focusKeyword.trim().toLowerCase();
    const title = form.title.toLowerCase();
    const seoTitle = (form.seoTitle || form.title).toLowerCase();
    const slug = form.slug.toLowerCase();
    const desc = (form.seoDescription || form.excerpt).toLowerCase();
    const rawContent = form.content.replace(/<[^>]*>/g, " ").toLowerCase();

    const titleLength = (form.seoTitle || form.title).length;
    const descLength = (form.seoDescription || form.excerpt).length;

    const hasFocus = Boolean(focus);
    const inTitle = hasFocus && (title.includes(focus) || seoTitle.includes(focus));
    const inSlug = hasFocus && slug.includes(focus.replace(/[^\w\s-]/g, "").replace(/\s+/g, "-"));
    const inDesc = hasFocus && desc.includes(focus);
    const inContent = hasFocus && rawContent.includes(focus);

    const titleGood = titleLength >= 40 && titleLength <= 65;
    const descGood = descLength >= 120 && descLength <= 160;

    let score = 0;
    if (form.title.trim()) score += 15;
    if (form.slug.trim()) score += 10;
    if (titleGood) score += 15;
    else if (titleLength > 15) score += 8;
    if (descGood) score += 20;
    else if (descLength > 30) score += 10;
    if (inTitle) score += 15;
    if (inDesc) score += 10;
    if (inSlug) score += 10;
    if (form.canonicalUrl.trim()) score += 5;

    const totalScore = Math.min(100, Math.max(0, score));

    return {
      score: totalScore,
      hasFocus,
      inTitle,
      inSlug,
      inDesc,
      inContent,
      titleGood,
      descGood,
      titleLength,
      descLength,
    };
  }, [
    form.focusKeyword,
    form.title,
    form.slug,
    form.seoTitle,
    form.seoDescription,
    form.excerpt,
    form.content,
    form.canonicalUrl,
  ]);

  // Computed Default Canonical URL
  const defaultCanonical = `https://www.nexoviodigitalsolutions.com/blog/${form.slug || "slug"}`;

  // =========================================================================
  // 1. WORDPRESS-STYLE LIGHT THEME LOGIN VIEW WITH ORIGINAL LOGO
  // =========================================================================
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/40 text-slate-800 flex flex-col justify-center items-center px-4 py-12 relative overflow-hidden select-none">
        {/* Soft background ambient gradient accents */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-100/30 rounded-full blur-[100px] pointer-events-none" />

        <div className="w-full max-w-[420px] relative z-10">
          {/* Original Brand Logo Header */}
          <div className="text-center mb-8 flex flex-col items-center">
            <Link href="/" className="inline-block transition-transform hover:scale-[1.02] mb-3">
              <Image
                src="/images/brand/nexovio-digital-solution-light.webp"
                alt="Nexovio Digital Solutions"
                width={280}
                height={75}
                priority
                className="h-12 w-auto object-contain mx-auto"
              />
            </Link>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-[#1769FF] text-xs font-semibold">
              <Shield className="w-3.5 h-3.5" />
              <span>Admin Management Portal</span>
            </div>
          </div>

          {/* WordPress-Style Clean White Login Card */}
          <div className="rounded-2xl border border-slate-200/80 bg-white p-8 shadow-[0_15px_35px_rgba(15,23,42,0.08)] relative overflow-hidden">
            {/* Top Nexovio Accent Bar */}
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#1769FF] via-[#00C6FF] to-[#1769FF]" />

            <div className="mb-6">
              <h2 className="text-xl font-bold text-slate-900 tracking-tight">Sign In to Dashboard</h2>
              <p className="text-xs text-slate-500 mt-1">
                Enter your administrator credentials to manage blog publications.
              </p>
            </div>

            {loginError && (
              <div className="mb-6 p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-start gap-2.5 animate-in fade-in">
                <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block">Authentication Failed</span>
                  <span>{loginError}</span>
                </div>
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Username or Email Address
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    autoFocus
                    value={usernameInput}
                    onChange={(e) => setUsernameInput(e.target.value)}
                    placeholder="admin"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:border-[#1769FF] focus:outline-none focus:ring-2 focus:ring-[#1769FF]/15 transition-all"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-xs font-semibold text-slate-700">Password</label>
                  <span className="text-[11px] font-mono text-[#1769FF] bg-blue-50 px-2 py-0.5 rounded">
                    hint: admin
                  </span>
                </div>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    value={passwordInput}
                    onChange={(e) => setPasswordInput(e.target.value)}
                    placeholder="••••••••"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-2.5 pr-10 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:border-[#1769FF] focus:outline-none focus:ring-2 focus:ring-[#1769FF]/15 transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 focus:outline-none"
                    title={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs pt-1">
                <label className="flex items-center gap-2 cursor-pointer text-slate-600 select-none">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 rounded border-slate-300 text-[#1769FF] focus:ring-[#1769FF]"
                  />
                  <span>Remember Me</span>
                </label>
              </div>

              <button
                type="submit"
                disabled={isLoggingIn}
                className="w-full py-2.5 px-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#1769FF] to-[#00A3FF] hover:from-[#0F58E0] hover:to-[#008FE0] shadow-sm hover:shadow active:scale-[0.99] transition-all disabled:opacity-60 flex items-center justify-center gap-2"
              >
                {isLoggingIn ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Signing In...</span>
                  </>
                ) : (
                  <span>Log In to Admin</span>
                )}
              </button>
            </form>

            {/* Quick credentials helper banner */}
            <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
              <span>Username: <strong className="text-slate-700 font-mono">admin</strong></span>
              <span>Password: <strong className="text-slate-700 font-mono">admin</strong></span>
            </div>
          </div>

          {/* Bottom Back Link */}
          <div className="mt-6 text-center">
            <Link
              href="/"
              className="text-xs font-medium text-slate-500 hover:text-[#1769FF] inline-flex items-center gap-1.5 transition-colors"
            >
              <span>← Back to Nexovio Digital Solutions</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================================
  // 2. MAIN ADMIN DASHBOARD & SIDEBAR LAYOUT (LIGHT THEME, NO PUBLIC HEADER/FOOTER)
  // =========================================================================
  return (
    <div className="h-screen w-full bg-[#F8FAFC] text-slate-900 flex flex-col md:flex-row antialiased overflow-hidden select-none">
      {/* Toast Notification */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 animate-in fade-in slide-in-from-bottom-5">
          <div
            className={`flex items-center gap-3 px-5 py-3 rounded-xl border shadow-lg text-xs font-semibold backdrop-blur-md ${
              toast.type === "success"
                ? "bg-emerald-50 border-emerald-300 text-emerald-800"
                : "bg-red-50 border-red-300 text-red-800"
            }`}
          >
            {toast.type === "success" ? (
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            ) : (
              <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
            )}
            <span>{toast.message}</span>
          </div>
        </div>
      )}

      {/* LEFT SIDEBAR (WordPress Admin Style with Nexovio Original Logo - Fixed & Static) */}
      <aside className="w-full md:w-64 h-auto md:h-screen bg-white border-r border-slate-200/90 shrink-0 flex flex-col justify-between select-none z-30 shadow-[1px_0_10px_rgba(0,0,0,0.02)] md:sticky md:top-0 overflow-y-auto">
        <div>
          {/* Top Logo Area */}
          <div className="p-5 border-b border-slate-100 flex items-center justify-between">
            <Link href="/admin" className="flex items-center">
              <Image
                src="/images/brand/nexovio-digital-solution-light.webp"
                alt="Nexovio Digital Solutions"
                width={200}
                height={50}
                priority
                className="h-8 w-auto object-contain"
              />
            </Link>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-50 text-[#1769FF] font-semibold border border-blue-100">
              CMS
            </span>
          </div>

          {/* Sidebar Nav Items */}
          <nav className="p-3.5 space-y-1 text-xs font-semibold">
            <button
              type="button"
              onClick={() => setActiveTab("dashboard")}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl transition-all ${
                activeTab === "dashboard"
                  ? "bg-blue-50 text-[#1769FF] font-bold shadow-xs border border-blue-100"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              <LayoutDashboard className="w-4 h-4 text-[#1769FF]" />
              <span>Dashboard</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("posts")}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl transition-all ${
                activeTab === "posts"
                  ? "bg-blue-50 text-[#1769FF] font-bold shadow-xs border border-blue-100"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              <div className="flex items-center gap-3">
                <FileText className="w-4 h-4 text-[#1769FF]" />
                <span>All Articles</span>
              </div>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
                {articles.length}
              </span>
            </button>

            <button
              type="button"
              onClick={handleAddNewPost}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl transition-all ${
                activeTab === "editor"
                  ? "bg-blue-50 text-[#1769FF] font-bold shadow-xs border border-blue-100"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              <Plus className="w-4 h-4 text-[#1769FF]" />
              <span>Add New Article</span>
            </button>

            <button
              type="button"
              onClick={() => {
                fetchImages();
                setActiveTab("media");
              }}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl transition-all ${
                activeTab === "media"
                  ? "bg-blue-50 text-[#1769FF] font-bold shadow-xs border border-blue-100"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              <div className="flex items-center gap-3">
                <ImageIcon className="w-4 h-4 text-[#1769FF]" />
                <span>Media Library</span>
              </div>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
                {availableImages.length}
              </span>
            </button>
          </nav>
        </div>

        {/* Sidebar Footer: Profile & Live Site Link */}
        <div className="p-4 border-t border-slate-100 space-y-3 bg-slate-50/50">
          <Link
            href="/blog"
            target="_blank"
            className="flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:text-[#1769FF] hover:bg-white border border-transparent hover:border-slate-200 transition-all"
          >
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-[#1769FF]" />
              <span>Visit Blog Page</span>
            </div>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </Link>

          <div className="flex items-center justify-between pt-2 border-t border-slate-200/60">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#1769FF] to-[#00A3FF] flex items-center justify-center text-xs font-bold text-white shadow-xs">
                A
              </div>
              <div>
                <span className="text-xs font-bold text-slate-900 block leading-tight">Admin User</span>
                <span className="text-[10px] text-slate-500 block font-mono">admin@nexovio.com</span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleLogout}
              title="Log Out"
              className="p-1.5 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT AREA (Header Fixed, Content Scrolls) */}
      <main className="flex-1 h-screen flex flex-col min-w-0 bg-[#F8FAFC] overflow-hidden">
        {/* Top Navbar (Fixed Stripe Header) */}
        <header className="h-16 px-6 sm:px-8 border-b border-slate-200/80 bg-white shrink-0 z-20 flex items-center justify-between shadow-xs">
          <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
            <span className="font-semibold text-slate-800">Admin</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[#1769FF] capitalize font-semibold">
              {activeTab === "posts"
                ? "All Articles"
                : activeTab === "editor"
                ? isEditing
                  ? "Edit Article"
                  : "Add New Article"
                : activeTab}
            </span>
          </div>

          <div className="flex items-center gap-3">
            {activeTab !== "editor" && (
              <button
                type="button"
                onClick={handleAddNewPost}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#1769FF] to-[#00A3FF] hover:from-[#0F58E0] hover:to-[#008FE0] shadow-xs hover:shadow transition-all"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Post</span>
              </button>
            )}

            <div className="hidden sm:flex items-center gap-1.5 text-[11px] font-medium text-emerald-700 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Storage Synced (JSON)</span>
            </div>
          </div>
        </header>

        {/* ONLY THIS CONTENT AREA SCROLLS */}
        <div className="flex-1 overflow-y-auto min-w-0">

        {/* VIEW 1: ALL ARTICLES TABLE */}
        {activeTab === "posts" && (
          <div className="p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Articles &amp; Publications
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  Manage all blog publications, create new posts, or update existing articles.
                </p>
              </div>

              {/* Filters */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="relative min-w-[220px]">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search posts..."
                    className="w-full rounded-xl border border-slate-200 bg-white pl-9 pr-3 py-2 text-xs text-slate-800 placeholder-slate-400 focus:border-[#1769FF] focus:outline-none focus:ring-1 focus:ring-[#1769FF]/20 shadow-xs"
                  />
                </div>

                <select
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs text-slate-800 focus:border-[#1769FF] focus:outline-none shadow-xs"
                >
                  <option value="All">All Categories</option>
                  {CATEGORY_OPTIONS.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Articles Table */}
            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
              {loading ? (
                <div className="p-16 text-center text-slate-500 text-xs">
                  <RefreshCw className="w-6 h-6 text-[#1769FF] animate-spin mx-auto mb-2" />
                  Loading articles from disk...
                </div>
              ) : filteredList.length === 0 ? (
                <div className="p-16 text-center text-slate-500 text-xs space-y-3">
                  <FolderOpen className="w-8 h-8 text-slate-300 mx-auto" />
                  <p>No articles found matching query.</p>
                  <button
                    type="button"
                    onClick={handleAddNewPost}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-[#1769FF] bg-blue-50 border border-blue-200"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Create Your First Post</span>
                  </button>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[700px]">
                    <thead>
                      <tr className="border-b border-slate-200 bg-slate-50/75 text-xs font-semibold uppercase tracking-wider text-slate-600">
                        <th className="p-4 sm:p-5 w-20">Cover</th>
                        <th className="p-4 sm:p-5">Title &amp; Permalink</th>
                        <th className="p-4 sm:p-5">Category &amp; SEO</th>
                        <th className="p-4 sm:p-5">Author</th>
                        <th className="p-4 sm:p-5">Date</th>
                        <th className="p-4 sm:p-5 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                      {filteredList.map((article) => (
                        <tr
                          key={article.slug}
                          className="hover:bg-slate-50/80 transition-colors group"
                        >
                          <td className="p-4 sm:p-5">
                            <div className="relative w-14 h-10 rounded-lg overflow-hidden border border-slate-200 bg-slate-100 shrink-0">
                              {article.featuredImage ? (
                                <Image
                                  src={article.featuredImage}
                                  alt={article.title}
                                  fill
                                  sizes="60px"
                                  className="object-cover"
                                />
                              ) : (
                                <div className="w-full h-full flex items-center justify-center text-slate-400">
                                  <ImageIcon className="w-4 h-4" />
                                </div>
                              )}
                            </div>
                          </td>

                          <td className="p-4 sm:p-5">
                            <span className="font-bold text-slate-900 group-hover:text-[#1769FF] transition-colors block line-clamp-1">
                              {article.title}
                            </span>
                            <span className="text-[11px] font-mono text-slate-400 block mt-0.5">
                              /blog/{article.slug}
                            </span>
                          </td>

                          <td className="p-4 sm:p-5">
                            <div className="flex flex-wrap items-center gap-1.5">
                              <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold bg-blue-50 text-[#1769FF] border border-blue-200/60">
                                {article.category}
                              </span>
                              {article.focusKeyword && (
                                <span className="inline-block px-1.5 py-0.5 rounded text-[10px] font-mono bg-emerald-50 text-emerald-700 border border-emerald-200">
                                  {article.focusKeyword}
                                </span>
                              )}
                              {article.noIndex && (
                                <span className="inline-block px-1.5 py-0.5 rounded text-[10px] font-mono bg-amber-50 text-amber-700 border border-amber-200">
                                  noindex
                                </span>
                              )}
                            </div>
                          </td>

                          <td className="p-4 sm:p-5">
                            <span className="text-slate-800 font-semibold block">
                              {article.author.name}
                            </span>
                            <span className="text-[10px] text-slate-400 block">
                              {article.author.role}
                            </span>
                          </td>

                          <td className="p-4 sm:p-5 text-slate-500 text-xs whitespace-nowrap">
                            {formatDate(article.publishedAt)}
                          </td>

                          <td className="p-4 sm:p-5 text-right whitespace-nowrap">
                            <div className="inline-flex items-center gap-1.5">
                              <Link
                                href={`/blog/${article.slug}`}
                                target="_blank"
                                title="View Live Article"
                                className="p-2 rounded-lg border border-slate-200 text-slate-500 hover:text-[#1769FF] hover:border-[#1769FF]/40 hover:bg-blue-50/50 transition-colors"
                              >
                                <Eye className="w-3.5 h-3.5" />
                              </Link>

                              <button
                                type="button"
                                onClick={() => handleEditPost(article)}
                                title="Edit Post & SEO"
                                className="p-2 rounded-lg border border-slate-200 text-slate-500 hover:text-[#1769FF] hover:border-[#1769FF]/40 hover:bg-blue-50/50 transition-colors"
                              >
                                <Edit3 className="w-3.5 h-3.5" />
                              </button>

                              <button
                                type="button"
                                onClick={() => setDeleteConfirmSlug(article.slug)}
                                title="Delete Post"
                                className="p-2 rounded-lg border border-slate-200 text-slate-500 hover:text-red-600 hover:border-red-300 hover:bg-red-50 transition-colors"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        )}

        {/* VIEW 2: POST EDITOR (FULL RICH TEXTBOX WYSIWYG A TO Z + ADVANCED SEO SUITE) */}
        {activeTab === "editor" && (
          <div className="p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
              <div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  {isEditing ? "Edit Article" : "Create New Article"}
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  Write with rich formatting (Bold, Italic, Headings, Images, Lists) and configure complete SEO settings.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setActiveTab("posts")}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 border border-slate-200 hover:bg-white transition-colors"
                >
                  Cancel
                </button>

                <button
                  type="button"
                  onClick={handleSaveArticle}
                  disabled={isSaving}
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#1769FF] to-[#00A3FF] hover:from-[#0F58E0] hover:to-[#008FE0] shadow-sm hover:shadow transition-all disabled:opacity-50"
                >
                  {isSaving ? (
                    <>
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                      <span>Saving...</span>
                    </>
                  ) : (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>{isEditing ? "Update Article" : "Publish Article"}</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* LEFT COLUMN: Main Post Title, Rich Textbox Editor & SEO Suite */}
              <div className="lg:col-span-8 space-y-6">
                {/* Title */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
                  <input
                    type="text"
                    required
                    value={form.title}
                    onChange={handleTitleChange}
                    placeholder="Enter article title here..."
                    className="w-full text-2xl sm:text-3xl font-extrabold text-slate-900 placeholder-slate-300 bg-transparent border-b border-slate-200 pb-3 focus:outline-none focus:border-[#1769FF] transition-colors"
                  />
                  <div className="pt-1 flex flex-wrap items-center gap-1.5 text-xs text-slate-500 font-mono">
                    <span className="font-semibold text-slate-600">Permalink:</span>
                    <span className="text-slate-400">https://nexoviodigitalsolutions.com/blog/</span>
                    <input
                      type="text"
                      value={form.slug}
                      onChange={(e) => setForm((prev) => ({ ...prev, slug: e.target.value }))}
                      className="bg-slate-50 border border-slate-200 text-[#1769FF] font-mono px-2 py-0.5 rounded text-xs focus:outline-none focus:border-[#1769FF]"
                    />
                  </div>
                </div>

                {/* RICH TEXTBOX EDITOR COMPONENT (A to Z formatting) */}
                <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
                  {/* Editor Toolbar */}
                  <div className="p-2.5 border-b border-slate-200 bg-slate-50 flex flex-wrap items-center gap-1 select-none">
                    {/* Headings */}
                    <button
                      type="button"
                      onClick={() => executeCommand("formatBlock", "<h2>")}
                      title="Heading 2"
                      className="p-1.5 rounded-lg text-slate-700 hover:text-[#1769FF] hover:bg-white border border-transparent hover:border-slate-200 transition-colors"
                    >
                      <Heading2 className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => executeCommand("formatBlock", "<h3>")}
                      title="Heading 3"
                      className="p-1.5 rounded-lg text-slate-700 hover:text-[#1769FF] hover:bg-white border border-transparent hover:border-slate-200 transition-colors"
                    >
                      <Heading3 className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => executeCommand("formatBlock", "<p>")}
                      title="Normal Paragraph"
                      className="px-2 py-1 text-xs font-semibold text-slate-700 hover:text-[#1769FF] hover:bg-white border border-transparent hover:border-slate-200 rounded-lg"
                    >
                      Paragraph
                    </button>

                    <div className="w-[1px] h-5 bg-slate-200 mx-1" />

                    {/* Font Styles: Bold, Italic, Underline, Strikethrough */}
                    <button
                      type="button"
                      onClick={() => executeCommand("bold")}
                      title="Bold (Ctrl+B)"
                      className="p-1.5 rounded-lg text-slate-700 hover:text-[#1769FF] hover:bg-white border border-transparent hover:border-slate-200 transition-colors font-bold"
                    >
                      <Bold className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => executeCommand("italic")}
                      title="Italic (Ctrl+I)"
                      className="p-1.5 rounded-lg text-slate-700 hover:text-[#1769FF] hover:bg-white border border-transparent hover:border-slate-200 transition-colors"
                    >
                      <Italic className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => executeCommand("underline")}
                      title="Underline (Ctrl+U)"
                      className="p-1.5 rounded-lg text-slate-700 hover:text-[#1769FF] hover:bg-white border border-transparent hover:border-slate-200 transition-colors"
                    >
                      <Underline className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => executeCommand("strikeThrough")}
                      title="Strikethrough"
                      className="p-1.5 rounded-lg text-slate-700 hover:text-[#1769FF] hover:bg-white border border-transparent hover:border-slate-200 transition-colors"
                    >
                      <Strikethrough className="w-4 h-4" />
                    </button>

                    <div className="w-[1px] h-5 bg-slate-200 mx-1" />

                    {/* Alignment */}
                    <button
                      type="button"
                      onClick={() => executeCommand("justifyLeft")}
                      title="Align Left"
                      className="p-1.5 rounded-lg text-slate-700 hover:text-[#1769FF] hover:bg-white border border-transparent hover:border-slate-200 transition-colors"
                    >
                      <AlignLeft className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => executeCommand("justifyCenter")}
                      title="Align Center"
                      className="p-1.5 rounded-lg text-slate-700 hover:text-[#1769FF] hover:bg-white border border-transparent hover:border-slate-200 transition-colors"
                    >
                      <AlignCenter className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => executeCommand("justifyRight")}
                      title="Align Right"
                      className="p-1.5 rounded-lg text-slate-700 hover:text-[#1769FF] hover:bg-white border border-transparent hover:border-slate-200 transition-colors"
                    >
                      <AlignRight className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => executeCommand("justifyFull")}
                      title="Justify Full"
                      className="p-1.5 rounded-lg text-slate-700 hover:text-[#1769FF] hover:bg-white border border-transparent hover:border-slate-200 transition-colors"
                    >
                      <AlignJustify className="w-4 h-4" />
                    </button>

                    <div className="w-[1px] h-5 bg-slate-200 mx-1" />

                    {/* Lists & Quotes */}
                    <button
                      type="button"
                      onClick={() => executeCommand("insertUnorderedList")}
                      title="Bullet List"
                      className="p-1.5 rounded-lg text-slate-700 hover:text-[#1769FF] hover:bg-white border border-transparent hover:border-slate-200 transition-colors"
                    >
                      <List className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => executeCommand("insertOrderedList")}
                      title="Numbered List"
                      className="p-1.5 rounded-lg text-slate-700 hover:text-[#1769FF] hover:bg-white border border-transparent hover:border-slate-200 transition-colors"
                    >
                      <ListOrdered className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => executeCommand("formatBlock", "<blockquote>")}
                      title="Blockquote"
                      className="p-1.5 rounded-lg text-slate-700 hover:text-[#1769FF] hover:bg-white border border-transparent hover:border-slate-200 transition-colors"
                    >
                      <Quote className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => executeCommand("insertHorizontalRule")}
                      title="Insert Horizontal Divider"
                      className="p-1.5 rounded-lg text-slate-700 hover:text-[#1769FF] hover:bg-white border border-transparent hover:border-slate-200 transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>

                    <div className="w-[1px] h-5 bg-slate-200 mx-1" />

                    {/* Hyperlink & Media Insert */}
                    <button
                      type="button"
                      onClick={insertLink}
                      title="Insert Hyperlink"
                      className="p-1.5 rounded-lg text-slate-700 hover:text-[#1769FF] hover:bg-white border border-transparent hover:border-slate-200 transition-colors"
                    >
                      <LinkIcon className="w-4 h-4" />
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setMediaTarget("editor");
                        setIsMediaModalOpen(true);
                      }}
                      title="Insert Image into Content"
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold text-[#1769FF] bg-blue-50 border border-blue-200 hover:bg-blue-100/70 transition-colors"
                    >
                      <ImageIcon className="w-3.5 h-3.5" />
                      <span>Add Media</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => executeCommand("removeFormat")}
                      title="Clear Formatting"
                      className="p-1.5 rounded-lg text-slate-700 hover:text-[#1769FF] hover:bg-white border border-transparent hover:border-slate-200 transition-colors"
                    >
                      <RemoveFormatting className="w-4 h-4" />
                    </button>

                    {/* HTML Code View Toggle */}
                    <button
                      type="button"
                      onClick={() => {
                        if (!isHtmlSourceMode && editorRef.current) {
                          setForm((prev) => ({ ...prev, content: editorRef.current?.innerHTML || "" }));
                        }
                        setIsHtmlSourceMode(!isHtmlSourceMode);
                      }}
                      className={`ml-auto px-2.5 py-1 rounded-lg text-xs font-mono font-semibold transition-colors ${
                        isHtmlSourceMode
                          ? "bg-[#1769FF] text-white"
                          : "text-slate-600 hover:text-slate-900 hover:bg-white border border-transparent hover:border-slate-200"
                      }`}
                      title="Toggle HTML Source Code View"
                    >
                      &lt;/&gt; {isHtmlSourceMode ? "Visual View" : "HTML View"}
                    </button>
                  </div>

                  {/* Content Editing Canvas */}
                  <div className="p-6 min-h-[440px] bg-white">
                    {isHtmlSourceMode ? (
                      <textarea
                        value={form.content}
                        onChange={(e) => setForm((prev) => ({ ...prev, content: e.target.value }))}
                        rows={18}
                        className="w-full h-full bg-slate-900 text-emerald-400 font-mono text-xs p-4 rounded-xl focus:outline-none resize-y leading-relaxed"
                        placeholder="<div>Raw HTML code...</div>"
                      />
                    ) : (
                      <div
                        ref={editorRef}
                        contentEditable
                        suppressContentEditableWarning
                        onInput={syncEditorContent}
                        onBlur={syncEditorContent}
                        className="w-full min-h-[400px] focus:outline-none text-slate-800 text-sm leading-relaxed space-y-4 font-sans [&_h1]:text-3xl [&_h1]:font-extrabold [&_h1]:text-slate-900 [&_h1]:mt-6 [&_h1]:mb-3 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-slate-900 [&_h2]:mt-6 [&_h2]:mb-2 [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-slate-900 [&_h3]:mt-4 [&_h3]:mb-2 [&_p]:text-slate-700 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-1 [&_blockquote]:border-l-4 [&_blockquote]:border-[#1769FF] [&_blockquote]:bg-blue-50/50 [&_blockquote]:pl-4 [&_blockquote]:py-2 [&_blockquote]:italic [&_blockquote]:text-slate-700 [&_blockquote]:rounded-r-lg [&_a]:text-[#1769FF] [&_a]:underline [&_img]:rounded-xl [&_img]:my-4 [&_img]:max-w-full [&_img]:border [&_img]:border-slate-200 [&_hr]:my-6 [&_hr]:border-slate-200"
                      />
                    )}
                  </div>

                  {/* Editor Bottom Meta Bar */}
                  <div className="px-6 py-2.5 border-t border-slate-100 bg-slate-50 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                    <div className="flex items-center gap-4">
                      <span>Words: <strong className="text-slate-700">{wordCount}</strong></span>
                      <span>Est. Read Time: <strong className="text-slate-700">{readingTimeEstimate} min</strong></span>
                    </div>
                    <span>Rich Text WYSIWYG Active</span>
                  </div>
                </div>

                {/* Excerpt Summary Box */}
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm space-y-2">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
                    Article Summary / Excerpt
                  </label>
                  <p className="text-[11px] text-slate-500">
                    A brief 1-2 sentence teaser displayed on blog cards and search engine previews.
                  </p>
                  <textarea
                    rows={2}
                    value={form.excerpt}
                    onChange={(e) => setForm((prev) => ({ ...prev, excerpt: e.target.value }))}
                    placeholder="Brief 1-2 sentence teaser for cards and search snippets..."
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:bg-white focus:border-[#1769FF] focus:outline-none focus:ring-1 focus:ring-[#1769FF]/20"
                  />
                </div>

                {/* ========================================================================= */}
                {/* ADVANCED ALL-IN-ONE SEO & SOCIAL SUITE (Google, Social, Canonical, Robots) */}
                {/* ========================================================================= */}
                <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
                  {/* SEO Suite Header with Real-Time Score Badge */}
                  <div className="p-5 border-b border-slate-200 bg-slate-50/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-xl bg-blue-50 text-[#1769FF] border border-blue-200/60">
                        <Globe className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-slate-900 tracking-tight flex items-center gap-2">
                          <span>Complete SEO &amp; Metadata Suite</span>
                          <span
                            className={`px-2 py-0.5 rounded-full text-[11px] font-bold ${
                              seoAudit.score >= 80
                                ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                                : seoAudit.score >= 50
                                ? "bg-amber-50 text-amber-700 border border-amber-200"
                                : "bg-red-50 text-red-700 border border-red-200"
                            }`}
                          >
                            SEO Score: {seoAudit.score}/100
                          </span>
                        </h3>
                        <p className="text-[11px] text-slate-500">
                          Configure Google search snippets, focus keywords, canonical tags, Open Graph cards, and indexing directives.
                        </p>
                      </div>
                    </div>

                    {/* SEO Sub-tabs */}
                    <div className="flex items-center p-1 rounded-xl bg-slate-200/60 text-xs font-semibold self-start sm:self-auto">
                      <button
                        type="button"
                        onClick={() => setSeoTab("google")}
                        className={`px-3 py-1.5 rounded-lg transition-all ${
                          seoTab === "google"
                            ? "bg-white text-slate-900 shadow-xs"
                            : "text-slate-600 hover:text-slate-900"
                        }`}
                      >
                        Search (Google)
                      </button>
                      <button
                        type="button"
                        onClick={() => setSeoTab("social")}
                        className={`px-3 py-1.5 rounded-lg transition-all ${
                          seoTab === "social"
                            ? "bg-white text-slate-900 shadow-xs"
                            : "text-slate-600 hover:text-slate-900"
                        }`}
                      >
                        Social (OG)
                      </button>
                      <button
                        type="button"
                        onClick={() => setSeoTab("advanced")}
                        className={`px-3 py-1.5 rounded-lg transition-all ${
                          seoTab === "advanced"
                            ? "bg-white text-slate-900 shadow-xs"
                            : "text-slate-600 hover:text-slate-900"
                        }`}
                      >
                        Canonical &amp; Robots
                      </button>
                    </div>
                  </div>

                  <div className="p-6 space-y-6">
                    {/* TAB 1: GOOGLE SEARCH SETTINGS */}
                    {seoTab === "google" && (
                      <div className="space-y-6">
                        {/* Live Google SERP Snippet Preview */}
                        <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
                          <div className="flex items-center justify-between pb-2 border-b border-slate-200/60">
                            <span className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                              <Eye className="w-3.5 h-3.5 text-[#1769FF]" />
                              Google Search Engine Preview
                            </span>
                            <div className="flex items-center gap-1 bg-white p-0.5 rounded-lg border border-slate-200 text-[11px]">
                              <button
                                type="button"
                                onClick={() => setSerpDevice("desktop")}
                                className={`px-2 py-0.5 rounded flex items-center gap-1 ${
                                  serpDevice === "desktop" ? "bg-slate-100 font-bold text-slate-900" : "text-slate-500"
                                }`}
                              >
                                <Monitor className="w-3 h-3" />
                                <span>Desktop</span>
                              </button>
                              <button
                                type="button"
                                onClick={() => setSerpDevice("mobile")}
                                className={`px-2 py-0.5 rounded flex items-center gap-1 ${
                                  serpDevice === "mobile" ? "bg-slate-100 font-bold text-slate-900" : "text-slate-500"
                                }`}
                              >
                                <Smartphone className="w-3 h-3" />
                                <span>Mobile</span>
                              </button>
                            </div>
                          </div>

                          <div
                            className={`p-3 bg-white rounded-lg border border-slate-200 text-left transition-all ${
                              serpDevice === "mobile" ? "max-w-md mx-auto" : "w-full"
                            }`}
                          >
                            <div className="flex items-center gap-2 mb-1">
                              <div className="w-4 h-4 rounded-full bg-[#1769FF] flex items-center justify-center text-[9px] text-white font-bold">
                                N
                              </div>
                              <span className="text-[11px] text-slate-600 truncate block">
                                nexoviodigitalsolutions.com › blog › {form.slug || "slug"}
                              </span>
                            </div>
                            <h4 className="text-sm font-semibold text-[#1a0dab] hover:underline cursor-pointer line-clamp-1">
                              {form.seoTitle || form.title || "Nexovio Blog Post Title"} | Nexovio Digital Solutions
                            </h4>
                            <p className="text-xs text-[#4d5156] line-clamp-2 mt-1 leading-relaxed">
                              {form.seoDescription || form.excerpt || "Configure a descriptive meta snippet to attract clicks from search engine result pages..."}
                            </p>
                          </div>
                        </div>

                        {/* Focus Keyword & Analysis */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <div className="flex items-center justify-between mb-1.5">
                              <label className="text-xs font-semibold text-slate-700 flex items-center gap-1">
                                <Key className="w-3.5 h-3.5 text-[#1769FF]" />
                                <span>Focus Target Keyword</span>
                              </label>
                              <span className="text-[11px] text-slate-400">Main search intent</span>
                            </div>
                            <input
                              type="text"
                              value={form.focusKeyword}
                              onChange={(e) => setForm((prev) => ({ ...prev, focusKeyword: e.target.value }))}
                              placeholder="e.g. web development vs website builders"
                              className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2 text-xs text-slate-800 placeholder-slate-400 focus:bg-white focus:border-[#1769FF] focus:outline-none"
                            />
                          </div>

                          <div>
                            <div className="flex items-center justify-between mb-1.5">
                              <label className="text-xs font-semibold text-slate-700 flex items-center gap-1">
                                <Tag className="w-3.5 h-3.5 text-[#1769FF]" />
                                <span>SEO Keywords &amp; Tags</span>
                              </label>
                              <span className="text-[11px] text-slate-400">Comma-separated</span>
                            </div>
                            <input
                              type="text"
                              value={form.keywordsText}
                              onChange={(e) => setForm((prev) => ({ ...prev, keywordsText: e.target.value }))}
                              placeholder="react, web development, nextjs, performance"
                              className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2 text-xs text-slate-800 placeholder-slate-400 focus:bg-white focus:border-[#1769FF] focus:outline-none"
                            />
                          </div>
                        </div>

                        {/* Real-time Focus Keyword Checklist */}
                        {form.focusKeyword.trim() && (
                          <div className="p-3.5 rounded-xl bg-blue-50/50 border border-blue-100 text-xs space-y-1.5">
                            <span className="font-bold text-slate-700 block">
                              Focus Keyword Optimization Checklist:
                            </span>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
                              <div className="flex items-center gap-2">
                                {seoAudit.inTitle ? (
                                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                                ) : (
                                  <X className="w-3.5 h-3.5 text-red-500" />
                                )}
                                <span className={seoAudit.inTitle ? "text-slate-700" : "text-slate-500"}>
                                  Keyword present in Post Title
                                </span>
                              </div>

                              <div className="flex items-center gap-2">
                                {seoAudit.inSlug ? (
                                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                                ) : (
                                  <X className="w-3.5 h-3.5 text-red-500" />
                                )}
                                <span className={seoAudit.inSlug ? "text-slate-700" : "text-slate-500"}>
                                  Keyword in Permalink / Slug
                                </span>
                              </div>

                              <div className="flex items-center gap-2">
                                {seoAudit.inDesc ? (
                                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                                ) : (
                                  <X className="w-3.5 h-3.5 text-red-500" />
                                )}
                                <span className={seoAudit.inDesc ? "text-slate-700" : "text-slate-500"}>
                                  Keyword in Meta Description
                                </span>
                              </div>

                              <div className="flex items-center gap-2">
                                {seoAudit.inContent ? (
                                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                                ) : (
                                  <X className="w-3.5 h-3.5 text-red-500" />
                                )}
                                <span className={seoAudit.inContent ? "text-slate-700" : "text-slate-500"}>
                                  Keyword found in Article Content
                                </span>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Meta Title Input */}
                        <div>
                          <div className="flex items-center justify-between mb-1.5">
                            <label className="text-xs font-semibold text-slate-700">
                              SEO Meta Title Tag
                            </label>
                            <span
                              className={`text-[11px] font-mono font-semibold ${
                                seoAudit.titleGood ? "text-emerald-600" : "text-amber-600"
                              }`}
                            >
                              {form.seoTitle.length} / 60 characters
                            </span>
                          </div>
                          <input
                            type="text"
                            value={form.seoTitle}
                            onChange={(e) => setForm((prev) => ({ ...prev, seoTitle: e.target.value }))}
                            placeholder={form.title || "Target article title..."}
                            className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2 text-xs text-slate-800 placeholder-slate-400 focus:bg-white focus:border-[#1769FF] focus:outline-none"
                          />
                          <div className="mt-1.5 w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                            <div
                              className={`h-full transition-all ${
                                seoAudit.titleGood
                                  ? "bg-emerald-500"
                                  : form.seoTitle.length > 60
                                  ? "bg-red-500"
                                  : "bg-[#1769FF]"
                              }`}
                              style={{ width: `${Math.min(100, (form.seoTitle.length / 60) * 100)}%` }}
                            />
                          </div>
                        </div>

                        {/* Meta Description Input */}
                        <div>
                          <div className="flex items-center justify-between mb-1.5">
                            <label className="text-xs font-semibold text-slate-700">
                              SEO Meta Description
                            </label>
                            <span
                              className={`text-[11px] font-mono font-semibold ${
                                seoAudit.descGood ? "text-emerald-600" : "text-amber-600"
                              }`}
                            >
                              {form.seoDescription.length} / 160 characters
                            </span>
                          </div>
                          <textarea
                            rows={3}
                            value={form.seoDescription}
                            onChange={(e) => setForm((prev) => ({ ...prev, seoDescription: e.target.value }))}
                            placeholder={form.excerpt || "Detailed summary for search engines and card snippets..."}
                            className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2 text-xs text-slate-800 placeholder-slate-400 focus:bg-white focus:border-[#1769FF] focus:outline-none leading-relaxed"
                          />
                          <div className="mt-1.5 w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                            <div
                              className={`h-full transition-all ${
                                seoAudit.descGood
                                  ? "bg-emerald-500"
                                  : form.seoDescription.length > 160
                                  ? "bg-red-500"
                                  : "bg-[#1769FF]"
                              }`}
                              style={{ width: `${Math.min(100, (form.seoDescription.length / 160) * 100)}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* TAB 2: SOCIAL MEDIA & OPEN GRAPH */}
                    {seoTab === "social" && (
                      <div className="space-y-6">
                        <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
                          <span className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                            <Share2 className="w-3.5 h-3.5 text-[#1769FF]" />
                            Open Graph (Facebook, LinkedIn &amp; Twitter / X) Preview
                          </span>

                          <div className="rounded-xl border border-slate-200 bg-white overflow-hidden max-w-md mx-auto shadow-xs">
                            <div className="relative aspect-[16/9] bg-slate-100">
                              {form.ogImage || form.featuredImage ? (
                                <Image
                                  src={form.ogImage || form.featuredImage}
                                  alt={form.title}
                                  fill
                                  className="object-cover"
                                />
                              ) : (
                                <div className="w-full h-full flex items-center justify-center text-slate-400 text-xs">
                                  No social card image
                                </div>
                              )}
                            </div>
                            <div className="p-3 bg-white space-y-1">
                              <span className="text-[10px] uppercase font-mono text-slate-400 block tracking-wider">
                                nexoviodigitalsolutions.com
                              </span>
                              <h5 className="text-xs font-bold text-slate-900 line-clamp-1">
                                {form.socialTitle || form.seoTitle || form.title || "Post Title"}
                              </h5>
                              <p className="text-[11px] text-slate-500 line-clamp-2">
                                {form.socialDescription || form.seoDescription || form.excerpt || "Social summary teaser..."}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Social Image Override */}
                        <div>
                          <div className="flex items-center justify-between mb-1.5">
                            <label className="text-xs font-semibold text-slate-700">
                              Social Share Image (OG Image)
                            </label>
                            <div className="flex items-center gap-2">
                              <button
                                type="button"
                                onClick={() => setForm((prev) => ({ ...prev, ogImage: prev.featuredImage }))}
                                className="text-[11px] text-[#1769FF] hover:underline"
                              >
                                Use Featured Image
                              </button>
                              <span className="text-slate-300">•</span>
                              <button
                                type="button"
                                onClick={() => {
                                  setMediaTarget("og");
                                  setIsMediaModalOpen(true);
                                }}
                                className="text-[11px] text-[#1769FF] hover:underline"
                              >
                                Choose Media
                              </button>
                            </div>
                          </div>
                          <input
                            type="text"
                            value={form.ogImage}
                            onChange={(e) => setForm((prev) => ({ ...prev, ogImage: e.target.value }))}
                            placeholder="Leave empty to automatically use Featured Image..."
                            className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2 text-xs font-mono text-slate-800 placeholder-slate-400 focus:bg-white focus:border-[#1769FF] focus:outline-none"
                          />
                        </div>

                        {/* Social Title Override */}
                        <div>
                          <div className="flex items-center justify-between mb-1.5">
                            <label className="text-xs font-semibold text-slate-700">
                              Social Card Title (Override)
                            </label>
                            <button
                              type="button"
                              onClick={() => setForm((prev) => ({ ...prev, socialTitle: prev.seoTitle || prev.title }))}
                              className="text-[11px] text-[#1769FF] hover:underline"
                            >
                              Copy Meta Title
                            </button>
                          </div>
                          <input
                            type="text"
                            value={form.socialTitle}
                            onChange={(e) => setForm((prev) => ({ ...prev, socialTitle: e.target.value }))}
                            placeholder="Leave empty to use default SEO Meta Title..."
                            className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2 text-xs text-slate-800 placeholder-slate-400 focus:bg-white focus:border-[#1769FF] focus:outline-none"
                          />
                        </div>

                        {/* Social Description Override */}
                        <div>
                          <div className="flex items-center justify-between mb-1.5">
                            <label className="text-xs font-semibold text-slate-700">
                              Social Card Description (Override)
                            </label>
                            <button
                              type="button"
                              onClick={() => setForm((prev) => ({ ...prev, socialDescription: prev.seoDescription || prev.excerpt }))}
                              className="text-[11px] text-[#1769FF] hover:underline"
                            >
                              Copy Meta Description
                            </button>
                          </div>
                          <textarea
                            rows={2}
                            value={form.socialDescription}
                            onChange={(e) => setForm((prev) => ({ ...prev, socialDescription: e.target.value }))}
                            placeholder="Leave empty to use default SEO Meta Description..."
                            className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2 text-xs text-slate-800 placeholder-slate-400 focus:bg-white focus:border-[#1769FF] focus:outline-none"
                          />
                        </div>
                      </div>
                    )}

                    {/* TAB 3: CANONICAL, ROBOTS DIRECTIVES & SITEMAP */}
                    {seoTab === "advanced" && (
                      <div className="space-y-6">
                        {/* Custom Canonical URL */}
                        <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
                          <label className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                            <Globe className="w-3.5 h-3.5 text-[#1769FF]" />
                            <span>Canonical URL Setting</span>
                          </label>
                          <p className="text-[11px] text-slate-500 leading-relaxed">
                            Search engines use the canonical tag to prevent duplicate content penalties.
                            By default, this article canonicalizes to:
                          </p>
                          <div className="p-2 bg-white rounded-lg border border-slate-200 text-[11px] font-mono text-slate-700 break-all select-all">
                            {defaultCanonical}
                          </div>

                          <div className="pt-2">
                            <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                              Custom Canonical Override (Optional)
                            </label>
                            <input
                              type="url"
                              value={form.canonicalUrl}
                              onChange={(e) => setForm((prev) => ({ ...prev, canonicalUrl: e.target.value }))}
                              placeholder="https://example.com/original-article-source"
                              className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-mono text-slate-800 placeholder-slate-400 focus:border-[#1769FF] focus:outline-none"
                            />
                            <span className="text-[10px] text-slate-400 mt-1 block">
                              Only fill if this article was syndicated from another publication or medium domain.
                            </span>
                          </div>
                        </div>

                        {/* Robots Directives */}
                        <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-3">
                          <span className="text-xs font-bold text-slate-800 block">
                            Robots Meta Directives (Indexing Rules)
                          </span>

                          <div className="space-y-2 text-xs">
                            <label className="flex items-center gap-2.5 cursor-pointer">
                              <input
                                type="checkbox"
                                checked={form.noIndex}
                                onChange={(e) => setForm((prev) => ({ ...prev, noIndex: e.target.checked }))}
                                className="w-4 h-4 rounded border-slate-300 text-red-600 focus:ring-red-500"
                              />
                              <div>
                                <span className="font-semibold text-slate-800 block">
                                  Discourage search engines from indexing this article (noindex)
                                </span>
                                <span className="text-[11px] text-slate-500 block">
                                  Applies &lt;meta name=&quot;robots&quot; content=&quot;noindex&quot; /&gt; and excludes from XML sitemap.
                                </span>
                              </div>
                            </label>

                            <label className="flex items-center gap-2.5 cursor-pointer pt-1 border-t border-slate-200/60">
                              <input
                                type="checkbox"
                                checked={form.noFollow}
                                onChange={(e) => setForm((prev) => ({ ...prev, noFollow: e.target.checked }))}
                                className="w-4 h-4 rounded border-slate-300 text-red-600 focus:ring-red-500"
                              />
                              <div>
                                <span className="font-semibold text-slate-800 block">
                                  Do not follow outbound links in this article (nofollow)
                                </span>
                                <span className="text-[11px] text-slate-500 block">
                                  Instructs search engine spiders not to crawl hyperlinks within the article content.
                                </span>
                              </div>
                            </label>
                          </div>
                        </div>

                        {/* Schema.org Structured Data & XML Sitemap Settings */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                          <div>
                            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                              Schema.org Type
                            </label>
                            <select
                              value={form.schemaType}
                              onChange={(e) => setForm((prev) => ({ ...prev, schemaType: e.target.value as any }))}
                              className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3 py-2 text-xs text-slate-800 focus:bg-white focus:border-[#1769FF] focus:outline-none"
                            >
                              <option value="BlogPosting">BlogPosting (Standard)</option>
                              <option value="TechArticle">TechArticle (Engineering)</option>
                              <option value="Article">Article (General)</option>
                              <option value="NewsArticle">NewsArticle (Press)</option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                              Sitemap Priority
                            </label>
                            <select
                              value={form.sitemapPriority}
                              onChange={(e) => setForm((prev) => ({ ...prev, sitemapPriority: e.target.value }))}
                              className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3 py-2 text-xs text-slate-800 focus:bg-white focus:border-[#1769FF] focus:outline-none"
                            >
                              <option value="1.0">1.0 (Critical Pillar)</option>
                              <option value="0.9">0.9 (High Priority)</option>
                              <option value="0.8">0.8 (Standard Blog Post)</option>
                              <option value="0.7">0.7 (Regular)</option>
                              <option value="0.5">0.5 (Low Priority)</option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                              Change Frequency
                            </label>
                            <select
                              value={form.changeFreq}
                              onChange={(e) => setForm((prev) => ({ ...prev, changeFreq: e.target.value as any }))}
                              className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3 py-2 text-xs text-slate-800 focus:bg-white focus:border-[#1769FF] focus:outline-none"
                            >
                              <option value="weekly">Weekly</option>
                              <option value="daily">Daily</option>
                              <option value="monthly">Monthly</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN: WordPress-Style Settings Side Panels */}
              <div className="lg:col-span-4 space-y-6">
                {/* Panel 1: Publishing Details */}
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm space-y-4">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#1769FF] flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    Publishing Settings
                  </h3>

                  <div className="space-y-3 text-xs">
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                        Category
                      </label>
                      <select
                        value={form.category}
                        onChange={(e) => setForm((prev) => ({ ...prev, category: e.target.value }))}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3 py-2 text-xs text-slate-800 focus:bg-white focus:border-[#1769FF] focus:outline-none"
                      >
                        {CATEGORY_OPTIONS.map((c) => (
                          <option key={c} value={c}>
                            {c}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                        Publish Date
                      </label>
                      <input
                        type="date"
                        value={form.publishedAt}
                        onChange={(e) => setForm((prev) => ({ ...prev, publishedAt: e.target.value }))}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3 py-2 text-xs text-slate-800 focus:bg-white focus:border-[#1769FF] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                        Author Name
                      </label>
                      <input
                        type="text"
                        value={form.authorName}
                        onChange={(e) => setForm((prev) => ({ ...prev, authorName: e.target.value }))}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3 py-2 text-xs text-slate-800 focus:bg-white focus:border-[#1769FF] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                        Author Role
                      </label>
                      <input
                        type="text"
                        value={form.authorRole}
                        onChange={(e) => setForm((prev) => ({ ...prev, authorRole: e.target.value }))}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3 py-2 text-xs text-slate-800 focus:bg-white focus:border-[#1769FF] focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Panel 2: Featured Image */}
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#1769FF] flex items-center gap-2">
                      <ImageIcon className="w-3.5 h-3.5" />
                      Featured Image
                    </h3>
                    <button
                      type="button"
                      onClick={() => {
                        setMediaTarget("featured");
                        setIsMediaModalOpen(true);
                      }}
                      className="text-[11px] font-semibold text-[#1769FF] hover:underline"
                    >
                      Choose Media
                    </button>
                  </div>

                  <div className="relative aspect-[16/9] rounded-xl overflow-hidden border border-slate-200 bg-slate-100 group">
                    {form.featuredImage ? (
                      <Image
                        src={form.featuredImage}
                        alt={form.featuredImageAlt || form.title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center text-slate-400 text-xs">
                        <ImageIcon className="w-6 h-6 mb-1 text-slate-300" />
                        <span>No image selected</span>
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                      Image URL or Path
                    </label>
                    <input
                      type="text"
                      value={form.featuredImage}
                      onChange={(e) => setForm((prev) => ({ ...prev, featuredImage: e.target.value }))}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3 py-2 text-xs font-mono text-slate-800 focus:bg-white focus:border-[#1769FF] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                      Alt Text (SEO Image Tag)
                    </label>
                    <input
                      type="text"
                      value={form.featuredImageAlt}
                      onChange={(e) => setForm((prev) => ({ ...prev, featuredImageAlt: e.target.value }))}
                      placeholder="Descriptive image context..."
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3 py-2 text-xs text-slate-800 focus:bg-white focus:border-[#1769FF] focus:outline-none"
                    />
                  </div>
                </div>

                {/* Panel 3: Table of Contents Generator */}
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm space-y-3">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#1769FF] flex items-center gap-2">
                    <List className="w-3.5 h-3.5" />
                    Table of Contents
                  </h3>
                  <p className="text-[11px] text-slate-500">
                    Add heading titles one per line to generate clickable anchor navigation:
                  </p>
                  <textarea
                    rows={3}
                    value={form.tableOfContentsText}
                    onChange={(e) => setForm((prev) => ({ ...prev, tableOfContentsText: e.target.value }))}
                    placeholder="1. Architecture Foundations&#10;2. Performance Benchmarks&#10;3. Implementation Checklist"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3 py-2 text-xs font-mono text-slate-800 focus:bg-white focus:border-[#1769FF] focus:outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* VIEW 3: MEDIA LIBRARY */}
        {activeTab === "media" && (
          <div className="p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
              <div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Media Library
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  Upload and manage blog assets stored in /public/images/blog/
                </p>
              </div>

              <label className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#1769FF] to-[#00A3FF] hover:from-[#0F58E0] hover:to-[#008FE0] shadow-sm hover:shadow cursor-pointer transition-all">
                <Upload className="w-4 h-4" />
                <span>{isUploading ? "Uploading..." : "Upload New Image"}</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </label>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {availableImages.map((img) => (
                <div
                  key={img.name}
                  className="group rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:border-[#1769FF]/50 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
                    <Image
                      src={img.url}
                      alt={img.name}
                      fill
                      sizes="300px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-3 bg-white border-t border-slate-100 flex items-center justify-between gap-2">
                    <div className="min-w-0">
                      <span className="text-xs font-semibold text-slate-800 block truncate">
                        {img.name}
                      </span>
                      <span className="text-[10px] font-mono text-slate-400 block truncate">
                        {img.url}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => copyToClipboard(img.url)}
                      title="Copy Image URL"
                      className="p-1.5 rounded-lg border border-slate-200 text-slate-500 hover:text-[#1769FF] hover:bg-blue-50 transition-colors shrink-0"
                    >
                      {copiedUrl === img.url ? (
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIEW 4: DASHBOARD OVERVIEW */}
        {activeTab === "dashboard" && (
          <div className="p-6 sm:p-8 space-y-8">
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                Studio Dashboard Overview
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Welcome back, Administrator. Real-time blog statistics and health status.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block">
                  Total Publications
                </span>
                <span className="text-3xl font-extrabold text-slate-900">{articles.length}</span>
                <p className="text-[11px] text-slate-400">Indexed and active in live blog feed</p>
              </div>

              <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block">
                  Media Library Assets
                </span>
                <span className="text-3xl font-extrabold text-[#1769FF]">
                  {availableImages.length}
                </span>
                <p className="text-[11px] text-slate-400">Stored in public/images/blog</p>
              </div>

              <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block">
                  Database Type
                </span>
                <span className="text-lg font-bold text-emerald-600 block">
                  Self-Contained JSON
                </span>
                <p className="text-[11px] text-slate-400 font-mono">src/data/blog-posts.json</p>
              </div>
            </div>

            {/* Quick Actions Card */}
            <div className="p-6 rounded-2xl border border-blue-200 bg-gradient-to-r from-blue-50/70 via-white to-cyan-50/50 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-base font-bold text-slate-900">Ready to publish new content?</h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Write with full rich text formatting, auto-slugging, Google SEO preview, and instant sync.
                </p>
              </div>

              <button
                type="button"
                onClick={handleAddNewPost}
                className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#1769FF] to-[#00A3FF] hover:from-[#0F58E0] hover:to-[#008FE0] shadow-sm hover:shadow transition-all shrink-0"
              >
                Write New Article
              </button>
            </div>
          </div>
        )}
        </div>
      </main>

      {/* MEDIA PICKER MODAL (Choose or Upload Image) */}
      {isMediaModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="max-w-3xl w-full rounded-2xl border border-slate-200 bg-white shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
            <div className="p-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <ImageIcon className="w-4 h-4 text-[#1769FF]" />
                Select Media Asset ({mediaTarget === "featured" ? "Featured Image" : mediaTarget === "og" ? "Social Card Image" : "Editor Image"})
              </h3>
              <button
                type="button"
                onClick={() => setIsMediaModalOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/50"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-500">
                  Pick from library or upload from computer:
                </span>
                <label className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-dashed border-[#1769FF] bg-blue-50 text-[#1769FF] text-xs font-semibold cursor-pointer hover:bg-blue-100/70 transition-colors">
                  <Upload className="w-3.5 h-3.5" />
                  <span>{isUploading ? "Uploading..." : "Upload New File"}</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </label>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                {availableImages.map((img) => (
                  <button
                    key={img.name}
                    type="button"
                    onClick={() => {
                      if (mediaTarget === "featured") {
                        setForm((prev) => ({ ...prev, featuredImage: img.url }));
                      } else if (mediaTarget === "og") {
                        setForm((prev) => ({ ...prev, ogImage: img.url }));
                      } else {
                        insertImageIntoEditor(img.url, img.name);
                      }
                      setIsMediaModalOpen(false);
                    }}
                    className="group relative rounded-xl overflow-hidden border border-slate-200 aspect-[16/10] hover:border-[#1769FF] transition-all text-left bg-slate-100"
                  >
                    <Image src={img.url} alt={img.name} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2">
                      <span className="text-[10px] font-mono text-white truncate block">
                        {img.name}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* DELETE CONFIRMATION MODAL */}
      {deleteConfirmSlug && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="max-w-md w-full rounded-2xl border border-red-200 bg-white p-6 shadow-2xl space-y-4">
            <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-200 text-red-600 flex items-center justify-center">
              <Trash2 className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Delete Article Permanently?</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Are you sure you want to delete <code className="text-[#1769FF] font-mono font-semibold">{deleteConfirmSlug}</code>? This action will permanently remove the article from the blog.
            </p>
            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setDeleteConfirmSlug(null)}
                className="px-4 py-2 rounded-xl text-xs font-semibold border border-slate-200 text-slate-600 hover:bg-slate-50"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => handleDeleteArticle(deleteConfirmSlug)}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-red-600 hover:bg-red-700 text-white shadow-sm transition-colors"
              >
                Confirm Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
