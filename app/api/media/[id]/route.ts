import { NextRequest, NextResponse } from "next/server";
import { isMongoConfigured, getMediaCollection } from "@/src/lib/mongodb";
import fs from "fs";
import path from "path";

export const dynamic = "force-dynamic";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const rawId = params?.id || req.nextUrl.pathname.split("/").pop() || "";
    const decodedId = decodeURIComponent(rawId).trim();

    if (!decodedId) {
      return new NextResponse("Image identifier is required", { status: 400 });
    }

    const cleanId = decodedId.replace(/-\d{5,8}(\.[a-z]+)$/i, "$1");
    const candidateIds = Array.from(new Set([decodedId, cleanId]));

    // 1. Try fetching from MongoDB blog_media collection
    if (isMongoConfigured()) {
      try {
        const collection = await getMediaCollection();
        const orConditions = candidateIds.flatMap((cand) => [
          { id: cand },
          { name: cand },
          { url: `/api/media/${cand}` },
        ]);

        const item = await collection.findOne({ $or: orConditions });

        if (item && item.dataBase64) {
          const buffer = Buffer.from(item.dataBase64, "base64");
          return new NextResponse(buffer, {
            headers: {
              "Content-Type": item.contentType || "image/webp",
              "Cache-Control": "public, max-age=31536000, immutable",
            },
          });
        }
      } catch (dbErr) {
        console.warn("[media-route] MongoDB read error:", dbErr);
      }
    }

    // 2. Fallback: check local disk public/images/blog/[id]
    for (const cand of candidateIds) {
      const localPath = path.join(process.cwd(), "public", "images", "blog", cand);
      if (fs.existsSync(localPath)) {
        const fileBuffer = fs.readFileSync(localPath);
        const ext = path.extname(cand).toLowerCase();
        let contentType = "image/webp";
        if (ext === ".png") contentType = "image/png";
        else if (ext === ".jpg" || ext === ".jpeg") contentType = "image/jpeg";
        else if (ext === ".svg") contentType = "image/svg+xml";

        return new NextResponse(fileBuffer, {
          headers: {
            "Content-Type": contentType,
            "Cache-Control": "public, max-age=31536000, immutable",
          },
        });
      }
    }

    return new NextResponse("Image not found", { status: 404 });
  } catch (error) {
    console.error("GET /api/media/[id] error:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
