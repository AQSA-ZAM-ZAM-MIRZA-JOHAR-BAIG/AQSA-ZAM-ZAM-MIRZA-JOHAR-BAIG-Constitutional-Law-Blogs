import Link from "next/link";
import styles from "./posts.module.css";
import connectToDatabase from "@/lib/db";
import { Post } from "@/models/Post";

export default async function PostsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; search?: string }>;
}) {
  await connectToDatabase();
  const { category, search } = await searchParams;

  let query: any = { published: true };
  if (category) query.category = category;
  if (search) {
    query.$or = [
      { title: { $regex: search, $options: "i" } },
      { content: { $regex: search, $options: "i" } }
    ];
  }

  const posts = await Post.find(query).populate("author", "name").sort({ publishedAt: -1, createdAt: -1 }).lean();

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Explore Insights</h1>
        <p className={styles.subtitle}>Browse through our comprehensive constitutional law directory.</p>
        
        <form className={styles.searchBar}>
          <input 
            type="text" 
            name="search" 
            defaultValue={search || ""} 
            placeholder="Search articles..." 
            className={styles.searchInput}
          />
          <select name="category" defaultValue={category || ""} className={styles.searchInput}>
            <option value="">All Categories</option>
            <option value="General">General</option>
            <option value="Fundamental Rights">Fundamental Rights</option>
            <option value="DPSP">DPSP</option>
            <option value="Amendments">Amendments</option>
            <option value="Case Analysis">Case Analysis</option>
          </select>
          <button type="submit" className={styles.searchButton}>Filter</button>
        </form>
      </header>
      
      <div className={styles.grid}>
        {posts.length === 0 ? (
          <p className={styles.empty}>No articles found matching your criteria.</p>
        ) : (
          posts.map((post: any) => (
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
    </div>
  );
}
