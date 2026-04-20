import { notFound } from "next/navigation";
import connectToDatabase from "@/lib/db";
import { Post } from "@/models/Post";
import styles from "./post.module.css";
import Link from "next/link";
import { Metadata } from "next";
import { SITE_URL, absoluteUrl, trimToLength } from "@/lib/seo";
import AuthorBio from "@/components/AuthorBio";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  await connectToDatabase();
  const post = await Post.findOne({ slug, published: true }).lean();

  if (!post) {
    return {
      title: { absolute: "Article Not Found | Aqsa Zam Zam Mirza Johar Baig" },
      robots: { index: false, follow: false },
    };
  }

  // Use absolute title to prevent parent template from appending again
  const rawTitle = `${post.title} | Aqsa Zam Zam Mirza Johar Baig`;
  const title = trimToLength(rawTitle, 60);

  // Ensure description is always 110–155 chars for SEO
  let rawDesc = post.summary ||
    `Read "${post.title}" \u2013 constitutional law analysis by Aqsa Zam Zam Mirza Johar Baig covering ${post.category} on the official law blog.`;
    
  if (rawDesc.length < 110) {
    rawDesc = `${rawDesc} Discover comprehensive constitutional law analysis, landmark case studies, and insights by Aqsa Zam Zam Mirza Johar Baig.`;
  }
  
  const description = trimToLength(rawDesc, 155);

  const canonical = `${SITE_URL}/posts/${post.slug}`;
  const ogImage = absoluteUrl("/profile.png");

  return {
    title: { absolute: title },
    description,
    alternates: { canonical },
    keywords: [post.category, ...(post.tags || []), "Constitutional Law", "Aqsa Zam Zam Mirza Johar Baig"],
    openGraph: {
      title,
      description,
      type: "article",
      url: canonical,
      publishedTime: post.publishedAt ? new Date(post.publishedAt).toISOString() : undefined,
      modifiedTime: post.updatedAt ? new Date(post.updatedAt).toISOString() : undefined,
      authors: ["Aqsa Zam Zam Mirza Johar Baig"],
      tags: [post.category, ...(post.tags || [])],
      images: [{ url: ogImage, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  await connectToDatabase();
  const { slug } = await params;
  const post = await Post.findOne({ slug, published: true }).populate("author", "name").lean();

  if (!post) {
    notFound();
  }

  const recentPosts = await Post.find({ slug: { $ne: slug }, published: true })
    .sort({ publishedAt: -1, createdAt: -1 })
    .limit(3)
    .lean();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.summary || `Constitutional law analysis: ${post.title}`,
    "author": {
      "@type": "Person",
      "name": (post.author as any)?.name || "Aqsa Zam Zam Mirza Johar Baig",
      "url": SITE_URL,
    },
    "publisher": {
      "@type": "Person",
      "name": "Aqsa Zam Zam Mirza Johar Baig",
      "url": SITE_URL,
    },
    "url": `${SITE_URL}/posts/${post.slug}`,
    "datePublished": post.publishedAt ? new Date(post.publishedAt).toISOString() : new Date(post.createdAt).toISOString(),
    "dateModified": post.updatedAt ? new Date(post.updatedAt).toISOString() : new Date(post.createdAt).toISOString(),
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${SITE_URL}/posts/${post.slug}`,
    },
    "keywords": [post.category, ...(post.tags || [])].join(", "),
  };

  // Sanitize post HTML to avoid broken image links being emitted into pages
  const rawHtml: string = post.content || '';
  // Replace common relative image directories with a safe absolute fallback image
  const safeHtml = rawHtml
    // imgs with src pointing to /assets/, /uploads/, /images/ -> fallback
    .replace(/<img\\s+([^>]*?)src=("|')(\\/((assets|uploads|images)\\/[^"'>]+))("|')([^>]*?)>/gi, (m, g1, q1, src, inner, g4, q2, g2) => {
      return `<img src="${absoluteUrl('/profile.png')}" alt="image" />`;
    })
    // imgs with protocol-relative or malformed src -> fallback
    .replace(/<img\\s+([^>]*?)src=("|')((?:https?:)?\\/\\/[^"'>]+)("|')([^>]*?)>/gi, (m) => {
      return `<img src="${absoluteUrl('/profile.png')}" alt="image" />`;
    });

  return (
    <article className={styles.article}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <header className={styles.header}>
        <Link href="/posts" className={styles.backLink}>&larr; Back to articles</Link>
        <div className={styles.tag}>{post.category}</div>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.meta}>
          By <span className={styles.author}>{(post.author as any)?.name || 'Aqsa Zam Zam Mirza Johar Baig'}</span>
          <span className={styles.separator}>•</span>
          <time dateTime={new Date(post.publishedAt || post.createdAt).toISOString()}>
            {new Date(post.publishedAt || post.createdAt).toLocaleDateString(undefined, {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
        </div>
      </header>

      {post.summary && (
        <div className={styles.summary}>
          {post.summary}
        </div>
      )}

      <div className={styles.content} dangerouslySetInnerHTML={{ __html: safeHtml }} />
      <AuthorBio />

      {recentPosts && recentPosts.length > 0 && (
        <section style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: '#fff' }}>More Articles</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {recentPosts.map((rp: any) => (
              <Link 
                key={rp._id.toString()} 
                href={`/posts/${rp.slug}`} 
                style={{ 
                  display: 'block', 
                  padding: '1.25rem', 
                  backgroundColor: 'rgba(255,255,255,0.03)', 
                  borderRadius: '12px', 
                  textDecoration: 'none',
                  border: '1px solid rgba(255,255,255,0.05)',
                  transition: 'border-color 0.2s ease'
                }}
              >
                <div style={{ fontSize: '0.75rem', color: '#a78bfa', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem', fontWeight: 'bold' }}>{rp.category}</div>
                <h4 style={{ margin: '0 0 0.5rem 0', color: '#fff', fontSize: '1.25rem', fontWeight: 600 }}>{rp.title}</h4>
                <p style={{ margin: 0, color: '#94a3b8', fontSize: '0.875rem', lineHeight: 1.5 }}>
                  {rp.summary && rp.summary.length > 120 ? `${rp.summary.substring(0, 120)}...` : rp.summary}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Internal link to improve site connectivity */}
      <footer style={{ marginTop: '48px', paddingTop: '24px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <p style={{ color: '#64748b', fontSize: '14px' }}>
          Written by{' '}
          <Link href="/aqsa-zam-zam-mirza-johar-baig" style={{ color: '#a78bfa', textDecoration: 'none' }}>
            Aqsa Zam Zam Mirza Johar Baig
          </Link>
          . Explore more on the{' '}
          <Link href="/posts" style={{ color: '#a78bfa', textDecoration: 'none' }}>
            Constitutional Law Blog
          </Link>.
        </p>
      </footer>
    </article>
  );
}
