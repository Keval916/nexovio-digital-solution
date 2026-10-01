import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { syncFileToGitHub } from "@/src/lib/github-sync";

export const dynamic = "force-dynamic";

const UPLOAD_DIR = path.join(process.cwd(), "public", "images", "blog");

// GET: List existing uploaded and preset blog images
export async function GET() {
  try {
    let images: { name: string; url: string }[] = [];

    if (fs.existsSync(UPLOAD_DIR)) {
      const files = fs.readdirSync(UPLOAD_DIR);
      images = files
        .filter((file) => /\.(webp|jpg|jpeg|png|svg)$/i.test(file))
        .map((file) => ({
          name: file,
          url: `/images/blog/${file}`,
        }));
    }

    // Default fallback preset images if none found
    if (images.length === 0) {
      images = [
        {
          name: "custom-web-development-vs-website-builders.webp",
          url: "/images/blog/custom-web-development-vs-website-builders.webp",
        },
      ];
    }

    return NextResponse.json({ success: true, images });
  } catch (error) {
    console.error("API GET /api/admin/upload error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to list images" },
      { status: 500 }
    );
  }
}

// POST: Upload an image directly into public/images/blog (with serverless fallback)
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

    let publicUrl = `/images/blog/${finalFileName}`;
    let savedToDisk = false;

    // 1. Try saving to local filesystem (works on local development / VPS)
    try {
      if (!fs.existsSync(UPLOAD_DIR)) {
        fs.mkdirSync(UPLOAD_DIR, { recursive: true });
      }
      fs.writeFileSync(destinationPath, buffer);
      savedToDisk = true;
    } catch (fsErr: any) {
      console.warn("[upload] Serverless read-only disk detected (EROFS):", fsErr?.message);
    }

    // 2. If GITHUB_TOKEN configured, commit the image binary to GitHub repo
    if (process.env.GITHUB_TOKEN || process.env.GH_TOKEN) {
      syncFileToGitHub(
        `public/images/blog/${finalFileName}`,
        buffer.toString("base64"),
        `chore(media): upload image ${finalFileName} [${new Date().toISOString()}]`,
        true
      ).catch((ghErr) => console.error("[upload] GitHub image sync error:", ghErr));
    }

    // 3. If disk wasn't writable and not yet deployed, fallback to data URL for immediate preview
    if (!savedToDisk && !(process.env.GITHUB_TOKEN || process.env.GH_TOKEN)) {
      publicUrl = `data:${file.type || "image/webp"};base64,${buffer.toString("base64")}`;
    }

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
