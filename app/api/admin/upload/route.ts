import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export const dynamic = "force-dynamic";

const UPLOAD_DIR = path.join(process.cwd(), "public", "images", "blog");

// GET: List existing uploaded and preset blog images
export async function GET() {
  try {
    if (!fs.existsSync(UPLOAD_DIR)) {
      fs.mkdirSync(UPLOAD_DIR, { recursive: true });
    }
    const files = fs.readdirSync(UPLOAD_DIR);
    const images = files
      .filter((file) => /\.(webp|jpg|jpeg|png|svg)$/i.test(file))
      .map((file) => ({
        name: file,
        url: `/images/blog/${file}`,
      }));

    return NextResponse.json({ success: true, images });
  } catch (error) {
    console.error("API GET /api/admin/upload error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to list images" },
      { status: 500 }
    );
  }
}

// POST: Upload an image directly into public/images/blog
export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json(
        { success: false, message: "No image file provided" },
        { status: 400 }
      );
    }

    if (!fs.existsSync(UPLOAD_DIR)) {
      fs.mkdirSync(UPLOAD_DIR, { recursive: true });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Sanitize and slugify file name
    const originalName = file.name || "blog-image.webp";
    const extension = path.extname(originalName) || ".webp";
    const baseName = path
      .basename(originalName, extension)
      .toLowerCase()
      .replace(/[^\w-]/g, "-")
      .replace(/--+/g, "-");
    const uniqueSuffix = Date.now().toString().slice(-6);
    const finalFileName = `${baseName}-${uniqueSuffix}${extension}`;
    const destinationPath = path.join(UPLOAD_DIR, finalFileName);

    fs.writeFileSync(destinationPath, buffer);

    const publicUrl = `/images/blog/${finalFileName}`;

    return NextResponse.json({
      success: true,
      message: "Image uploaded successfully",
      url: publicUrl,
      fileName: finalFileName,
    });
  } catch (error) {
    console.error("API POST /api/admin/upload error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to upload image" },
      { status: 500 }
    );
  }
}
