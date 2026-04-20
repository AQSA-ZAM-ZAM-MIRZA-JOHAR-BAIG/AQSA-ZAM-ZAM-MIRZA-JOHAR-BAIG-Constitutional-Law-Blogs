"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

function extractKeywords(pathname: string): string {
  return pathname
    .replace(/^\/+/, "")
    .replace(/[-_/]+/g, " ")
    .trim();
}

export default function NotFound() {
  const pathname = usePathname() || "";

  const intent = useMemo(() => {
    const lower = pathname.toLowerCase();
    if (lower.includes("/pricing")) return "pricing";
    if (lower.includes("/blog") || lower.includes("/posts")) return "blog";
    return "general";
  }, [pathname]);

  const prefilledQuery = extractKeywords(pathname);

  return (
    <main
      style={{
        minHeight: "70vh",
        maxWidth: "900px",
        margin: "0 auto",
        padding: "120px 24px 40px",
        color: "#e2e8f0",
      }}
    >
      <h1 style={{ fontSize: "42px", marginBottom: "12px", color: "#f8fafc" }}>Page Not Found (404)</h1>
      <p style={{ color: "#94a3b8", marginBottom: "24px" }}>
        We could not find <code>{pathname || "/"}</code>. Try one of the best-matched pages below.
      </p>

      {intent === "pricing" && (
        <section style={{ border: "1px solid rgba(255,255,255,0.08)", borderRadius: "12px", padding: "18px", marginBottom: "16px" }}>
          <h2 style={{ marginBottom: "10px", fontSize: "22px" }}>Looking for pricing?</h2>
          <p style={{ color: "#cbd5e1", marginBottom: "12px" }}>
            We handle pricing and collaboration details via direct discussion.
          </p>
          <Link href="/contact" style={{ color: "#a78bfa", fontWeight: 700 }}>
            Go to Contact Page and claim a 10% collaboration discount
          </Link>
        </section>
      )}

      {intent === "blog" && (
        <section style={{ border: "1px solid rgba(255,255,255,0.08)", borderRadius: "12px", padding: "18px", marginBottom: "16px" }}>
          <h2 style={{ marginBottom: "10px", fontSize: "22px" }}>Looking for a blog article?</h2>
          <form action="/posts" method="get" style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <input
              name="search"
              defaultValue={prefilledQuery}
              placeholder="Search articles"
              style={{
                background: "#0d0d1f",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: "8px",
                color: "#e2e8f0",
                padding: "10px 12px",
                minWidth: "280px",
              }}
            />
            <button
              type="submit"
              style={{
                borderRadius: "8px",
                border: "1px solid rgba(99,102,241,0.4)",
                background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                color: "#fff",
                padding: "10px 14px",
                fontWeight: 700,
              }}
            >
              Search Posts
            </button>
          </form>
        </section>
      )}

      <section style={{ border: "1px solid rgba(255,255,255,0.08)", borderRadius: "12px", padding: "18px" }}>
        <h2 style={{ marginBottom: "10px", fontSize: "22px" }}>Popular pages</h2>
        <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
          <Link href="/" style={{ color: "#a78bfa" }}>Home</Link>
          <Link href="/aqsa-zam-zam-mirza-johar-baig" style={{ color: "#a78bfa" }}>Official Profile</Link>
          <Link href="/posts" style={{ color: "#a78bfa" }}>Blog</Link>
          <Link href="/about" style={{ color: "#a78bfa" }}>About</Link>
          <Link href="/contact" style={{ color: "#a78bfa" }}>Contact</Link>
        </div>
      </section>
    </main>
  );
}
