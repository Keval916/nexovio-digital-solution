import { NextRequest, NextResponse } from "next/server";
import {
  getStoredAuthorsAsync,
  addAuthorAsync,
  updateAuthorAsync,
  deleteAuthorAsync,
} from "@/src/lib/author-storage";

export const dynamic = "force-dynamic";

// GET /api/admin/authors - Fetch all authors directly from MongoDB
export async function GET() {
  try {
    const authors = await getStoredAuthorsAsync(true);
    return NextResponse.json({
      success: true,
      authors,
    });
  } catch (error) {
    console.error("GET /api/admin/authors error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch authors from database" },
      { status: 500 }
    );
  }
}

// POST /api/admin/authors - Create a new author in MongoDB
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, role, avatar, bio, email, socialLinks } = body;

    if (!name || !name.trim()) {
      return NextResponse.json(
        { success: false, message: "Author name is required" },
        { status: 400 }
      );
    }

    if (!role || !role.trim()) {
      return NextResponse.json(
        { success: false, message: "Author position / role is required" },
        { status: 400 }
      );
    }

    const result = await addAuthorAsync({
      name,
      role,
      avatar,
      bio,
      email,
      socialLinks,
    });

    if (!result.success) {
      return NextResponse.json(
        { success: false, message: result.message || "Failed to add author" },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      author: result.author,
      message: `Author "${result.author?.name}" created successfully in MongoDB`,
    });
  } catch (error) {
    console.error("POST /api/admin/authors error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to create author" },
      { status: 500 }
    );
  }
}

// PUT /api/admin/authors - Update an existing author in MongoDB
export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    const { id, name, role, avatar, bio, email, socialLinks, updateArticles } = body;

    if (!id && !name) {
      return NextResponse.json(
        { success: false, message: "Author ID is required" },
        { status: 400 }
      );
    }

    const targetKey = id || name;
    const result = await updateAuthorAsync(targetKey, {
      ...(name && { name: name.trim() }),
      ...(role && { role: role.trim() }),
      ...(avatar !== undefined && { avatar: avatar.trim() }),
      ...(bio !== undefined && { bio: bio.trim() }),
      ...(email !== undefined && { email: email.trim() }),
      ...(socialLinks !== undefined && { socialLinks }),
      updateArticles: Boolean(updateArticles),
    });

    if (!result.success) {
      return NextResponse.json(
        { success: false, message: result.message || "Author not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      author: result.author,
      message: "Author updated successfully in MongoDB",
    });
  } catch (error) {
    console.error("PUT /api/admin/authors error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to update author" },
      { status: 500 }
    );
  }
}

// DELETE /api/admin/authors - Remove an author from MongoDB
export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    const reassignId = searchParams.get("reassignId") || undefined;

    if (!id) {
      return NextResponse.json(
        { success: false, message: "Author ID is required" },
        { status: 400 }
      );
    }

    const result = await deleteAuthorAsync(id, reassignId);
    if (!result.success) {
      return NextResponse.json(
        { success: false, message: result.message || "Failed to delete author" },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Author deleted from MongoDB successfully",
    });
  } catch (error) {
    console.error("DELETE /api/admin/authors error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to delete author" },
      { status: 500 }
    );
  }
}
