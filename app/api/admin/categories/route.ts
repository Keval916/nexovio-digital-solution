import { NextRequest, NextResponse } from "next/server";
import {
  getStoredCategoriesAsync,
  addCategoryAsync,
  updateCategoryAsync,
  deleteCategoryAsync,
} from "@/src/lib/category-storage";

export const dynamic = "force-dynamic";

// GET /api/admin/categories - Fetch all categories directly from MongoDB
export async function GET() {
  try {
    const categories = await getStoredCategoriesAsync(true);
    return NextResponse.json({
      success: true,
      categories,
    });
  } catch (error) {
    console.error("GET /api/admin/categories error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch categories from database" },
      { status: 500 }
    );
  }
}

// POST /api/admin/categories - Create a new category in MongoDB
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

    const result = await addCategoryAsync({ name, slug, description, color });
    if (!result.success) {
      return NextResponse.json(
        { success: false, message: result.message || "Failed to add category" },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      category: result.category,
      message: `Category "${result.category?.name}" created successfully in MongoDB`,
    });
  } catch (error) {
    console.error("POST /api/admin/categories error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to create category" },
      { status: 500 }
    );
  }
}

// PUT /api/admin/categories - Update an existing category in MongoDB
export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    const { id, name, slug, description, color } = body;

    const targetKey = id || slug;
    if (!targetKey) {
      return NextResponse.json(
        { success: false, message: "Category ID or slug is required" },
        { status: 400 }
      );
    }

    const result = await updateCategoryAsync(targetKey, {
      ...(name && { name: name.trim() }),
      ...(slug && { slug: slug.trim() }),
      ...(description !== undefined && { description: description.trim() }),
      ...(color && { color }),
    });

    if (!result.success) {
      return NextResponse.json(
        { success: false, message: result.message || "Category not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      category: result.category,
      message: "Category updated successfully in MongoDB",
    });
  } catch (error) {
    console.error("PUT /api/admin/categories error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to update category" },
      { status: 500 }
    );
  }
}

// DELETE /api/admin/categories - Remove a category from MongoDB
export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    const slug = searchParams.get("slug");

    const target = id || slug;
    if (!target) {
      return NextResponse.json(
        { success: false, message: "Category ID or slug is required" },
        { status: 400 }
      );
    }

    const result = await deleteCategoryAsync(target);
    if (!result.success) {
      return NextResponse.json(
        { success: false, message: result.message || "Failed to delete category" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Category deleted from MongoDB successfully",
    });
  } catch (error) {
    console.error("DELETE /api/admin/categories error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to delete category" },
      { status: 500 }
    );
  }
}
