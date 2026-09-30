export const dynamic = "force-static";

export function GET() {
  return new Response("c8d35f791a4b4e5088e2bf57613769c0", {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
