import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import styles from "./admin.module.css";
import Link from "next/link";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return (
    <div className={styles.adminLayout}>
      <aside className={styles.sidebar}>
        <div className={styles.logo}>Developer Blog Admin</div>
        <nav className={styles.nav}>
          <Link href="/admin" className={styles.navLink}>Dashboard</Link>
          <Link href="/admin/posts" className={styles.navLink}>Posts</Link>
          {(session.user as any)?.role === 'admin' && (
            <Link href="/admin/users" className={styles.navLink}>Users</Link>
          )}
          <Link href="/" className={styles.navLink}>Back to Site</Link>
        </nav>
      </aside>
      <main className={styles.mainContent}>
        {children}
      </main>
    </div>
  );
}
