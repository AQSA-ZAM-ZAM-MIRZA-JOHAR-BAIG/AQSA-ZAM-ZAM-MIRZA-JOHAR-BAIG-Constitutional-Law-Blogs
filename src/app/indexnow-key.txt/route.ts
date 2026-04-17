import { NextResponse } from "next/server";

export async function GET() {
  const key = process.env.INDEXNOW_KEY || "";
  return new NextResponse(key, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
