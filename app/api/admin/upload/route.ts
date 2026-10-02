import { NextRequest, NextResponse } from "next/server";
import { isMongoConfigured, getMediaCollection, DbMediaItem } from "@/src/lib/mongodb";
import fs from "fs";
import path from "path";

export const dynamic = "force-dynamic";

const UPLOAD_DIR = path.join(process.cwd(), "public", "images", "blog");

// GET: List existing uploaded and preset blog images from MongoDB + local directory
export async function GET() {
  try {
    const imagesMap = new Map<string, { id?: string; name: string; url: string; size?: number; createdAt?: string }>();

    // 1. Fetch images saved in MongoDB
    if (isMongoConfigured()) {
      try {
        const collection = await getMediaCollection();
        const dbItems = await collection.find({}).sort({ createdAt: -1 }).toArray();

        for (const item of dbItems) {
          imagesMap.set(item.name, {
            id: item.id || item.name,
            name: item.name,
            url: item.url || `/api/media/${item.name}`,
            size: item.size,
            createdAt: item.createdAt,
          });
        }
      } catch (dbErr) {
        console.warn("[upload GET] MongoDB media fetch notice:", dbErr);
      }
    }

    // 2. Also check local disk public/images/blog
    try {
      if (fs.existsSync(UPLOAD_DIR)) {
        const files = fs.readdirSync(UPLOAD_DIR);
        for (const file of files) {
          if (/\.(webp|jpg|jpeg|png|svg)$/i.test(file) && !imagesMap.has(file)) {
            imagesMap.set(file, {
              id: file,
              name: file,
              url: `/images/blog/${file}`,
            });
          }
        }
      }
    } catch (fsErr) {
      console.warn("[upload GET] Local disk read notice:", fsErr);
    }

    // 3. Fallback default presets if empty
    if (imagesMap.size === 0) {
      imagesMap.set("custom-web-development-vs-website-builders.webp", {
        name: "custom-web-development-vs-website-builders.webp",
        url: "/images/blog/custom-web-development-vs-website-builders.webp",
      });
    }

    const images = Array.from(imagesMap.values());
    return NextResponse.json({ success: true, images });
  } catch (error) {
    console.error("API GET /api/admin/upload error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to list images" },
      { status: 500 }
    );
  }
}

// POST: Upload an image directly into MongoDB and local cache
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
    const contentType = file.type || "image/webp";

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

    const mediaUrl = `/api/media/${finalFileName}`;
    const base64Data = buffer.toString("base64");
    const now = new Date().toISOString();

    // 1. Persist to MongoDB blog_media collection
    let savedToMongo = false;
    if (isMongoConfigured()) {
      try {
        const collection = await getMediaCollection();
        const mediaDoc: DbMediaItem = {
          id: finalFileName,
          name: finalFileName,
          url: mediaUrl,
          contentType,
          size: buffer.length,
          dataBase64: base64Data,
          createdAt: now,
        };

        await collection.updateOne(
          { id: finalFileName },
          { $set: mediaDoc },
          { upsert: true }
        );
        savedToMongo = true;
      } catch (dbErr) {
        console.error("[upload POST] Failed to save media to MongoDB:", dbErr);
      }
    }

    // 2. Also attempt saving to local disk if writable
    try {
      if (!fs.existsSync(UPLOAD_DIR)) {
        fs.mkdirSync(UPLOAD_DIR, { recursive: true });
      }
      const destinationPath = path.join(UPLOAD_DIR, finalFileName);
      fs.writeFileSync(destinationPath, buffer);
    } catch (fsErr: any) {
      // Ignored in serverless/read-only environments since MongoDB stores the binary
    }

    return NextResponse.json({
      success: true,
      message: "Image uploaded and saved to database successfully",
      url: mediaUrl,
      fileName: finalFileName,
      savedToDatabase: savedToMongo,
    });
  } catch (error) {
    console.error("API POST /api/admin/upload error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to upload image" },
      { status: 500 }
    );
  }
}

// DELETE: Remove an image asset from MongoDB and local storage
export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id") || searchParams.get("name") || "";

    if (!id) {
      return NextResponse.json(
        { success: false, message: "Image identifier is required" },
        { status: 400 }
      );
    }

    let deletedFromDb = false;
    if (isMongoConfigured()) {
      try {
        const collection = await getMediaCollection();
        const result = await collection.deleteOne({
          $or: [{ id }, { name: id }, { url: id }, { url: `/api/media/${id}` }],
        });
        deletedFromDb = result.deletedCount > 0;
      } catch (dbErr) {
        console.warn("[upload DELETE] MongoDB delete error:", dbErr);
      }
    }

    // Optional: try removing from local disk
    try {
      const localPath = path.join(UPLOAD_DIR, id);
      if (fs.existsSync(localPath)) {
        fs.unlinkSync(localPath);
      }
    } catch {
      // ignore
    }

    return NextResponse.json({
      success: true,
      message: "Image deleted successfully",
      deletedFromDb,
    });
  } catch (error) {
    console.error("API DELETE /api/admin/upload error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to delete image" },
      { status: 500 }
    );
  }
}
