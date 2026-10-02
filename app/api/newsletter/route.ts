import { NextRequest, NextResponse } from "next/server";
import {
  getStoredSubscribersAsync,
  addSubscriberAsync,
  deleteSubscriberAsync,
} from "@/src/lib/subscriber-storage";

export const dynamic = "force-dynamic";

// GET: Fetch all subscribers from MongoDB (for Admin Dashboard)
export async function GET() {
  try {
    const subscribers = await getStoredSubscribersAsync(true);
    return NextResponse.json({
      success: true,
      subscribers,
      total: subscribers.length,
    });
  } catch (error) {
    console.error("API GET /api/newsletter error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch subscribers" },
      { status: 500 }
    );
  }
}

// POST: Add new subscriber to MongoDB (from Blog Hub or Website Newsletter Forms)
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, source } = body;

    if (!email || typeof email !== "string" || !email.trim()) {
      return NextResponse.json(
        { success: false, message: "A valid email address is required." },
        { status: 400 }
      );
    }

    const result = await addSubscriberAsync(email, source || "Blog Hub Newsletter");

    if (!result.success) {
      return NextResponse.json(
        { success: false, message: result.message },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      message: result.message,
      subscriber: result.subscriber,
      alreadyExists: result.alreadyExists,
    });
  } catch (error: any) {
    console.error("API POST /api/newsletter error:", error);
    return NextResponse.json(
      { success: false, message: error?.message || "Internal server error while subscribing." },
      { status: 500 }
    );
  }
}

// DELETE: Remove subscriber from MongoDB (for Admin Dashboard)
export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    const email = searchParams.get("email");

    const target = id || email;
    if (!target) {
      return NextResponse.json(
        { success: false, message: "Subscriber ID or Email is required." },
        { status: 400 }
      );
    }

    const deleted = await deleteSubscriberAsync(target);
    if (!deleted) {
      return NextResponse.json(
        { success: false, message: "Subscriber not found." },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Subscriber removed successfully.",
    });
  } catch (error) {
    console.error("API DELETE /api/newsletter error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to delete subscriber." },
      { status: 500 }
    );
  }
}
