import { notFound } from "next/navigation";
import connectToDatabase from "@/lib/db";
import { Post } from "@/models/Post";
import styles from "./post.module.css";
import Link from "next/link";
import { Metadata } from "next";
import { absoluteUrl, trimToLength } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  await connectToDatabase();
  const post = await Post.findOne({ slug, published: true }).lean();
  
  if (!post) {
    return {
      title: "Article Not Found",
      robots: { index: false, follow: false },
    };
  }

  const title = trimToLength(`${post.title} | Technical Blog`, 60);
  const description = trimToLength(
    post.summary || `Read ${post.title} on Aqsa Zam Zam Mirza Johar Baig's technical blog.`,
    155
  );
  const canonical = `/posts/${post.slug}`;
  const ogImage = absoluteUrl("/profile.svg");
  
  return {
    title,
    description,
    alternates: { canonical },
    keywords: [post.category, ...(post.tags || [])],
    openGraph: {
      title,
      description,
      type: "article",
      url: absoluteUrl(canonical),
      images: [{ url: ogImage, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    }
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  await connectToDatabase();
  const { slug } = await params;
  const post = await Post.findOne({ slug, published: true }).populate("author", "name").lean();
  
  if (!post) {
    notFound();
  }

  return (
    <article className={styles.article}>
      <header className={styles.header}>
        <Link href="/posts" className={styles.backLink}>&larr; Back to articles</Link>
        <div className={styles.tag}>{post.category}</div>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.meta}>
          By <span className={styles.author}>{(post.author as any)?.name || 'Editorial Board'}</span>
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
      
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  );
}
