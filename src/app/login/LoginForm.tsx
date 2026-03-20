"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./login.module.css";

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res?.error) {
      setError("Invalid Email or Password");
      setLoading(false);
    } else {
      router.push("/admin");
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {error && <div className={styles.error}>{error}</div>}
      <div className={styles.inputGroup}>
        <label htmlFor="email" className={styles.label}>Email Address</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={styles.input}
          placeholder="admin@example.com"
        />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="password" className={styles.label}>Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className={styles.input}
          placeholder="••••••••"
        />
      </div>
      <button type="submit" className={styles.button} disabled={loading}>
        {loading ? "Signing in..." : "Sign In"}
      </button>
    </form>
  );
}
