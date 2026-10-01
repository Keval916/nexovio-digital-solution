import { NextRequest, NextResponse } from "next/server";
import {
  getStoredCategories,
  addCategory,
  updateCategory,
  deleteCategory,
} from "@/src/lib/category-storage";

export const dynamic = "force-dynamic";

// GET /api/admin/categories - Fetch all categories with article counts
export async function GET() {
  try {
    const categories = getStoredCategories();
    return NextResponse.json({
      success: true,
      categories,
    });
  } catch (error) {
    console.error("GET /api/admin/categories error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch categories" },
      { status: 500 }
    );
  }
}

// POST /api/admin/categories - Create a new category
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, slug, description, color } = body;

    if (!name || !name.trim()) {
      return NextResponse.json(
        { success: false, message: "Category name is required" },
        { status: 400 }
      );
    }

    const result = addCategory({ name, slug, description, color });
    if (!result.success) {
      return NextResponse.json(
        { success: false, message: result.message || "Failed to add category" },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      category: result.category,
      message: `Category "${result.category?.name}" created successfully`,
    });
  } catch (error) {
    console.error("POST /api/admin/categories error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to create category" },
      { status: 500 }
    );
  }
}

// PUT /api/admin/categories - Update an existing category
export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    const { id, name, slug, description, color, updateArticles } = body;

    if (!id) {
      return NextResponse.json(
        { success: false, message: "Category ID is required" },
        { status: 400 }
      );
    }

    const result = updateCategory(id, {
      name,
      slug,
      description,
      color,
      updateArticles: Boolean(updateArticles),
    });

    if (!result.success) {
      return NextResponse.json(
        { success: false, message: result.message || "Failed to update category" },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      category: result.category,
      message: `Category "${result.category?.name}" updated successfully`,
    });
  } catch (error) {
    console.error("PUT /api/admin/categories error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to update category" },
      { status: 500 }
    );
  }
}

// DELETE /api/admin/categories - Delete a category
export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    const reassignTo = searchParams.get("reassignTo") || undefined;

    if (!id) {
      return NextResponse.json(
        { success: false, message: "Category ID is required" },
        { status: 400 }
      );
    }

    const result = deleteCategory(id, reassignTo);
    if (!result.success) {
      return NextResponse.json(
        { success: false, message: result.message || "Failed to delete category" },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Category deleted successfully",
    });
  } catch (error) {
    console.error("DELETE /api/admin/categories error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to delete category" },
      { status: 500 }
    );
  }
}
