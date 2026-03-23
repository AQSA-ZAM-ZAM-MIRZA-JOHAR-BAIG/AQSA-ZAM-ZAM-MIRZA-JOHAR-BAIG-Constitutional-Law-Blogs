import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import styles from "./admin.module.css";
import Link from "next/link";

export default async function AdminDashboard() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  if ((session.user as any)?.role !== 'admin' && (session.user as any)?.role !== 'contributor') {
    return (
      <div className={styles.dashboard}>
        <div className={styles.card}>
          <h1>Access Denied</h1>
          <p>You do not have permission to view the dashboard.</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.dashboard}>
      <header className={styles.header}>
        <h1>Welcome, {session.user?.name || session.user?.email}</h1>
        <p>Role: {(session.user as any)?.role}</p>
      </header>
      
      <div className={styles.grid}>
        <div className={styles.card}>
          <h2>Manage Posts</h2>
          <p>Create, edit, and delete technical articles.</p>
          <Link href="/admin/posts" className={styles.button}>Go to Posts</Link>
        </div>
        
        {(session.user as any)?.role === 'admin' && (
          <div className={styles.card}>
            <h2>Manage Users</h2>
            <p>Administer contributors and readers.</p>
            <Link href="/admin/users" className={styles.button}>Go to Users</Link>
          </div>
        )}
      </div>
    </div>
  );
}
