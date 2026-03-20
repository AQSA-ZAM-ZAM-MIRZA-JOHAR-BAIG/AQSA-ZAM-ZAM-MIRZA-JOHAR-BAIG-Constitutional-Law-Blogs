import Link from "next/link";
import styles from './page.module.css';
import connectToDatabase from "@/lib/db";
import { Post } from "@/models/Post";
import { User } from "@/models/User"; // Import User to register the schema before populating

export default async function Home() {
  // Always connect to DB and register models on home entry
  await connectToDatabase();
  // Fetch only 3 recent published posts
  const recentPosts = await Post.find({ published: true })
    .populate('author', 'name')
    .sort({ publishedAt: -1, createdAt: -1 })
    .limit(3)
    .lean();

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Indian Constitutional Law Insights</h1>
          <p className={styles.heroSubtitle}>
            Dive deep into precise analyses of provisions, landmark cases, and pivotal amendments shaping the legal landscape.
          </p>
          <div className={styles.heroActions}>
            <Link href="/posts" className={styles.primaryButton}>Explore Articles</Link>
            <Link href="/posts?category=Case+Analysis" className={styles.secondaryButton}>Recent Case Laws</Link>
          </div>
        </div>
      </section>

      {/* Featured Articles Section */}
      <section className={styles.recentSection}>
        <div className={styles.sectionHeader}>
          <h2>Latest Insights</h2>
          <Link href="/posts" className={styles.viewAll}>View All</Link>
        </div>
        
        <div className={styles.grid}>
          {recentPosts.length === 0 ? (
            <p className={styles.empty}>No articles available at the moment.</p>
          ) : (
            recentPosts.map((post: any) => (
              <Link href={`/posts/${post.slug}`} key={post._id.toString()} className={styles.card}>
                <div className={styles.cardTag}>{post.category}</div>
                <h3 className={styles.cardTitle}>{post.title}</h3>
                <p className={styles.cardSummary}>{post.summary}</p>
                <div className={styles.cardFooter}>
                  <span>{post.author?.name || 'Editorial Board'}</span>
                  <span>{new Date(post.publishedAt || post.createdAt).toLocaleDateString()}</span>
                </div>
              </Link>
            ))
          )}
        </div>
      </section>
    </div>
  );
}
