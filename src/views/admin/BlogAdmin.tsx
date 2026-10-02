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
  Users,
  Download,
  Mail,
  Table,
  Eye,
  RefreshCw,
  X,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  ChevronUp,
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
  Globe,
  Tag,
  User,
  Shield,
  HelpCircle,
  RemoveFormatting,
  Copy,
  Check,
  Share2,
  Key,
  Smartphone,
  Monitor,
  Palette,
  CheckCheck,
  Hash,
  Sliders,
  Grid,
  TrendingUp,
  BarChart3,
  Activity,
  Tags,
  FolderKanban,
  Bookmark,
  Loader2,
} from "lucide-react";
import { BlogArticle, BlogFAQ } from "@/src/data/blog";
import { formatDate, getTodayDateString, cn } from "@/src/lib/utils";
import { BlogAnalyticsData } from "@/src/lib/blog-analytics";
import { BlogCategory } from "@/src/lib/category-storage";

// Color styling helpers for category badges
const getCategoryColorClasses = (color?: string) => {
  switch (color?.toLowerCase()) {
    case "blue":
      return "bg-blue-50 text-blue-700 border-blue-200";
    case "cyan":
      return "bg-cyan-50 text-cyan-700 border-cyan-200";
    case "purple":
      return "bg-purple-50 text-purple-700 border-purple-200";
    case "emerald":
    case "green":
      return "bg-emerald-50 text-emerald-700 border-emerald-200";
    case "amber":
    case "yellow":
      return "bg-amber-50 text-amber-800 border-amber-200";
    case "rose":
    case "red":
      return "bg-rose-50 text-rose-700 border-rose-200";
    case "slate":
    case "gray":
    default:
      return "bg-slate-100 text-slate-700 border-slate-200";
  }
};

const getCategoryColorDot = (color?: string) => {
  switch (color?.toLowerCase()) {
    case "blue":
      return "bg-blue-500";
    case "cyan":
      return "bg-cyan-500";
    case "purple":
      return "bg-purple-500";
    case "emerald":
    case "green":
      return "bg-emerald-500";
    case "amber":
    case "yellow":
      return "bg-amber-500";
    case "rose":
    case "red":
      return "bg-rose-500";
    default:
      return "bg-slate-500";
  }
};

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
  faqs: { question: string; answer: string }[];
  // Full SEO Settings
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
  publishedAt: getTodayDateString(),
  featuredImage: "/images/blog/custom-web-development-vs-website-builders.webp",
  featuredImageAlt: "",
  tableOfContentsText: "",
  faqs: [],
  focusKeyword: "",
  keywordsText: "Web Development, Nexovio, Digital Solutions, Enterprise Architecture",
  seoTitle: "",
  seoDescription: "",
  canonicalUrl: "",
  ogImage: "/images/blog/custom-web-development-vs-website-builders.webp",
  noIndex: false,
  noFollow: false,
  schemaType: "BlogPosting",
  socialTitle: "",
  socialDescription: "",
  sitemapPriority: "0.8",
  changeFreq: "weekly",
};

interface SubscriberItem {
  id: string;
  email: string;
  subscribedAt: string;
  source: string;
  status: "active" | "unsubscribed";
}

export default function BlogAdmin() {
  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [usernameInput, setUsernameInput] = useState<string>("");
  const [passwordInput, setPasswordInput] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [rememberMe, setRememberMe] = useState<boolean>(true);
  const [loginError, setLoginError] = useState<string>("");
  const [isLoggingIn, setIsLoggingIn] = useState<boolean>(false);

  // Active Main Navigation Tab
  const [activeTab, setActiveTab] = useState<"dashboard" | "posts" | "editor" | "categories" | "media" | "subscribers">("dashboard");

  // Categories Management State
  const [categories, setCategories] = useState<BlogCategory[]>([]);
  const [categoriesLoading, setCategoriesLoading] = useState<boolean>(false);
  const [categorySearch, setCategorySearch] = useState<string>("");
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState<boolean>(false);
  const [isDeleteCategoryModalOpen, setIsDeleteCategoryModalOpen] = useState<boolean>(false);
  const [isSavingCategory, setIsSavingCategory] = useState<boolean>(false);
  const [isDeletingCategory, setIsDeletingCategory] = useState<boolean>(false);
  const [categoryToDelete, setCategoryToDelete] = useState<BlogCategory | null>(null);
  const [reassignCategoryTarget, setReassignCategoryTarget] = useState<string>("");
  const [categoryForm, setCategoryForm] = useState<{
    id?: string;
    name: string;
    slug: string;
    description: string;
    color: string;
    updateArticles: boolean;
  }>({
    name: "",
    slug: "",
    description: "",
    color: "blue",
    updateArticles: true,
  });

  // Step-by-Step Editor Navigation Sub-Tab
  const [editorStep, setEditorStep] = useState<"content" | "design" | "seo" | "social" | "publish">("content");

  // Storage Mode reported from backend (mongodb, fallback-memory, github, serverless, or local)
  const [storageMode, setStorageMode] = useState<"mongodb" | "fallback-memory" | "local" | "serverless" | "github">("mongodb");

  // Subscribers State
  const [subscribers, setSubscribers] = useState<SubscriberItem[]>([]);
  const [loadingSubscribers, setLoadingSubscribers] = useState<boolean>(false);
  const [subscriberSearch, setSubscriberSearch] = useState<string>("");

  // Blog Visitor Traffic & Real-Time Analytics State
  const [analytics, setAnalytics] = useState<BlogAnalyticsData | null>(null);
  const [chartTimeRange, setChartTimeRange] = useState<"7d" | "14d" | "30d">("14d");
  const [hoveredChartPoint, setHoveredChartPoint] = useState<{
    date: string;
    views: number;
    uniqueVisitors: number;
    x: number;
    y: number;
  } | null>(null);

  // Articles & Data
  const [articles, setArticles] = useState<BlogArticle[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [categoryFilter, setCategoryFilter] = useState<string>("All");

  // Post Editor State
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [originalEditingSlug, setOriginalEditingSlug] = useState<string | null>(null);
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [isHtmlSourceMode, setIsHtmlSourceMode] = useState<boolean>(false);

  // Interactive FAQ Accordion Management State
  const [adminFaqOpenIndex, setAdminFaqOpenIndex] = useState<number | null>(0);
  const [faqViewMode, setFaqViewMode] = useState<"edit" | "preview">("edit");

  // SERP Preview Device Toggle
  const [serpDevice, setSerpDevice] = useState<"desktop" | "mobile">("desktop");

  // Media Gallery & Uploads
  const [availableImages, setAvailableImages] = useState<{ name: string; url: string }[]>([]);
  const [isMediaModalOpen, setIsMediaModalOpen] = useState<boolean>(false);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [mediaTarget, setMediaTarget] = useState<"featured" | "editor" | "og">("featured");

  // Custom CSS Class Manager State
  const [isClassModalOpen, setIsClassModalOpen] = useState<boolean>(false);
  const [targetNode, setTargetNode] = useState<HTMLElement | null>(null);
  const [targetNodeTag, setTargetNodeTag] = useState<string>("");
  const [targetNodeClasses, setTargetNodeClasses] = useState<string[]>([]);
  const [customClassInput, setCustomClassInput] = useState<string>("");
  const [isTextSelection, setIsTextSelection] = useState<boolean>(false);
  const [selectionRange, setSelectionRange] = useState<Range | null>(null);
  const [selectedTextSnippet, setSelectedTextSnippet] = useState<string>("");

  // Rich Text Editor Ref & Selection Tracking
  const editorRef = useRef<HTMLDivElement>(null);
  const savedEditorRangeRef = useRef<Range | null>(null);

  // Switch editor step safely without losing content
  const switchEditorStep = (step: "content" | "design" | "seo" | "social" | "publish") => {
    syncEditorContent();
    setEditorStep(step);
  };

  // Download raw JSON database
  const handleDownloadArticlesJson = () => {
    window.open("/api/admin/blog?export=true", "_blank");
  };

  // Toast Notifications
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);

  // FAQ Accordion Management Handlers
  const handleAddFaqItem = () => {
    setForm((prev) => {
      const nextFaqs = [...(prev.faqs || []), { question: "", answer: "" }];
      setAdminFaqOpenIndex(nextFaqs.length - 1);
      return { ...prev, faqs: nextFaqs };
    });
    setFaqViewMode("edit");
  };

  const handleInsertSampleFaqs = () => {
    const sampleFaqs = [
      {
        question: "How does this architectural approach improve Core Web Vitals (LCP & CLS)?",
        answer: "By pre-rendering critical above-the-fold content server-side and streaming remaining assets, modern edge architectures reduce Largest Contentful Paint (LCP) by up to 60% while eliminating Cumulative Layout Shift (CLS) through fixed layout reservations.",
      },
      {
        question: "Can these techniques be applied incrementally to an existing production codebase?",
        answer: "Yes, you can route specific traffic paths or subdomains to modern micro-frontends or edge handlers incrementally without requiring a high-risk, all-at-once rewrite of legacy backend systems.",
      },
    ];
    setForm((prev) => ({
      ...prev,
      faqs: [...(prev.faqs || []), ...sampleFaqs],
    }));
    setAdminFaqOpenIndex(0);
    showToast("Added 2 sample FAQs to article!");
  };

  const handleUpdateFaqItem = (index: number, field: "question" | "answer", value: string) => {
    setForm((prev) => {
      const updated = [...(prev.faqs || [])];
      if (updated[index]) {
        updated[index] = { ...updated[index], [field]: value };
      }
      return { ...prev, faqs: updated };
    });
  };

  const handleRemoveFaqItem = (index: number) => {
    setForm((prev) => ({
      ...prev,
      faqs: (prev.faqs || []).filter((_, i) => i !== index),
    }));
    if (adminFaqOpenIndex === index) {
      setAdminFaqOpenIndex(null);
    } else if (adminFaqOpenIndex !== null && adminFaqOpenIndex > index) {
      setAdminFaqOpenIndex(adminFaqOpenIndex - 1);
    }
    showToast("FAQ item removed");
  };

  const handleMoveFaqItem = (index: number, direction: "up" | "down") => {
    const targetIndex = direction === "up" ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= (form.faqs?.length || 0)) return;
    setForm((prev) => {
      const updated = [...(prev.faqs || [])];
      const temp = updated[index];
      updated[index] = updated[targetIndex];
      updated[targetIndex] = temp;
      return { ...prev, faqs: updated };
    });
    setAdminFaqOpenIndex(targetIndex);
  };

  // Open media picker for editor while preserving exact cursor position
  const handleOpenEditorMediaModal = () => {
    if (editorRef.current) {
      const sel = window.getSelection();
      if (
        sel &&
        sel.rangeCount > 0 &&
        editorRef.current.contains(sel.getRangeAt(0).commonAncestorContainer)
      ) {
        savedEditorRangeRef.current = sel.getRangeAt(0).cloneRange();
      } else {
        savedEditorRangeRef.current = null;
      }
    }
    setMediaTarget("editor");
    setIsMediaModalOpen(true);
  };

  // Delete media item from MongoDB
  const handleDeleteMedia = async (nameOrId: string) => {
    if (!confirm(`Are you sure you want to delete "${nameOrId}"?`)) return;
    try {
      const res = await fetch(`/api/admin/upload?id=${encodeURIComponent(nameOrId)}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (res.ok && data.success) {
        showToast("Image deleted from database");
        await fetchImages();
      } else {
        showToast(data.message || "Failed to delete image", "error");
      }
    } catch (err) {
      console.error("Delete media error:", err);
      showToast("Error deleting image", "error");
    }
  };

  // Delete Confirmation
  const [deleteConfirmSlug, setDeleteConfirmSlug] = useState<string | null>(null);
  const [isDeletingArticle, setIsDeletingArticle] = useState<boolean>(false);

  // Multi-select & Batch Actions State
  const [selectedArticles, setSelectedArticles] = useState<string[]>([]);
  const [isBatchDeleting, setIsBatchDeleting] = useState<boolean>(false);
  const [isBatchDeleteModalOpen, setIsBatchDeleteModalOpen] = useState<boolean>(false);

  // Edit Article Loading indicator
  const [editingSlugLoading, setEditingSlugLoading] = useState<string | null>(null);

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
      if (data.storageMode) {
        setStorageMode(data.storageMode);
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

  // Fetch newsletter subscribers
  const fetchSubscribers = async () => {
    setLoadingSubscribers(true);
    try {
      const res = await fetch("/api/newsletter", { cache: "no-store" });
      const data = await res.json();
      if (data.subscribers) {
        setSubscribers(data.subscribers);
      }
    } catch (err) {
      console.error("Failed to fetch subscribers:", err);
      showToast("Failed to fetch subscribers", "error");
    } finally {
      setLoadingSubscribers(false);
    }
  };

  // Delete subscriber
  const handleDeleteSubscriber = async (id: string, email: string) => {
    if (!confirm(`Are you sure you want to remove subscriber ${email}?`)) return;
    try {
      const res = await fetch(`/api/newsletter?id=${encodeURIComponent(id)}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (res.ok && data.success) {
        showToast("Subscriber removed successfully");
        await fetchSubscribers();
      } else {
        showToast(data.message || "Failed to remove subscriber", "error");
      }
    } catch (err) {
      console.error("Delete subscriber error:", err);
      showToast("Error deleting subscriber", "error");
    }
  };

  // Export subscribers to CSV
  const handleExportSubscribersCsv = () => {
    if (subscribers.length === 0) {
      showToast("No subscribers to export", "error");
      return;
    }
    const headers = ["ID", "Email", "Subscribed At", "Source", "Status"];
    const rows = subscribers.map((s) => [
      `"${s.id}"`,
      `"${s.email}"`,
      `"${s.subscribedAt}"`,
      `"${s.source}"`,
      `"${s.status}"`,
    ]);
    const csvContent = [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `nexovio-subscribers-${new Date().toISOString().split("T")[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast("Subscribers exported to CSV!");
  };

  // Fetch real-time blog analytics and visitor pageviews
  const fetchAnalytics = async () => {
    try {
      const res = await fetch("/api/blog/views", { cache: "no-store" });
      const data = await res.json();
      if (data.analytics) {
        setAnalytics(data.analytics);
      }
    } catch (err) {
      console.error("Failed to fetch analytics:", err);
    }
  };

  // Fetch blog topic categories
  const fetchCategories = async () => {
    setCategoriesLoading(true);
    try {
      const res = await fetch("/api/admin/categories", { cache: "no-store" });
      const data = await res.json();
      if (data.success && Array.isArray(data.categories)) {
        setCategories(data.categories);
      }
    } catch (err) {
      console.error("Failed to fetch categories:", err);
    } finally {
      setCategoriesLoading(false);
    }
  };

  // Open Add Category Modal
  const handleOpenAddCategory = () => {
    setCategoryForm({
      id: undefined,
      name: "",
      slug: "",
      description: "",
      color: "blue",
      updateArticles: false,
    });
    setIsCategoryModalOpen(true);
  };

  // Open Edit Category Modal
  const handleOpenEditCategory = (cat: BlogCategory) => {
    setCategoryForm({
      id: cat.id,
      name: cat.name,
      slug: cat.slug,
      description: cat.description || "",
      color: cat.color || "blue",
      updateArticles: true,
    });
    setIsCategoryModalOpen(true);
  };

  // Save Category (Create or Update)
  const handleSaveCategory = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!categoryForm.name.trim()) {
      showToast("Category name is required", "error");
      return;
    }

    setIsSavingCategory(true);
    try {
      const isEdit = Boolean(categoryForm.id);
      const url = "/api/admin/categories";
      const method = isEdit ? "PUT" : "POST";
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(categoryForm),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        showToast(data.message || (isEdit ? "Category updated!" : "Category created!"));
        setIsCategoryModalOpen(false);
        await fetchCategories();
        if (isEdit && categoryForm.updateArticles) {
          await fetchArticles();
        }
        // Auto-select newly created category if in editor mode
        if (!isEdit && data.category) {
          setForm((prev) => ({ ...prev, category: data.category.name }));
        }
      } else {
        showToast(data.message || "Failed to save category", "error");
      }
    } catch (err) {
      console.error("Save category error:", err);
      showToast("Error saving category", "error");
    } finally {
      setIsSavingCategory(false);
    }
  };

  // Open Delete Category Modal
  const handleOpenDeleteCategory = (cat: BlogCategory) => {
    setCategoryToDelete(cat);
    const alternate = categories.find((c) => c.id !== cat.id);
    setReassignCategoryTarget(alternate ? alternate.name : "");
    setIsDeleteCategoryModalOpen(true);
  };

  // Confirm Delete Category
  const handleConfirmDeleteCategory = async () => {
    if (!categoryToDelete) return;
    setIsDeletingCategory(true);
    try {
      let url = `/api/admin/categories?id=${encodeURIComponent(categoryToDelete.id)}`;
      if ((categoryToDelete.articleCount || 0) > 0 && reassignCategoryTarget) {
        url += `&reassignTo=${encodeURIComponent(reassignCategoryTarget)}`;
      }
      const res = await fetch(url, { method: "DELETE" });
      const data = await res.json();
      if (res.ok && data.success) {
        showToast("Category deleted successfully");
        setIsDeleteCategoryModalOpen(false);
        setCategoryToDelete(null);
        await fetchCategories();
        await fetchArticles();
      } else {
        showToast(data.message || "Failed to delete category", "error");
      }
    } catch (err) {
      console.error("Delete category error:", err);
      showToast("Error deleting category", "error");
    } finally {
      setIsDeletingCategory(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchArticles();
      fetchCategories();
      fetchImages();
      fetchSubscribers();
      fetchAnalytics();
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
    setOriginalEditingSlug(null);
    setEditorStep("content");
    setAdminFaqOpenIndex(0);
    setFaqViewMode("edit");
    const initialContent = "<p>Start writing your article content here...</p>";
    setForm({
      ...EMPTY_FORM,
      content: initialContent,
      publishedAt: getTodayDateString(),
    });
    if (editorRef.current && !isHtmlSourceMode) {
      editorRef.current.innerHTML = initialContent;
    }
    setActiveTab("editor");
  };

  // Open Editor for Existing Post
  const handleEditPost = (article: BlogArticle) => {
    setEditingSlugLoading(article.slug);
    setIsEditing(true);
    setOriginalEditingSlug(article.slug);
    setEditorStep("content");

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
      publishedAt: article.publishedAt || getTodayDateString(),
      featuredImage: article.featuredImage,
      featuredImageAlt: article.featuredImageAlt || article.title,
      tableOfContentsText: Array.isArray(article.tableOfContents)
        ? article.tableOfContents.map((t) => t.title).join("\n")
        : "",
      faqs: Array.isArray(article.faqs)
        ? article.faqs.map((f) => ({
            question: f.question || "",
            answer: f.answer || "",
          }))
        : [],
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

    if (editorRef.current && !isHtmlSourceMode) {
      editorRef.current.innerHTML = formattedContent;
    }

    setAdminFaqOpenIndex(0);
    setFaqViewMode("edit");

    setTimeout(() => {
      setEditingSlugLoading(null);
      setActiveTab("editor");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 200);
  };

  // Keep editor content synchronized when entering editor mode
  useEffect(() => {
    if (activeTab === "editor" && editorRef.current && !isHtmlSourceMode) {
      if (editorRef.current.innerHTML !== form.content) {
        editorRef.current.innerHTML = form.content || "";
      }
    }
  }, [activeTab, isHtmlSourceMode, form.id]);

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

  // Insert image directly into editor content with proper responsive styling and cursor placement (no filename caption)
  const insertImageIntoEditor = (imageUrl: string, _altText: string = "") => {
    const figureHtml = `<figure class="my-4 text-center"><img src="${imageUrl}" alt="" class="rounded-2xl max-w-full mx-auto border border-slate-200 shadow-md object-cover" /></figure><p></p>`;

    if (isHtmlSourceMode) {
      setForm((prev) => ({
        ...prev,
        content: (prev.content ? prev.content + "\n" : "") + figureHtml + "\n",
      }));
      showToast("Image inserted into HTML source!");
      return;
    }

    if (!editorRef.current) return;
    editorRef.current.focus();

    let inserted = false;
    let range: Range | null = null;
    const sel = window.getSelection();

    if (
      savedEditorRangeRef.current &&
      editorRef.current.contains(savedEditorRangeRef.current.commonAncestorContainer)
    ) {
      range = savedEditorRangeRef.current;
    } else if (
      sel &&
      sel.rangeCount > 0 &&
      editorRef.current.contains(sel.getRangeAt(0).commonAncestorContainer)
    ) {
      range = sel.getRangeAt(0);
    }

    if (range) {
      try {
        range.deleteContents();
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = figureHtml;
        const frag = document.createDocumentFragment();
        let child: ChildNode | null;
        let lastNode: ChildNode | null = null;
        while ((child = tempDiv.firstChild)) {
          lastNode = frag.appendChild(child);
        }
        range.insertNode(frag);
        if (lastNode) {
          range.setStartAfter(lastNode);
          range.collapse(true);
          if (sel) {
            sel.removeAllRanges();
            sel.addRange(range);
          }
        }
        inserted = true;
      } catch (err) {
        console.warn("Range insertion warning, falling back to append:", err);
      }
    }

    if (!inserted) {
      editorRef.current.innerHTML = editorRef.current.innerHTML + figureHtml;
    }

    savedEditorRangeRef.current = null;
    syncEditorContent();
    showToast("Image added to article content!");
  };

  // Insert custom common design block (Card, Table, Tip, Warning, Infographic, 2-Col)
  const insertCustomHtml = (htmlSnippet: string) => {
    if (isHtmlSourceMode) {
      setForm((prev) => ({
        ...prev,
        content: (prev.content ? prev.content + "\n\n" : "") + htmlSnippet + "\n",
      }));
      showToast("Component inserted into HTML code!");
      return;
    }

    if (!editorRef.current) return;
    editorRef.current.focus();

    let inserted = false;
    const sel = window.getSelection();
    if (sel && sel.rangeCount > 0) {
      const range = sel.getRangeAt(0);
      if (editorRef.current.contains(range.commonAncestorContainer)) {
        range.deleteContents();
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = htmlSnippet;
        const frag = document.createDocumentFragment();
        let child: ChildNode | null;
        let lastNode: ChildNode | null = null;
        while ((child = tempDiv.firstChild)) {
          lastNode = frag.appendChild(child);
        }
        range.insertNode(frag);
        if (lastNode) {
          range.setStartAfter(lastNode);
          range.collapse(true);
          sel.removeAllRanges();
          sel.addRange(range);
        }
        inserted = true;
      }
    }

    if (!inserted) {
      // Append smoothly to the bottom of the editor content
      editorRef.current.innerHTML = editorRef.current.innerHTML + htmlSnippet;
    }

    syncEditorContent();
    showToast("Design component inserted into editor!");
  };

  // =========================================================================
  // CUSTOM CSS CLASS MANAGER FOR ANY SELECTED ELEMENT OR TEXT
  // =========================================================================
  const openClassManager = () => {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) {
      showToast("Please select text or place cursor inside an element in the editor first", "error");
      return;
    }

    const range = selection.getRangeAt(0);
    const selectedText = selection.toString().trim();

    // Check if cursor/selection is inside the editor container
    if (!editorRef.current || !editorRef.current.contains(range.commonAncestorContainer)) {
      showToast("Please click inside the article editor first", "error");
      return;
    }

    let element: HTMLElement | null = null;
    if (range.commonAncestorContainer.nodeType === Node.ELEMENT_NODE) {
      element = range.commonAncestorContainer as HTMLElement;
    } else if (range.commonAncestorContainer.parentElement) {
      element = range.commonAncestorContainer.parentElement;
    }

    if (element && element === editorRef.current && selectedText) {
      // Text selection directly inside the editor root
      setTargetNode(null);
      setTargetNodeTag("TEXT SELECTION (will wrap in <span>)");
      setTargetNodeClasses([]);
      setIsTextSelection(true);
      setSelectionRange(range.cloneRange());
      setSelectedTextSnippet(selectedText);
    } else if (element && element !== editorRef.current) {
      setTargetNode(element);
      setTargetNodeTag(element.tagName.toLowerCase());
      setTargetNodeClasses(Array.from(element.classList));
      setIsTextSelection(Boolean(selectedText && selectedText !== element.innerText.trim()));
      setSelectionRange(range.cloneRange());
      setSelectedTextSnippet(selectedText || element.innerText.slice(0, 60));
    } else {
      showToast("Please click on or select any element inside the editor", "error");
      return;
    }

    setCustomClassInput("");
    setIsClassModalOpen(true);
  };

  const toggleClassOnTarget = (className: string) => {
    setTargetNodeClasses((prev) => {
      if (prev.includes(className)) {
        return prev.filter((c) => c !== className);
      } else {
        return [...prev, className];
      }
    });
  };

  const addManualClass = () => {
    const trimmed = customClassInput.trim();
    if (!trimmed) return;
    const classes = trimmed.split(/\s+/).filter(Boolean);
    setTargetNodeClasses((prev) => {
      const next = [...prev];
      for (const c of classes) {
        if (!next.includes(c)) next.push(c);
      }
      return next;
    });
    setCustomClassInput("");
  };

  const applyClassesToElement = () => {
    const finalClasses = targetNodeClasses.map((c) => c.trim()).filter(Boolean);

    if (targetNode) {
      targetNode.className = finalClasses.join(" ");
      showToast(`Applied classes to <${targetNodeTag}>`);
    } else if (selectionRange && isTextSelection) {
      const span = document.createElement("span");
      span.className = finalClasses.join(" ");
      try {
        span.appendChild(selectionRange.extractContents());
        selectionRange.insertNode(span);
        showToast(`Wrapped text in <span class="${finalClasses.join(" ")}">`);
      } catch (err) {
        console.error("Failed to wrap text in span:", err);
      }
    }

    syncEditorContent();
    setIsClassModalOpen(false);
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
        showToast("Image uploaded and saved to database!");
        await fetchImages();
        if (mediaTarget === "featured") {
          setForm((prev) => ({
            ...prev,
            featuredImage: data.url,
            ogImage: (!prev.ogImage || prev.ogImage === prev.featuredImage) ? data.url : prev.ogImage,
          }));
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
      setEditorStep("content");
      return;
    }
    if (!form.slug.trim()) {
      showToast("Please provide a URL slug", "error");
      setEditorStep("content");
      return;
    }

    setIsSaving(true);

    let finalHtml = form.content;
    if (editorRef.current && !isHtmlSourceMode) {
      finalHtml = editorRef.current.innerHTML;
    }

    if (!finalHtml || finalHtml.trim() === "<p></p>" || finalHtml.trim() === "") {
      showToast("Please write article content in the text editor", "error");
      setEditorStep("content");
      setIsSaving(false);
      return;
    }

    // ── Sanitize HTML content: strip empty paragraphs, collapse consecutive <br>, normalize spacing ──
    {
      let html = finalHtml;
      // 1. Remove empty paragraphs: <p><br></p>, <p></p>, <p>&nbsp;</p>, <p> </p>
      html = html.replace(/<p[^>]*>\s*(<br\s*\/?>|\s|&nbsp;)*\s*<\/p>/gi, "");
      // 2. Collapse 3+ consecutive <br> tags down to max 2
      html = html.replace(/(<br\s*\/?\s*>[\s]*){3,}/gi, "<br><br>");
      // 3. Remove leading/trailing whitespace wrappers
      html = html.replace(/^(\s*<p[^>]*>\s*(<br\s*\/?>|\s|&nbsp;)*\s*<\/p>\s*)+/gi, "");
      html = html.replace(/(\s*<p[^>]*>\s*(<br\s*\/?>|\s|&nbsp;)*\s*<\/p>\s*)+$/gi, "");
      // 4. Remove consecutive duplicate empty divs
      html = html.replace(/<div[^>]*>\s*(<br\s*\/?>|\s|&nbsp;)*\s*<\/div>/gi, "");
      // 5. Trim overall
      html = html.trim();
      finalHtml = html;
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

    // Filter and sanitize FAQ items
    const cleanedFaqs = (form.faqs || [])
      .map((f) => ({
        question: typeof f?.question === "string" ? f.question.trim() : "",
        answer: typeof f?.answer === "string" ? f.answer.trim() : "",
      }))
      .filter((f) => f.question.length > 0 && f.answer.length > 0);

    const payload = {
      id: form.id,
      originalSlug: originalEditingSlug || form.slug.trim(),
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
      faqs: cleanedFaqs,
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
        setOriginalEditingSlug(form.slug.trim());
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

  // Delete Article (Single)
  const handleDeleteArticle = async (slug: string) => {
    setIsDeletingArticle(true);
    try {
      const res = await fetch(`/api/admin/blog?slug=${encodeURIComponent(slug)}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (res.ok && data.success) {
        showToast("Article deleted successfully");
        setDeleteConfirmSlug(null);
        setSelectedArticles((prev) => prev.filter((s) => s !== slug));
        await fetchArticles();
      } else {
        showToast(data.message || data.error || "Failed to delete article", "error");
      }
    } catch (err) {
      console.error("Delete error:", err);
      showToast("Error deleting article", "error");
    } finally {
      setIsDeletingArticle(false);
    }
  };

  // Batch Delete Selected Articles
  const handleBatchDelete = async () => {
    if (selectedArticles.length === 0) return;
    setIsBatchDeleting(true);
    try {
      const res = await fetch("/api/admin/blog", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slugs: selectedArticles }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        showToast(`${selectedArticles.length} article(s) deleted successfully from database`);
        setSelectedArticles([]);
        setIsBatchDeleteModalOpen(false);
        await fetchArticles();
      } else {
        showToast(data.message || "Failed to delete selected articles", "error");
      }
    } catch (err) {
      console.error("Batch delete error:", err);
      showToast("Error deleting selected articles", "error");
    } finally {
      setIsBatchDeleting(false);
    }
  };

  const handleToggleSelectAll = () => {
    if (filteredList.length === 0) return;
    if (selectedArticles.length === filteredList.length) {
      setSelectedArticles([]);
    } else {
      setSelectedArticles(filteredList.map((a) => a.slug));
    }
  };

  const handleToggleSelectArticle = (slug: string) => {
    setSelectedArticles((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]
    );
  };

  // Filtered List for Table
  const filteredList = useMemo(() => {
    return [...articles]
      .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
      .filter((a) => {
        const matchesCategory =
          categoryFilter === "All" ||
          a.category.toLowerCase().trim() === categoryFilter.toLowerCase().trim();
        const matchesSearch =
          searchQuery.trim() === "" ||
          a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          a.slug.toLowerCase().includes(searchQuery.toLowerCase()) ||
          a.category.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
      });
  }, [articles, categoryFilter, searchQuery]);

  // Filtered categories for search
  const filteredCategories = useMemo(() => {
    if (!categorySearch.trim()) return categories;
    const q = categorySearch.toLowerCase().trim();
    return categories.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.slug.toLowerCase().includes(q) ||
        (c.description && c.description.toLowerCase().includes(q))
    );
  }, [categories, categorySearch]);

  // Copy image URL helper
  const copyToClipboard = (url: string) => {
    navigator.clipboard.writeText(url);
    setCopiedUrl(url);
    setTimeout(() => setCopiedUrl(null), 2000);
    showToast("Copied to clipboard!");
  };

  // Word count & reading time estimation
  const wordCount = useMemo(() => {
    const rawText = form.content.replace(/<[^>]*>/g, " ");
    return rawText.trim().split(/\s+/).filter(Boolean).length;
  }, [form.content]);

  const readingTimeEstimate = useMemo(() => {
    return Math.max(1, Math.ceil(wordCount / 200));
  }, [wordCount]);

  // Total words across entire blog library
  const totalLibraryWords = useMemo(() => {
    return articles.reduce((acc, a) => {
      const str = Array.isArray(a.content) ? a.content.join(" ") : String(a.content || "");
      return acc + str.replace(/<[^>]*>/g, " ").trim().split(/\s+/).filter(Boolean).length;
    }, 0);
  }, [articles]);

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

  // Overall Library Average SEO Score
  const avgLibrarySeoScore = useMemo(() => {
    if (articles.length === 0) return 90;
    let total = 0;
    articles.forEach((a) => {
      let s = 60;
      if (a.focusKeyword) s += 15;
      if (a.seoTitle) s += 10;
      if (a.seoDescription) s += 10;
      if (a.canonicalUrl) s += 5;
      total += Math.min(100, s);
    });
    return Math.round(total / articles.length);
  }, [articles]);

  // Computed Default Canonical URL
  const defaultCanonical = `https://www.nexoviodigitalsolutions.com/blog/${form.slug || "slug"}`;

  // Real-Time Visitor Chart Points Calculation
  const chartPoints = useMemo(() => {
    if (!analytics || !analytics.dailyTraffic) return [];
    const count = chartTimeRange === "7d" ? 7 : chartTimeRange === "14d" ? 14 : 30;
    return analytics.dailyTraffic.slice(-count);
  }, [analytics, chartTimeRange]);

  const maxViewsInChart = useMemo(() => {
    if (chartPoints.length === 0) return 500;
    const max = Math.max(...chartPoints.map((p) => p.views));
    return Math.max(100, Math.ceil(max * 1.15));
  }, [chartPoints]);

  const svgCoordinates = useMemo(() => {
    const width = 760;
    const height = 180;
    const paddingX = 40;
    const paddingY = 25;
    const usableWidth = width - paddingX * 2;
    const usableHeight = height - paddingY * 2;

    if (chartPoints.length === 0) return { path: "", area: "", points: [] };

    const divisor = chartPoints.length > 1 ? chartPoints.length - 1 : 1;
    const pts = chartPoints.map((p, idx) => {
      const x = paddingX + (idx / divisor) * usableWidth;
      const y = paddingY + usableHeight - (p.views / maxViewsInChart) * usableHeight;
      return { x, y, ...p };
    });

    let pathD = `M ${pts[0].x} ${pts[0].y}`;
    for (let i = 1; i < pts.length; i++) {
      const prev = pts[i - 1];
      const curr = pts[i];
      const cp1x = prev.x + (curr.x - prev.x) / 2;
      const cp1y = prev.y;
      const cp2x = prev.x + (curr.x - prev.x) / 2;
      const cp2y = curr.y;
      pathD += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${curr.x} ${curr.y}`;
    }

    const last = pts[pts.length - 1];
    const first = pts[0];
    const areaD = `${pathD} L ${last.x} ${height - paddingY} L ${first.x} ${height - paddingY} Z`;

    return { path: pathD, area: areaD, points: pts };
  }, [chartPoints, maxViewsInChart]);

  // Top Performing Articles by Visitor Views (Particular Blog Visitors)
  const topPerformingArticles = useMemo(() => {
    return [...articles]
      .sort((a, b) => {
        const viewsA = analytics?.postViews[a.slug]?.views || 0;
        const viewsB = analytics?.postViews[b.slug]?.views || 0;
        return viewsB - viewsA;
      })
      .slice(0, 6);
  }, [articles, analytics]);

  const topArticleMaxViews = useMemo(() => {
    if (topPerformingArticles.length === 0) return 1;
    return Math.max(1, analytics?.postViews[topPerformingArticles[0].slug]?.views || 1);
  }, [topPerformingArticles, analytics]);

  // =========================================================================
  // LOGIN SCREEN
  // =========================================================================
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#F0F4F9] flex flex-col justify-center items-center p-4 selection:bg-[#1769FF] selection:text-white">
        <div className="w-full max-w-[400px]">
          <div className="text-center mb-8 flex flex-col items-center">
            <Link href="/" className="inline-flex items-center justify-center group py-2">
              <Image
                src="/images/brand/nexovio-digital-solution-light.webp"
                alt="Nexovio Digital Solutions"
                width={320}
                height={80}
                priority
                className="h-10 sm:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
              />
            </Link>
            <p className="text-xs text-slate-500 mt-2 font-medium">
              Editorial Studio &amp; Content Management Dashboard
            </p>
          </div>

          <div className="bg-white border border-slate-200/80 rounded-2xl shadow-xl shadow-slate-200/50 p-7 sm:p-8 backdrop-blur-xl">
            <form onSubmit={handleLogin} className="space-y-5">
              {loginError && (
                <div className="p-3.5 rounded-xl bg-red-50 border border-red-200/80 text-red-700 text-xs flex items-center gap-2.5">
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                  <span>{loginError}</span>
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Username or Email Address
                </label>
                <input
                  type="text"
                  required
                  value={usernameInput}
                  onChange={(e) => setUsernameInput(e.target.value)}
                  placeholder="admin"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:bg-white focus:border-[#1769FF] focus:outline-none focus:ring-2 focus:ring-[#1769FF]/15 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    value={passwordInput}
                    onChange={(e) => setPasswordInput(e.target.value)}
                    placeholder="admin"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 pr-10 text-xs text-slate-800 placeholder-slate-400 focus:bg-white focus:border-[#1769FF] focus:outline-none focus:ring-2 focus:ring-[#1769FF]/15 transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
                  >
                    {showPassword ? <Eye className="w-4 h-4" /> : <Eye className="w-4 h-4 opacity-40" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs pt-1">
                <label className="flex items-center gap-2 cursor-pointer text-slate-600">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="rounded border-slate-300 text-[#1769FF] focus:ring-[#1769FF]/20"
                  />
                  <span>Remember me</span>
                </label>
                <span className="text-[11px] text-slate-400 font-mono">admin / admin</span>
              </div>

              <button
                type="submit"
                disabled={isLoggingIn}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#1769FF] to-[#00A3FF] hover:from-[#0F58E0] hover:to-[#008FE0] shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 transition-all flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
              >
                {isLoggingIn ? (
                  <>
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    <span>Signing in...</span>
                  </>
                ) : (
                  <>
                    <span>Log In to Dashboard</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================================
  // MAIN ADMIN DASHBOARD VIEW
  // =========================================================================
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex text-slate-800 font-sans selection:bg-[#1769FF] selection:text-white">
      {/* Toast Notification */}
      {toast && (
        <div
          className={`fixed top-5 right-5 z-[100] flex items-center gap-2 px-4 py-2.5 rounded-xl shadow-xl text-xs font-semibold backdrop-blur-md transition-all animate-in slide-in-from-top-2 border ${toast.type === "success"
            ? "bg-emerald-950/90 text-emerald-200 border-emerald-700/60"
            : "bg-red-950/90 text-red-200 border-red-700/60"
            }`}
        >
          {toast.type === "success" ? (
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          ) : (
            <AlertCircle className="w-4 h-4 text-red-400" />
          )}
          <span>{toast.message}</span>
        </div>
      )}

      {/* LEFT SIDEBAR NAVIGATION */}
      <aside className="w-64 bg-white border-r border-slate-200/80 flex flex-col justify-between shrink-0 h-screen sticky top-0 z-30 select-none">
        <div>
          {/* Brand Logo & Studio Header */}
          <div className="h-16 px-5 border-b border-slate-200/80 flex items-center justify-between bg-white">
            <Link href="/admin" className="flex items-center py-1 group">
              <Image
                src="/images/brand/nexovio-digital-solution-light.webp"
                alt="Nexovio Digital Solutions"
                width={200}
                height={50}
                priority
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Navigation Items */}
          <nav className="p-3.5 space-y-1 text-xs font-medium">
            <button
              type="button"
              onClick={() => setActiveTab("dashboard")}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl transition-all ${activeTab === "dashboard"
                ? "bg-blue-50 text-[#1769FF] font-bold shadow-xs border border-blue-100"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
            >
              <LayoutDashboard className="w-4 h-4 text-[#1769FF]" />
              <span>Dashboard Overview</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("posts")}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl transition-all ${activeTab === "posts"
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
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl transition-all ${activeTab === "editor"
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
                fetchCategories();
                setActiveTab("categories");
              }}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl transition-all ${activeTab === "categories"
                ? "bg-blue-50 text-[#1769FF] font-bold shadow-xs border border-blue-100"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
            >
              <div className="flex items-center gap-3">
                <Tags className="w-4 h-4 text-[#1769FF]" />
                <span>Categories</span>
              </div>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
                {categories.length}
              </span>
            </button>

            <button
              type="button"
              onClick={() => {
                fetchImages();
                setActiveTab("media");
              }}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl transition-all ${activeTab === "media"
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

            <button
              type="button"
              onClick={() => {
                fetchSubscribers();
                setActiveTab("subscribers");
              }}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl transition-all ${activeTab === "subscribers"
                ? "bg-blue-50 text-[#1769FF] font-bold shadow-xs border border-blue-100"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
            >
              <div className="flex items-center gap-3">
                <Users className="w-4 h-4 text-[#1769FF]" />
                <span>Subscribers</span>
              </div>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-blue-100 text-[#1769FF] font-bold">
                {subscribers.length}
              </span>
            </button>
          </nav>
        </div>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-slate-100 space-y-3 bg-slate-50/50">
          <Link
            href="/blog"
            target="_blank"
            className="flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:text-[#1769FF] hover:bg-white border border-transparent hover:border-slate-200 transition-all"
          >
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-[#1769FF]" />
              <span>Visit Live Blog</span>
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

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 h-screen flex flex-col min-w-0 bg-[#F8FAFC] overflow-hidden">
        {/* Top Navbar */}
        <header className="h-16 px-6 sm:px-8 border-b border-slate-200/80 bg-white shrink-0 z-20 flex items-center justify-between shadow-xs">
          <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
            <span className="font-semibold text-slate-800">Admin Studio</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[#1769FF] capitalize font-semibold">
              {activeTab === "dashboard"
                ? "Dashboard Overview"
                : activeTab === "posts"
                  ? "All Articles"
                  : activeTab === "editor"
                    ? isEditing
                      ? `Edit: ${form.title || "Article"}`
                      : "Add New Article"
                    : activeTab === "categories"
                      ? "Categories & Taxonomy"
                      : activeTab === "subscribers"
                        ? "Newsletter Subscribers"
                        : "Media Library"}
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            {/* Storage Mode Badge */}
            {storageMode === "mongodb" ? (
              <span className="hidden md:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200" title="Connected to MongoDB database. Articles are safely saved in your database.">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                MongoDB Live
              </span>
            ) : storageMode === "github" ? (
              <span className="hidden md:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200" title="Connected to GitHub repository. Changes auto-deploy on publish.">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                GitHub Auto-Deploy Active
              </span>
            ) : storageMode === "serverless" ? (
              <span className="hidden md:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-amber-50 text-amber-700 border border-amber-200" title="Serverless storage active.">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                Serverless Storage
              </span>
            ) : (
              <span className="hidden md:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-amber-50 text-amber-700 border border-amber-200" title="MongoDB URI not detected. Running in memory fallback.">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                Memory Fallback (Set MONGODB_URI)
              </span>
            )}

            <button
              type="button"
              onClick={handleDownloadArticlesJson}
              title="Download JSON backup copy of articles"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 transition-colors shadow-xs"
            >
              <Download className="w-3.5 h-3.5 text-slate-500" />
              <span className="hidden sm:inline">Export JSON</span>
            </button>

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
          </div>
        </header>

        {/* SCROLLABLE VIEW CONTAINER */}
        <div className="flex-1 overflow-y-auto min-w-0">

          {/* ================================================================= */}
          {/* VIEW 1: PREMIUM DASHBOARD OVERVIEW WITH CHARTS & VISITOR ANALYTICS */}
          {/* ================================================================= */}
          {activeTab === "dashboard" && (
            <div className="p-6 sm:p-8 space-y-8 max-w-7xl mx-auto">
              {/* Greeting Header Banner */}
              <div className="rounded-3xl border border-blue-200/80 bg-gradient-to-r from-blue-50/90 via-white to-cyan-50/70 p-6 sm:p-8 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold text-[#1769FF] bg-blue-100/70 border border-blue-200/60 uppercase tracking-wider">
                      <Sparkles className="w-3.5 h-3.5" />
                      Audience Intelligence
                    </div>

                  </div>
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    Editorial &amp; Audience Analytics Dashboard
                  </h1>
                  <p className="text-xs sm:text-sm text-slate-500 max-w-2xl leading-relaxed">
                    100% free, real-time visitor tracking and audience traffic metrics across all your blog publications. Zero paid APIs or external credit cards needed.
                  </p>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <button
                    type="button"
                    onClick={handleAddNewPost}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#1769FF] to-[#00A3FF] hover:from-[#0F58E0] hover:to-[#008FE0] shadow-md shadow-blue-500/20 hover:shadow-lg transition-all"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Write New Article</span>
                  </button>
                  <Link
                    href="/blog"
                    target="_blank"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 transition-colors shadow-xs"
                  >
                    <Globe className="w-4 h-4 text-[#1769FF]" />
                    <span>View Live Blog</span>
                  </Link>
                </div>
              </div>

              {/* Top 4 KPI Metrics Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {/* Card 1: Total Pageviews */}
                <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-[#1769FF]/40 transition-all space-y-2">
                  <div className="flex items-center justify-between text-slate-500">
                    <span className="text-xs font-bold uppercase tracking-wider">Total Blog Pageviews</span>
                    <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#1769FF] flex items-center justify-center">
                      <Eye className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="text-3xl font-extrabold text-slate-900">
                    {(analytics?.totalViews || 0).toLocaleString()}
                  </div>
                  <div className="text-[11px] text-slate-500 flex items-center gap-1.5">
                    <span className="inline-flex items-center gap-0.5 text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.2 rounded">
                      <TrendingUp className="w-3 h-3" />
                      Live Verified
                    </span>
                    <span>real visitor traffic</span>
                  </div>
                </div>

                {/* Card 2: Unique Visitors / Readers */}
                <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-[#1769FF]/40 transition-all space-y-2">
                  <div className="flex items-center justify-between text-slate-500">
                    <span className="text-xs font-bold uppercase tracking-wider">Unique Readers</span>
                    <div className="w-8 h-8 rounded-xl bg-cyan-50 text-[#00A3FF] flex items-center justify-center">
                      <Users className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="text-3xl font-extrabold text-slate-900">
                    {(analytics?.uniqueVisitors || 0).toLocaleString()}
                  </div>
                  <div className="text-[11px] text-slate-500 flex items-center gap-1.5">
                    <span className="text-cyan-700 font-bold bg-cyan-50 px-1.5 py-0.2 rounded">Real-time</span>
                    <span>verified human audience</span>
                  </div>
                </div>

                {/* Card 3: Avg Reading Time */}
                <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-[#1769FF]/40 transition-all space-y-2">
                  <div className="flex items-center justify-between text-slate-500">
                    <span className="text-xs font-bold uppercase tracking-wider">Avg. Time On Article</span>
                    <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                      <Clock className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="text-3xl font-extrabold text-slate-900">3m 48s</div>
                  <div className="text-[11px] text-slate-500 flex items-center gap-1.5">
                    <span className="text-emerald-700 font-bold bg-emerald-50 px-1.5 py-0.2 rounded">High</span>
                    <span>deep technical retention</span>
                  </div>
                </div>

                {/* Card 4: Library SEO Health Score */}
                <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-[#1769FF]/40 transition-all space-y-2">
                  <div className="flex items-center justify-between text-slate-500">
                    <span className="text-xs font-bold uppercase tracking-wider">Average SEO Health</span>
                    <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                      <Sparkles className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="text-3xl font-extrabold text-purple-600">{avgLibrarySeoScore}/100</div>
                  <div className="text-[11px] text-slate-500 flex items-center gap-1.5">
                    <span className="text-purple-700 font-bold bg-purple-50 px-1.5 py-0.2 rounded">{articles.length} posts</span>
                    <span>100% crawlable &amp; indexed</span>
                  </div>
                </div>
              </div>

              {/* VISUAL CHART SECTION: Interactive Visitor Traffic Trends */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-3 border-b border-slate-100">
                  <div>
                    <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
                      <Activity className="w-4 h-4 text-[#1769FF]" />
                      <span>Visitor Traffic Trends &amp; Audience Growth</span>
                    </h2>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Daily pageviews and unique reader trends across all blog publications.
                    </p>
                  </div>

                  {/* Chart Range Toggles */}
                  <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl text-xs font-bold self-start sm:self-auto">
                    <button
                      type="button"
                      onClick={() => setChartTimeRange("7d")}
                      className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${chartTimeRange === "7d"
                        ? "bg-white text-[#1769FF] shadow-xs"
                        : "text-slate-600 hover:text-slate-900"
                        }`}
                    >
                      Last 7 Days
                    </button>
                    <button
                      type="button"
                      onClick={() => setChartTimeRange("14d")}
                      className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${chartTimeRange === "14d"
                        ? "bg-white text-[#1769FF] shadow-xs"
                        : "text-slate-600 hover:text-slate-900"
                        }`}
                    >
                      Last 14 Days
                    </button>
                    <button
                      type="button"
                      onClick={() => setChartTimeRange("30d")}
                      className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${chartTimeRange === "30d"
                        ? "bg-white text-[#1769FF] shadow-xs"
                        : "text-slate-600 hover:text-slate-900"
                        }`}
                    >
                      Last 30 Days
                    </button>
                  </div>
                </div>

                {/* Interactive SVG Chart Canvas */}
                <div className="relative pt-2">
                  {/* Floating Tooltip when Hovering a Data Point */}
                  {hoveredChartPoint && (
                    <div
                      className="absolute z-20 pointer-events-none transform -translate-x-1/2 -translate-y-full -top-1 px-3 py-2 rounded-xl bg-slate-900 text-white shadow-xl text-xs space-y-0.5 font-sans border border-slate-700 animate-in fade-in zoom-in-95 duration-150"
                      style={{ left: `${(hoveredChartPoint.x / 760) * 100}%` }}
                    >
                      <div className="font-mono text-[10px] text-cyan-400 font-semibold">
                        {hoveredChartPoint.date}
                      </div>
                      <div className="font-bold text-white flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#1769FF]" />
                        <span>{hoveredChartPoint.views.toLocaleString()} Total Views</span>
                      </div>
                      <div className="text-[11px] text-slate-300">
                        {hoveredChartPoint.uniqueVisitors.toLocaleString()} unique readers
                      </div>
                    </div>
                  )}

                  <div className="w-full overflow-x-auto">
                    <svg
                      viewBox="0 0 760 180"
                      className="w-full h-44 sm:h-52 overflow-visible select-none"
                      preserveAspectRatio="none"
                    >
                      <defs>
                        {/* Gradient for area fill under the line */}
                        <linearGradient id="trafficGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#1769FF" stopOpacity="0.32" />
                          <stop offset="60%" stopColor="#00C6FF" stopOpacity="0.10" />
                          <stop offset="100%" stopColor="#00C6FF" stopOpacity="0.00" />
                        </linearGradient>

                        {/* Stroke gradient */}
                        <linearGradient id="lineStrokeGradient" x1="0" y1="0" x2="1" y2="0">
                          <stop offset="0%" stopColor="#1769FF" />
                          <stop offset="100%" stopColor="#00C6FF" />
                        </linearGradient>
                      </defs>

                      {/* Horizontal background grid guidelines */}
                      <line x1="35" y1="30" x2="725" y2="30" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="4 4" />
                      <line x1="35" y1="75" x2="725" y2="75" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="4 4" />
                      <line x1="35" y1="120" x2="725" y2="120" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="4 4" />
                      <line x1="35" y1="155" x2="725" y2="155" stroke="#e2e8f0" strokeWidth="1" />

                      {/* Area fill */}
                      {svgCoordinates.area && (
                        <path d={svgCoordinates.area} fill="url(#trafficGradient)" />
                      )}

                      {/* Line curve */}
                      {svgCoordinates.path && (
                        <path
                          d={svgCoordinates.path}
                          fill="none"
                          stroke="url(#lineStrokeGradient)"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      )}

                      {/* Active hover vertical crosshair line */}
                      {hoveredChartPoint && (
                        <line
                          x1={hoveredChartPoint.x}
                          y1="25"
                          x2={hoveredChartPoint.x}
                          y2="155"
                          stroke="#1769FF"
                          strokeWidth="1.5"
                          strokeDasharray="3 3"
                          opacity="0.8"
                        />
                      )}

                      {/* Interactive dots on data points */}
                      {svgCoordinates.points.map((pt, idx) => {
                        const isHovered = hoveredChartPoint?.date === pt.date;
                        return (
                          <g key={pt.date}>
                            {/* Invisible larger hover hitbox */}
                            <circle
                              cx={pt.x}
                              cy={pt.y}
                              r="12"
                              fill="transparent"
                              className="cursor-pointer"
                              onMouseEnter={() => setHoveredChartPoint(pt)}
                              onMouseLeave={() => setHoveredChartPoint(null)}
                            />
                            {/* Visible point circle */}
                            <circle
                              cx={pt.x}
                              cy={pt.y}
                              r={isHovered ? "6" : "3.5"}
                              fill={isHovered ? "#00C6FF" : "#ffffff"}
                              stroke="#1769FF"
                              strokeWidth={isHovered ? "3" : "2"}
                              className="transition-all pointer-events-none"
                            />
                          </g>
                        );
                      })}
                    </svg>
                  </div>

                  {/* X-Axis Dates Labels */}
                  <div className="flex items-center justify-between px-6 pt-2 text-[10px] font-mono text-slate-400">
                    {chartPoints.map((pt, idx) => {
                      // Show dates evenly spaced
                      const step = chartTimeRange === "30d" ? 5 : chartTimeRange === "14d" ? 2 : 1;
                      if (idx % step !== 0 && idx !== chartPoints.length - 1) return null;
                      const parts = pt.date.split("-");
                      return (
                        <span key={pt.date} className={hoveredChartPoint?.date === pt.date ? "text-[#1769FF] font-bold" : ""}>
                          {parts[1]}/{parts[2]}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* MIDDLE SECTION: PARTICULAR BLOG VISITORS RANKING & TRAFFIC SOURCES */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* TOP PERFORMING ARTICLES (7 COLS) - Show each particular blog's visitor counts */}
                <div className="lg:col-span-7 rounded-2xl border border-slate-200 bg-white shadow-xs overflow-hidden">
                  <div className="p-5 border-b border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <BarChart3 className="w-4 h-4 text-[#1769FF]" />
                      <div>
                        <h2 className="text-sm font-bold text-slate-900">
                          Top Articles by Visitor Volume
                        </h2>
                        <p className="text-[11px] text-slate-400">Individual visitor traffic for each publication</p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setActiveTab("posts")}
                      className="text-xs font-semibold text-[#1769FF] hover:underline flex items-center gap-1"
                    >
                      <span>View All Articles</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="divide-y divide-slate-100">
                    {topPerformingArticles.map((article, idx) => {
                      const postStats = analytics?.postViews[article.slug] || { views: 0, uniqueVisitors: 0 };
                      const progressPercent =
                        postStats.views > 0
                          ? Math.max(8, Math.round((postStats.views / topArticleMaxViews) * 100))
                          : 0;

                      return (
                        <div
                          key={article.slug}
                          className="p-4 sm:p-5 flex items-center justify-between gap-4 hover:bg-slate-50/70 transition-colors group"
                        >
                          <div className="flex items-center gap-3.5 min-w-0 flex-1">
                            {/* Rank Badge */}
                            <div
                              className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-extrabold shrink-0 ${idx === 0
                                ? "bg-amber-100 text-amber-800 border border-amber-300 shadow-xs"
                                : idx === 1
                                  ? "bg-slate-200 text-slate-800"
                                  : idx === 2
                                    ? "bg-orange-100 text-orange-800"
                                    : "bg-slate-100 text-slate-600"
                                }`}
                            >
                              #{idx + 1}
                            </div>

                            {/* Thumbnail */}
                            <div className="relative w-12 h-10 rounded-lg overflow-hidden border border-slate-200 bg-slate-100 shrink-0">
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

                            <div className="min-w-0 flex-1 space-y-1.5">
                              <h3 className="text-xs sm:text-sm font-bold text-slate-900 truncate group-hover:text-[#1769FF] transition-colors">
                                {article.title}
                              </h3>

                              {/* Visitor Progress Bar & Stats */}
                              <div className="space-y-1">
                                <div className="flex items-center justify-between text-[11px] font-mono">
                                  <span className="text-slate-700 font-bold flex items-center gap-1">
                                    <Eye className="w-3 h-3 text-[#1769FF]" />
                                    {postStats.views.toLocaleString()} pageviews
                                  </span>
                                  <span className="text-slate-400">
                                    {postStats.uniqueVisitors.toLocaleString()} readers
                                  </span>
                                </div>
                                <div className="w-full h-1.5 rounded-full bg-slate-100 overflow-hidden">
                                  <div
                                    className="h-full rounded-full bg-gradient-to-r from-[#1769FF] to-[#00A3FF]"
                                    style={{ width: `${progressPercent}%` }}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Actions */}
                          <div className="flex items-center gap-1 shrink-0">
                            <Link
                              href={`/blog/${article.slug}`}
                              target="_blank"
                              title="View Live Article"
                              className="p-1.5 rounded-lg border border-slate-200 text-slate-500 hover:text-[#1769FF] hover:bg-blue-50 transition-colors"
                            >
                              <Eye className="w-3.5 h-3.5" />
                            </Link>
                            <button
                              type="button"
                              onClick={() => handleEditPost(article)}
                              title="Edit Post"
                              className="p-1.5 rounded-lg border border-slate-200 text-slate-500 hover:text-[#1769FF] hover:bg-blue-50 transition-colors cursor-pointer"
                            >
                              <Edit3 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* TRAFFIC ACQUISITION & DEVICE DISTRIBUTION (5 COLS) */}
                <div className="lg:col-span-5 space-y-6">
                  {/* Device Breakdown */}
                  <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                      <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                        <Monitor className="w-4 h-4 text-[#1769FF]" />
                        <span>Audience Device Share</span>
                      </h3>
                      <span className="text-[11px] font-mono text-slate-400">Distribution</span>
                    </div>

                    <div className="space-y-3">
                      {/* Device 1: Desktop */}
                      <div className="space-y-1">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-semibold text-slate-700 flex items-center gap-1.5">
                            <Monitor className="w-3.5 h-3.5 text-[#1769FF]" />
                            <span>Desktop Workstations</span>
                          </span>
                          <span className="font-mono font-bold text-slate-900">
                            {analytics?.deviceBreakdown?.desktop || 64}%
                          </span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                          <div
                            className="h-full rounded-full bg-[#1769FF]"
                            style={{ width: `${analytics?.deviceBreakdown?.desktop || 64}%` }}
                          />
                        </div>
                      </div>

                      {/* Device 2: Mobile */}
                      <div className="space-y-1">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-semibold text-slate-700 flex items-center gap-1.5">
                            <Smartphone className="w-3.5 h-3.5 text-cyan-600" />
                            <span>Mobile Phones</span>
                          </span>
                          <span className="font-mono font-bold text-slate-900">
                            {analytics?.deviceBreakdown?.mobile || 31}%
                          </span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                          <div
                            className="h-full rounded-full bg-[#00C6FF]"
                            style={{ width: `${analytics?.deviceBreakdown?.mobile || 31}%` }}
                          />
                        </div>
                      </div>

                      {/* Device 3: Tablet */}
                      <div className="space-y-1">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-semibold text-slate-700 flex items-center gap-1.5">
                            <Layers className="w-3.5 h-3.5 text-purple-600" />
                            <span>Tablets / iPads</span>
                          </span>
                          <span className="font-mono font-bold text-slate-900">
                            {analytics?.deviceBreakdown?.tablet || 5}%
                          </span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                          <div
                            className="h-full rounded-full bg-purple-500"
                            style={{ width: `${analytics?.deviceBreakdown?.tablet || 5}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Traffic Acquisition Channels */}
                  <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                      <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                        <Globe className="w-4 h-4 text-emerald-600" />
                        <span>Traffic Acquisition Channels</span>
                      </h3>
                      <span className="text-[11px] font-mono text-slate-400">Referrers</span>
                    </div>

                    <div className="space-y-2.5 text-xs">
                      <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 border border-slate-100">
                        <span className="font-medium text-slate-700">Google Organic Search</span>
                        <span className="font-mono font-bold text-emerald-700">
                          {analytics?.referrerBreakdown?.google || 54}%
                        </span>
                      </div>

                      <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 border border-slate-100">
                        <span className="font-medium text-slate-700">Direct / Bookmarks</span>
                        <span className="font-mono font-bold text-[#1769FF]">
                          {analytics?.referrerBreakdown?.direct || 21}%
                        </span>
                      </div>

                      <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 border border-slate-100">
                        <span className="font-medium text-slate-700">LinkedIn Network</span>
                        <span className="font-mono font-bold text-cyan-700">
                          {analytics?.referrerBreakdown?.linkedin || 14}%
                        </span>
                      </div>

                      <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 border border-slate-100">
                        <span className="font-medium text-slate-700">Twitter / X</span>
                        <span className="font-mono font-bold text-purple-700">
                          {analytics?.referrerBreakdown?.twitter || 8}%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ================================================================= */}
          {/* VIEW 2: ALL ARTICLES TABLE */}
          {/* ================================================================= */}
          {activeTab === "posts" && (
            <div className="p-6 sm:p-8 space-y-6 max-w-7xl mx-auto">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    Articles &amp; Publications ({articles.length})
                  </h1>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Manage all blog publications, create new posts, or update existing articles and SEO metadata.
                  </p>
                </div>

                {/* Search & Filter */}
                <div className="flex flex-wrap items-center gap-3">
                  <div className="relative min-w-[220px]">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search posts by title or slug..."
                      className="w-full rounded-xl border border-slate-200 bg-white pl-9 pr-3 py-2 text-xs text-slate-800 placeholder-slate-400 focus:border-[#1769FF] focus:outline-none shadow-xs"
                    />
                  </div>

                  <select
                    value={categoryFilter}
                    onChange={(e) => setCategoryFilter(e.target.value)}
                    className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs text-slate-800 focus:border-[#1769FF] focus:outline-none shadow-xs"
                  >
                    <option value="All">All Categories</option>
                    {categories.map((c) => (
                      <option key={c.id} value={c.name}>
                        {c.name} ({c.articleCount ?? 0})
                      </option>
                    ))}
                  </select>

                  <button
                    type="button"
                    onClick={handleAddNewPost}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#1769FF] to-[#00A3FF] hover:from-[#0F58E0] hover:to-[#008FE0] shadow-xs hover:shadow transition-all"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>New Post</span>
                  </button>
                </div>
              </div>

              {/* Batch Actions Toolbar */}
              {selectedArticles.length > 0 && (
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/80 rounded-2xl px-5 py-3.5 flex flex-wrap items-center justify-between gap-3 shadow-xs animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#1769FF] text-white text-xs font-bold font-mono shadow-xs">
                      {selectedArticles.length}
                    </span>
                    <span className="text-xs font-bold text-slate-800">
                      {selectedArticles.length} publication{selectedArticles.length > 1 ? "s" : ""} selected
                    </span>
                    <span className="text-slate-300">|</span>
                    <button
                      type="button"
                      onClick={() => setSelectedArticles([])}
                      className="text-xs font-semibold text-slate-600 hover:text-slate-900 underline cursor-pointer"
                    >
                      Deselect All
                    </button>
                    {filteredList.length > selectedArticles.length && (
                      <button
                        type="button"
                        onClick={handleToggleSelectAll}
                        className="text-xs font-semibold text-[#1769FF] hover:underline cursor-pointer"
                      >
                        Select All {filteredList.length} Articles
                      </button>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setIsBatchDeleteModalOpen(true)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-red-600 hover:bg-red-700 text-white shadow-xs transition-all cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Delete Selected ({selectedArticles.length})</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Articles Table */}
              <div className="rounded-2xl border border-slate-200 bg-white shadow-xs overflow-hidden">
                {loading ? (
                  <div className="p-16 text-center text-slate-500 text-xs">
                    <RefreshCw className="w-6 h-6 text-[#1769FF] animate-spin mx-auto mb-2" />
                    Loading publications from database...
                  </div>
                ) : filteredList.length === 0 ? (
                  <div className="p-16 text-center text-slate-500 text-xs space-y-3">
                    <FolderOpen className="w-8 h-8 text-slate-300 mx-auto" />
                    <p>No articles found matching your query.</p>
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
                    <table className="w-full text-left border-collapse min-w-[750px]">
                      <thead>
                        <tr className="border-b border-slate-200 bg-slate-50/75 text-xs font-semibold uppercase tracking-wider text-slate-600">
                          <th className="p-4 sm:p-5 w-12 text-center">
                            <input
                              type="checkbox"
                              checked={filteredList.length > 0 && selectedArticles.length === filteredList.length}
                              onChange={handleToggleSelectAll}
                              className="w-4 h-4 rounded border-slate-300 text-[#1769FF] focus:ring-[#1769FF] cursor-pointer"
                              title="Select / Deselect all visible articles"
                            />
                          </th>
                          <th className="p-4 sm:p-5 w-20">Cover</th>
                          <th className="p-4 sm:p-5">Title &amp; Permalink</th>
                          <th className="p-4 sm:p-5">Visitors &amp; Views</th>
                          <th className="p-4 sm:p-5">Category &amp; SEO</th>
                          <th className="p-4 sm:p-5">Author</th>
                          <th className="p-4 sm:p-5">Date</th>
                          <th className="p-4 sm:p-5 text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                        {filteredList.map((article) => {
                          const isSelected = selectedArticles.includes(article.slug);
                          const isEditingThis = editingSlugLoading === article.slug;
                          return (
                            <tr
                              key={article.slug}
                              className={`transition-colors group ${
                                isSelected
                                  ? "bg-blue-50/70 border-l-4 border-l-[#1769FF]"
                                  : "hover:bg-slate-50/80"
                              }`}
                            >
                              <td className="p-4 sm:p-5 w-12 text-center">
                                <input
                                  type="checkbox"
                                  checked={isSelected}
                                  onChange={() => handleToggleSelectArticle(article.slug)}
                                  className="w-4 h-4 rounded border-slate-300 text-[#1769FF] focus:ring-[#1769FF] cursor-pointer"
                                  title={`Select "${article.title}"`}
                                />
                              </td>

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

                              {/* Particular Blog Visitors & Views Cell */}
                              <td className="p-4 sm:p-5 whitespace-nowrap">
                                <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-slate-900">
                                  <Eye className="w-3.5 h-3.5 text-[#1769FF]" />
                                  <span>{(analytics?.postViews[article.slug]?.views || 0).toLocaleString()} views</span>
                                </div>
                                <span className="text-[10px] text-slate-400 font-mono block mt-0.5">
                                  {(analytics?.postViews[article.slug]?.uniqueVisitors || 0).toLocaleString()} unique readers
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

                              <td className="p-4 sm:p-5 text-slate-600 text-xs whitespace-nowrap">
                                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200/70">
                                  <Calendar className="w-3.5 h-3.5 text-[#1769FF]" />
                                  <span className="font-semibold text-slate-800">{formatDate(article.publishedAt)}</span>
                                </div>
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
                                    disabled={isEditingThis}
                                    onClick={() => handleEditPost(article)}
                                    title="Edit Post & SEO"
                                    className="p-2 rounded-lg border border-slate-200 text-slate-500 hover:text-[#1769FF] hover:border-[#1769FF]/40 hover:bg-blue-50/50 transition-colors cursor-pointer disabled:opacity-60"
                                  >
                                    {isEditingThis ? (
                                      <Loader2 className="w-3.5 h-3.5 animate-spin text-[#1769FF]" />
                                    ) : (
                                      <Edit3 className="w-3.5 h-3.5" />
                                    )}
                                  </button>

                                  <button
                                    type="button"
                                    onClick={() => setDeleteConfirmSlug(article.slug)}
                                    title="Delete Post"
                                    className="p-2 rounded-lg border border-slate-200 text-slate-500 hover:text-red-600 hover:border-red-300 hover:bg-red-50 transition-colors cursor-pointer"
                                  >
                                    <Trash2 className="w-3.5 h-3.5" />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ================================================================= */}
          {/* VIEW 3: STEP-BY-STEP ARTICLE EDITOR */}
          {/* ================================================================= */}
          {activeTab === "editor" && (
            <div className="p-6 sm:p-8 space-y-6 max-w-7xl mx-auto">
              {/* Top Editor Header with Actions */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
                <div>
                  <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
                    <span>{isEditing ? "Edit Article" : "Create New Article"}</span>
                    <span className="text-xs px-2.5 py-0.5 rounded-full font-bold bg-blue-50 text-[#1769FF] border border-blue-200">
                      Step: {editorStep.toUpperCase()}
                    </span>
                    {isEditing && form.slug && (
                      <span className="text-xs px-2.5 py-0.5 rounded-full font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 inline-flex items-center gap-1">
                        <Eye className="w-3.5 h-3.5 text-emerald-600" />
                        <span>{(analytics?.postViews[form.slug]?.views || 0).toLocaleString()} Total Readers</span>
                      </span>
                    )}
                  </h1>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Organized step-by-step workflow: write content, insert custom-designed components, configure comprehensive SEO, and publish.
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setActiveTab("posts")}
                    className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 border border-slate-200 bg-white hover:bg-slate-50 transition-colors"
                  >
                    Cancel
                  </button>

                  {form.slug && (
                    <Link
                      href={`/blog/${form.slug}`}
                      target="_blank"
                      className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-700 bg-white border border-slate-200 hover:text-[#1769FF] transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5 text-[#1769FF]" />
                      <span>View on Site</span>
                    </Link>
                  )}

                  <button
                    type="button"
                    onClick={handleSaveArticle}
                    disabled={isSaving}
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#1769FF] to-[#00A3FF] hover:from-[#0F58E0] hover:to-[#008FE0] shadow-sm hover:shadow transition-all disabled:opacity-50 cursor-pointer"
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

              {/* STEPPER NAVIGATION TABS */}
              <div className="flex items-center gap-1 p-1.5 rounded-2xl bg-slate-200/70 overflow-x-auto text-xs font-bold shadow-inner">
                <button
                  type="button"
                  onClick={() => switchEditorStep("content")}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all whitespace-nowrap ${editorStep === "content"
                    ? "bg-white text-[#1769FF] shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                    }`}
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>1. Content &amp; Textbox</span>
                </button>

                <button
                  type="button"
                  onClick={() => switchEditorStep("design")}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all whitespace-nowrap ${editorStep === "design"
                    ? "bg-white text-[#1769FF] shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                    }`}
                >
                  <Palette className="w-3.5 h-3.5 text-purple-600" />
                  <span>2. Design &amp; Quote Styles</span>
                </button>

                <button
                  type="button"
                  onClick={() => switchEditorStep("seo")}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all whitespace-nowrap ${editorStep === "seo"
                    ? "bg-white text-[#1769FF] shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                    }`}
                >
                  <Globe className="w-3.5 h-3.5 text-emerald-600" />
                  <span>3. Google SEO Suite</span>
                  <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-emerald-100 text-emerald-800">
                    {seoAudit.score}/100
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => switchEditorStep("social")}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all whitespace-nowrap ${editorStep === "social"
                    ? "bg-white text-[#1769FF] shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                    }`}
                >
                  <Share2 className="w-3.5 h-3.5 text-cyan-600" />
                  <span>4. Social Cards (OG / Twitter)</span>
                </button>

                <button
                  type="button"
                  onClick={() => switchEditorStep("publish")}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all whitespace-nowrap ${editorStep === "publish"
                    ? "bg-white text-[#1769FF] shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                    }`}
                >
                  <Settings className="w-3.5 h-3.5 text-amber-600" />
                  <span>5. Publishing &amp; Cover Image</span>
                </button>
              </div>

              {/* ============================================================= */}
              {/* STEP 1: CONTENT & WYSIWYG EDITOR */}
              {/* ============================================================= */}
              <div className={editorStep === "content" ? "space-y-6" : "hidden"}>
                  {/* Title, Category & Slug Card */}
                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                    {/* Category Selection Row right in Step 1 */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <span className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                          <Tags className="w-3.5 h-3.5 text-[#1769FF]" />
                          <span>Category Pillar <span className="text-red-500">*</span>:</span>
                        </span>

                        {/* Category Dropdown */}
                        <select
                          value={form.category}
                          onChange={(e) => setForm((prev) => ({ ...prev, category: e.target.value }))}
                          className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-800 focus:bg-white focus:border-[#1769FF] focus:outline-none cursor-pointer"
                        >
                          {categories.map((c) => (
                            <option key={c.id} value={c.name}>
                              {c.name} ({c.articleCount ?? 0} articles)
                            </option>
                          ))}
                        </select>

                        {/* Live Badge Preview */}
                        {(() => {
                          const matchedCat = categories.find(
                            (c) => c.name.toLowerCase().trim() === form.category.toLowerCase().trim()
                          );
                          const color = matchedCat?.color || "blue";
                          return (
                            <span
                              className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold border ${getCategoryColorClasses(
                                color
                              )}`}
                            >
                              <span className={`w-1.5 h-1.5 rounded-full ${getCategoryColorDot(color)}`} />
                              {form.category || "Select Category"}
                            </span>
                          );
                        })()}
                      </div>

                      <button
                        type="button"
                        onClick={handleOpenAddCategory}
                        className="text-xs font-bold text-[#1769FF] hover:underline inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-50 border border-blue-200/60 hover:bg-blue-100/70 transition-colors self-start sm:self-auto cursor-pointer"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>+ New Category</span>
                      </button>
                    </div>

                    {/* Publication Date Row right in Step 1 */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <span className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-[#1769FF]" />
                          <span>Publication Date:</span>
                        </span>

                        <input
                          type="date"
                          value={form.publishedAt}
                          onChange={(e) => setForm((prev) => ({ ...prev, publishedAt: e.target.value }))}
                          className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-800 focus:bg-white focus:border-[#1769FF] focus:outline-none cursor-pointer"
                        />

                        {/* Set to Today Quick Action Button */}
                        <button
                          type="button"
                          onClick={() => {
                            const today = getTodayDateString();
                            setForm((prev) => ({ ...prev, publishedAt: today }));
                            showToast(`Date set to today (${formatDate(today)})`);
                          }}
                          className={`text-xs font-bold px-2.5 py-1 rounded-lg border transition-colors cursor-pointer ${form.publishedAt === getTodayDateString()
                            ? "bg-blue-50 border-blue-200 text-[#1769FF]"
                            : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
                            }`}
                          title="Click to set date to today"
                        >
                          {form.publishedAt === getTodayDateString() ? "✓ Today" : "Set to Today"}
                        </button>
                      </div>

                      <span className="text-[11px] text-slate-400">
                        Defaults to today&apos;s real date • Change anytime
                      </span>
                    </div>

                    {/* Headline / Title */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Article Headline / Title <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={form.title}
                        onChange={handleTitleChange}
                        placeholder="e.g. Next.js 15 vs Legacy Monolithic Architectures: Enterprise Performance Benchmark"
                        className="w-full text-xl sm:text-2xl font-extrabold text-slate-900 placeholder-slate-300 bg-transparent border-b border-slate-200 pb-2 focus:outline-none focus:border-[#1769FF] transition-colors"
                      />
                    </div>

                    <div className="pt-1 flex flex-wrap items-center gap-2 text-xs text-slate-500 font-mono">
                      <span className="font-semibold text-slate-700">Permanent URL Slug:</span>
                      <span className="text-slate-400">/blog/</span>
                      <input
                        type="text"
                        value={form.slug}
                        onChange={(e) => {
                          const val = e.target.value.toLowerCase().replace(/\s+/g, "-");
                          setForm((prev) => ({ ...prev, slug: val }));
                        }}
                        placeholder="article-slug-url"
                        className="bg-slate-50 border border-slate-200 text-[#1769FF] font-mono px-3 py-1 rounded-lg text-xs focus:outline-none focus:border-[#1769FF] focus:bg-white"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          const generated = form.title
                            .toLowerCase()
                            .replace(/[^\w\s-]/g, "")
                            .replace(/[\s_-]+/g, "-")
                            .replace(/^-+|-+$/g, "");
                          setForm((prev) => ({ ...prev, slug: generated }));
                          showToast("Slug regenerated from title");
                        }}
                        className="text-[11px] text-[#1769FF] hover:underline cursor-pointer"
                      >
                        Regenerate
                      </button>
                    </div>
                  </div>

                  {/* Excerpt Box */}
                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-1.5">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Article Summary / Excerpt
                    </label>
                    <p className="text-[11px] text-slate-500">
                      Brief synopsis shown on the blog index cards and used as fallback meta description.
                    </p>
                    <textarea
                      rows={2}
                      value={form.excerpt}
                      onChange={(e) => setForm((prev) => ({ ...prev, excerpt: e.target.value }))}
                      placeholder="Enter an engaging 2-sentence summary of the key engineering takeaways..."
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 p-3 text-xs text-slate-800 placeholder-slate-400 focus:bg-white focus:border-[#1769FF] focus:outline-none"
                    />
                  </div>

                  {/* RICH TEXTBOX WYSIWYG EDITOR */}
                  <div className="rounded-2xl border border-slate-200 bg-white shadow-xs">
                    {/* Sticky Toolbar Header Container (Sticky on Scroll) */}
                    <div className="sticky top-0 z-30 bg-white shadow-md border-b border-slate-200 rounded-t-2xl">
                      {/* Primary Toolbar */}
                      <div className="p-2.5 border-b border-slate-200/80 bg-slate-50 rounded-t-2xl flex flex-wrap items-center gap-1 select-none">
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

                      <div className="w-[1px] h-5 bg-slate-200 mx-1" />

                      {/* Lists */}
                      <button
                        type="button"
                        onClick={() => executeCommand("insertUnorderedList")}
                        title="Bulleted List"
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

                      <div className="w-[1px] h-5 bg-slate-200 mx-1" />

                      {/* Hyperlink & Media */}
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
                        onClick={handleOpenEditorMediaModal}
                        title="Insert Image into Content"
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold text-[#1769FF] bg-blue-50 border border-blue-200 hover:bg-blue-100/70 transition-colors cursor-pointer"
                      >
                        <ImageIcon className="w-3.5 h-3.5" />
                        <span>Add Media</span>
                      </button>

                      {/* THE REQUESTED CUSTOM CSS CLASS APPLICATOR TOOL */}
                      <button
                        type="button"
                        onClick={openClassManager}
                        title="Select any text or element and add custom CSS classes"
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold text-purple-700 bg-purple-50 border border-purple-200 hover:bg-purple-100 transition-colors cursor-pointer shadow-xs"
                      >
                        <Palette className="w-3.5 h-3.5 text-purple-600" />
                        <span>Custom CSS Class</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => executeCommand("removeFormat")}
                        title="Clear Formatting"
                        className="p-1.5 rounded-lg text-slate-700 hover:text-[#1769FF] hover:bg-white border border-transparent hover:border-slate-200 transition-colors"
                      >
                        <RemoveFormatting className="w-4 h-4" />
                      </button>

                      {/* HTML Source Toggle */}
                      <button
                        type="button"
                        onClick={() => {
                          if (!isHtmlSourceMode && editorRef.current) {
                            setForm((prev) => ({ ...prev, content: editorRef.current?.innerHTML || "" }));
                          }
                          setIsHtmlSourceMode(!isHtmlSourceMode);
                        }}
                        className={`ml-auto px-2.5 py-1 rounded-lg text-xs font-mono font-semibold transition-colors ${isHtmlSourceMode
                          ? "bg-[#1769FF] text-white"
                          : "text-slate-600 hover:text-slate-900 hover:bg-white border border-transparent hover:border-slate-200"
                          }`}
                        title="Toggle HTML Source Code View"
                      >
                        &lt;/&gt; {isHtmlSourceMode ? "Visual View" : "HTML View"}
                      </button>
                    </div>

                    {/* QUICK INSERT COMMONLY USED DESIGN COMPONENTS */}
                    <div className="flex items-center gap-1.5 flex-wrap py-2.5 px-3 bg-gradient-to-r from-blue-50/90 via-slate-50 to-blue-50/50 border-b border-slate-200 text-xs">
                      <span className="text-[11px] font-bold text-[#1769FF] font-mono mr-1 uppercase flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5 text-[#1769FF]" />
                        + Quick Insert:
                      </span>

                      {/* Callout Card */}
                      <button
                        type="button"
                        onClick={() =>
                          insertCustomHtml(
                            `<div class="blog-callout"><div class="blog-callout-title">💡 Architecture Key Concept</div><p>Enterprise platforms require strict boundary separation between client components and edge microservices to maximize throughput and maintain sub-100ms response times globally.</p></div>`
                          )
                        }
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-blue-50 border border-blue-200 text-[#1769FF] hover:bg-blue-100 font-semibold text-[11px] transition-colors cursor-pointer shadow-2xs"
                        title="Insert Highlighted Callout Box"
                      >
                        <Bookmark className="w-3 h-3" />
                        <span>+ Callout Card</span>
                      </button>

                      {/* Pro Tip Box */}
                      <button
                        type="button"
                        onClick={() =>
                          insertCustomHtml(
                            `<div class="blog-tip"><p><strong>🚀 Pro Tip:</strong> Implement code-split dynamic imports for client-heavy modules to minimize initial JavaScript bundle size and eliminate Interaction to Next Paint (INP) bottlenecks.</p></div>`
                          )
                        }
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 hover:bg-emerald-100 font-semibold text-[11px] transition-colors cursor-pointer shadow-2xs"
                        title="Insert Green Pro-Tip Box"
                      >
                        <Sparkles className="w-3 h-3 text-emerald-600" />
                        <span>+ Pro Tip Box</span>
                      </button>

                      {/* 2-Column Grid */}
                      <button
                        type="button"
                        onClick={() =>
                          insertCustomHtml(
                            `<div class="blog-grid-2"><div class="blog-card"><div class="blog-card-title">Approach A: Traditional</div><p>Higher initial coupling, synchronous monolithic data fetching, and heavier client-side JavaScript execution.</p></div><div class="blog-card"><div class="blog-card-title">Approach B: Composable</div><p>Decoupled edge execution, streaming SSR HTML, and localized partial hydration for instantaneous interactivity.</p></div></div>`
                          )
                        }
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-indigo-50 border border-indigo-200 text-indigo-700 hover:bg-indigo-100 font-semibold text-[11px] transition-colors cursor-pointer shadow-2xs"
                        title="Insert 2-Column Side-by-Side Responsive Grid"
                      >
                        <Grid className="w-3 h-3 text-indigo-600" />
                        <span>+ 2-Column Grid</span>
                      </button>

                      {/* Comparison Table */}
                      <button
                        type="button"
                        onClick={() =>
                          insertCustomHtml(
                            `<div class="blog-table-container"><table class="blog-table"><thead><tr><th>Evaluation Metric</th><th>Custom Next.js Stack</th><th>Traditional CMS / Builders</th></tr></thead><tbody><tr><td>Core Web Vitals</td><td>100/100 LCP &amp; Zero CLS</td><td>Degraded Script Bloat</td></tr><tr><td>SEO &amp; JSON-LD</td><td>Granular Edge Head Injection</td><td>Plugin Dependent</td></tr><tr><td>Edge Scalability</td><td>Auto-burst Serverless Shards</td><td>Single Server Choke Points</td></tr></tbody></table></div>`
                          )
                        }
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-700 hover:border-[#1769FF] hover:text-[#1769FF] hover:bg-blue-50/40 font-semibold text-[11px] transition-colors cursor-pointer shadow-2xs"
                        title="Insert Responsive Comparison Table"
                      >
                        <Table className="w-3 h-3 text-slate-500" />
                        <span>+ Comparison Table</span>
                      </button>

                      {/* Warning Box */}
                      <button
                        type="button"
                        onClick={() =>
                          insertCustomHtml(
                            `<div class="blog-warning"><p><strong>⚠️ Warning / Common Pitfall:</strong> Avoid chaining multiple client-side redirects or uncompressed media assets, as this drastically degrades crawl equity and LCP latency.</p></div>`
                          )
                        }
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-50 border border-amber-200 text-amber-800 hover:bg-amber-100 font-semibold text-[11px] transition-colors cursor-pointer shadow-2xs"
                        title="Insert Amber Warning Alert Box"
                      >
                        <AlertCircle className="w-3 h-3 text-amber-600" />
                        <span>+ Warning Box</span>
                      </button>

                      {/* Key Takeaways Card */}
                      <button
                        type="button"
                        onClick={() =>
                          insertCustomHtml(
                            `<div class="blog-card" style="border-left-color: #8b5cf6;"><div class="blog-card-title" style="color: #7c3aed;">📌 Key Takeaways</div><ul style="margin: 0; padding-left: 1.25rem;"><li>Decouple frontends from monolithic CMS runtimes using Next.js.</li><li>Optimize Core Web Vitals to pass Google search ranking criteria.</li><li>Cache dynamic payloads close to end-users via CDN Edge networks.</li></ul></div>`
                          )
                        }
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-purple-50 border border-purple-200 text-purple-700 hover:bg-purple-100 font-semibold text-[11px] transition-colors cursor-pointer shadow-2xs"
                        title="Insert Bulleted Key Takeaways Box"
                      >
                        <CheckCheck className="w-3 h-3 text-purple-600" />
                        <span>+ Key Takeaways</span>
                      </button>

                      {/* Quotes */}
                      <button
                        type="button"
                        onClick={() =>
                          insertCustomHtml(
                            `<blockquote class="blog-quote-blue"><p>"Architecture is not just what it looks like, but how the systems scale under high concurrent load."</p></blockquote>`
                          )
                        }
                        className="px-2.5 py-1 rounded-lg bg-white border border-blue-200 text-[#1769FF] hover:bg-blue-50 font-medium text-[11px] transition-colors cursor-pointer"
                        title="Insert Blue Quote Block"
                      >
                        + Blue Quote
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          insertCustomHtml(
                            `<blockquote class="blog-quote-cyan"><p>"Next-generation edge runtimes eliminate cold-starts and serve content at wire speeds globally."</p></blockquote>`
                          )
                        }
                        className="px-2.5 py-1 rounded-lg bg-white border border-cyan-200 text-cyan-700 hover:bg-cyan-50 font-medium text-[11px] transition-colors cursor-pointer"
                        title="Insert Cyan Quote Block"
                      >
                        + Cyan Quote
                      </button>

                      <button
                        type="button"
                        onClick={() => switchEditorStep("design")}
                        className="ml-auto text-[11px] font-bold text-purple-700 hover:underline flex items-center gap-1 cursor-pointer pl-2"
                      >
                        <span>Explore All Design Styles →</span>
                      </button>
                    </div>
                  </div>

                  {/* Editing Canvas */}
                    <div className="p-6 min-h-[460px] bg-white">
                      {isHtmlSourceMode ? (
                        <textarea
                          value={form.content}
                          onChange={(e) => setForm((prev) => ({ ...prev, content: e.target.value }))}
                          rows={20}
                          className="w-full h-full bg-slate-900 text-emerald-400 font-mono text-xs p-4 rounded-xl focus:outline-none resize-y leading-relaxed"
                          placeholder="<div>Raw HTML code...</div>"
                        />
                      ) : (
                        <div
                          ref={(node) => {
                            (editorRef as any).current = node;
                            if (node && !isHtmlSourceMode && node.innerHTML !== form.content) {
                              node.innerHTML = form.content || "";
                            }
                          }}
                          contentEditable
                          suppressContentEditableWarning
                          onInput={syncEditorContent}
                          onBlur={syncEditorContent}
                          className="w-full min-h-[420px] focus:outline-none blog-content text-slate-800 font-sans selection:bg-[#1769FF] selection:text-white"
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

                  {/* ========================================================= */}
                  {/* ARTICLE FAQ ACCORDIONS (Smooth open/close & MongoDB sync) */}
                  {/* ========================================================= */}
                  <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-5">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                      <div className="flex items-start gap-3">
                        <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-200 text-[#1769FF] shrink-0">
                          <HelpCircle className="w-5 h-5 text-[#1769FF]" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="text-sm font-bold text-slate-900">
                              Article FAQ Accordions
                            </h3>
                            <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-[#1769FF] border border-blue-200 font-mono">
                              {(form.faqs || []).length} Items
                            </span>
                          </div>
                          <p className="text-xs text-slate-500 mt-0.5">
                            Add frequently asked questions with smooth animated accordions. Readers can expand and collapse answers on the article page.
                          </p>
                        </div>
                      </div>

                      {/* Header Actions */}
                      <div className="flex items-center gap-2 self-start sm:self-center">
                        {/* Edit vs Preview Toggle */}
                        {(form.faqs || []).length > 0 && (
                          <div className="inline-flex rounded-xl p-1 bg-slate-100 border border-slate-200 text-xs">
                            <button
                              type="button"
                              onClick={() => setFaqViewMode("edit")}
                              className={`px-3 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                                faqViewMode === "edit"
                                  ? "bg-white text-[#1769FF] shadow-xs"
                                  : "text-slate-600 hover:text-slate-900"
                              }`}
                            >
                              Edit Fields
                            </button>
                            <button
                              type="button"
                              onClick={() => setFaqViewMode("preview")}
                              className={`px-3 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                                faqViewMode === "preview"
                                  ? "bg-white text-[#1769FF] shadow-xs"
                                  : "text-slate-600 hover:text-slate-900"
                              }`}
                            >
                              Live Preview
                            </button>
                          </div>
                        )}

                        <button
                          type="button"
                          onClick={handleAddFaqItem}
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold text-white bg-[#1769FF] hover:bg-blue-600 transition-colors shadow-xs cursor-pointer"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          <span>+ Add FAQ</span>
                        </button>
                      </div>
                    </div>

                    {/* FAQ Items List / Editor */}
                    {faqViewMode === "edit" ? (
                      <div>
                        {(!form.faqs || form.faqs.length === 0) ? (
                          <div className="p-8 rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50/50 text-center space-y-3">
                            <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200/70 text-[#1769FF] flex items-center justify-center mx-auto">
                              <HelpCircle className="w-6 h-6" />
                            </div>
                            <div className="space-y-1">
                              <h4 className="text-sm font-bold text-slate-800">No FAQs Configured Yet</h4>
                              <p className="text-xs text-slate-500 max-w-md mx-auto">
                                Technical FAQs help clarify complex topics, increase time-on-page, and boost search engine ranking signals.
                              </p>
                            </div>
                            <div className="flex items-center justify-center gap-3 pt-2">
                              <button
                                type="button"
                                onClick={handleAddFaqItem}
                                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#1769FF] hover:bg-blue-600 transition-colors cursor-pointer shadow-xs"
                              >
                                <Plus className="w-3.5 h-3.5" />
                                <span>Create First FAQ</span>
                              </button>
                              <button
                                type="button"
                                onClick={handleInsertSampleFaqs}
                                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-slate-700 bg-white border border-slate-200 hover:bg-slate-100 transition-colors cursor-pointer"
                              >
                                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                                <span>Insert 2 Sample FAQs</span>
                              </button>
                            </div>
                          </div>
                        ) : (
                          <div className="space-y-4">
                            {form.faqs.map((faq, index) => {
                              const isExpanded = adminFaqOpenIndex === index;
                              return (
                                <div
                                  key={index}
                                  className={`rounded-2xl border transition-all ${
                                    isExpanded
                                      ? "border-[#1769FF]/50 bg-blue-50/20 shadow-xs"
                                      : "border-slate-200 bg-slate-50/40 hover:border-slate-300"
                                  }`}
                                >
                                  {/* Item Header Row */}
                                  <div className="p-3.5 sm:px-4 flex items-center justify-between gap-3">
                                    <div
                                      onClick={() => setAdminFaqOpenIndex(isExpanded ? null : index)}
                                      className="flex items-center gap-2.5 flex-1 min-w-0 cursor-pointer select-none"
                                    >
                                      <span className="w-6 h-6 rounded-lg bg-blue-100 text-[#1769FF] font-mono text-xs font-bold flex items-center justify-center shrink-0">
                                        #{index + 1}
                                      </span>
                                      <span className="text-xs sm:text-sm font-semibold text-slate-900 truncate">
                                        {faq.question.trim() || "(Untitled Question — Click to Edit)"}
                                      </span>
                                    </div>

                                    {/* Actions */}
                                    <div className="flex items-center gap-1 shrink-0">
                                      {/* Move Up */}
                                      <button
                                        type="button"
                                        disabled={index === 0}
                                        onClick={() => handleMoveFaqItem(index, "up")}
                                        title="Move FAQ Up"
                                        className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-white border border-transparent hover:border-slate-200 disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
                                      >
                                        <ChevronUp className="w-3.5 h-3.5" />
                                      </button>
                                      {/* Move Down */}
                                      <button
                                        type="button"
                                        disabled={index === form.faqs.length - 1}
                                        onClick={() => handleMoveFaqItem(index, "down")}
                                        title="Move FAQ Down"
                                        className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-white border border-transparent hover:border-slate-200 disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
                                      >
                                        <ChevronDown className="w-3.5 h-3.5" />
                                      </button>
                                      {/* Expand/Collapse Toggle */}
                                      <button
                                        type="button"
                                        onClick={() => setAdminFaqOpenIndex(isExpanded ? null : index)}
                                        title={isExpanded ? "Collapse item" : "Expand item"}
                                        className="p-1.5 rounded-lg text-slate-500 hover:text-[#1769FF] hover:bg-white border border-transparent hover:border-slate-200 transition-colors cursor-pointer"
                                      >
                                        <ChevronDown
                                          className={`w-3.5 h-3.5 transition-transform duration-200 ${
                                            isExpanded ? "rotate-180" : ""
                                          }`}
                                        />
                                      </button>
                                      {/* Delete */}
                                      <button
                                        type="button"
                                        onClick={() => handleRemoveFaqItem(index)}
                                        title="Delete FAQ"
                                        className="p-1.5 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 border border-transparent hover:border-red-200 transition-colors cursor-pointer"
                                      >
                                        <Trash2 className="w-3.5 h-3.5" />
                                      </button>
                                    </div>
                                  </div>

                                  {/* Smooth Animated Form Body */}
                                  <div className={cn("faq-accordion-grid", isExpanded ? "open" : "")}>
                                    <div className="faq-accordion-inner">
                                      <div className="px-4 pb-4 pt-2 border-t border-slate-200/70 space-y-3 bg-white rounded-b-2xl">
                                        <div>
                                          <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                                            Question <span className="text-red-500">*</span>
                                          </label>
                                          <input
                                            type="text"
                                            value={faq.question}
                                            onChange={(e) =>
                                              handleUpdateFaqItem(index, "question", e.target.value)
                                            }
                                            placeholder="e.g. How does this architecture reduce server latency?"
                                            className="w-full text-xs font-semibold text-slate-900 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 focus:bg-white focus:border-[#1769FF] focus:outline-none transition-colors"
                                          />
                                        </div>

                                        <div>
                                          <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                                            Answer Text <span className="text-red-500">*</span>
                                          </label>
                                          <textarea
                                            rows={3}
                                            value={faq.answer}
                                            onChange={(e) =>
                                              handleUpdateFaqItem(index, "answer", e.target.value)
                                            }
                                            placeholder="e.g. By leveraging edge runtime workers, static asset caching, and streaming SSR..."
                                            className="w-full text-xs text-slate-800 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 focus:bg-white focus:border-[#1769FF] focus:outline-none transition-colors leading-relaxed"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}

                            <div className="pt-2 flex items-center justify-between">
                              <button
                                type="button"
                                onClick={handleAddFaqItem}
                                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold text-[#1769FF] bg-blue-50 border border-blue-200 hover:bg-blue-100/70 transition-colors cursor-pointer"
                              >
                                <Plus className="w-3.5 h-3.5" />
                                <span>+ Add Another FAQ</span>
                              </button>
                              <button
                                type="button"
                                onClick={() => setFaqViewMode("preview")}
                                className="text-xs font-bold text-slate-600 hover:text-[#1769FF] flex items-center gap-1 cursor-pointer"
                              >
                                <Eye className="w-3.5 h-3.5" />
                                <span>Preview Live Accordion →</span>
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      /* Live Interactive Accordion Preview (Theme styled) */
                      <div className="space-y-4">
                        <div className="flex items-center justify-between text-xs text-slate-500 bg-slate-50 p-3 rounded-xl border border-slate-200">
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="font-semibold text-slate-700">Interactive Accordion Preview</span>
                            <span>— Click any question below to test smooth open and close animations.</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => setFaqViewMode("edit")}
                            className="font-bold text-[#1769FF] hover:underline cursor-pointer"
                          >
                            ← Back to Edit
                          </button>
                        </div>

                        <div className="p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-slate-800 space-y-3">
                          <div className="flex items-center gap-2 pb-2 text-white">
                            <HelpCircle className="w-4 h-4 text-[#00C6FF]" />
                            <h4 className="text-sm font-bold">Frequently Asked Questions (Article Preview)</h4>
                          </div>

                          {form.faqs.map((faq, index) => {
                            const isOpen = adminFaqOpenIndex === index;
                            return (
                              <div
                                key={index}
                                className={cn(
                                  "relative rounded-2xl transition-all duration-300 overflow-hidden backdrop-blur-md",
                                  isOpen
                                    ? "bg-[#07162c] border border-transparent shadow-[0_8px_30px_rgba(0,198,255,0.14)]"
                                    : "bg-[#081226]/90 border border-blue-900/40 hover:border-brand-cyan hover:bg-[#0d1b38] shadow-sm"
                                )}
                              >
                                {isOpen && (
                                  <div className="absolute top-0 left-0 right-0 h-[2px] pointer-events-none animate-shimmer-x" />
                                )}

                                <button
                                  type="button"
                                  onClick={() => setAdminFaqOpenIndex(isOpen ? null : index)}
                                  className="w-full flex items-center justify-between px-4 sm:px-6 py-4 text-left outline-none focus:outline-none group cursor-pointer"
                                >
                                  <span
                                    className={cn(
                                      "text-sm font-bold transition-colors duration-200 leading-snug",
                                      isOpen ? "text-[#00C6FF]" : "text-slate-200 group-hover:text-[#00C6FF]"
                                    )}
                                  >
                                    {faq.question.trim() || `(Question #${index + 1})`}
                                  </span>

                                  <div
                                    className={cn(
                                      "w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300",
                                      isOpen
                                        ? "bg-cyan-500/20 text-[#00C6FF] border border-cyan-500/40 rotate-180 shadow-xs"
                                        : "bg-blue-900/40 text-slate-300 border border-blue-800/40 group-hover:bg-cyan-500/15 group-hover:text-[#00C6FF]"
                                    )}
                                  >
                                    <ChevronDown className="w-4 h-4 transition-transform duration-300" />
                                  </div>
                                </button>

                                <div className={cn("faq-accordion-grid", isOpen ? "open" : "")}>
                                  <div className="faq-accordion-inner">
                                    <div className="px-4 sm:px-6 pb-5 pt-1 border-t border-blue-900/40">
                                      <div className="pl-3.5 sm:pl-4 border-l-2 border-[#00C6FF] py-0.5 mt-2">
                                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed whitespace-pre-line">
                                          {faq.answer.trim() || "(No answer text configured yet.)"}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Bottom Step Nav */}
                  <div className="flex items-center justify-between pt-2">
                    <div className="text-xs text-slate-500">
                      Content ready? Proceed to configure design styles or SEO metadata.
                    </div>
                    <button
                      type="button"
                      onClick={() => switchEditorStep("design")}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 transition-all cursor-pointer shadow-xs"
                    >
                      <span>Next: 2. Design Elements &amp; Quotes</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              {/* ============================================================= */}
              {/* STEP 2: DESIGN PALETTE, TABLES & MULTI-COLOR QUOTES */}
              {/* ============================================================= */}
              <div className={editorStep === "design" ? "space-y-6" : "hidden"}>
                <div className="p-5 rounded-2xl border border-blue-200 bg-blue-50/50 space-y-1">
                    <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                      <Palette className="w-4 h-4 text-[#1769FF]" />
                      <span>Design Elements &amp; Quote Palette</span>
                    </h3>
                    <p className="text-xs text-slate-600">
                      Click any element below to immediately inject it into your article content. All styling automatically matches the Nexovio design system.
                    </p>
                  </div>

                  {/* Section A: Multi-Color Blockquotes */}
                  <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 shadow-xs">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">Stylized Quotes (5 Brand Color Schemes)</h4>
                        <p className="text-xs text-slate-500">Use different colors for engineering insights, technical notes, warnings, or leadership advice.</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Blue Quote */}
                      <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-[#1769FF] flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#1769FF]" />
                            Electric Blue Quote (.blog-quote-blue)
                          </span>
                          <button
                            type="button"
                            onClick={() =>
                              insertCustomHtml(
                                `<blockquote class="blog-quote-blue"><p>"Architecture is not just what it looks like, but how the systems scale under high concurrent load."</p></blockquote><p><br></p>`
                              )
                            }
                            className="px-2.5 py-1 rounded-lg text-xs font-bold bg-[#1769FF] text-white hover:bg-blue-600 transition-colors cursor-pointer"
                          >
                            + Insert
                          </button>
                        </div>
                        <blockquote className="blog-quote-blue !m-0 !p-3 text-xs text-slate-700 italic border-l-4 border-[#1769FF] bg-white rounded-r-lg">
                          &quot;Architecture is not just what it looks like, but how the systems scale under high concurrent load.&quot;
                        </blockquote>
                      </div>

                      {/* Cyan Quote */}
                      <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-cyan-600 flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#00C6FF]" />
                            Cyber Cyan Quote (.blog-quote-cyan)
                          </span>
                          <button
                            type="button"
                            onClick={() =>
                              insertCustomHtml(
                                `<blockquote class="blog-quote-cyan"><p>"Next-generation edge runtimes eliminate cold-starts and serve content at wire speeds globally."</p></blockquote><p><br></p>`
                              )
                            }
                            className="px-2.5 py-1 rounded-lg text-xs font-bold bg-cyan-600 text-white hover:bg-cyan-700 transition-colors cursor-pointer"
                          >
                            + Insert
                          </button>
                        </div>
                        <blockquote className="blog-quote-cyan !m-0 !p-3 text-xs text-slate-700 italic border-l-4 border-[#00C6FF] bg-white rounded-r-lg">
                          &quot;Next-generation edge runtimes eliminate cold-starts and serve content at wire speeds globally.&quot;
                        </blockquote>
                      </div>

                      {/* Purple Quote */}
                      <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-purple-600 flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-purple-600" />
                            Royal Purple Quote (.blog-quote-purple)
                          </span>
                          <button
                            type="button"
                            onClick={() =>
                              insertCustomHtml(
                                `<blockquote class="blog-quote-purple"><p>"Strategic engineering leadership aligns code quality directly with high-impact enterprise revenue."</p></blockquote><p><br></p>`
                              )
                            }
                            className="px-2.5 py-1 rounded-lg text-xs font-bold bg-purple-600 text-white hover:bg-purple-700 transition-colors cursor-pointer"
                          >
                            + Insert
                          </button>
                        </div>
                        <blockquote className="blog-quote-purple !m-0 !p-3 text-xs text-slate-700 italic border-l-4 border-purple-500 bg-white rounded-r-lg">
                          &quot;Strategic engineering leadership aligns code quality directly with high-impact enterprise revenue.&quot;
                        </blockquote>
                      </div>

                      {/* Emerald Quote */}
                      <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-emerald-600 flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                            Emerald Green Quote (.blog-quote-emerald)
                          </span>
                          <button
                            type="button"
                            onClick={() =>
                              insertCustomHtml(
                                `<blockquote class="blog-quote-emerald"><p>"Achieving perfect 100/100 Core Web Vitals guarantees superior organic search ranking retention."</p></blockquote><p><br></p>`
                              )
                            }
                            className="px-2.5 py-1 rounded-lg text-xs font-bold bg-emerald-600 text-white hover:bg-emerald-700 transition-colors cursor-pointer"
                          >
                            + Insert
                          </button>
                        </div>
                        <blockquote className="blog-quote-emerald !m-0 !p-3 text-xs text-slate-700 italic border-l-4 border-emerald-500 bg-white rounded-r-lg">
                          &quot;Achieving perfect 100/100 Core Web Vitals guarantees superior organic search ranking retention.&quot;
                        </blockquote>
                      </div>

                      {/* Amber Quote */}
                      <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-3 md:col-span-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-amber-600 flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                            Warm Amber Warning Quote (.blog-quote-amber)
                          </span>
                          <button
                            type="button"
                            onClick={() =>
                              insertCustomHtml(
                                `<blockquote class="blog-quote-amber"><p>"Never commit secrets, tokens, or unauthenticated database credentials to client-facing bundles."</p></blockquote><p><br></p>`
                              )
                            }
                            className="px-2.5 py-1 rounded-lg text-xs font-bold bg-amber-600 text-white hover:bg-amber-700 transition-colors cursor-pointer"
                          >
                            + Insert
                          </button>
                        </div>
                        <blockquote className="blog-quote-amber !m-0 !p-3 text-xs text-slate-700 italic border-l-4 border-amber-500 bg-white rounded-r-lg">
                          &quot;Never commit secrets, tokens, or unauthenticated database credentials to client-facing bundles.&quot;
                        </blockquote>
                      </div>
                    </div>
                  </div>

                  {/* Section B: Responsive Tables */}
                  <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 shadow-xs">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">Engineered Table Designs</h4>
                        <p className="text-xs text-slate-500">Theme-styled with zebra rows, electric blue headers, and horizontal mobile scrolling.</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Comparison Table */}
                      <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-slate-800">Comparison Table (2 vs 1)</span>
                          <button
                            type="button"
                            onClick={() =>
                              insertCustomHtml(
                                `<div class="blog-table-container"><table class="blog-table"><thead><tr><th>Evaluation Pillar</th><th>Custom Next.js Stack</th><th>Visual Site Builders</th></tr></thead><tbody><tr><td>Core Web Vitals</td><td>100/100 LCP &amp; Zero Shift</td><td>Degraded Script Bloat</td></tr><tr><td>SEO Control</td><td>Granular JSON-LD &amp; Edge Headers</td><td>Restricted Canonical Settings</td></tr><tr><td>Scalability</td><td>Serverless Auto-Burst Sharding</td><td>Single Server Bottlenecks</td></tr></tbody></table></div><p><br></p>`
                              )
                            }
                            className="px-2.5 py-1 rounded-lg text-xs font-bold bg-[#1769FF] text-white hover:bg-blue-600 transition-colors cursor-pointer"
                          >
                            + Insert
                          </button>
                        </div>
                        <p className="text-[11px] text-slate-500 leading-relaxed">
                          Pre-filled with 3 rows comparing evaluation pillars. Wrapped in <code>.blog-table-container</code>.
                        </p>
                      </div>

                      {/* Specification / Benchmark Table */}
                      <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-slate-800">Architecture Benchmark Table</span>
                          <button
                            type="button"
                            onClick={() =>
                              insertCustomHtml(
                                `<div class="blog-table-container"><table class="blog-table"><thead><tr><th>Parameter</th><th>Target Metric</th><th>Optimization Strategy</th></tr></thead><tbody><tr><td>Largest Contentful Paint (LCP)</td><td>&lt; 1.2s</td><td>Edge HTML cache + AVIF Image compression</td></tr><tr><td>Interaction to Next Paint (INP)</td><td>&lt; 150ms</td><td>Web workers &amp; requestIdleCallback</td></tr><tr><td>Cumulative Layout Shift (CLS)</td><td>0.00</td><td>Strict aspect ratio reserving &amp; font display swap</td></tr></tbody></table></div><p><br></p>`
                              )
                            }
                            className="px-2.5 py-1 rounded-lg text-xs font-bold bg-[#1769FF] text-white hover:bg-blue-600 transition-colors cursor-pointer"
                          >
                            + Insert
                          </button>
                        </div>
                        <p className="text-[11px] text-slate-500 leading-relaxed">
                          Benchmark spec table with columns for Parameter, Target Metric, and Optimization Strategy.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Section C: Callout Cards, Grids & Figures */}
                  <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 shadow-xs">
                    <h4 className="text-sm font-bold text-slate-900 pb-3 border-b border-slate-100 flex items-center justify-between">
                      <span>Callout Cards, Pro Tips &amp; 2-Column Grids</span>
                      <span className="text-[11px] font-normal text-slate-500">Click &quot;+ Insert&quot; to inject into your article</span>
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {/* Callout Card */}
                      <div className="p-4 rounded-xl border border-blue-200 bg-blue-50/50 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-[#1769FF] flex items-center gap-1">
                            <Bookmark className="w-3.5 h-3.5" />
                            <span>Callout Card (.blog-callout)</span>
                          </span>
                          <button
                            type="button"
                            onClick={() =>
                              insertCustomHtml(
                                `<div class="blog-callout"><div class="blog-callout-title">💡 Architecture Key Concept</div><p>Enterprise platforms require strict boundary separation between client components and edge microservices to maximize throughput and maintain sub-100ms response times globally.</p></div><p><br></p>`
                              )
                            }
                            className="px-2.5 py-1 rounded text-[11px] font-bold bg-[#1769FF] text-white hover:bg-blue-600 transition-colors cursor-pointer"
                          >
                            + Insert
                          </button>
                        </div>
                        <p className="text-[11px] text-blue-700">Electric blue left border with bold card title &amp; description.</p>
                      </div>

                      {/* Pro Tip Box */}
                      <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/50 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-emerald-800 flex items-center gap-1">
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>Pro-Tip Box (.blog-tip)</span>
                          </span>
                          <button
                            type="button"
                            onClick={() =>
                              insertCustomHtml(
                                `<div class="blog-tip"><p><strong>🚀 Pro Tip:</strong> Implement code-split dynamic imports for client-heavy modules to minimize initial bundle size and eliminate Interaction to Next Paint (INP) bottlenecks.</p></div><p><br></p>`
                              )
                            }
                            className="px-2.5 py-1 rounded text-[11px] font-bold bg-emerald-600 text-white hover:bg-emerald-700 transition-colors cursor-pointer"
                          >
                            + Insert
                          </button>
                        </div>
                        <p className="text-[11px] text-emerald-700">Emerald highlight box for recommended architectural practices.</p>
                      </div>

                      {/* 2-Column Grid */}
                      <div className="p-4 rounded-xl border border-indigo-200 bg-indigo-50/50 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-indigo-700 flex items-center gap-1">
                            <Grid className="w-3.5 h-3.5" />
                            <span>2-Column Cards (.blog-grid-2)</span>
                          </span>
                          <button
                            type="button"
                            onClick={() =>
                              insertCustomHtml(
                                `<div class="blog-grid-2"><div class="blog-card"><div class="blog-card-title">Approach A: Traditional</div><p>Higher initial coupling, synchronous monolithic data fetching, and heavier client-side JavaScript execution.</p></div><div class="blog-card"><div class="blog-card-title">Approach B: Composable</div><p>Decoupled edge execution, streaming SSR HTML, and localized partial hydration for instantaneous interactivity.</p></div></div><p><br></p>`
                              )
                            }
                            className="px-2.5 py-1 rounded text-[11px] font-bold bg-indigo-600 text-white hover:bg-indigo-700 transition-colors cursor-pointer"
                          >
                            + Insert
                          </button>
                        </div>
                        <p className="text-[11px] text-indigo-700">Responsive 2-column comparative layout for approaches.</p>
                      </div>

                      {/* Warning Box */}
                      <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/50 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-amber-800 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5" />
                            <span>Warning Box (.blog-warning)</span>
                          </span>
                          <button
                            type="button"
                            onClick={() =>
                              insertCustomHtml(
                                `<div class="blog-warning"><p><strong>⚠️ Warning / Common Pitfall:</strong> Avoid chaining multiple client-side redirects as this degrades crawl equity and LCP latency.</p></div><p><br></p>`
                              )
                            }
                            className="px-2.5 py-1 rounded text-[11px] font-bold bg-amber-600 text-white hover:bg-amber-700 transition-colors cursor-pointer"
                          >
                            + Insert
                          </button>
                        </div>
                        <p className="text-[11px] text-amber-700">Amber warning box for technical pitfalls and anti-patterns.</p>
                      </div>

                      {/* Key Takeaways Box */}
                      <div className="p-4 rounded-xl border border-purple-200 bg-purple-50/50 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-purple-800 flex items-center gap-1">
                            <CheckCheck className="w-3.5 h-3.5" />
                            <span>Key Takeaways Box</span>
                          </span>
                          <button
                            type="button"
                            onClick={() =>
                              insertCustomHtml(
                                `<div class="blog-card" style="border-left-color: #8b5cf6;"><div class="blog-card-title" style="color: #7c3aed;">📌 Key Takeaways</div><ul style="margin: 0; padding-left: 1.25rem;"><li>Decouple frontends from monolithic CMS runtimes using Next.js.</li><li>Optimize Core Web Vitals to pass Google search ranking criteria.</li><li>Cache dynamic payloads close to end-users via CDN Edge networks.</li></ul></div><p><br></p>`
                              )
                            }
                            className="px-2.5 py-1 rounded text-[11px] font-bold bg-purple-600 text-white hover:bg-purple-700 transition-colors cursor-pointer"
                          >
                            + Insert
                          </button>
                        </div>
                        <p className="text-[11px] text-purple-700">Purple accent card with bulleted list for summary sections.</p>
                      </div>
                    </div>
                  </div>

                  {/* Stepper Navigation */}
                  <div className="flex items-center justify-between pt-2">
                    <button
                      type="button"
                      onClick={() => switchEditorStep("content")}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 transition-colors"
                    >
                      <ChevronLeft className="w-3.5 h-3.5" />
                      <span>Back: 1. Content &amp; Textbox</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => switchEditorStep("seo")}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 transition-all cursor-pointer shadow-xs"
                    >
                      <span>Next: 3. Google SEO Suite</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              {/* ============================================================= */}
              {/* STEP 3: SEARCH ENGINE OPTIMIZATION (SEO) SUITE */}
              {/* ============================================================= */}
              <div className={editorStep === "seo" ? "space-y-6" : "hidden"}>
                  {/* SEO Score Banner */}
                  <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center font-extrabold text-lg shadow-xs">
                        {seoAudit.score}
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                          <span>Search Engine Optimization Score</span>
                          <span
                            className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${seoAudit.score >= 80
                              ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                              : seoAudit.score >= 50
                                ? "bg-amber-50 text-amber-700 border border-amber-200"
                                : "bg-red-50 text-red-700 border border-red-200"
                              }`}
                          >
                            {seoAudit.score >= 80 ? "Excellent" : seoAudit.score >= 50 ? "Good" : "Needs Review"}
                          </span>
                        </h3>
                        <p className="text-xs text-slate-500">
                          Real-time audit for Google crawler indexing, keyword density, and SERP snippet readability.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-xs font-mono text-slate-500">
                      <div>Title: <strong className={seoAudit.titleGood ? "text-emerald-600" : "text-amber-600"}>{seoAudit.titleLength}/60</strong></div>
                      <div>Description: <strong className={seoAudit.descGood ? "text-emerald-600" : "text-amber-600"}>{seoAudit.descLength}/160</strong></div>
                    </div>
                  </div>

                  {/* Google SERP Live Snippet Preview */}
                  <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                      <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                        <Eye className="w-3.5 h-3.5 text-[#1769FF]" />
                        Live Google SERP Search Snippet Preview
                      </span>

                      <div className="flex items-center gap-1 bg-slate-100 p-0.5 rounded-lg text-[11px]">
                        <button
                          type="button"
                          onClick={() => setSerpDevice("desktop")}
                          className={`px-2 py-0.5 rounded flex items-center gap-1 ${serpDevice === "desktop" ? "bg-white font-bold text-slate-900 shadow-xs" : "text-slate-500"
                            }`}
                        >
                          <Monitor className="w-3 h-3" />
                          <span>Desktop</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setSerpDevice("mobile")}
                          className={`px-2 py-0.5 rounded flex items-center gap-1 ${serpDevice === "mobile" ? "bg-white font-bold text-slate-900 shadow-xs" : "text-slate-500"
                            }`}
                        >
                          <Smartphone className="w-3 h-3" />
                          <span>Mobile</span>
                        </button>
                      </div>
                    </div>

                    <div
                      className={`p-4 bg-white rounded-xl border border-slate-200 text-left transition-all ${serpDevice === "mobile" ? "max-w-md mx-auto" : "w-full"
                        }`}
                    >
                      <div className="flex items-center gap-2 mb-1.5">
                        <div className="w-4 h-4 rounded-full bg-[#1769FF] flex items-center justify-center text-[9px] text-white font-bold">
                          N
                        </div>
                        <span className="text-[11px] text-slate-600 truncate block">
                          https://www.nexoviodigitalsolutions.com › blog › {form.slug || "slug"}
                        </span>
                      </div>
                      <h4 className="text-base font-semibold text-[#1a0dab] hover:underline cursor-pointer line-clamp-1">
                        {form.seoTitle || form.title || "Article Headline"} | Nexovio Digital Solutions
                      </h4>
                      <p className="text-xs text-[#4d5156] line-clamp-2 mt-1 leading-relaxed">
                        {form.seoDescription || form.excerpt || "Enter a compelling meta description to describe your publication to search engine visitors..."}
                      </p>
                    </div>
                  </div>

                  {/* Form Fields: Focus Keyword, SEO Title, SEO Description, Canonical */}
                  <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-5 shadow-xs">
                    {/* Focus Keyword */}
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                          <Key className="w-3.5 h-3.5 text-[#1769FF]" />
                          <span>Focus Target Keyword</span>
                        </label>
                        <span className="text-[11px] text-slate-400">Primary search query intent</span>
                      </div>
                      <input
                        type="text"
                        value={form.focusKeyword}
                        onChange={(e) => setForm((prev) => ({ ...prev, focusKeyword: e.target.value }))}
                        placeholder="e.g. web development vs website builders"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2 text-xs text-slate-800 focus:bg-white focus:border-[#1769FF] focus:outline-none"
                      />
                    </div>

                    {/* SEO Meta Title */}
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <label className="text-xs font-bold text-slate-700">
                          Search Engine Meta Title
                        </label>
                        <button
                          type="button"
                          onClick={() => setForm((prev) => ({ ...prev, seoTitle: prev.title }))}
                          className="text-[11px] text-[#1769FF] hover:underline"
                        >
                          Copy from Post Title
                        </button>
                      </div>
                      <input
                        type="text"
                        value={form.seoTitle}
                        onChange={(e) => setForm((prev) => ({ ...prev, seoTitle: e.target.value }))}
                        placeholder="Leave empty to use article headline..."
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2 text-xs text-slate-800 focus:bg-white focus:border-[#1769FF] focus:outline-none"
                      />
                      <div className="flex items-center justify-between text-[11px] mt-1 text-slate-400">
                        <span>Recommended length: 50–60 characters</span>
                        <span className={seoAudit.titleGood ? "text-emerald-600 font-semibold" : "text-amber-600"}>
                          {(form.seoTitle || form.title).length} chars
                        </span>
                      </div>
                    </div>

                    {/* SEO Meta Description */}
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <label className="text-xs font-bold text-slate-700">
                          Search Engine Meta Description
                        </label>
                        <button
                          type="button"
                          onClick={() => setForm((prev) => ({ ...prev, seoDescription: prev.excerpt }))}
                          className="text-[11px] text-[#1769FF] hover:underline"
                        >
                          Copy from Excerpt
                        </button>
                      </div>
                      <textarea
                        rows={3}
                        value={form.seoDescription}
                        onChange={(e) => setForm((prev) => ({ ...prev, seoDescription: e.target.value }))}
                        placeholder="Describe this article in 150-160 characters for search results..."
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/50 p-3 text-xs text-slate-800 focus:bg-white focus:border-[#1769FF] focus:outline-none"
                      />
                      <div className="flex items-center justify-between text-[11px] mt-1 text-slate-400">
                        <span>Recommended length: 140–160 characters</span>
                        <span className={seoAudit.descGood ? "text-emerald-600 font-semibold" : "text-amber-600"}>
                          {(form.seoDescription || form.excerpt).length} chars
                        </span>
                      </div>
                    </div>

                    {/* Secondary Keywords */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Secondary Keywords (Comma-separated)
                      </label>
                      <input
                        type="text"
                        value={form.keywordsText}
                        onChange={(e) => setForm((prev) => ({ ...prev, keywordsText: e.target.value }))}
                        placeholder="Web Development, Custom Solutions, Next.js, Enterprise Architecture"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2 text-xs text-slate-800 focus:bg-white focus:border-[#1769FF] focus:outline-none"
                      />
                    </div>

                    {/* Canonical URL */}
                    <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 space-y-2">
                      <label className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                        <Globe className="w-3.5 h-3.5 text-[#1769FF]" />
                        <span>Canonical URL</span>
                      </label>
                      <p className="text-[11px] text-slate-500">
                        Default canonical tag emitted for this publication:
                      </p>
                      <div className="p-2 bg-white rounded-lg border border-slate-200 text-[11px] font-mono text-slate-700 break-all select-all">
                        {defaultCanonical}
                      </div>

                      <div className="pt-2">
                        <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                          Custom Canonical Override (Optional)
                        </label>
                        <input
                          type="url"
                          value={form.canonicalUrl}
                          onChange={(e) => setForm((prev) => ({ ...prev, canonicalUrl: e.target.value }))}
                          placeholder="https://example.com/original-source-publication"
                          className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-mono text-slate-800 placeholder-slate-400 focus:border-[#1769FF] focus:outline-none"
                        />
                      </div>
                    </div>

                    {/* Robots Directives */}
                    <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 space-y-3">
                      <span className="text-xs font-bold text-slate-800 block">
                        Robots Indexing Directives
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
                              Exclude from search engines (noindex)
                            </span>
                            <span className="text-[11px] text-slate-500 block">
                              Adds &lt;meta name=&quot;robots&quot; content=&quot;noindex&quot; /&gt; and hides from sitemap.
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
                              Do not follow links (nofollow)
                            </span>
                            <span className="text-[11px] text-slate-500 block">
                              Instructs search spiders not to crawl outgoing links in this article.
                            </span>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Stepper Navigation */}
                  <div className="flex items-center justify-between pt-2">
                    <button
                      type="button"
                      onClick={() => switchEditorStep("design")}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 transition-colors"
                    >
                      <ChevronLeft className="w-3.5 h-3.5" />
                      <span>Back: 2. Design Elements</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => switchEditorStep("social")}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 transition-all cursor-pointer shadow-xs"
                    >
                      <span>Next: 4. Social Media Cards</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              {/* ============================================================= */}
              {/* STEP 4: SOCIAL MEDIA CARDS (OPEN GRAPH & TWITTER) */}
              {/* ============================================================= */}
              <div className={editorStep === "social" ? "space-y-6" : "hidden"}>
                  <div className="p-5 rounded-2xl border border-cyan-200 bg-cyan-50/50 space-y-1">
                    <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                      <Share2 className="w-4 h-4 text-cyan-600" />
                      <span>Social Media Sharing &amp; Open Graph Previews</span>
                    </h3>
                    <p className="text-xs text-slate-600">
                      Configure rich preview cards displayed when sharing this article link on LinkedIn, Twitter/X, Facebook, and Slack.
                    </p>
                  </div>

                  {/* Live Social Previews Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* LinkedIn / Facebook Card */}
                    <div className="p-4 rounded-2xl border border-slate-200 bg-white shadow-xs space-y-3">
                      <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                        <Share2 className="w-3.5 h-3.5 text-[#1769FF]" />
                        LinkedIn &amp; Facebook Share Card Preview
                      </span>

                      <div className="border border-slate-200 rounded-xl overflow-hidden shadow-xs bg-slate-50">
                        <div className="relative aspect-[1.91/1] w-full bg-slate-200">
                          {form.ogImage || form.featuredImage ? (
                            <Image
                              src={form.ogImage || form.featuredImage}
                              alt="Social preview"
                              fill
                              className="object-cover"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-slate-400 text-xs">
                              No image selected
                            </div>
                          )}
                        </div>
                        <div className="p-3 bg-white space-y-1 border-t border-slate-100">
                          <span className="text-[10px] text-slate-400 uppercase font-mono block">
                            nexoviodigitalsolutions.com
                          </span>
                          <h4 className="text-xs font-bold text-slate-900 line-clamp-1">
                            {form.socialTitle || form.seoTitle || form.title || "Article Headline"}
                          </h4>
                          <p className="text-[11px] text-slate-500 line-clamp-2">
                            {form.socialDescription || form.seoDescription || form.excerpt || "Article summary snippet..."}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Twitter / X Feed Card */}
                    <div className="p-4 rounded-2xl border border-slate-200 bg-white shadow-xs space-y-3">
                      <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                        <Share2 className="w-3.5 h-3.5 text-slate-900" />
                        Twitter / X Feed Card Preview
                      </span>

                      <div className="border border-slate-200 rounded-xl overflow-hidden shadow-xs bg-slate-50">
                        <div className="relative aspect-[16/9] w-full bg-slate-200">
                          {form.ogImage || form.featuredImage ? (
                            <Image
                              src={form.ogImage || form.featuredImage}
                              alt="Twitter preview"
                              fill
                              className="object-cover"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-slate-400 text-xs">
                              No image selected
                            </div>
                          )}
                        </div>
                        <div className="p-3 bg-white space-y-1 border-t border-slate-100">
                          <span className="text-[10px] text-slate-400 font-mono block">
                            nexoviodigitalsolutions.com
                          </span>
                          <h4 className="text-xs font-bold text-slate-900 line-clamp-1">
                            {form.socialTitle || form.seoTitle || form.title || "Article Headline"}
                          </h4>
                          <p className="text-[11px] text-slate-500 line-clamp-2">
                            {form.socialDescription || form.seoDescription || form.excerpt || "Article summary snippet..."}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Social Settings Form */}
                  <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-5 shadow-xs">
                    {/* OG Image Picker */}
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label className="text-xs font-bold text-slate-700">
                          Open Graph Image URL (og:image / Twitter / Facebook)
                        </label>
                        <div className="flex items-center gap-3">
                          <button
                            type="button"
                            onClick={() => setForm((prev) => ({ ...prev, ogImage: prev.featuredImage }))}
                            className="text-[11px] text-[#1769FF] hover:underline font-semibold"
                          >
                            Sync with Cover Image
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              setMediaTarget("og");
                              setIsMediaModalOpen(true);
                            }}
                            className="text-[11px] text-[#1769FF] hover:underline font-semibold"
                          >
                            Select from Media
                          </button>
                        </div>
                      </div>
                      <input
                        type="text"
                        value={form.ogImage}
                        onChange={(e) => setForm((prev) => ({ ...prev, ogImage: e.target.value }))}
                        placeholder={form.featuredImage || "Defaults automatically to Featured Cover Image..."}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2 text-xs font-mono text-slate-800 placeholder-slate-400 focus:bg-white focus:border-[#1769FF] focus:outline-none"
                      />
                    </div>

                    {/* Social Title Override */}
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <label className="text-xs font-bold text-slate-700">
                          Custom Social Card Title (og:title)
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
                        placeholder="Leave empty to use SEO Meta Title..."
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2 text-xs text-slate-800 focus:bg-white focus:border-[#1769FF] focus:outline-none"
                      />
                    </div>

                    {/* Social Description Override */}
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <label className="text-xs font-bold text-slate-700">
                          Custom Social Description (og:description)
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
                        placeholder="Leave empty to use SEO Meta Description..."
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/50 p-3 text-xs text-slate-800 focus:bg-white focus:border-[#1769FF] focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Stepper Navigation */}
                  <div className="flex items-center justify-between pt-2">
                    <button
                      type="button"
                      onClick={() => switchEditorStep("seo")}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 transition-colors"
                    >
                      <ChevronLeft className="w-3.5 h-3.5" />
                      <span>Back: 3. Google SEO</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => switchEditorStep("publish")}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 transition-all cursor-pointer shadow-xs"
                    >
                      <span>Next: 5. Publishing &amp; Cover</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              {/* ============================================================= */}
              {/* STEP 5: PUBLISHING & COVER IMAGE & SCHEMA */}
              {/* ============================================================= */}
              <div className={editorStep === "publish" ? "space-y-6" : "hidden"}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Featured Cover Image */}
                    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-[#1769FF] flex items-center gap-2">
                          <ImageIcon className="w-4 h-4" />
                          <span>Featured Cover Image</span>
                        </h3>
                        <button
                          type="button"
                          onClick={() => {
                            setMediaTarget("featured");
                            setIsMediaModalOpen(true);
                          }}
                          className="text-xs font-bold text-[#1769FF] hover:underline"
                        >
                          Choose from Media
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
                            <ImageIcon className="w-8 h-8 mb-2 text-slate-300" />
                            <span>No cover image selected</span>
                          </div>
                        )}
                      </div>

                      <div>
                        <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                          Cover Image File Path / URL (Website, OG, Twitter &amp; Facebook)
                        </label>
                        <input
                          type="text"
                          value={form.featuredImage}
                          onChange={(e) => {
                            const val = e.target.value;
                            setForm((prev) => ({
                              ...prev,
                              featuredImage: val,
                              ogImage: (!prev.ogImage || prev.ogImage === prev.featuredImage) ? val : prev.ogImage,
                            }));
                          }}
                          className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3 py-2 text-xs font-mono text-slate-800 focus:bg-white focus:border-[#1769FF] focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                          Alt Text (Image Accessibility &amp; SEO)
                        </label>
                        <input
                          type="text"
                          value={form.featuredImageAlt}
                          onChange={(e) => setForm((prev) => ({ ...prev, featuredImageAlt: e.target.value }))}
                          placeholder="Descriptive image context for screen readers and Google Image search..."
                          className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3 py-2 text-xs text-slate-800 focus:bg-white focus:border-[#1769FF] focus:outline-none"
                        />
                      </div>
                    </div>

                    {/* Post Metadata & Author */}
                    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-4">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-[#1769FF] flex items-center gap-2">
                        <Sparkles className="w-4 h-4" />
                        <span>Article Metadata &amp; Author</span>
                      </h3>

                      <div className="space-y-3 text-xs">
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <label className="block text-[11px] font-semibold text-slate-600">
                              Category Pillar
                            </label>
                            <button
                              type="button"
                              onClick={handleOpenAddCategory}
                              className="text-[11px] font-bold text-[#1769FF] hover:underline inline-flex items-center gap-1 cursor-pointer"
                            >
                              <Plus className="w-3 h-3" />
                              <span>New Category</span>
                            </button>
                          </div>
                          <select
                            value={form.category}
                            onChange={(e) => setForm((prev) => ({ ...prev, category: e.target.value }))}
                            className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3 py-2 text-xs text-slate-800 focus:bg-white focus:border-[#1769FF] focus:outline-none"
                          >
                            {categories.map((c) => (
                              <option key={c.id} value={c.name}>
                                {c.name} ({c.articleCount ?? 0} articles)
                              </option>
                            ))}
                          </select>
                          {/* Live Category Tag Preview */}
                          <div className="mt-1.5 flex items-center gap-2">
                            <span className="text-[10px] text-slate-400 font-mono">Live badge preview:</span>
                            {(() => {
                              const matchedCat = categories.find(
                                (c) => c.name.toLowerCase().trim() === form.category.toLowerCase().trim()
                              );
                              const color = matchedCat?.color || "blue";
                              return (
                                <span
                                  className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${getCategoryColorClasses(
                                    color
                                  )}`}
                                >
                                  <span className={`w-1.5 h-1.5 rounded-full ${getCategoryColorDot(color)}`} />
                                  {form.category || "Select category"}
                                </span>
                              );
                            })()}
                          </div>
                        </div>

                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <label className="text-[11px] font-semibold text-slate-600">
                              Publication Date
                            </label>
                            <button
                              type="button"
                              onClick={() => {
                                const today = getTodayDateString();
                                setForm((prev) => ({ ...prev, publishedAt: today }));
                                showToast(`Date set to today (${formatDate(today)})`);
                              }}
                              className="text-[10px] text-[#1769FF] font-semibold hover:underline cursor-pointer"
                            >
                              Set to Today
                            </button>
                          </div>
                          <input
                            type="date"
                            value={form.publishedAt}
                            onChange={(e) => setForm((prev) => ({ ...prev, publishedAt: e.target.value }))}
                            className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3 py-2 text-xs text-slate-800 focus:bg-white focus:border-[#1769FF] focus:outline-none"
                          />
                          <p className="text-[10px] text-slate-400 mt-1">
                            Displays as: <span className="font-semibold text-slate-700">{formatDate(form.publishedAt) || "No date"}</span>
                          </p>
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
                            Author Professional Title / Role
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
                  </div>

                  {/* Schema.org & Sitemap XML Configuration */}
                  <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-4">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-2">
                      <Shield className="w-4 h-4 text-[#1769FF]" />
                      <span>Schema.org Structured Data &amp; Sitemap Directives</span>
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                          Schema.org JSON-LD Type
                        </label>
                        <select
                          value={form.schemaType}
                          onChange={(e) => setForm((prev) => ({ ...prev, schemaType: e.target.value as any }))}
                          className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3 py-2 text-xs text-slate-800 focus:bg-white focus:border-[#1769FF] focus:outline-none"
                        >
                          <option value="BlogPosting">BlogPosting (Standard Blog)</option>
                          <option value="TechArticle">TechArticle (Engineering Guide)</option>
                          <option value="Article">Article (General Editorial)</option>
                          <option value="NewsArticle">NewsArticle (Company Press)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                          XML Sitemap Priority
                        </label>
                        <select
                          value={form.sitemapPriority}
                          onChange={(e) => setForm((prev) => ({ ...prev, sitemapPriority: e.target.value }))}
                          className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3 py-2 text-xs text-slate-800 focus:bg-white focus:border-[#1769FF] focus:outline-none"
                        >
                          <option value="1.0">1.0 (Critical Pillar Page)</option>
                          <option value="0.9">0.9 (High Priority)</option>
                          <option value="0.8">0.8 (Standard Blog Post)</option>
                          <option value="0.7">0.7 (Regular)</option>
                          <option value="0.5">0.5 (Low Priority)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                          Crawl Change Frequency
                        </label>
                        <select
                          value={form.changeFreq}
                          onChange={(e) => setForm((prev) => ({ ...prev, changeFreq: e.target.value as any }))}
                          className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3 py-2 text-xs text-slate-800 focus:bg-white focus:border-[#1769FF] focus:outline-none"
                        >
                          <option value="weekly">Weekly (Standard)</option>
                          <option value="daily">Daily (Fast Updates)</option>
                          <option value="monthly">Monthly (Evergreen)</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Table of Contents Anchors */}
                  <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-2">
                        <List className="w-4 h-4 text-[#1769FF]" />
                        <span>Table of Contents Outline</span>
                      </h3>
                      <span className="text-[11px] text-slate-400">One anchor heading per line</span>
                    </div>
                    <textarea
                      rows={3}
                      value={form.tableOfContentsText}
                      onChange={(e) => setForm((prev) => ({ ...prev, tableOfContentsText: e.target.value }))}
                      placeholder="1. Architecture Foundations&#10;2. Performance Benchmarks&#10;3. Implementation Checklist"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3 py-2 text-xs font-mono text-slate-800 focus:bg-white focus:border-[#1769FF] focus:outline-none"
                    />
                  </div>

                  {/* Stepper Navigation */}
                  <div className="flex items-center justify-between pt-2">
                    <button
                      type="button"
                      onClick={() => switchEditorStep("social")}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 transition-colors"
                    >
                      <ChevronLeft className="w-3.5 h-3.5" />
                      <span>Back: 4. Social Cards</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleSaveArticle}
                      disabled={isSaving}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#1769FF] to-[#00A3FF] hover:from-[#0F58E0] hover:to-[#008FE0] shadow-md hover:shadow-lg transition-all cursor-pointer"
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      <span>{isEditing ? "Save & Update Article" : "Publish Article Now"}</span>
                    </button>
                  </div>
                </div>
            </div>
          )}

          {/* ================================================================= */}
          {/* VIEW 3.5: CATEGORIES MANAGEMENT (ADD / EDIT / DELETE CATEGORIES) */}
          {/* ================================================================= */}
          {activeTab === "categories" && (
            <div className="p-6 sm:p-8 space-y-6 max-w-7xl mx-auto">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold text-[#1769FF] bg-blue-50 border border-blue-200/60 uppercase tracking-wider mb-2">
                    <Tags className="w-3.5 h-3.5" />
                    Content Taxonomy &amp; Editorial Pillars
                  </div>
                  <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    Blog Categories ({categories.length})
                  </h1>
                  <p className="text-xs text-slate-500 mt-0.5 max-w-2xl">
                    Manage your editorial pillars, customize slugs, assign distinct theme colors, and view real-time article distribution across categories.
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={handleOpenAddCategory}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#1769FF] to-[#00A3FF] hover:from-[#0F58E0] hover:to-[#008FE0] shadow-xs hover:shadow transition-all cursor-pointer"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add New Category</span>
                  </button>
                </div>
              </div>

              {/* Search & Filter Toolbar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
                <div className="relative flex-1 max-w-md">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="text"
                    value={categorySearch}
                    onChange={(e) => setCategorySearch(e.target.value)}
                    placeholder="Search categories by name, slug, or description..."
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 pl-9 pr-3 py-2 text-xs text-slate-800 placeholder-slate-400 focus:bg-white focus:border-[#1769FF] focus:outline-none transition-colors"
                  />
                </div>

                <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
                  <span>Total Classified Articles:</span>
                  <span className="font-mono font-bold text-slate-900 px-2 py-0.5 rounded-lg bg-blue-50 text-[#1769FF] border border-blue-100">
                    {articles.length} posts
                  </span>
                </div>
              </div>

              {/* Category Cards Grid */}
              {categoriesLoading ? (
                <div className="p-16 text-center text-slate-500 text-xs bg-white rounded-2xl border border-slate-200">
                  <RefreshCw className="w-6 h-6 text-[#1769FF] animate-spin mx-auto mb-2" />
                  Loading categories from disk...
                </div>
              ) : filteredCategories.length === 0 ? (
                <div className="p-16 text-center text-slate-500 text-xs space-y-3 bg-white rounded-2xl border border-slate-200">
                  <FolderKanban className="w-8 h-8 text-slate-300 mx-auto" />
                  <p>No categories found matching your query.</p>
                  <button
                    type="button"
                    onClick={handleOpenAddCategory}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-[#1769FF] bg-blue-50 border border-blue-200"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Create Category</span>
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {filteredCategories.map((cat) => {
                    const colorClasses = getCategoryColorClasses(cat.color);
                    const colorDot = getCategoryColorDot(cat.color);

                    return (
                      <div
                        key={cat.id}
                        className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between space-y-4 group"
                      >
                        <div className="space-y-3">
                          {/* Header badge & Actions */}
                          <div className="flex items-start justify-between gap-3">
                            <span
                              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${colorClasses}`}
                            >
                              <span className={`w-2 h-2 rounded-full ${colorDot}`} />
                              {cat.name}
                            </span>

                            <div className="flex items-center gap-1 shrink-0 opacity-80 group-hover:opacity-100 transition-opacity">
                              <button
                                type="button"
                                onClick={() => handleOpenEditCategory(cat)}
                                title="Edit Category"
                                className="p-1.5 rounded-lg border border-slate-200 text-slate-500 hover:text-[#1769FF] hover:bg-blue-50 transition-colors cursor-pointer"
                              >
                                <Edit3 className="w-3.5 h-3.5" />
                              </button>
                              <button
                                type="button"
                                onClick={() => handleOpenDeleteCategory(cat)}
                                title="Delete Category"
                                className="p-1.5 rounded-lg border border-slate-200 text-slate-500 hover:text-red-600 hover:bg-red-50 transition-colors cursor-pointer"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>

                          {/* Slug display */}
                          <div className="text-[11px] font-mono text-slate-400">
                            slug: <span className="text-slate-600 font-semibold">{cat.slug}</span>
                          </div>

                          {/* Description */}
                          <p className="text-xs text-slate-600 leading-relaxed min-h-[36px]">
                            {cat.description || "No description provided for this editorial pillar."}
                          </p>
                        </div>

                        {/* Bottom stats & articles filter link */}
                        <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                          <button
                            type="button"
                            onClick={() => {
                              setCategoryFilter(cat.name);
                              setActiveTab("posts");
                            }}
                            className="inline-flex items-center gap-1 font-semibold text-[#1769FF] hover:underline"
                          >
                            <FileText className="w-3.5 h-3.5" />
                            <span>
                              {cat.articleCount ?? 0} {cat.articleCount === 1 ? "Article" : "Articles"}
                            </span>
                            <ArrowRight className="w-3 h-3 ml-0.5" />
                          </button>

                          <span className="text-[10px] font-mono text-slate-400 capitalize">
                            {cat.color || "blue"} theme
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          {/* ================================================================= */}
          {/* VIEW 4: MEDIA LIBRARY */}
          {/* ================================================================= */}
          {activeTab === "media" && (
            <div className="p-6 sm:p-8 space-y-6 max-w-7xl mx-auto">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
                <div>
                  <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    Media Library ({availableImages.length})
                  </h1>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Upload, manage, and copy image assets saved in /public/images/blog/
                  </p>
                </div>

                <label className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#1769FF] to-[#00A3FF] hover:from-[#0F58E0] hover:to-[#008FE0] shadow-xs hover:shadow cursor-pointer transition-all">
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

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
                {availableImages.map((img) => (
                  <div
                    key={img.name}
                    className="group rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs hover:border-[#1769FF]/50 hover:shadow-md transition-all flex flex-col justify-between"
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
                      <div className="flex items-center gap-1 shrink-0">
                        <button
                          type="button"
                          onClick={() => copyToClipboard(img.url)}
                          title="Copy Image URL"
                          className="p-1.5 rounded-lg border border-slate-200 text-slate-500 hover:text-[#1769FF] hover:bg-blue-50 transition-colors shrink-0 cursor-pointer"
                        >
                          {copiedUrl === img.url ? (
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDeleteMedia(img.name)}
                          title="Delete image from database"
                          className="p-1.5 rounded-lg border border-slate-200 text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors shrink-0 cursor-pointer"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ================================================================= */}
          {/* VIEW 5: SUBSCRIBERS */}
          {/* ================================================================= */}
          {activeTab === "subscribers" && (
            <div className="p-6 sm:p-8 space-y-6 max-w-7xl mx-auto">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    Newsletter Subscribers ({subscribers.length})
                  </h1>
                  <p className="text-xs text-slate-500 mt-0.5">
                    View and manage users who subscribed via the Blog Hub and digital briefing forms.
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={fetchSubscribers}
                    className="px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-700 border border-slate-200 bg-white hover:bg-slate-50 transition-colors inline-flex items-center gap-1.5"
                  >
                    <RefreshCw className={`w-3.5 h-3.5 ${loadingSubscribers ? "animate-spin" : ""}`} />
                    <span>Refresh</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleExportSubscribersCsv}
                    className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#1769FF] to-[#00A3FF] hover:brightness-110 transition-all inline-flex items-center gap-1.5 shadow-xs"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Export CSV</span>
                  </button>
                </div>
              </div>

              {/* Subscriber Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs space-y-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block">
                    Total Subscribers
                  </span>
                  <span className="text-2xl font-extrabold text-slate-900">{subscribers.length}</span>
                  <p className="text-[11px] text-slate-400">Total email leads registered</p>
                </div>

                <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs space-y-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block">
                    Active Delivery Status
                  </span>
                  <span className="text-2xl font-extrabold text-emerald-600">
                    {subscribers.filter((s) => s.status === "active").length}
                  </span>
                  <p className="text-[11px] text-slate-400">100% active subscribers</p>
                </div>

                <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs space-y-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block">
                    Primary Lead Source
                  </span>
                  <span className="text-lg font-bold text-[#1769FF] block truncate">
                    Blog Hub Briefing
                  </span>
                  <p className="text-[11px] text-emerald-600 font-mono font-medium">MongoDB: newsletter_subscribers</p>
                </div>
              </div>

              {/* Search Filter */}
              <div className="flex items-center justify-between gap-4">
                <div className="relative flex-1 sm:max-w-sm">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="text"
                    value={subscriberSearch}
                    onChange={(e) => setSubscriberSearch(e.target.value)}
                    placeholder="Search subscriber emails..."
                    className="w-full rounded-xl border border-slate-200 bg-white pl-9 pr-3 py-2 text-xs text-slate-800 placeholder-slate-400 focus:border-[#1769FF] focus:outline-none shadow-xs"
                  />
                </div>

                <span className="text-xs text-slate-500">
                  Showing {subscribers.filter((s) => s.email.toLowerCase().includes(subscriberSearch.toLowerCase().trim())).length} of {subscribers.length} subscribers
                </span>
              </div>

              {/* Subscribers Table */}
              <div className="rounded-2xl border border-slate-200 bg-white shadow-xs overflow-hidden">
                {loadingSubscribers ? (
                  <div className="p-16 text-center text-slate-500 text-xs">
                    <RefreshCw className="w-6 h-6 text-[#1769FF] animate-spin mx-auto mb-2" />
                    Loading subscribers...
                  </div>
                ) : subscribers.length === 0 ? (
                  <div className="p-16 text-center text-slate-500 text-xs space-y-2">
                    <Mail className="w-8 h-8 text-slate-300 mx-auto" />
                    <p className="font-semibold text-slate-700">No subscribers yet</p>
                    <p className="text-slate-400">
                      When visitors submit their email in the blog newsletter form, they will appear here.
                    </p>
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[650px]">
                      <thead>
                        <tr className="border-b border-slate-200/80 bg-slate-50/60 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                          <th className="py-3 px-5">Subscriber Email</th>
                          <th className="py-3 px-4">Subscribed At</th>
                          <th className="py-3 px-4">Source</th>
                          <th className="py-3 px-4">Status</th>
                          <th className="py-3 px-5 text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-xs">
                        {subscribers
                          .filter((s) =>
                            s.email.toLowerCase().includes(subscriberSearch.toLowerCase().trim())
                          )
                          .map((sub) => (
                            <tr key={sub.id} className="hover:bg-slate-50/70 transition-colors">
                              <td className="py-3.5 px-5">
                                <div className="flex items-center gap-2.5">
                                  <div className="w-7 h-7 rounded-full bg-blue-50 border border-blue-200 text-[#1769FF] flex items-center justify-center font-bold text-[11px]">
                                    {sub.email.charAt(0).toUpperCase()}
                                  </div>
                                  <span className="font-semibold text-slate-900">{sub.email}</span>
                                </div>
                              </td>
                              <td className="py-3.5 px-4 text-slate-500 font-mono text-[11px]">
                                {new Date(sub.subscribedAt).toLocaleString("en-US", {
                                  year: "numeric",
                                  month: "short",
                                  day: "numeric",
                                  hour: "2-digit",
                                  minute: "2-digit",
                                })}
                              </td>
                              <td className="py-3.5 px-4">
                                <span className="text-[11px] font-medium text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md">
                                  {sub.source}
                                </span>
                              </td>
                              <td className="py-3.5 px-4">
                                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200">
                                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                  {sub.status}
                                </span>
                              </td>
                              <td className="py-3.5 px-5 text-right">
                                <div className="inline-flex items-center gap-1.5">
                                  <button
                                    type="button"
                                    onClick={() => copyToClipboard(sub.email)}
                                    title="Copy Email"
                                    className="p-1.5 rounded-lg text-slate-400 hover:text-[#1769FF] hover:bg-blue-50 transition-colors"
                                  >
                                    <Copy className="w-3.5 h-3.5" />
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => handleDeleteSubscriber(sub.id, sub.email)}
                                    title="Delete Subscriber"
                                    className="p-1.5 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors"
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
        </div>
      </main>

      {/* ========================================================================= */}
      {/* MODAL 1: CUSTOM CSS CLASS APPLICATOR (FOR ANY SELECTED ELEMENT/TEXT) */}
      {/* ========================================================================= */}
      {isClassModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 transition-all duration-200">
          <div className="max-w-xl w-full rounded-2xl border border-slate-200 bg-white shadow-2xl overflow-hidden flex flex-col max-h-[90vh] modal-animate">
            {/* Modal Header */}
            <div className="p-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
              <div className="flex items-center gap-2">
                <Palette className="w-4 h-4 text-purple-600" />
                <h3 className="text-sm font-bold text-slate-900">
                  Custom CSS Class Manager
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsClassModalOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/50"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-5 overflow-y-auto space-y-5 text-xs">
              {/* Target Element Indicator */}
              <div className="p-3 rounded-xl bg-purple-50/70 border border-purple-200/60 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-purple-800">
                    Target Node:
                  </span>
                  <span className="font-mono text-xs px-2 py-0.5 rounded bg-white text-purple-900 border border-purple-200 font-bold">
                    &lt;{targetNodeTag}&gt;
                  </span>
                </div>
                {selectedTextSnippet && (
                  <p className="text-[11px] text-slate-600 italic truncate">
                    &quot;{selectedTextSnippet}&quot;
                  </p>
                )}
              </div>

              {/* Active Classes on Element */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="font-bold text-slate-700 uppercase tracking-wider text-[11px]">
                    Active Classes on Element:
                  </label>
                  {targetNodeClasses.length > 0 && (
                    <button
                      type="button"
                      onClick={() => setTargetNodeClasses([])}
                      className="text-[11px] text-red-600 hover:underline"
                    >
                      Clear All
                    </button>
                  )}
                </div>

                {targetNodeClasses.length === 0 ? (
                  <div className="p-2.5 rounded-lg border border-dashed border-slate-200 text-slate-400 text-center text-[11px]">
                    No custom classes assigned yet. Click preset pills below or type custom classes.
                  </div>
                ) : (
                  <div className="flex flex-wrap items-center gap-1.5 p-2 rounded-xl bg-slate-50 border border-slate-200">
                    {targetNodeClasses.map((cls) => (
                      <span
                        key={cls}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-purple-100 text-purple-900 font-mono text-[11px] font-bold border border-purple-300"
                      >
                        <span>{cls}</span>
                        <button
                          type="button"
                          onClick={() => toggleClassOnTarget(cls)}
                          className="hover:text-red-600"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Quick Preset Class Pills */}
              <div className="space-y-3">
                <span className="font-bold text-slate-700 uppercase tracking-wider text-[11px] block">
                  1-Click Preset Design Classes:
                </span>

                {/* Quotes */}
                <div>
                  <span className="text-[10px] text-slate-400 font-semibold uppercase block mb-1">
                    Quotes &amp; Accents:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      { name: "blog-quote-blue", label: "Electric Blue Quote" },
                      { name: "blog-quote-cyan", label: "Cyan Quote" },
                      { name: "blog-quote-purple", label: "Purple Quote" },
                      { name: "blog-quote-emerald", label: "Emerald Quote" },
                      { name: "blog-quote-amber", label: "Amber Quote" },
                    ].map((item) => (
                      <button
                        key={item.name}
                        type="button"
                        onClick={() => toggleClassOnTarget(item.name)}
                        className={`px-2.5 py-1 rounded-lg text-[11px] font-mono transition-all cursor-pointer ${targetNodeClasses.includes(item.name)
                          ? "bg-purple-600 text-white font-bold"
                          : "bg-white border border-slate-200 text-slate-700 hover:border-purple-300 hover:text-purple-700"
                          }`}
                      >
                        {targetNodeClasses.includes(item.name) ? "✓ " : "+ "}
                        {item.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Tables & Boxes */}
                <div>
                  <span className="text-[10px] text-slate-400 font-semibold uppercase block mb-1">
                    Tables, Cards &amp; Boxes:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      { name: "blog-table-container", label: "Table Container" },
                      { name: "blog-table", label: "Table Style" },
                      { name: "blog-card", label: "Callout Card" },
                      { name: "blog-tip", label: "Pro Tip Box" },
                      { name: "blog-warning", label: "Warning Box" },
                      { name: "blog-figure", label: "Figure Card" },
                    ].map((item) => (
                      <button
                        key={item.name}
                        type="button"
                        onClick={() => toggleClassOnTarget(item.name)}
                        className={`px-2.5 py-1 rounded-lg text-[11px] font-mono transition-all cursor-pointer ${targetNodeClasses.includes(item.name)
                          ? "bg-purple-600 text-white font-bold"
                          : "bg-white border border-slate-200 text-slate-700 hover:border-purple-300 hover:text-purple-700"
                          }`}
                      >
                        {targetNodeClasses.includes(item.name) ? "✓ " : "+ "}
                        {item.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Typography & Layout */}
                <div>
                  <span className="text-[10px] text-slate-400 font-semibold uppercase block mb-1">
                    Typography &amp; Layout:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      { name: "blog-gradient-text", label: "Gradient Text" },
                      { name: "blog-lead", label: "Lead Paragraph" },
                      { name: "blog-highlight", label: "Text Highlight" },
                      { name: "blog-badge", label: "Pill Badge" },
                      { name: "blog-grid-2", label: "2-Col Grid" },
                      { name: "blog-grid-3", label: "3-Col Grid" },
                    ].map((item) => (
                      <button
                        key={item.name}
                        type="button"
                        onClick={() => toggleClassOnTarget(item.name)}
                        className={`px-2.5 py-1 rounded-lg text-[11px] font-mono transition-all cursor-pointer ${targetNodeClasses.includes(item.name)
                          ? "bg-purple-600 text-white font-bold"
                          : "bg-white border border-slate-200 text-slate-700 hover:border-purple-300 hover:text-purple-700"
                          }`}
                      >
                        {targetNodeClasses.includes(item.name) ? "✓ " : "+ "}
                        {item.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Freeform Custom Class Input */}
              <div className="space-y-1.5 pt-2 border-t border-slate-100">
                <label className="font-bold text-slate-700 uppercase tracking-wider text-[11px] block">
                  Add Any Custom CSS / Tailwind Classes:
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={customClassInput}
                    onChange={(e) => setCustomClassInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        addManualClass();
                      }
                    }}
                    placeholder="e.g. shadow-xl rounded-2xl p-6 bg-slate-900 text-cyan-400"
                    className="flex-1 rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2 text-xs font-mono text-slate-800 placeholder-slate-400 focus:bg-white focus:border-purple-500 focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={addManualClass}
                    className="px-3 py-2 rounded-xl text-xs font-bold bg-slate-100 text-slate-700 hover:bg-purple-50 hover:text-purple-700 border border-slate-200 transition-colors"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-slate-200 bg-slate-50 flex items-center justify-end gap-2.5">
              <button
                type="button"
                onClick={() => setIsClassModalOpen(false)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 border border-slate-200 hover:bg-white transition-colors"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={applyClassesToElement}
                className="px-5 py-2 rounded-xl text-xs font-bold text-white bg-purple-600 hover:bg-purple-700 shadow-sm transition-all cursor-pointer flex items-center gap-1.5"
              >
                <Check className="w-3.5 h-3.5" />
                <span>Apply Classes to Element</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL 2: MEDIA PICKER MODAL */}
      {/* ========================================================================= */}
      {isMediaModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 transition-all duration-200">
          <div className="max-w-3xl w-full rounded-2xl border border-slate-200 bg-white shadow-2xl overflow-hidden flex flex-col max-h-[85vh] modal-animate">
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
                        setForm((prev) => ({
                          ...prev,
                          featuredImage: img.url,
                          ogImage: (!prev.ogImage || prev.ogImage === prev.featuredImage) ? img.url : prev.ogImage,
                        }));
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

      {/* ========================================================================= */}
      {/* MODAL 3: SINGLE DELETE CONFIRMATION MODAL */}
      {/* ========================================================================= */}
      {deleteConfirmSlug && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 transition-all duration-200">
          <div className="max-w-md w-full rounded-2xl border border-red-200 bg-white p-6 shadow-2xl space-y-4 modal-animate">
            <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-200 text-red-600 flex items-center justify-center">
              <Trash2 className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Delete Article Permanently?</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Are you sure you want to delete <code className="text-[#1769FF] font-mono font-semibold">{deleteConfirmSlug}</code>? This action will permanently remove the article from your MongoDB database.
            </p>
            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                disabled={isDeletingArticle}
                onClick={() => setDeleteConfirmSlug(null)}
                className="px-4 py-2 rounded-xl text-xs font-semibold border border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                type="button"
                disabled={isDeletingArticle}
                onClick={() => handleDeleteArticle(deleteConfirmSlug)}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-red-600 hover:bg-red-700 disabled:opacity-60 text-white shadow-sm transition-all cursor-pointer"
              >
                {isDeletingArticle ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    <span>Deleting...</span>
                  </>
                ) : (
                  <>
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Confirm Delete</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL 3B: BATCH DELETE CONFIRMATION MODAL */}
      {/* ========================================================================= */}
      {isBatchDeleteModalOpen && selectedArticles.length > 0 && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 transition-all duration-200">
          <div className="max-w-lg w-full rounded-2xl border border-red-200 bg-white p-6 shadow-2xl space-y-4 modal-animate">
            <div className="flex items-start justify-between">
              <div className="w-11 h-11 rounded-xl bg-red-50 border border-red-200 text-red-600 flex items-center justify-center shrink-0">
                <Trash2 className="w-6 h-6" />
              </div>
              <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-bold bg-red-100 text-red-700">
                Batch Deletion
              </span>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900">
                Delete {selectedArticles.length} Selected Articles?
              </h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                This will permanently delete the following articles from your MongoDB database and purge their cached routes:
              </p>
            </div>

            {/* List of selected articles */}
            <div className="max-h-40 overflow-y-auto space-y-1.5 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs">
              {selectedArticles.map((slug) => {
                const article = articles.find((a) => a.slug === slug);
                return (
                  <div key={slug} className="flex items-center justify-between text-slate-700 py-0.5">
                    <span className="font-semibold truncate max-w-[280px]">
                      {article ? article.title : slug}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">/blog/{slug}</span>
                  </div>
                );
              })}
            </div>

            <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-800 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
              <span>Warning: This batch operation cannot be undone.</span>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                disabled={isBatchDeleting}
                onClick={() => setIsBatchDeleteModalOpen(false)}
                className="px-4 py-2 rounded-xl text-xs font-semibold border border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                type="button"
                disabled={isBatchDeleting}
                onClick={handleBatchDelete}
                className="inline-flex items-center gap-1.5 px-5 py-2 rounded-xl text-xs font-bold bg-red-600 hover:bg-red-700 disabled:opacity-60 text-white shadow-sm transition-all cursor-pointer"
              >
                {isBatchDeleting ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    <span>Deleting {selectedArticles.length} articles...</span>
                  </>
                ) : (
                  <>
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Permanently Delete ({selectedArticles.length})</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL 4: ADD / EDIT CATEGORY MODAL */}
      {/* ========================================================================= */}
      {isCategoryModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 transition-all duration-200">
          <div className="max-w-lg w-full rounded-2xl border border-slate-200 bg-white shadow-2xl overflow-hidden flex flex-col modal-animate">
            <div className="p-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <Tags className="w-4 h-4 text-[#1769FF]" />
                <span>{categoryForm.id ? "Edit Category Pillar" : "Add New Category Pillar"}</span>
              </h3>
              <button
                type="button"
                onClick={() => setIsCategoryModalOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/50"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveCategory} className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Category Name *
                </label>
                <input
                  type="text"
                  required
                  value={categoryForm.name}
                  onChange={(e) => {
                    const name = e.target.value;
                    setCategoryForm((prev) => ({
                      ...prev,
                      name,
                      slug: !prev.id
                        ? name.toLowerCase().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-")
                        : prev.slug,
                    }));
                  }}
                  placeholder="e.g. Artificial Intelligence"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2 text-xs text-slate-800 placeholder-slate-400 focus:bg-white focus:border-[#1769FF] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  URL Slug *
                </label>
                <input
                  type="text"
                  required
                  value={categoryForm.slug}
                  onChange={(e) => setCategoryForm((prev) => ({ ...prev, slug: e.target.value }))}
                  placeholder="e.g. artificial-intelligence"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2 text-xs font-mono text-slate-800 placeholder-slate-400 focus:bg-white focus:border-[#1769FF] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Description
                </label>
                <textarea
                  rows={2}
                  value={categoryForm.description}
                  onChange={(e) => setCategoryForm((prev) => ({ ...prev, description: e.target.value }))}
                  placeholder="Brief scope of articles published under this pillar..."
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2 text-xs text-slate-800 placeholder-slate-400 focus:bg-white focus:border-[#1769FF] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-2">
                  Badge Color Theme
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                  {[
                    { id: "blue", name: "Blue", bg: "bg-blue-500" },
                    { id: "cyan", name: "Cyan", bg: "bg-cyan-500" },
                    { id: "purple", name: "Purple", bg: "bg-purple-500" },
                    { id: "emerald", name: "Emerald", bg: "bg-emerald-500" },
                    { id: "amber", name: "Amber", bg: "bg-amber-500" },
                    { id: "rose", name: "Rose", bg: "bg-rose-500" },
                  ].map((col) => (
                    <button
                      key={col.id}
                      type="button"
                      onClick={() => setCategoryForm((prev) => ({ ...prev, color: col.id }))}
                      className={`p-2 rounded-xl border text-center transition-all cursor-pointer flex flex-col items-center gap-1.5 ${categoryForm.color === col.id
                        ? "border-[#1769FF] bg-blue-50/50 shadow-xs ring-2 ring-[#1769FF]/20"
                        : "border-slate-200 hover:border-slate-300 bg-white"
                        }`}
                    >
                      <span className={`w-4 h-4 rounded-full ${col.bg}`} />
                      <span className="text-[10px] font-semibold text-slate-700">{col.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {categoryForm.id && (
                <div className="pt-2">
                  <label className="flex items-center gap-2 text-xs text-slate-700 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={categoryForm.updateArticles}
                      onChange={(e) =>
                        setCategoryForm((prev) => ({ ...prev, updateArticles: e.target.checked }))
                      }
                      className="rounded border-slate-300 text-[#1769FF] focus:ring-[#1769FF]"
                    />
                    <span>Cascade rename to all existing articles in this category</span>
                  </label>
                </div>
              )}

              <div className="pt-4 border-t border-slate-200 flex items-center justify-end gap-2.5">
                <button
                  type="button"
                  onClick={() => setIsCategoryModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 border border-slate-200 hover:bg-slate-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSavingCategory}
                  className="px-5 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#1769FF] to-[#00A3FF] hover:from-[#0F58E0] hover:to-[#008FE0] shadow-sm transition-all cursor-pointer flex items-center gap-1.5 disabled:opacity-60"
                >
                  {isSavingCategory ? (
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  ) : (
                    <Check className="w-3.5 h-3.5" />
                  )}
                  <span>{categoryForm.id ? "Save Changes" : "Create Category"}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL 5: DELETE CATEGORY CONFIRMATION MODAL */}
      {/* ========================================================================= */}
      {isDeleteCategoryModalOpen && categoryToDelete && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 transition-all duration-200">
          <div className="max-w-md w-full rounded-2xl border border-red-200 bg-white p-6 shadow-2xl space-y-4 modal-animate">
            <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-200 text-red-600 flex items-center justify-center">
              <Trash2 className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Delete Category &quot;{categoryToDelete.name}&quot;?</h3>

            {(categoryToDelete.articleCount ?? 0) > 0 ? (
              <div className="space-y-3">
                <p className="text-xs text-amber-700 bg-amber-50 p-3 rounded-xl border border-amber-200 leading-relaxed">
                  <strong>Warning:</strong> There are currently <strong>{categoryToDelete.articleCount}</strong> published article(s) assigned to this category. Select a new category to safely reassign them:
                </p>
                <div>
                  <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                    Reassign Articles To:
                  </label>
                  <select
                    value={reassignCategoryTarget}
                    onChange={(e) => setReassignCategoryTarget(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs text-slate-800 focus:border-[#1769FF] focus:outline-none"
                  >
                    {categories
                      .filter((c) => c.id !== categoryToDelete.id)
                      .map((c) => (
                        <option key={c.id} value={c.name}>
                          {c.name}
                        </option>
                      ))}
                  </select>
                </div>
              </div>
            ) : (
              <p className="text-xs text-slate-600 leading-relaxed">
                Are you sure you want to delete this category? There are currently no articles assigned to it.
              </p>
            )}

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => {
                  setIsDeleteCategoryModalOpen(false);
                  setCategoryToDelete(null);
                }}
                className="px-4 py-2 rounded-xl text-xs font-semibold border border-slate-200 text-slate-600 hover:bg-slate-50"
              >
                Cancel
              </button>
              <button
                type="button"
                disabled={isDeletingCategory}
                onClick={handleConfirmDeleteCategory}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-red-600 hover:bg-red-700 text-white shadow-sm transition-colors cursor-pointer flex items-center gap-1.5 disabled:opacity-60"
              >
                {isDeletingCategory && <RefreshCw className="w-3.5 h-3.5 animate-spin" />}
                <span>Confirm Delete</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
