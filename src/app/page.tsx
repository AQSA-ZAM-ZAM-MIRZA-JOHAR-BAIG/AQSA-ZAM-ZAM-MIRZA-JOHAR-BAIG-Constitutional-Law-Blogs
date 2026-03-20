import Link from "next/link";
import styles from './page.module.css';
import connectToDatabase from "@/lib/db";
import { Post } from "@/models/Post";
import { User } from "@/models/User"; // Import User to register the schema before populating

export default async function Home() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Constitutional Law Blog</h1>
      <p>Site is successfully deployed! Troubleshooting DB connection...</p>
      <div style={{ marginTop: '2rem' }}>
        <a href="/login" style={{ marginRight: '1rem' }}>Admin Login</a>
        <a href="/posts">View Articles</a>
      </div>
    </div>
  );
}

