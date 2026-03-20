import Link from "next/link";
import styles from "./posts.module.css";
import connectToDatabase from "@/lib/db";
import { Post } from "@/models/Post";

export default async function AdminPostsPage() {
  await connectToDatabase();
  const posts = await Post.find().populate('author', 'name').sort({ createdAt: -1 });

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Manage Posts</h1>
        <Link href="/admin/posts/new" className={styles.createButton}>+ Create New Post</Link>
      </header>
      
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Author</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.length === 0 ? (
              <tr><td colSpan={5} className={styles.empty}>No posts found.</td></tr>
            ) : posts.map((post) => (
              <tr key={post._id.toString()}>
                <td>{post.title}</td>
                <td>{post.category}</td>
                <td>{(post.author as any)?.name || 'Unknown'}</td>
                <td>
                  <span className={post.published ? styles.badgePublished : styles.badgeDraft}>
                    {post.published ? "Published" : "Draft"}
                  </span>
                </td>
                <td className={styles.actions}>
                  <Link href={`/admin/posts/edit/${post._id}`} className={styles.editLink}>Edit</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
