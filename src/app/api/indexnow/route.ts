import { NextRequest, NextResponse } from "next/server";
import { SITE_URL } from "@/lib/seo";

const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";

export async function GET() {
  return NextResponse.json({
    ok: true,
    message: "Use POST to submit URLs to IndexNow.",
  });
}

export async function POST(req: NextRequest) {
  const key = process.env.INDEXNOW_KEY;
  if (!key) {
    return NextResponse.json(
      { error: "INDEXNOW_KEY is not configured." },
      { status: 500 }
    );
  }

  const body = (await req.json().catch(() => ({}))) as { urls?: string[] };
  const urls = (body.urls || []).filter((url) => url.startsWith(SITE_URL));

  if (!urls.length) {
    return NextResponse.json(
      { error: "Provide at least one canonical URL in body.urls." },
      { status: 400 }
    );
  }

  const payload = {
    host: new URL(SITE_URL).hostname,
    key,
    keyLocation: `${SITE_URL}/${key}.txt`,
    urlList: urls,
  };

  const response = await fetch(INDEXNOW_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorText = await response.text();
    return NextResponse.json(
      { error: "IndexNow submission failed.", details: errorText },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true, submitted: urls.length });
}
